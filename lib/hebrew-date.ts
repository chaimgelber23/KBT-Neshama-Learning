import { HDate, months } from '@hebcal/core';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HebrewMonth {
  /** English transliteration used as the canonical key (e.g. "Tishrei") */
  value: string;
  /** Human-readable English label */
  label: string;
  /** Hebrew label */
  hebrewLabel: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/**
 * All Hebrew months in calendar order (Nisan first).
 * Adar II is included here but should be filtered out for non-leap years
 * via `getMonthsForYear()`.
 */
export const HEBREW_MONTHS: HebrewMonth[] = [
  { value: 'Nisan',    label: 'Nisan',    hebrewLabel: 'ניסן'    },
  { value: 'Iyyar',    label: 'Iyyar',    hebrewLabel: 'אייר'    },
  { value: 'Sivan',    label: 'Sivan',    hebrewLabel: 'סיון'    },
  { value: 'Tamuz',    label: 'Tamuz',    hebrewLabel: 'תמוז'    },
  { value: 'Av',       label: 'Av',       hebrewLabel: 'אב'      },
  { value: 'Elul',     label: 'Elul',     hebrewLabel: 'אלול'    },
  { value: 'Tishrei',  label: 'Tishrei',  hebrewLabel: 'תשרי'    },
  { value: 'Cheshvan', label: 'Cheshvan', hebrewLabel: 'חשוון'   },
  { value: 'Kislev',   label: 'Kislev',   hebrewLabel: 'כסלו'    },
  { value: 'Tevet',    label: 'Tevet',    hebrewLabel: 'טבת'     },
  { value: 'Shvat',    label: 'Shvat',    hebrewLabel: 'שבט'     },
  { value: 'Adar',     label: 'Adar',     hebrewLabel: 'אדר'     },
  { value: 'Adar II',  label: 'Adar II',  hebrewLabel: 'אדר ב׳'  },
];

// ---------------------------------------------------------------------------
// Month name  ->  hebcal numeric constant mapping
// ---------------------------------------------------------------------------

/**
 * Convert a canonical English month name to the numeric constant used by
 * `@hebcal/core`.
 *
 * Mapping:
 *   NISAN=1, IYYAR=2, SIVAN=3, TAMUZ=4, AV=5, ELUL=6,
 *   TISHREI=7, CHESHVAN=8, KISLEV=9, TEVET=10, SHVAT=11,
 *   ADAR_I=12, ADAR_II=13
 *
 * In a non-leap year "Adar" maps to 12 (regular Adar).
 */
export function getMonthNumber(monthName: string): number {
  const map: Record<string, number> = {
    'Nisan':    months.NISAN,     // 1
    'Iyyar':    months.IYYAR,     // 2
    'Sivan':    months.SIVAN,     // 3
    'Tamuz':    months.TAMUZ,     // 4
    'Av':       months.AV,        // 5
    'Elul':     months.ELUL,      // 6
    'Tishrei':  months.TISHREI,   // 7
    'Cheshvan': months.CHESHVAN,  // 8
    'Kislev':   months.KISLEV,    // 9
    'Tevet':    months.TEVET,     // 10
    'Shvat':    months.SHVAT,     // 11
    'Adar':     months.ADAR_I,    // 12
    'Adar II':  months.ADAR_II,   // 13
  };

  const num = map[monthName];
  if (num === undefined) {
    throw new Error(`Unknown Hebrew month: "${monthName}"`);
  }
  return num;
}

// ---------------------------------------------------------------------------
// Leap year helper
// ---------------------------------------------------------------------------

/** Check whether a given Hebrew year is a leap year (has Adar II). */
export function isHebrewLeapYear(year: number): boolean {
  return HDate.isLeapYear(year);
}

// ---------------------------------------------------------------------------
// Days in month
// ---------------------------------------------------------------------------

/**
 * Return the number of days in a Hebrew month for the given Hebrew year.
 *
 * Uses `HDate.daysInMonth()` internally.
 */
export function getDaysInHebrewMonth(monthName: string, year: number): number {
  const monthNum = getMonthNumber(monthName);
  return HDate.daysInMonth(monthNum, year);
}

// ---------------------------------------------------------------------------
// Conversion helpers
// ---------------------------------------------------------------------------

/**
 * Convert a Hebrew date (day, month name, Hebrew year) to its Gregorian
 * equivalent.
 */
export function hebrewToGregorian(
  day: number,
  monthName: string,
  year: number,
): Date {
  const hd = new HDate(day, monthName, year);
  return hd.greg();
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

/** Format a Hebrew date in English transliteration, e.g. "15 Tishrei 5786". */
export function formatHebrewDate(
  day: number,
  monthName: string,
  year: number,
): string {
  return `${day} ${monthName} ${year}`;
}

/**
 * Format a Hebrew date showing both English and Hebrew month names,
 * e.g. "15 Tishrei (תשרי) 5786".
 */
export function formatHebrewDateWithHebrew(
  day: number,
  monthName: string,
  year: number,
): string {
  const month = HEBREW_MONTHS.find((m) => m.value === monthName);
  const hebrewLabel = month?.hebrewLabel ?? monthName;
  return `${day} ${monthName} (${hebrewLabel}) ${year}`;
}

/**
 * Format a Gregorian `Date` in a human-friendly long form,
 * e.g. "Wednesday, September 30, 2026".
 */
export function formatEnglishDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// Current year & month list
// ---------------------------------------------------------------------------

/** Return the current Hebrew year based on today's date. */
export function getCurrentHebrewYear(): number {
  const today = new HDate(new Date());
  return today.getFullYear();
}

/**
 * Return the list of Hebrew months applicable to the given year.
 * Adar II is excluded in non-leap years.
 */
export function getMonthsForYear(year: number): HebrewMonth[] {
  if (isHebrewLeapYear(year)) {
    return HEBREW_MONTHS;
  }
  return HEBREW_MONTHS.filter((m) => m.value !== 'Adar II');
}
