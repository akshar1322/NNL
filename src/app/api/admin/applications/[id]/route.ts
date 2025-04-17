// app/api/admin/applications/[id]/route.ts
import dbConnect from '@/lib/dbConnect';
import Form from '@/models/formModel';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  const { id } = params;

  try {
    const application = await Form.findByIdAndDelete(id);

    if (!application) {
      return NextResponse.json({ message: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Application deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting application', error }, { status: 500 });
  }
}
