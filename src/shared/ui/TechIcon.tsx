import { SimpleIcon } from "simple-icons";

interface TechIconProps {
  icon: SimpleIcon;
  className?: string;
}

export function TechIcon({ icon, className = "w-5 h-5" }: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Фоллбэк для технологий без иконки в simple-icons (Effector, FSD) */
export function FallbackIcon({
  label,
  className = "w-5 h-5",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`${className} flex items-center justify-center font-mono text-[9px] font-bold tracking-widest text-current`}
      aria-label={label}
    >
      {label.slice(0, 3).toUpperCase()}
    </span>
  );
}
