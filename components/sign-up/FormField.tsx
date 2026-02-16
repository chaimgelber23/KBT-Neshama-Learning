'use client';

import type { ReactNode } from 'react';

interface FormFieldProps {
  /** Label text displayed above the input */
  label: string;
  /** Show a red asterisk next to the label */
  required?: boolean;
  /** Validation error message to display */
  error?: string | null;
  /** Help text shown below the input (hidden when an error is present) */
  helpText?: string;
  /** The form control (input, select, textarea, etc.) */
  children: ReactNode;
}

/**
 * Reusable form field wrapper that provides a label, error message,
 * and optional help text around any child input element.
 */
export default function FormField({
  label,
  required = false,
  error,
  helpText,
  children,
}: FormFieldProps) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {required && (
          <span
            style={{ color: 'var(--color-error)', marginLeft: '4px' }}
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      {helpText && !error && (
        <p className="form-help">{helpText}</p>
      )}
    </div>
  );
}
