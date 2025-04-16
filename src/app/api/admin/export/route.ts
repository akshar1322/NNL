import dbConnect from '@/lib/dbConnect';
import Form from '@/models/formModel';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  const filter: any = {};
  if (from && to) {
    filter.submittedAt = {
      $gte: new Date(from),
      $lte: new Date(to + 'T23:59:59.999Z'),
    };
  }

  try {
    const data = await Form.find(filter).lean();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}
