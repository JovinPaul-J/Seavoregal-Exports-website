import crypto from 'crypto';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'seavoregal-admin-2024';
const ADMIN_TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET || 'your-secret-key-change-this';

export function hashPassword(password: string): string {
  return crypto
    .createHmac('sha256', ADMIN_TOKEN_SECRET)
    .update(password)
    .digest('hex');
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

export function generateAdminToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function validateAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function createAdminSession(password: string): { token: string; expiresAt: number } | null {
  if (!validateAdminPassword(password)) {
    return null;
  }

  const token = generateAdminToken();
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

  return { token, expiresAt };
}

export function validateAdminToken(token: string): boolean {
  if (!token) return false;
  // In a production app, you'd validate this against a database
  // For now, we'll use a simple validation
  return token.length === 64;
}
