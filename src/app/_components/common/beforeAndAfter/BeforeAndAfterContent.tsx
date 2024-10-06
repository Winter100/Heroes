import { ComponentProps } from "react";

interface BeforeAndAfterContentProps extends ComponentProps<"div"> {}

const BeforeAndAfterContent = ({
  children,
  className,
  ...props
}: BeforeAndAfterContentProps) => {
  return (
    <div
      className={`flex min-h-6 w-full items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BeforeAndAfterContent;
