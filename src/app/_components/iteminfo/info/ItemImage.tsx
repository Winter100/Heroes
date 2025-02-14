import { getImageByName } from "@/app/_utils/getImageByName";
import clsx from "clsx";
import Image from "next/image";
import { memo } from "react";

interface ItemImageProps {
  materials: string;
}

const ItemImage = memo(({ materials }: ItemImageProps) => {
  const src = getImageByName(materials);
  return (
    <a data-tooltip-id={materials}>
      <Image
        className={clsx(
          "object-scale-down",
          materials.includes("레어") && "rounded-sm border border-orange-300",
          materials.includes("전설") && "rounded-sm border border-pink-400",
        )}
        width={35}
        height={35}
        src={src}
        alt={materials || ""}
        priority={true}
      />
    </a>
  );
});

export default ItemImage;

ItemImage.displayName = "ItemImage";
