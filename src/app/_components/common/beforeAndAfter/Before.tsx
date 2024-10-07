import { ComponentProps } from "react";

interface BeforeProps extends ComponentProps<"div"> {}

const Before = ({ children, className, ...props }: BeforeProps) => {
  return (
    <div
      className={`flex h-full w-full flex-1 items-center justify-center text-[10px] md:text-xs ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Before;
