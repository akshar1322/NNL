import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Form from '@/models/formModel';

// This is the handler for DELETE requests.
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();

  const { id } = params;

  try {
    // Attempt to delete the application by ID
    const application = await Form.findByIdAndDelete(id);

    if (!application) {
      return NextResponse.json({ message: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Application deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting application', error }, { status: 500 });
  }
}
