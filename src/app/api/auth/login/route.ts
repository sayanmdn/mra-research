import { NextRequest, NextResponse } from 'next/server';
import {
  AuthConfigError,
  SESSION_COOKIE,
  createSessionToken,
  sessionCookieOptions,
  verifyCredentials,
} from '@/lib/auth';

const MAX_ATTEMPTS = 8;
const WINDOW_MS = 10 * 60 * 1000;

// Best-effort throttle. Per server instance only, but enough to blunt guessing.
const attempts = new Map<string, { count: number; first: number }>();

function throttleKey(req: NextRequest, username: string) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  return `${ip}:${username.toLowerCase()}`;
}

function isLockedOut(key: string): boolean {
  const entry = attempts.get(key);
  if (!entry) return false;
  if (Date.now() - entry.first > WINDOW_MS) {
    attempts.delete(key);
    return false;
  }
  return entry.count >= MAX_ATTEMPTS;
}

function recordFailure(key: string) {
  const entry = attempts.get(key);
  if (!entry || Date.now() - entry.first > WINDOW_MS) {
    attempts.set(key, { count: 1, first: Date.now() });
  } else {
    entry.count += 1;
  }
}

export async function POST(req: NextRequest) {
  let username = '';
  let password = '';

  try {
    const body = await req.json();
    username = typeof body?.username === 'string' ? body.username : '';
    password = typeof body?.password === 'string' ? body.password : '';
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 });
  }

  if (!username || !password) {
    return NextResponse.json(
      { success: false, error: 'Username and password are required.' },
      { status: 400 }
    );
  }

  const key = throttleKey(req, username);
  if (isLockedOut(key)) {
    return NextResponse.json(
      { success: false, error: 'Too many failed attempts. Try again in a few minutes.' },
      { status: 429 }
    );
  }

  try {
    if (!verifyCredentials(username, password)) {
      recordFailure(key);
      return NextResponse.json(
        { success: false, error: 'Incorrect username or password.' },
        { status: 401 }
      );
    }
  } catch (err) {
    if (err instanceof AuthConfigError) {
      return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
    throw err;
  }

  attempts.delete(key);

  const { token, maxAge } = createSessionToken(username.trim());
  const res = NextResponse.json({ success: true, redirectTo: '/admin' });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions(maxAge));
  return res;
}
