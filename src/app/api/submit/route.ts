// app/api/submit/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import dbConnect from '@/lib/dbConnect';
import Form from '../../..//models/formModel';

export async function POST(req: Request) {
    try {
      await dbConnect();

      const body = await req.json();
      const forwardedFor = headers();
      const ip = (await forwardedFor).get('x-forwarded-for') || 'unknown';

      const created = await Form.create({
        ...body,
        ipAddress: ip,
        submittedAt: new Date()
      });

      return NextResponse.json({ status: 'success', id: created._id });
    } catch (error) {
      const err = error as Error;
      console.error('Submission error:', err);
      return NextResponse.json({ status: 'error', message: err.message }, { status: 400 });
    }
  }
