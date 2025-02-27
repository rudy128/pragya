import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';
import { singup } from './singup';
import { generateJwtToken, verifyJwtToken } from './jwt';  // Assuming this is the JWT token generation function

const prisma = new PrismaClient();

export async function login(name: string, email: string, password: string, token?: string) {
  try {
    // If token is provided, we should validate it first
    if (token) {
      const decoded = verifyJwtToken(token);  // Assuming it returns a decoded token or null
      if (!decoded) {
        return { message: 'Invalid or expired token' };
      }
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // If user doesn't exist, create a new user
    if (!user) {
      const newUser = await singup(name, email, password);
      if (!newUser) {
        return { message: 'Error creating user' };
      } else {
        const newToken = generateJwtToken(newUser.id, newUser.email); // Generate new JWT for the new user
        return { message: 'User created successfully. Login successful', token: newToken };
      }
    } else {
      // If user exists, compare the password with the hashed password
    //   const isPasswordValid = await bcrypt.compare(password, user.password);
      if (password !== user.password) {
        return { message: 'Invalid password' };
      } else {
        const newToken = generateJwtToken(user.id, user.email); // Generate JWT for the existing user
        return { message: 'Login successful', token: newToken };
      }
    }
  } catch (error) {
    console.error('Error during login process: ', error);
    return { message: 'Error during login process' };
  } finally {
    await prisma.$disconnect();
  }
}
