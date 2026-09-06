#!/usr/bin/env node
// Generates the ADMIN_PASSWORD_HASH value for the publishing login.
//   node scripts/hash-password.mjs 'your-password'
import { pbkdf2Sync, randomBytes } from 'node:crypto';

const ITERATIONS = 210_000;
const KEYLEN = 32;
const DIGEST = 'sha256';

const password = process.argv[2];
if (!password) {
  console.error("Usage: node scripts/hash-password.mjs 'your-password'");
  process.exit(1);
}

const salt = randomBytes(16);
const hash = pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST);

console.log(
  `ADMIN_PASSWORD_HASH=pbkdf2:${DIGEST}:${ITERATIONS}:${salt.toString('hex')}:${hash.toString('hex')}`
);
