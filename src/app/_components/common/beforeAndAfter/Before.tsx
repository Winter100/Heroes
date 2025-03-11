import { ComponentProps } from "react";

interface BeforeProps extends ComponentProps<"div"> {}

const Before = ({ children, className, ...props }: BeforeProps) => {
  return (
    <div
      className={`h-full w-full text-[11px] sm:text-xs ${className}`}
      // className={`flex h-full w-full items-center justify-center text-[10px] md:text-xs ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Before;
