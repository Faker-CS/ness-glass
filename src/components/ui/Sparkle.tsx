type SparkleProps = { size?: number; className?: string };

/** Four-point star with a magenta glow; decorative, positioned by the caller. */
export function Sparkle({ size = 24, className = "" }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none text-snow drop-shadow-[0_0_6px_var(--color-brand)] drop-shadow-[0_0_14px_var(--color-glow-magenta)] ${className}`}
    >
      
      <path
        fill="currentColor"
         d="M12 0C12 9.5 14.5 12 24 12C14.5 12 12 14.5 12 24C12 14.5 9.5 12 0 12C9.5 12 12 9.5 12 0Z"
      />
    </svg>
  );
}
