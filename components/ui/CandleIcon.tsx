'use client';

import { useReducedMotion } from 'framer-motion';

interface CandleIconProps {
  size?: number;
  className?: string;
}

/**
 * Memorial yahrzeit candle in a tall glass container with realistic
 * multi-layer flickering flame. Each flame layer animates independently
 * via CSS for a natural, organic look.
 */
export default function CandleIcon({ size = 120, className = '' }: CandleIconProps) {
  const prefersReducedMotion = useReducedMotion();
  const animClass = prefersReducedMotion ? '' : 'candle-animated';

  return (
    <div className={`${animClass} ${className}`} style={{ width: size * 0.55, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 110 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Memorial yahrzeit candle"
        role="img"
      >
        <defs>
          {/* Glass container */}
          <linearGradient id="yg-glass" x1="20" y1="60" x2="90" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#F0EBE1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E8E2D8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="yg-shine" x1="32" y1="60" x2="38" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="yg-shine-r" x1="78" y1="70" x2="76" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Wax */}
          <linearGradient id="yg-wax" x1="55" y1="100" x2="55" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="40%" stopColor="#F8F0DC" />
            <stop offset="100%" stopColor="#EEE4CC" />
          </linearGradient>

          {/* Flame layers */}
          <linearGradient id="yg-flame-outer" x1="55" y1="8" x2="55" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE680" />
            <stop offset="30%" stopColor="#FFC040" />
            <stop offset="60%" stopColor="#FF9020" />
            <stop offset="100%" stopColor="#E86010" />
          </linearGradient>
          <linearGradient id="yg-flame-mid" x1="55" y1="16" x2="55" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFCE8" />
            <stop offset="35%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFAA00" />
          </linearGradient>
          <linearGradient id="yg-flame-core" x1="55" y1="28" x2="55" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFF8D0" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>

          {/* Glow effects */}
          <radialGradient id="yg-glow-soft" cx="55" cy="42" r="35" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#FFA500" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="yg-glow-wide" cx="55" cy="50" r="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#FFB300" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
          </radialGradient>

          {/* Glass rim */}
          <linearGradient id="yg-rim" x1="30" y1="62" x2="80" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C9A962" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#D4BC7A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#B8943E" stopOpacity="0.4" />
          </linearGradient>

          {/* Filters for soft flame edges */}
          <filter id="yg-blur-flame" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <filter id="yg-blur-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Wide ambient glow */}
        <ellipse cx="55" cy="50" rx="50" ry="45" fill="url(#yg-glow-wide)" className="flame-glow-wide" />

        {/* Glass container body */}
        <path
          d="M30 66 L30 178 Q30 190 42 190 L68 190 Q80 190 80 178 L80 66 Q80 62 76 62 L34 62 Q30 62 30 66Z"
          fill="url(#yg-glass)"
          stroke="#B8943E"
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />

        {/* Glass left shine strip */}
        <path
          d="M33 69 L33 176 Q33 184 38 184 L40 184 L40 69 Q40 66 37 66 L36 66 Q33 66 33 69Z"
          fill="url(#yg-shine)"
        />

        {/* Glass right subtle shine */}
        <path
          d="M74 72 L74 175 Q74 182 72 182 L71 182 L71 72 Q71 68 73 68 L74 68 Q76 68 74 72Z"
          fill="url(#yg-shine-r)"
        />

        {/* Glass rim */}
        <ellipse cx="55" cy="62" rx="25" ry="4.5" fill="url(#yg-rim)" />
        <ellipse cx="55" cy="62" rx="23" ry="3.5" fill="none" stroke="#C9A96240" strokeWidth="0.5" />

        {/* Wax inside glass */}
        <rect x="34" y="105" width="42" height="83" rx="2" fill="url(#yg-wax)" />
        <ellipse cx="55" cy="105" rx="21" ry="3.5" fill="#FFFDF5" />
        {/* Wax highlight */}
        <rect x="37" y="107" width="6" height="76" rx="3" fill="#FFFFFF" opacity="0.2" />

        {/* Wick */}
        <line x1="55" y1="62" x2="55" y2="103" stroke="#3D2B1A" strokeWidth="1.4" strokeLinecap="round" />

        {/* Flame glow behind flame (soft) */}
        <ellipse cx="55" cy="40" rx="22" ry="28" fill="url(#yg-glow-soft)" className="flame-glow-close" filter="url(#yg-blur-glow)" />

        {/* === FLAME LAYERS (each animated independently) === */}

        {/* Outer flame — slow sway */}
        <path
          className="flame-outer"
          d="M55 8 C58 18, 68 34, 65 50 C63 58, 47 58, 45 50 C42 34, 52 18, 55 8Z"
          fill="url(#yg-flame-outer)"
          filter="url(#yg-blur-flame)"
        />

        {/* Mid flame — medium sway */}
        <path
          className="flame-mid"
          d="M55 16 C57 24, 64 36, 62 48 C61 54, 49 54, 48 48 C46 36, 53 24, 55 16Z"
          fill="url(#yg-flame-mid)"
        />

        {/* Inner core — fast subtle dance */}
        <path
          className="flame-core"
          d="M55 28 C56 34, 60 42, 59 48 C58 52, 52 52, 51 48 C50 42, 54 34, 55 28Z"
          fill="url(#yg-flame-core)"
        />

        {/* Blue-white base at wick junction */}
        <ellipse className="flame-base" cx="55" cy="52" rx="4" ry="5" fill="#4488FF" opacity="0.25" />

        {/* White hot spot */}
        <ellipse className="flame-hotspot" cx="55" cy="48" rx="2.5" ry="3" fill="#FFFFFF" opacity="0.7" />

        {/* Tiny sparks / embers (optional decorative) */}
        <circle className="flame-spark-1" cx="52" cy="22" r="0.8" fill="#FFE080" opacity="0.6" />
        <circle className="flame-spark-2" cx="58" cy="18" r="0.6" fill="#FFD040" opacity="0.5" />

        {/* Glass bottom edge */}
        <path
          d="M30 178 Q30 190 42 190 L68 190 Q80 190 80 178"
          fill="none"
          stroke="#B8943E"
          strokeOpacity="0.15"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
