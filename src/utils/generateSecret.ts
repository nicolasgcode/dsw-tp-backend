import { appendFileSync } from 'fs';
import { randomBytes } from 'crypto';

const generateJWTSecret = () => {
  const secret = randomBytes(32).toString('hex');
  return secret;
};

const saveSecretToEnv = (secret: string) => {
  appendFileSync('.env', `\nJWT_SECRET=${secret}\n`, { encoding: 'utf8' });
  console.log('JWT_SECRET generated successfully');
};

const secret = generateJWTSecret();
saveSecretToEnv(secret);