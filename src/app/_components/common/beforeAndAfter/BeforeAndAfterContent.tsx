import { ComponentProps } from "react";

interface BeforeAndAfterContentProps extends ComponentProps<"div"> {}

const BeforeAndAfterContent = ({
  children,
  className,
  ...props
}: BeforeAndAfterContentProps) => {
  return (
    <div
      // className={`flex w-full items-center justify-center ${className}`}
      className={`flex w-full items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BeforeAndAfterContent;
