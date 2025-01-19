import clsx from "clsx";
import { ComponentProps } from "react";

interface RowProps extends ComponentProps<"div"> {}
const Row = ({ children, className, ...props }: RowProps) => {
  return (
    <div className={clsx("flex flex-row", className)} {...props}>
      {children}
    </div>
  );
};

export default Row;
