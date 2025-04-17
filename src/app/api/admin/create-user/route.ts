import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await dbConnect();
  const { username, email, password, role, otp, value } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return NextResponse.json({ success: false, message: 'User already exists' });
    }

    const user = new User({
      username,
      email,
      password: hashedPassword,
      role,
      otp,
      value,
    });

    await user.save();
    return NextResponse.json({ success: true, message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: 'Error creating user' }, { status: 500 });
  }
}
