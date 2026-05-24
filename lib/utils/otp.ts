import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

/**
 * Generates a 6-digit numeric OTP
 */
export function generateOTP(): string {
  // Generate a random number between 100000 and 999999
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

/**
 * Hashes an OTP or password using bcrypt
 */
export async function hashData(data: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(data, salt);
}

/**
 * Compares an OTP or password with its hash
 */
export async function compareData(data: string, hash: string): Promise<boolean> {
  return bcrypt.compare(data, hash);
}
