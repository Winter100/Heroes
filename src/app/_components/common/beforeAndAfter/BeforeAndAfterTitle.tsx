import { ComponentProps } from "react";

interface BeforeAndAfterTitle extends ComponentProps<"p"> {}

const BeforeAndAfterTitle = ({
  children,
  className,
  ...props
}: BeforeAndAfterTitle) => {
  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
      {children}
    </div>
  );
};

export default BeforeAndAfterTitle;
