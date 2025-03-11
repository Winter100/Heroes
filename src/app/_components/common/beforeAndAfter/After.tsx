import { ComponentProps, memo } from "react";

interface AfterProps extends ComponentProps<"div"> {}

const After = memo(({ children, className, ...props }: AfterProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center text-[11px] sm:text-xs ${className} `}
      {...props}
    >
      {children}
    </div>
  );
});

export default After;

After.displayName = "After";
