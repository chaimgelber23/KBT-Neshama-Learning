'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { candleFlicker } from '@/lib/animations';

interface CandleIconProps {
  /** Overall height of the candle in pixels (default: 120) */
  size?: number;
  /** Additional CSS classes on the wrapper SVG */
  className?: string;
}

/**
 * Memorial yahrzeit candle in a glass container with realistic flickering flame.
 * Features a translucent glass vessel, wax candle inside, wick, and multi-layered
 * animated flame with ambient glow.
 */
export default function CandleIcon({ size = 120, className = '' }: CandleIconProps) {
  const prefersReducedMotion = useReducedMotion();

  const flameElement = prefersReducedMotion ? (
    <g className="candle-glow">
      <FlameShapes />
    </g>
  ) : (
    <motion.g
      className="candle-glow"
      variants={candleFlicker}
      animate="animate"
      style={{ transformOrigin: '50px 38px' }}
    >
      <FlameShapes />
    </motion.g>
  );

  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Memorial yahrzeit candle"
      role="img"
    >
      <defs>
        {/* Glass container gradient - translucent effect */}
        <linearGradient id="glassGradient" x1="25" y1="50" x2="75" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="30%" stopColor="#F5F0E6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#EDE8DF" stopOpacity="0.25" />
        </linearGradient>

        {/* Glass shine highlight */}
        <linearGradient id="glassShine" x1="30" y1="50" x2="35" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>

        {/* Wax gradient */}
        <linearGradient id="waxGradient" x1="50" y1="80" x2="50" y2="145" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8E8" />
          <stop offset="50%" stopColor="#F5EDD8" />
          <stop offset="100%" stopColor="#EDE4CC" />
        </linearGradient>

        {/* Flame outer gradient: gold to orange */}
        <linearGradient id="flameOuter" x1="50" y1="12" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="35%" stopColor="#FFB830" />
          <stop offset="70%" stopColor="#F5901A" />
          <stop offset="100%" stopColor="#E87020" />
        </linearGradient>

        {/* Flame mid gradient */}
        <linearGradient id="flameMid" x1="50" y1="18" x2="50" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFBE6" />
          <stop offset="40%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>

        {/* Flame inner core: bright white-gold */}
        <linearGradient id="flameCore" x1="50" y1="24" x2="50" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFF9E0" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        {/* Ambient glow */}
        <radialGradient id="flameGlow" cx="50" cy="35" r="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#FFB300" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
        </radialGradient>

        {/* Large ambient light glow */}
        <radialGradient id="ambientGlow" cx="50" cy="40" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#FFB300" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
        </radialGradient>

        {/* Glass rim gradient */}
        <linearGradient id="rimGradient" x1="25" y1="48" x2="75" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4BC7A" />
          <stop offset="50%" stopColor="#C9A962" />
          <stop offset="100%" stopColor="#B8943E" />
        </linearGradient>
      </defs>

      {/* Large ambient glow behind everything */}
      <ellipse cx="50" cy="40" rx="45" ry="40" fill="url(#ambientGlow)" className="candle-glow-ambient" />

      {/* Glass container body */}
      <path
        d="M28 52 L28 140 Q28 150 38 150 L62 150 Q72 150 72 140 L72 52 Q72 48 68 48 L32 48 Q28 48 28 52Z"
        fill="url(#glassGradient)"
        stroke="#C9A96280"
        strokeWidth="1"
      />

      {/* Glass left shine */}
      <path
        d="M31 55 L31 138 Q31 145 36 145 L38 145 L38 55 Q38 52 35 52 L34 52 Q31 52 31 55Z"
        fill="url(#glassShine)"
      />

      {/* Glass rim at top */}
      <ellipse cx="50" cy="48" rx="22" ry="4" fill="url(#rimGradient)" opacity="0.7" />
      <ellipse cx="50" cy="48" rx="20" ry="3" fill="none" stroke="#C9A96250" strokeWidth="0.5" />

      {/* Wax inside glass */}
      <rect x="32" y="80" width="36" height="68" rx="2" fill="url(#waxGradient)" />

      {/* Wax top surface (slightly curved) */}
      <ellipse cx="50" cy="80" rx="18" ry="3" fill="#FFF8E8" />

      {/* Wick */}
      <line x1="50" y1="48" x2="50" y2="78" stroke="#4A3728" strokeWidth="1.2" strokeLinecap="round" />

      {/* Flame glow behind flame */}
      <ellipse cx="50" cy="35" rx="18" ry="22" fill="url(#flameGlow)" className="candle-glow-ambient" />

      {/* Flame */}
      {flameElement}

      {/* Glass bottom edge */}
      <path
        d="M28 140 Q28 150 38 150 L62 150 Q72 150 72 140"
        fill="none"
        stroke="#C9A96240"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function FlameShapes() {
  return (
    <>
      {/* Outer flame */}
      <path
        d="M50 12 C53 20, 60 30, 58 40 C56 46, 44 46, 42 40 C40 30, 47 20, 50 12Z"
        fill="url(#flameOuter)"
      />
      {/* Mid flame */}
      <path
        d="M50 18 C52 24, 57 32, 55 39 C54 43, 46 43, 45 39 C43 32, 48 24, 50 18Z"
        fill="url(#flameMid)"
      />
      {/* Inner flame core */}
      <path
        d="M50 24 C51 28, 54 34, 53 38 C52 41, 48 41, 47 38 C46 34, 49 28, 50 24Z"
        fill="url(#flameCore)"
      />
      {/* Tiny bright point at tip */}
      <ellipse cx="50" cy="38" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.6" />
    </>
  );
}
