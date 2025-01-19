import React from "react";

interface ErrorProps {
  content: string;
}

const ErrorDisplay = ({ content }: ErrorProps) => {
  return (
    <div className="flex h-96 w-full cursor-default flex-col items-center justify-center gap-2 rounded-lg p-2 text-sm text-white">
      {content}
    </div>
  );
};
export default ErrorDisplay;
