import clsx from "clsx";
import { ComponentProps } from "react";

interface ItemShapeProps extends ComponentProps<"div"> {
  useNumber: number;
}

const ItemShape = ({
  children,
  useNumber,
  className,
  ...props
}: ItemShapeProps) => {
  return (
    <div
      className={clsx(
        "shape relative flex items-center justify-center gap-1 font-sans text-[9px]",
        className,
        { ...props },
      )}
    >
      <div className="absolute -left-3 w-4 rounded-full border border-borderColor bg-[rgb(71,85,105)] text-center text-[8px]">
        {useNumber}
      </div>
      {children}
    </div>
  );
};

export default ItemShape;
