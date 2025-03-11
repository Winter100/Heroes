import clsx from "clsx";
import { ComponentProps } from "react";

interface ItemContentProps extends ComponentProps<"span"> {}
const ItemContent = ({ className, ...props }: ItemContentProps) => {
  return (
    <span
      className={clsx("flex-wrap whitespace-pre-line", className)}
      {...props}
    ></span>
  );
};

export default ItemContent;
