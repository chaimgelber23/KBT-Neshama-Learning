'use client';

import { useState, useCallback, useRef } from 'react';
import { FadeUp } from '@/components/ui/motion';
import GoldDivider from '@/components/ui/GoldDivider';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import FormField from '@/components/sign-up/FormField';
import HebrewDatePicker from '@/components/sign-up/HebrewDatePicker';
import FormSuccess from '@/components/sign-up/FormSuccess';
import type { SignUpFormData, FormStatus } from '@/lib/types';
import { RELATIONSHIP_OPTIONS } from '@/lib/types';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateNiftarName,
  validateHebrewDate,
  validateNotes,
} from '@/lib/form-validation';

/* -------------------------------------------------------
   Constants
   ------------------------------------------------------- */

const INITIAL_FORM_DATA: SignUpFormData = {
  name: '',
  email: '',
  phone: '',
  niftarNameEnglish: '',
  niftarNameHebrew: '',
  hebrewDate: '',
  hebrewDay: 0,
  hebrewMonth: '',
  hebrewYear: 0,
  englishDate: '',
  relationship: '',
  notes: '',
};

/* -------------------------------------------------------
   Sub-heading component used for each form section
   ------------------------------------------------------- */

function SectionSubheading({ text }: { text: string }) {
  return (
    <div className="mb-6">
      <h4
        className="text-lg mb-3"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-gold)',
        }}
      >
        {text}
      </h4>
      <div
        style={{
          width: 40,
          height: 1,
          background: 'var(--color-gold-border)',
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------
   SignUpForm
   ------------------------------------------------------- */

export default function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string | null>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverError, setServerError] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);

  // ---------- Field change helpers ----------

  const updateField = useCallback(
    <K extends keyof SignUpFormData>(field: K, value: SignUpFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear the field error on change
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: null }));
      }
    },
    [errors],
  );

  const handleInputChange = useCallback(
    (field: keyof SignUpFormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        updateField(field, e.target.value);
      },
    [updateField],
  );

  const handleHebrewDateChange = useCallback(
    (
      day: number,
      month: string,
      year: number,
      hebrewDateStr: string,
      englishDateStr: string,
    ) => {
      setFormData((prev) => ({
        ...prev,
        hebrewDay: day,
        hebrewMonth: month,
        hebrewYear: year,
        hebrewDate: hebrewDateStr,
        englishDate: englishDateStr,
      }));
      // Clear date error
      if (errors.hebrewDate) {
        setErrors((prev) => ({ ...prev, hebrewDate: null }));
      }
    },
    [errors.hebrewDate],
  );

  // ---------- Validation ----------

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof SignUpFormData, string | null>> = {};

    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.niftarNameEnglish = validateNiftarName(formData.niftarNameEnglish);
    newErrors.hebrewDate = validateHebrewDate(
      formData.hebrewDay,
      formData.hebrewMonth,
      formData.hebrewYear,
    );
    newErrors.notes = validateNotes(formData.notes);

    setErrors(newErrors);

    // Return true if there are no errors
    const hasErrors = Object.values(newErrors).some((err) => err !== null);

    if (hasErrors) {
      // Scroll to the first error
      const firstErrorKey = Object.keys(newErrors).find(
        (key) => newErrors[key as keyof SignUpFormData] !== null,
      );
      if (firstErrorKey && formRef.current) {
        const errorElement = formRef.current.querySelector(
          `[data-field="${firstErrorKey}"]`,
        );
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }

    return !hasErrors;
  }, [formData]);

  // ---------- Submit ----------

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setServerError('');

      if (!validateForm()) return;

      setStatus('submitting');

      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(
            body.message || `Submission failed (${res.status}). Please try again.`,
          );
        }

        setStatus('success');
      } catch (err) {
        setStatus('error');
        setServerError(
          err instanceof Error
            ? err.message
            : 'An unexpected error occurred. Please try again.',
        );
      }
    },
    [formData, validateForm],
  );

  // ---------- Reset ----------

  const handleReset = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setStatus('idle');
    setServerError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ---------- Render: Success state ----------

  if (status === 'success') {
    return (
      <div className="card">
        <FormSuccess
          name={formData.name}
          niftarName={formData.niftarNameEnglish}
          onReset={handleReset}
        />
      </div>
    );
  }

  // ---------- Render: Form ----------

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="card"
    >
      {/* Server error banner */}
      {serverError && (
        <div
          className="mb-8 p-4 rounded-sm text-center"
          role="alert"
          style={{
            background: 'var(--color-error-bg)',
            border: '1px solid var(--color-error)',
            color: 'var(--color-error)',
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
          }}
        >
          {serverError}
        </div>
      )}

      {/* ==========================================
         Section 1: Your Information
         ========================================== */}
      <FadeUp>
        <div data-field="name">
          <SectionSubheading text="Your Information" />

          <FormField label="Full Name" required error={errors.name}>
            <input
              type="text"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange('name')}
              placeholder="Your full name"
              autoComplete="name"
            />
          </FormField>
        </div>

        <div data-field="email">
          <FormField label="Email Address" required error={errors.email}>
            <input
              type="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange('email')}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </FormField>
        </div>

        <div data-field="phone">
          <FormField label="Phone Number" error={errors.phone}>
            <input
              type="tel"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              placeholder="(555) 123-4567"
              autoComplete="tel"
            />
          </FormField>
        </div>
      </FadeUp>

      {/* Spacer between sections */}
      <GoldDivider className="my-10" />

      {/* ==========================================
         Section 2: Niftar Information
         ========================================== */}
      <FadeUp delay={0.1}>
        <div data-field="niftarNameEnglish">
          <SectionSubheading text="Niftar Information" />

          <FormField label="Name in English" required error={errors.niftarNameEnglish}>
            <input
              type="text"
              className="form-input"
              value={formData.niftarNameEnglish}
              onChange={handleInputChange('niftarNameEnglish')}
              placeholder="Full name in English"
            />
          </FormField>
        </div>

        <div data-field="niftarNameHebrew">
          <FormField
            label="Name in Hebrew"
            error={errors.niftarNameHebrew}
            helpText="e.g., Moshe ben Avraham"
          >
            <input
              type="text"
              className="form-input"
              value={formData.niftarNameHebrew}
              onChange={handleInputChange('niftarNameHebrew')}
              placeholder="Hebrew name (optional)"
              dir="auto"
            />
          </FormField>
        </div>
      </FadeUp>

      {/* Spacer between sections */}
      <GoldDivider className="my-10" />

      {/* ==========================================
         Section 3: Yahrzeit Date
         ========================================== */}
      <FadeUp delay={0.2}>
        <div data-field="hebrewDate">
          <SectionSubheading text="Yahrzeit Date" />

          <HebrewDatePicker
            value={{
              day: formData.hebrewDay,
              month: formData.hebrewMonth,
              year: formData.hebrewYear,
            }}
            onChange={handleHebrewDateChange}
            error={errors.hebrewDate}
          />
        </div>
      </FadeUp>

      {/* Spacer between sections */}
      <GoldDivider className="my-10" />

      {/* ==========================================
         Section 4: Additional Details
         ========================================== */}
      <FadeUp delay={0.3}>
        <SectionSubheading text="Additional Details" />

        <div data-field="relationship">
          <FormField label="Relationship to Niftar" error={errors.relationship}>
            <select
              className="form-select"
              value={formData.relationship}
              onChange={handleInputChange('relationship')}
            >
              {RELATIONSHIP_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div data-field="notes">
          <FormField label="Special Requests" error={errors.notes}>
            <textarea
              className="form-textarea"
              value={formData.notes}
              onChange={handleInputChange('notes')}
              placeholder="Any special requests or notes (optional)"
              rows={4}
            />
          </FormField>
        </div>
      </FadeUp>

      {/* ==========================================
         Submit Button
         ========================================== */}
      <FadeUp delay={0.4}>
        <div className="mt-10">
          <button
            type="submit"
            className="btn btn--gold btn--lg w-full"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <LoadingSpinner size={18} />
                <span>Submitting...</span>
              </>
            ) : (
              'Submit Sign-Up'
            )}
          </button>
        </div>
      </FadeUp>
    </form>
  );
}
