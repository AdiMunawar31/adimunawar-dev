import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type D2YTagProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "danger";
  className?: string;
};

const sizeMap = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-1.5 text-base",
  lg: "px-5 py-2 text-lg",
};

const variantMap = {
  default: "bg-gray-200 text-gray-800 dark:bg-zinc-700 dark:text-white",
  primary: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white",
  secondary: "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-white",
  danger: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white",
};

export const D2YTag = ({
  children,
  size = "sm",
  variant = "default",
  className,
}: D2YTagProps) => {
  return (
    <span
      className={cn(
        "rounded-sm font-medium inline-block",
        sizeMap[size],
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
