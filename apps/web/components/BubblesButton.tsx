import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BubblesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  disableBubbles?: boolean;
  className?: string;
}

export default function BubblesButton({
  children,
  href,
  disableBubbles = false,
  className = "",
  ...props
}: BubblesButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center",
    "px-8 py-3 rounded-full",
    "shadow-lg transition-all duration-200 border-3 border-current/50",
    "hover:shadow-[2px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-x-0.5 hover:-translate-y-1",
    "active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] active:translate-x-0 active:translate-y-0 active:mt-0 active:mb-0",
    className,
  );

  const glossyLayer = (
    <>
      {/* Glossy overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
      {/* Bubble dots */}
      <div className="absolute top-4 left-2.5 w-1.5 h-1.5 bg-white/30 rounded-full border border-white/40 animate-pulse" />
      <div className="absolute top-1.5 left-5 w-2.5 h-2.5 bg-white/30 rounded-full border border-white/40 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
      <div className="absolute top-2 right-20 w-1.5 h-1.5 bg-white/30 rounded-full border border-white/40 animate-pulse" />
      <div className="absolute -top-1.5 right-8 w-3 h-3 bg-white/30 rounded-full border border-white/40 opacity-50 animate-pulse" />
      <div className="absolute bottom-2 right-5 w-2 h-2 bg-white/30 rounded-full border border-white/40 animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
      <div className="absolute bottom-0 right-14 w-1 h-1 bg-white/30 rounded-full border border-white/40" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className="relative inline-block">
        <span className={baseClasses}>
          {children}
          {!disableBubbles && glossyLayer}
        </span>
      </Link>
    );
  }

  return (
    <div className="relative inline-block">
      <button type="button" className={baseClasses} {...props}>
        {children}
        {!disableBubbles && glossyLayer}
      </button>
    </div>
  );
}
