'use client';

interface LoadingSpinnerProps {
  /** Diameter of the spinner in pixels (default: 40) */
  size?: number;
  /** Additional CSS classes on the wrapper */
  className?: string;
}

/**
 * Gold-themed CSS-animated loading spinner.
 * A rotating circle with a gold arc border, matching the site's
 * design tokens. Uses the `@keyframes kbt-spin` animation defined
 * in globals.css.
 */
export default function LoadingSpinner({ size = 40, className = '' }: LoadingSpinnerProps) {
  const borderWidth = Math.max(2, Math.round(size / 12));

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div
        style={{
          width: size,
          height: size,
          border: `${borderWidth}px solid rgba(201, 169, 98, 0.15)`,
          borderTopColor: 'var(--color-gold)',
          borderRadius: '50%',
          animation: 'kbt-spin 0.8s linear infinite',
        }}
      />

      {/* Screen-reader text */}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
