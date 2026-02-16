'use client';

import { StaggerItem } from '@/components/ui/motion';

interface StepCardProps {
  /** Step number displayed in the gold circle */
  number: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
}

/**
 * Individual step card for the How It Works timeline.
 * Displays a numbered gold circle, title, and description.
 * Wrapped in StaggerItem for coordinated reveal with siblings.
 */
export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <StaggerItem>
      <div className="flex items-start gap-6">
        {/* Gold numbered circle */}
        <div
          className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            border: '2px solid var(--color-gold)',
            fontFamily: 'var(--font-display)',
            color: 'var(--color-gold)',
            fontSize: '1.25rem',
          }}
        >
          {number}
        </div>

        {/* Content */}
        <div className="pt-1">
          <h3
            className="text-xl mb-2"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)',
            }}
          >
            {title}
          </h3>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-secondary)',
              fontSize: '15px',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </StaggerItem>
  );
}
