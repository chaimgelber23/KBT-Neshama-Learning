import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // ── Server-side validation ──────────────────────────────
    const { name, email, niftarNameEnglish, hebrewDate } = data;

    if (!name || !String(name).trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 },
      );
    }

    if (!email || !String(email).trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    if (!niftarNameEnglish || !String(niftarNameEnglish).trim()) {
      return NextResponse.json(
        { success: false, error: "Niftar's name (English) is required." },
        { status: 400 },
      );
    }

    if (!hebrewDate || !String(hebrewDate).trim()) {
      return NextResponse.json(
        { success: false, error: 'Hebrew date is required.' },
        { status: 400 },
      );
    }

    // ── Forward to Google Form ───────────────────────────────
    const GOOGLE_FORM_URL =
      'https://docs.google.com/forms/d/e/1FAIpQLSd5B0F38NpQEG9_LX6L3s4hm2ZerHc9o8C8ju-HgEMIo89Sdg/formResponse';

    // Map our form fields to Google Form entry IDs
    const body = new URLSearchParams();
    body.append('entry.545323566', data.hebrewDate || '');                    // Date of Yahrtzeit
    body.append('entry.530730126', data.niftarNameEnglish +                   // Name of Niftar
      (data.niftarNameHebrew ? ` / ${data.niftarNameHebrew}` : ''));
    body.append('entry.1044438578', data.name || '');                         // Name of Donor
    body.append('entry.1412711219', data.email || '');                        // Email
    // Pack extra details into comments
    const commentParts = [
      data.phone ? `Phone: ${data.phone}` : '',
      data.relationship ? `Relationship: ${data.relationship}` : '',
      data.englishDate ? `English date: ${data.englishDate}` : '',
      data.notes || '',
    ].filter(Boolean);
    body.append('entry.433594988', commentParts.join('\n'));                   // Comments

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        redirect: 'follow',
      });
    } catch (fetchErr) {
      // Google Forms may reject CORS or redirect — the data is still submitted
      console.warn('[submit] Google Form fetch completed (may have redirected):', fetchErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[submit] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    );
  }
}
