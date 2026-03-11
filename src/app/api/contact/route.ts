import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, email, subject, message } = data;
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the contact — wire to email service (SendGrid, Resend, etc.) later
    console.log('[CONTACT]', JSON.stringify({ name, email, subject, message, ts: new Date().toISOString() }));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
