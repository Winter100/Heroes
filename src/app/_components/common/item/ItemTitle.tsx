import { itemInfoMap, materialsMap } from "@/app/_constant/items/item_map";
import clsx from "clsx";
import { ComponentProps, memo } from "react";

interface ItemTitleProps extends ComponentProps<"div"> {
  type: "일반" | "초급" | "중급" | "고급" | "레어" | "전설";
  item_name?: string;
}

const ItemTitle = memo(
  ({
    children,
    className,
    item_name,
    type = "일반",
    ...props
  }: ItemTitleProps) => {
    const itemRating = itemInfoMap?.get(item_name || "")?.item_rating;
    const materialsRating = materialsMap?.get(item_name || "")?.item_rating;

    const finalType = (itemRating ||
      materialsRating ||
      type) as ItemTitleProps["type"];

    const colorClass = {
      일반: "text-white",
      초급: "text-green-400",
      중급: "text-blue-300",
      고급: "text-purple-500",
      레어: "text-orange-300",
      전설: "text-pink-400",
    }[finalType];

    return (
      <div className={clsx(colorClass, className)} {...props}>
        {children}
      </div>
    );
  },
);

export default ItemTitle;

ItemTitle.displayName = "ItemTitle";
