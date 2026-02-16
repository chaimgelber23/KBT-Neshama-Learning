export interface SignUpFormData {
  // Person signing up
  name: string;
  email: string;
  phone: string;

  // Niftar information
  niftarNameEnglish: string;
  niftarNameHebrew: string;

  // Date information
  hebrewDate: string;       // e.g. "15 Tishrei 5786"
  hebrewDay: number;
  hebrewMonth: string;
  hebrewYear: number;
  englishDate: string;       // auto-calculated display string

  // Additional
  relationship: string;
  notes: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const RELATIONSHIP_OPTIONS = [
  { value: '', label: 'Select relationship' },
  { value: 'parent', label: 'Parent (Father/Mother)' },
  { value: 'spouse', label: 'Spouse (Husband/Wife)' },
  { value: 'child', label: 'Child (Son/Daughter)' },
  { value: 'sibling', label: 'Sibling (Brother/Sister)' },
  { value: 'grandparent', label: 'Grandparent' },
  { value: 'in-law', label: 'In-Law' },
  { value: 'other-relative', label: 'Other Relative' },
  { value: 'friend', label: 'Friend' },
  { value: 'other', label: 'Other' },
] as const;
