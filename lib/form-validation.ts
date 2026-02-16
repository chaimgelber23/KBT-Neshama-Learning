export function validateName(value: string): string | null {
  if (!value.trim()) return 'Name is required';
  if (value.trim().length < 2) return 'Name must be at least 2 characters';
  return null;
}

export function validateEmail(value: string): string | null {
  if (!value.trim()) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return 'Please enter a valid email address';
  return null;
}

export function validatePhone(value: string): string | null {
  if (!value.trim()) return null; // optional
  const cleaned = value.replace(/[\s\-\(\)\.]/g, '');
  if (cleaned.length < 7) return 'Please enter a valid phone number';
  return null;
}

export function validateNiftarName(value: string): string | null {
  if (!value.trim()) return "Niftar's name is required";
  if (value.trim().length < 2) return 'Name must be at least 2 characters';
  return null;
}

export function validateHebrewDate(day: number, month: string, year: number): string | null {
  if (!month) return 'Please select a Hebrew month';
  if (!day) return 'Please select a day';
  if (!year) return 'Please select a year';
  return null;
}

export function validateNotes(value: string): string | null {
  if (value.length > 500) return 'Notes must be 500 characters or less';
  return null;
}
