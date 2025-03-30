import type { ButtonHTMLAttributes, ReactNode } from "react"
import Link from "next/link"

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  variant?: "default" | "outline"
  className?: string
}

export default function PixelButton({
  children,
  href,
  variant = "default",
  className = "",
  ...props
}: PixelButtonProps) {
  const baseClasses =
    "font-pixel inline-flex items-center justify-center px-6 py-2.5 border-b-4 active:border-b-0 active:mt-1 active:mb-[-1px] transition-all"
  const variantClasses = variant === "outline" ? "border-2 border-current bg-transparent" : ""

  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

