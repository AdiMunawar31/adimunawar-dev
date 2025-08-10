// src/components/Section.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "dark";
};

export default function Section({
  children,
  className,
  background = "default",
}: SectionProps) {
  const bgClass =
    background === "muted"
      ? "bg-gray-50 dark:bg-neutral-900"
      : background === "dark"
      ? "bg-gray-900 text-white"
      : "";

  return (
    <section className={cn("py-24 px-6 md:px-10", bgClass, className)}>
      <div className="max-w-7xl px-0 sm:px-16 mx-auto">{children}</div>
    </section>
  );
}
