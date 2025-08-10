import { cn } from "@/lib/utils";
import React from "react";

type D2YTypographyProps = {
  className?: string;
  children: React.ReactNode;
};

export const H1 = ({ className, children }: D2YTypographyProps) => (
  <h1 className={cn("text-4xl font-bold tracking-tight", className)}>
    {children}
  </h1>
);

export const H2 = ({ className, children }: D2YTypographyProps) => (
  <h2 className={cn("text-3xl font-semibold tracking-tight", className)}>
    {children}
  </h2>
);

export const Paragraph = ({ className, children }: D2YTypographyProps) => (
  <p
    className={cn("text-base leading-relaxed text-muted-foreground", className)}
  >
    {children}
  </p>
);
