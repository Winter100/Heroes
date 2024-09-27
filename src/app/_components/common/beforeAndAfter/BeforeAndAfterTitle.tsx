import { ComponentProps } from "react";

interface BeforeAndAfterTitle extends ComponentProps<"p"> {}

const BeforeAndAfterTitle = ({
  children,
  className,
  ...props
}: BeforeAndAfterTitle) => {
  return (
    <p className={`flex items-center justify-center ${className}`} {...props}>
      {children}
    </p>
  );
};

export default BeforeAndAfterTitle;
