import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY!;
const JWT_EXPIRATION = '1h';
export function generateJwtToken(userId: string, email: string) {
  const payload = {
    userId,
    email,
  };

  // Sign the token with the secret key and the payload
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: JWT_EXPIRATION,  // Set the expiration time for the token
  });

  return token;
}

export function verifyJwtToken(token: string) {
    try {
    // Verify the token with the secret key
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }

}