import { ComponentProps } from "react";

interface AfterProps extends ComponentProps<"div"> {}

const After = ({ children, className, ...props }: AfterProps) => {
  return (
    <div
      className={`flex h-full w-full flex-1 items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default After;
