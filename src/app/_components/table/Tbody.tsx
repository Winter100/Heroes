import clsx from "clsx";
import React, { ComponentProps } from "react";

interface TbodyProps extends ComponentProps<"tbody"> {}
const Tbody = ({ children, className, ...props }: TbodyProps) => {
  return (
    <tbody className={clsx("", className)} {...props}>
      {children}
    </tbody>
  );
};

export default Tbody;
