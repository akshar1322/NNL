import dbConnect from '@/lib/dbConnect';
import Form from '@/models/formModel';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  const now = new Date();
  const past24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  const recentApplications = await Form.countDocuments({
    submittedAt: { $gte: past24h },
  });

  const totalApplications = await Form.countDocuments();
  const totalUsers = await User.countDocuments();

  return NextResponse.json({
    recentApplications,
    totalApplications,
    totalUsers,
  });
}
