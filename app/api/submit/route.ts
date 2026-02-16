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

    // ── Forward to Google Apps Script ───────────────────────
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn(
        '[submit] GOOGLE_APPS_SCRIPT_URL is not set — skipping Google Sheets integration.',
      );
      return NextResponse.json({ success: true });
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow', // Google Apps Script returns 302 redirects
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[submit] Google Apps Script error:', response.status, text);
      return NextResponse.json(
        { success: false, error: 'Failed to save your submission. Please try again.' },
        { status: 500 },
      );
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
