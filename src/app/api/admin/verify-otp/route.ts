/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { verifyToken } from '@/lib/jwt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await dbConnect();
  const { otp, token } = await req.json();

  try {
    const decoded: { id: string } = verifyToken(token) as { id: string };

    const user = await User.findById(decoded.id);

    if (user?.otp === otp) {
      return NextResponse.json({ success: true, role: user.role, message: 'OTP verified' });
    }

    return NextResponse.json({ success: false, message: 'Invalid OTP' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 403 });
  }
}
