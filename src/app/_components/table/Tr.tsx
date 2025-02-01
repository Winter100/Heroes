import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

interface TrProps extends ComponentProps<"tr"> {}

const Tr = forwardRef<HTMLTableRowElement, TrProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <tr ref={ref} className={clsx("", className)} {...props}>
        {children}
      </tr>
    );
  },
);

Tr.displayName = "Tr";

export default Tr;
