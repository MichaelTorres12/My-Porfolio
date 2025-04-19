'use client'

interface BadgeProps {
  text: string
  className?: string
}

export function Badge({ text, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block bg-xp-gray/60 px-2 py-[2px] text-[11px] rounded shadow ${className}`}
    >
      {text}
    </span>
  )
}
