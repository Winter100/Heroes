import clsx from "clsx";
import { ItemTitleType } from "@/app/_type/itemTitleType";

const ItemTitle = ({ className, level, name, ...props }: ItemTitleType) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        // "flex h-6 items-center justify-center text-sm font-semibold text-white",
        className,
      )}
      {...props}
    >
      <h2>{`${level} ${name}`}</h2>
    </div>
  );
};

export default ItemTitle;
