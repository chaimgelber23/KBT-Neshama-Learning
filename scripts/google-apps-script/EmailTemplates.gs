/* =============================================================
   Email Templates for KBT Neshama Learning
   ============================================================= */

// ── PAYMENT URL — update with your actual payment link ─────
var PAYMENT_URL = 'https://your-payment-link.com';

/**
 * Returns the HTML email sent to the person who signed up.
 * Dark-themed design matching the website aesthetic.
 */
function getConfirmationEmailTemplate(data) {
  var name = data.name || 'Friend';
  var niftarEnglish = data.niftarNameEnglish || '';
  var niftarHebrew = data.niftarNameHebrew || '';
  var hebrewDate = data.hebrewDate || '';
  var relationship = data.relationship || '';

  return '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>' +
    '<body style="margin:0; padding:0; background-color:#0F0F23; font-family:Georgia,serif;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0F0F23;">' +
    '<tr><td align="center" style="padding:40px 20px;">' +

    // Main container
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#1A1A2E; border:1px solid rgba(201,169,98,0.2); border-radius:4px;">' +

    // Header
    '<tr><td style="padding:40px 40px 20px; text-align:center;">' +
    '<div style="width:60px; height:2px; background:linear-gradient(90deg,#C9A962,#D4BC7A); margin:0 auto 24px;"></div>' +
    '<h1 style="font-family:Georgia,serif; font-size:28px; font-weight:400; color:#C9A962; margin:0 0 8px;">KBT Neshama Learning</h1>' +
    '<div style="width:60px; height:2px; background:linear-gradient(90deg,#C9A962,#D4BC7A); margin:16px auto 0;"></div>' +
    '</td></tr>' +

    // Body
    '<tr><td style="padding:20px 40px 32px;">' +
    '<p style="font-family:Georgia,serif; font-size:18px; color:#E8E8E8; margin:0 0 16px;">Dear ' + name + ',</p>' +
    '<p style="font-family:Georgia,serif; font-size:16px; color:#CCCCCC; line-height:1.7; margin:0 0 24px;">' +
    'Thank you for signing up for Neshama Learning in memory of <strong style="color:#E8E8E8;">' + niftarEnglish + '</strong>. ' +
    'Your dedication to Torah learning is a tremendous merit for the neshamah.</p>' +

    // Details box
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:rgba(201,169,98,0.08); border:1px solid rgba(201,169,98,0.2); border-radius:4px; margin-bottom:24px;">' +
    '<tr><td style="padding:24px;">' +
    '<p style="font-family:Georgia,serif; font-size:13px; font-weight:bold; letter-spacing:2px; text-transform:uppercase; color:#C9A962; margin:0 0 16px;">Sign-Up Details</p>' +

    (niftarEnglish ? '<p style="font-family:Georgia,serif; font-size:15px; color:#CCCCCC; margin:0 0 8px;"><span style="color:#999;">Niftar (English):</span> <strong style="color:#E8E8E8;">' + niftarEnglish + '</strong></p>' : '') +
    (niftarHebrew  ? '<p style="font-family:Georgia,serif; font-size:15px; color:#CCCCCC; margin:0 0 8px;"><span style="color:#999;">Niftar (Hebrew):</span> <strong style="color:#E8E8E8;">' + niftarHebrew + '</strong></p>' : '') +
    (hebrewDate    ? '<p style="font-family:Georgia,serif; font-size:15px; color:#CCCCCC; margin:0 0 8px;"><span style="color:#999;">Yahrzeit Date:</span> <strong style="color:#E8E8E8;">' + hebrewDate + '</strong></p>' : '') +
    (relationship  ? '<p style="font-family:Georgia,serif; font-size:15px; color:#CCCCCC; margin:0;"><span style="color:#999;">Relationship:</span> <strong style="color:#E8E8E8;">' + relationship + '</strong></p>' : '') +

    '</td></tr></table>' +

    // CTA Button
    '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">' +
    '<tr><td align="center" style="border-radius:2px; background:linear-gradient(135deg,#C9A962,#D4BC7A);">' +
    '<a href="' + PAYMENT_URL + '" target="_blank" style="display:inline-block; padding:16px 40px; font-family:Georgia,serif; font-size:13px; font-weight:bold; letter-spacing:2px; text-transform:uppercase; color:#ffffff; text-decoration:none;">Complete Payment</a>' +
    '</td></tr></table>' +

    '<p style="font-family:Georgia,serif; font-size:15px; color:#CCCCCC; line-height:1.7; margin:24px 0 0; font-style:italic; text-align:center;">' +
    'May the Torah learning bring an aliyah to the neshamah.</p>' +

    '</td></tr>' +

    // Footer
    '<tr><td style="padding:24px 40px; border-top:1px solid rgba(255,255,255,0.05); text-align:center;">' +
    '<p style="font-family:Georgia,serif; font-size:13px; color:#999; margin:0;">KBT Synagogue</p>' +
    '<p style="font-family:Georgia,serif; font-size:12px; color:#666; margin:4px 0 0;">123 Main Street, City, State 12345</p>' +
    '</td></tr>' +

    '</table>' +
    '</td></tr></table>' +
    '</body></html>';
}

/**
 * Returns the HTML email sent to the admin with full submission details.
 * Clean professional layout with a white background.
 */
function getAdminEmailTemplate(data) {
  var timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

  return '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>' +
    '<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;">' +
    '<tr><td align="center" style="padding:40px 20px;">' +

    // Main container
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:4px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">' +

    // Header bar
    '<tr><td style="background-color:#1A1A2E; padding:24px 32px;">' +
    '<h1 style="font-family:Georgia,serif; font-size:20px; font-weight:400; color:#C9A962; margin:0;">New Neshama Learning Sign-Up</h1>' +
    '</td></tr>' +

    // Body
    '<tr><td style="padding:32px;">' +

    // Details table
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">' +

    adminRow('Name',             data.name || '—') +
    adminRow('Email',            data.email || '—') +
    adminRow('Phone',            data.phone || '—') +
    adminRow('Niftar (English)', data.niftarNameEnglish || '—') +
    adminRow('Niftar (Hebrew)',  data.niftarNameHebrew || '—') +
    adminRow('Hebrew Date',      data.hebrewDate || '—') +
    adminRow('English Date',     data.englishDate || '—') +
    adminRow('Relationship',     data.relationship || '—') +
    adminRow('Special Requests', data.notes || '—') +
    adminRow('Submitted',        timestamp) +

    '</table>' +

    '</td></tr>' +

    // Footer
    '<tr><td style="padding:20px 32px; border-top:1px solid #eee; background-color:#fafafa; text-align:center;">' +
    '<a href="https://docs.google.com/spreadsheets/d/' + SHEET_ID + '" target="_blank" style="font-size:13px; color:#C9A962; text-decoration:none;">View in Google Sheets &rarr;</a>' +
    '</td></tr>' +

    '</table>' +
    '</td></tr></table>' +
    '</body></html>';
}

/**
 * Helper — generates a single label/value row for the admin email table.
 */
function adminRow(label, value) {
  return '<tr>' +
    '<td style="padding:10px 12px; font-size:13px; font-weight:600; color:#555; width:140px; border-bottom:1px solid #f0f0f0; vertical-align:top;">' + label + '</td>' +
    '<td style="padding:10px 12px; font-size:14px; color:#333; border-bottom:1px solid #f0f0f0; vertical-align:top;">' + value + '</td>' +
    '</tr>';
}
