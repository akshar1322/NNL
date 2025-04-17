// app/api/admin/applications/route.ts
import dbConnect from '@/lib/dbConnect';
import Form from '@/models/formModel';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  const applications = await Form.find().sort({ submittedAt: -1 }); // Sort by most recent submission
  return NextResponse.json(applications);
}
