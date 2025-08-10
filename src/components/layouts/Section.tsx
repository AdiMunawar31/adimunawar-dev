// src/components/layouts/Section.tsx
"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";

type BackgroundVariant =
  | "default"
  | "muted"
  | "dark"
  | "grid"
  | "gradient"
  | "noise"
  | "subtleGrid"
  | "softGradientBlur"
  | "geometricShapes"
  | "diagonalStripes";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: BackgroundVariant;
};

export default function Section({
  children,
  className,
  background = "default",
}: SectionProps) {
  const baseClass = "relative py-24 px-6 md:px-10 overflow-hidden";

  // Class-based backgrounds
  const bgClassMap: Record<BackgroundVariant, string> = {
    default: "",
    muted: "bg-gray-50 dark:bg-neutral-900",
    dark: "bg-gray-900 text-white",
    gradient:
      "bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-neutral-900 dark:via-black dark:to-neutral-900",
    grid: "",
    noise: "",
    subtleGrid: "",
    softGradientBlur: "",
    geometricShapes: "",
    diagonalStripes: "",
  };

  // Overlay / JSX-based backgrounds
  const bgOverlayMap: Record<BackgroundVariant, JSX.Element | null> = {
    default: null,
    muted: null,
    dark: null,
    gradient: null,
    grid: (
      <>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
              linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/80 via-transparent to-white/80 dark:from-black/80 dark:via-transparent dark:to-black/80" />
      </>
    ),
    noise: (
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />
    ),
    subtleGrid: (
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(5,5,5,0.1) 2px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    ),
    softGradientBlur: (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black opacity-20 dark:from-black dark:via-transparent dark:to-white blur-3xl pointer-events-none z-0" />
      </>
    ),
    geometricShapes: (
      <>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-neutral-200/10 dark:bg-white/5 blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-neutral-300/10 dark:bg-white/5 blur-2xl z-0" />
      </>
    ),
    diagonalStripes: (
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(128,128,128,0.05),
              rgba(128,128,128,0.05) 1px,
              transparent 1px,
              transparent 20px
            )
          `,
          backgroundSize: "28px 28px",
        }}
      />
    ),
  };

  return (
    <section className={cn(baseClass, bgClassMap[background], className)}>
      {bgOverlayMap[background]}

      <div className="max-w-7xl px-0 sm:px-16 mx-auto relative z-20">
        {children}
      </div>
    </section>
  );
}
