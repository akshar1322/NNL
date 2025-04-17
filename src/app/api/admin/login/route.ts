import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/jwt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await dbConnect();
  const { loginId, password } = await req.json(); // loginId = username or email

  const user = await User.findOne({
    $or: [{ username: loginId }, { email: loginId }],
  });

  if (!user) {
    return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ success: false, message: 'Incorrect password' }, { status: 401 });
  }

  const token = signToken({
    id: user._id,
    role: user.role,
    value: user.value,
    email: user.email,
    username: user.username,
  });

  return NextResponse.json({ success: true, token, role: user.role });
}
