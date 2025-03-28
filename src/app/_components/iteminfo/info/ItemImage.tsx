import { getImageByName } from "@/app/_utils/getImageByName";
import clsx from "clsx";
import Image from "next/image";
import { memo } from "react";

interface ItemImageProps {
  materials: string;
  slot?: string;
  size?: number;
}

const ItemImage = memo(({ slot, size = 35, materials }: ItemImageProps) => {
  const removePrefixName = materials.replace(
    /^(초급|중급|고급|레어|전설)\s*/,
    "",
  );
  const src = getImageByName(removePrefixName, slot);
  return (
    <a data-tooltip-id={materials}>
      <Image
        className={clsx(
          "rounded-md object-scale-down",
          materials.includes("레어") && "rounded-sm border border-orange-300",
          materials.includes("전설") && "rounded-sm border border-pink-400",
        )}
        width={size}
        height={size}
        src={src}
        alt={materials || ""}
        priority={true}
      />
    </a>
  );
});

export default ItemImage;

ItemImage.displayName = "ItemImage";
