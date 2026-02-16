/* =============================================================
   KBT Neshama Learning — Google Apps Script Backend
   =============================================================
   This script handles form submissions from the website.
   It writes data to a Google Sheet and sends confirmation emails.

   SETUP:
   1. Replace SHEET_ID with the ID of your Google Sheet.
   2. Replace ADMIN_EMAIL with the admin's email address.
   3. Replace FROM_NAME with the desired sender display name.
   4. Deploy as a web app: Deploy → New deployment → Web app
      - Execute as: Me
      - Who has access: Anyone
   5. Copy the deployment URL into your .env.local file.
   ============================================================= */

// ── Configuration ──────────────────────────────────────────
var SHEET_ID    = 'YOUR_GOOGLE_SHEET_ID';       // <-- Update this
var ADMIN_EMAIL = 'admin@kbt.org';              // <-- Update this
var FROM_NAME   = 'KBT Neshama Learning';       // <-- Update this

// ── Web App Entry Points ───────────────────────────────────

/**
 * POST handler — receives form data from the Next.js API route.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.name || !data.email || !data.niftarNameEnglish || !data.hebrewDate) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, niftarNameEnglish, hebrewDate'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Process submission
    writeToSheet(data);
    sendConfirmationEmail(data);
    sendAdminNotification(data);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('doPost error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET handler — simple health check endpoint.
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Sheet Operations ───────────────────────────────────────

/**
 * Writes form data to the 'Sign-Ups' sheet.
 * Creates headers automatically if the sheet is empty.
 */
function writeToSheet(data) {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName('Sign-Ups');

  // Create the sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('Sign-Ups');
  }

  // Add headers if the sheet is empty (first row)
  if (sheet.getLastRow() === 0) {
    var headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Niftar (English)',
      'Niftar (Hebrew)',
      'Hebrew Date',
      'English Date',
      'Relationship',
      'Special Requests',
      'Status'
    ];
    sheet.appendRow(headers);

    // Bold & freeze the header row
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  // Append the data row
  sheet.appendRow([
    new Date(),                         // Timestamp
    data.name         || '',            // Name
    data.email        || '',            // Email
    data.phone        || '',            // Phone
    data.niftarNameEnglish || '',       // Niftar (English)
    data.niftarNameHebrew  || '',       // Niftar (Hebrew)
    data.hebrewDate   || '',            // Hebrew Date
    data.englishDate  || '',            // English Date
    data.relationship || '',            // Relationship
    data.notes        || '',            // Special Requests
    'New'                               // Status
  ]);
}

// ── Email Functions ────────────────────────────────────────

/**
 * Sends a confirmation email to the person who signed up.
 */
function sendConfirmationEmail(data) {
  if (!data.email) return;

  var subject = 'Neshama Learning — Sign-Up Confirmation';
  var htmlBody = getConfirmationEmailTemplate(data);

  GmailApp.sendEmail(data.email, subject, '', {
    htmlBody: htmlBody,
    name: FROM_NAME
  });
}

/**
 * Sends a notification email to the admin with full details.
 */
function sendAdminNotification(data) {
  var subject = 'New Neshama Learning Sign-Up: ' + (data.niftarNameEnglish || 'Unknown');
  var htmlBody = getAdminEmailTemplate(data);

  GmailApp.sendEmail(ADMIN_EMAIL, subject, '', {
    htmlBody: htmlBody,
    name: FROM_NAME
  });
}
