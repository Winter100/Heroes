import { ComponentProps } from "react";

interface AfterProps extends ComponentProps<"div"> {}

const After = ({ children, className, ...props }: AfterProps) => {
  return (
    <div
      className={`flex w-full flex-1 items-center justify-center ${className} ${children ? "border border-zinc-600" : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default After;
