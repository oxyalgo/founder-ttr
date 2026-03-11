import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, email, phone } = data;
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the lead — wire to email service (SendGrid, Resend, etc.) later
    console.log('[LEAD]', JSON.stringify({ name, email, phone, ts: new Date().toISOString() }));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
