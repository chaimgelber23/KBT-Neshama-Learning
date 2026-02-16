'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  getCurrentHebrewYear,
  getMonthsForYear,
  getDaysInHebrewMonth,
  hebrewToGregorian,
  formatHebrewDate,
  formatEnglishDate,
} from '@/lib/hebrew-date';

/* -------------------------------------------------------
   Types
   ------------------------------------------------------- */

interface HebrewDateValue {
  day: number;
  month: string;
  year: number;
}

interface HebrewDatePickerProps {
  /** Currently selected Hebrew date values */
  value: HebrewDateValue;
  /**
   * Called when all three fields are populated with a valid date.
   * Provides numeric day, month name, numeric year, formatted Hebrew
   * date string, and formatted English (Gregorian) date string.
   */
  onChange: (
    day: number,
    month: string,
    year: number,
    hebrewDateStr: string,
    englishDateStr: string,
  ) => void;
  /** Validation error message */
  error?: string | null;
}

/* -------------------------------------------------------
   Component
   ------------------------------------------------------- */

/**
 * Hebrew calendar date picker with three cascading dropdown selects
 * for Year, Month, and Day. Dynamically adjusts available months
 * (leap-year awareness) and days-in-month based on the selected values.
 */
export default function HebrewDatePicker({
  value,
  onChange,
  error,
}: HebrewDatePickerProps) {
  const currentYear = useMemo(() => getCurrentHebrewYear(), []);

  // Local state mirrors the parent value but allows partial selection
  const [year, setYear] = useState<number>(value.year || 0);
  const [month, setMonth] = useState<string>(value.month || '');
  const [day, setDay] = useState<number>(value.day || 0);

  // Formatted Gregorian correspondence string
  const [englishDisplay, setEnglishDisplay] = useState<string>('');

  // ---------- Derived data ----------

  /** Year options: current year, +1 forward, -5 backward (7 total) */
  const yearOptions = useMemo(() => {
    const years: number[] = [];
    for (let y = currentYear - 5; y <= currentYear + 1; y++) {
      years.push(y);
    }
    return years;
  }, [currentYear]);

  /** Month options change when the year changes (leap year logic). */
  const monthOptions = useMemo(() => {
    if (!year) return [];
    return getMonthsForYear(year);
  }, [year]);

  /** Number of days in the selected month/year. */
  const daysInMonth = useMemo(() => {
    if (!year || !month) return 0;
    try {
      return getDaysInHebrewMonth(month, year);
    } catch {
      return 0;
    }
  }, [year, month]);

  // ---------- Cascade handlers ----------

  /** When year changes, re-validate the currently selected month & day. */
  const handleYearChange = useCallback(
    (newYear: number) => {
      setYear(newYear);

      if (!newYear) {
        setMonth('');
        setDay(0);
        setEnglishDisplay('');
        return;
      }

      // Check if the current month is still valid for the new year
      const validMonths = getMonthsForYear(newYear);
      const monthStillValid = validMonths.some((m) => m.value === month);

      if (!monthStillValid) {
        setMonth('');
        setDay(0);
        setEnglishDisplay('');
      }
    },
    [month],
  );

  /** When month changes, re-validate the currently selected day. */
  const handleMonthChange = useCallback(
    (newMonth: string) => {
      setMonth(newMonth);

      if (!newMonth || !year) {
        setDay(0);
        setEnglishDisplay('');
        return;
      }

      // Check if the current day is still valid
      try {
        const maxDays = getDaysInHebrewMonth(newMonth, year);
        if (day > maxDays) {
          setDay(0);
          setEnglishDisplay('');
        }
      } catch {
        setDay(0);
        setEnglishDisplay('');
      }
    },
    [year, day],
  );

  const handleDayChange = useCallback((newDay: number) => {
    setDay(newDay);
  }, []);

  // ---------- Sync to parent & compute English date ----------

  useEffect(() => {
    if (year && month && day) {
      try {
        const gregDate = hebrewToGregorian(day, month, year);
        const hebrewStr = formatHebrewDate(day, month, year);
        const englishStr = formatEnglishDate(gregDate);

        setEnglishDisplay(englishStr);
        onChange(day, month, year, hebrewStr, englishStr);
      } catch {
        setEnglishDisplay('');
      }
    } else {
      setEnglishDisplay('');
    }
    // Only fire when the three selector values change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, day]);

  // ---------- Sync from parent when value prop changes externally ----------

  useEffect(() => {
    if (value.year && value.year !== year) setYear(value.year);
    if (value.month && value.month !== month) setMonth(value.month);
    if (value.day && value.day !== day) setDay(value.day);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.year, value.month, value.day]);

  // ---------- Render ----------

  return (
    <div>
      {/* Three selects in a responsive grid */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}
      >
        {/* Hebrew Year */}
        <div className="form-group">
          <label className="form-label">Hebrew Year</label>
          <select
            className="form-select"
            value={year || ''}
            onChange={(e) => handleYearChange(Number(e.target.value))}
            aria-label="Hebrew Year"
          >
            <option value="">Select year</option>
            {yearOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Hebrew Month */}
        <div className="form-group">
          <label className="form-label">Hebrew Month</label>
          <select
            className="form-select"
            value={month}
            onChange={(e) => handleMonthChange(e.target.value)}
            disabled={!year}
            aria-label="Hebrew Month"
          >
            <option value="">Select month</option>
            {monthOptions.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label} ({m.hebrewLabel})
              </option>
            ))}
          </select>
        </div>

        {/* Hebrew Day */}
        <div className="form-group">
          <label className="form-label">Hebrew Day</label>
          <select
            className="form-select"
            value={day || ''}
            onChange={(e) => handleDayChange(Number(e.target.value))}
            disabled={!month || !year}
            aria-label="Hebrew Day"
          >
            <option value="">Select day</option>
            {daysInMonth > 0 &&
              Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Gregorian correspondence */}
      {englishDisplay && (
        <p
          className="mt-2 text-sm"
          style={{ color: 'var(--color-gold)' }}
        >
          Corresponds to: {englishDisplay}
        </p>
      )}

      {/* Validation error */}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
