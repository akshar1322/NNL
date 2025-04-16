import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

// GET all users
export async function GET() {
  await dbConnect();
  const users = await User.find();
  return NextResponse.json(users);
}

// POST a new user
export async function POST(req: Request) {
  const { username, email, password, role } = await req.json();
  await dbConnect();

  // For simplicity, we'll directly save the user with the given data
  const newUser = new User({
    username,
    email,
    password, // Hash this in production
    role,
  });

  await newUser.save();
  return NextResponse.json(newUser, { status: 201 });
}

// DELETE a user
export async function DELETE(req: Request) {
  const userId = req.url.split('/').pop() || '';
  await dbConnect();

  const deletedUser = await User.findByIdAndDelete(userId);

  if (!deletedUser) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'User deleted' });
}
