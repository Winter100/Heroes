import clsx from "clsx";
import { ComponentProps } from "react";

interface ItemDescriptionProps extends ComponentProps<"div"> {}

const ItemDescription = ({
  children,
  className,
  ...props
}: ItemDescriptionProps) => {
  return (
    <span className={clsx("p-1 text-xs text-inherit", className)} {...props}>
      {children}
    </span>
  );
};

export default ItemDescription;
