import clsx from "clsx";
import { ComponentProps } from "react";

interface TdProps extends ComponentProps<"td"> {}

const Td = ({ children, className, ...props }: TdProps) => {
  return (
    <td className={clsx("p-2 align-middle", className)} {...props}>
      {children}
    </td>
  );
};

export default Td;
