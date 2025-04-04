import { cn } from "@/lib/utils";
import type React from "react";

const Chip = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  return (
    <p className={cn("rounded-full bg-neutral-200 px-3 py-1", className)}>
      {children}
    </p>
  );
};

export default Chip;
