import {
  createHmac,
  pbkdf2Sync,
  randomBytes,
  timingSafeEqual,
} from 'node:crypto';
import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'mra_session';
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours
const PBKDF2_ITERATIONS = 210_000;
const PBKDF2_KEYLEN = 32;
const PBKDF2_DIGEST = 'sha256';

export class AuthConfigError extends Error {}

interface SessionPayload {
  u: string;
  iat: number;
  exp: number;
}

function b64url(buf: Buffer): string {
  return buf.toString('base64url');
}

function authSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 16) {
    throw new AuthConfigError(
      'AUTH_SECRET is not set (needs at least 16 characters). Add it to your environment.'
    );
  }
  return secret;
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    // Still burn a comparison so timing does not leak length.
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

/**
 * `pbkdf2:sha256:<iterations>:<saltHex>:<hashHex>`
 * Colon-delimited on purpose: Next.js expands `$VAR` inside .env files, which
 * would silently mangle a `$`-delimited hash.
 */
export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = pbkdf2Sync(
    password,
    salt,
    PBKDF2_ITERATIONS,
    PBKDF2_KEYLEN,
    PBKDF2_DIGEST
  );
  return `pbkdf2:${PBKDF2_DIGEST}:${PBKDF2_ITERATIONS}:${salt.toString('hex')}:${hash.toString('hex')}`;
}

function verifyPassword(password: string, stored: string): boolean {
  if (!stored.startsWith('pbkdf2:') && !stored.startsWith('pbkdf2$')) {
    // Plain-text ADMIN_PASSWORD fallback.
    return safeEqual(password, stored);
  }
  const [, digest, iterations, saltHex, hashHex] = stored.split(/[:$]/);
  if (!digest || !iterations || !saltHex || !hashHex) {
    throw new AuthConfigError('ADMIN_PASSWORD_HASH is malformed.');
  }
  const derived = pbkdf2Sync(
    password,
    Buffer.from(saltHex, 'hex'),
    Number(iterations),
    Buffer.from(hashHex, 'hex').length,
    digest
  );
  return safeEqual(derived.toString('hex'), hashHex);
}

export function verifyCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME;
  const stored = process.env.ADMIN_PASSWORD_HASH || process.env.ADMIN_PASSWORD;

  if (!expectedUser || !stored) {
    throw new AuthConfigError(
      'Publishing login is not configured: set ADMIN_USERNAME and ADMIN_PASSWORD_HASH (or ADMIN_PASSWORD).'
    );
  }

  const userOk = safeEqual(username.trim().toLowerCase(), expectedUser.trim().toLowerCase());
  const passOk = verifyPassword(password, stored);
  return userOk && passOk;
}

export function createSessionToken(username: string): { token: string; maxAge: number } {
  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = {
    u: username,
    iat: now,
    exp: now + SESSION_TTL_SECONDS,
  };
  const body = b64url(Buffer.from(JSON.stringify(payload), 'utf8'));
  const sig = b64url(createHmac('sha256', authSecret()).update(body).digest());
  return { token: `${body}.${sig}`, maxAge: SESSION_TTL_SECONDS };
}

export function verifySessionToken(token: string | undefined): SessionPayload | null {
  if (!token) return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;

  let expected: string;
  try {
    expected = b64url(createHmac('sha256', authSecret()).update(body).digest());
  } catch {
    return null;
  }
  if (!safeEqual(sig, expected)) return null;

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as SessionPayload;
    if (!payload?.u || typeof payload.exp !== 'number') return null;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

/** Reads and validates the session from the request cookies. */
export async function getSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}

export function sessionCookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge,
  };
}
