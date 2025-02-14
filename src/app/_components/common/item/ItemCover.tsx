import { getImageByName } from "@/app/_utils/getImageByName";
import Image from "next/image";
import React from "react";

const ItemCover = ({ item_name }: { item_name: string }) => {
  return (
    <div className="relative m-auto flex flex-col gap-2 rounded-md border border-borderColor/50 p-2">
      <div className="font-sans">제작 아이템</div>
      <div className="flex flex-row items-center justify-center gap-2 rounded-md bg-black/20 p-2">
        <Image
          className="object-scale-down"
          data-tooltip-id={item_name}
          width={30}
          height={30}
          alt={item_name || ""}
          src={getImageByName(item_name || "")}
        />
        <span className="flex items-center justify-center text-sm">
          {item_name}
        </span>
      </div>
    </div>
  );
};

export default ItemCover;
