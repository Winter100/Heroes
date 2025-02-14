import clsx from "clsx";
import { ComponentProps } from "react";

interface ItemSubDescriptionProps extends ComponentProps<"div"> {}

const ItemSubDescription = ({
  className,
  ...props
}: ItemSubDescriptionProps) => {
  return (
    <div
      className={clsx(
        "rounded-sm border border-borderColor/50 font-sans text-[11px]",
        className,
      )}
      {...props}
    ></div>
  );
};

export default ItemSubDescription;
