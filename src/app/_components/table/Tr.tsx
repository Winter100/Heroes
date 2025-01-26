import clsx from "clsx";
import { ComponentProps } from "react";

interface TrProps extends ComponentProps<"tr"> {}

const Tr = ({ children, className, ...props }: TrProps) => {
  return (
    <tr className={clsx("", className)} {...props}>
      {children}
    </tr>
  );
};

export default Tr;
