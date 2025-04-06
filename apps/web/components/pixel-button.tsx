import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "default" | "outline";
  className?: string;
}

export default function PixelButton({
  children,
  href,
  variant = "default",
  className = "",
  ...props
}: PixelButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center transition-all duration-150",
    "px-6 py-2.5 font-medium text-sm",
    "hover:shadow-[2px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-x-0.5 hover:-translate-y-1",
    "active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] active:translate-x-0 active:translate-y-0 active:mt-0 active:mb-0",
  );
  const variantClasses =
    variant === "outline"
      ? "border-2 border-current bg-transparent hover:bg-gray-100 hover:bg-opacity-20"
      : "bg-primary text-primary-foreground";

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, variantClasses, className)} {...props}>
      {children}
    </button>
  );
}
