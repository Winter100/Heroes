import clsx from "clsx";
import { ComponentProps } from "react";

interface ThProps extends ComponentProps<"th"> {}

const Th = ({ children, className, ...props }: ThProps) => {
  return (
    <th className={clsx("p-2 align-middle", className)} {...props}>
      {children}
    </th>
  );
};

export default Th;
