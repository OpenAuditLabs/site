import { cn } from "@/lib/utils";
import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  width,
  height,
  rounded = "md",
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-gray-200 dark:bg-gray-800 animate-pulse",
        width,
        height,
        {
          "rounded-none": rounded === "none",
          "rounded-sm": rounded === "sm",
          "rounded-md": rounded === "md",
          "rounded-lg": rounded === "lg",
          "rounded-xl": rounded === "xl",
          "rounded-full": rounded === "full",
        },
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };
