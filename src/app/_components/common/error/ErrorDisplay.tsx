import { cn } from "@/lib/utils";
import React from "react";

interface ErrorProps {
  content: React.ReactNode;
  className?: string;
}

const ErrorDisplay = ({ content, className }: ErrorProps) => {
  return (
    <div
      className={cn(
        "flex flex-1 cursor-default flex-col items-center justify-center gap-2 rounded-lg p-2 text-sm",
        className,
      )}
    >
      {content}
    </div>
  );
};
export default ErrorDisplay;
