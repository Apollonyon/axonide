import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10; // The "cost factor" for hashing

export async function POST({ request }) {
  // 1. Extract data from the incoming request
  const { email, username, password } = await request.json();

  // 2. Basic validation
  if (!email ||!username ||!password) {
    return json({ error: 'Missing required fields' }, { status: 400 });
  }

  // 3. Check if the user already exists
  const existingUser = await prisma.user.findFirst({
    where: { 
      OR: [
        { email: email },
        { username: username }
      ] 
    }
  });

  if (existingUser) {
    return json({ error: 'User with this email or username already exists' }, { status: 409 });
  }

  // 4. Hash the password securely with bcrypt
  const passwordHash = await bcrypt.hash(password, saltRounds);

  // 5. Create the new user in the database
  const user = await prisma.user.create({
    data: {
      email,
      username,
      passwordHash // Store the hashed password, not the plain one
    }
  });

  // 6. Return the new user object (without the password hash)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _,...userWithoutPassword } = user;
  return json(userWithoutPassword, { status: 201 });
}