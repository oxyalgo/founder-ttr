import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, email, phone, interest, scoreRange } = data;
    if (!name || !email || !phone || !interest || !scoreRange) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the consultation request — wire to email service (SendGrid, Resend, etc.) later
    console.log('[CONSULTATION]', JSON.stringify({ ...data, ts: new Date().toISOString() }));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
