import { ComponentProps } from "react";

interface BeforeProps extends ComponentProps<"div"> {}

const Before = ({ children, className, ...props }: BeforeProps) => {
  return (
    <div
      className={`flex h-full w-full flex-1 items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Before;
