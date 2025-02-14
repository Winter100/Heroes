import React from "react";
import Item from "../common/item/Item";

// 프롭스로 색상 받기

const ItemColorPart = () => {
  return (
    <Item.Description>
      <Item.Content className="flex flex-wrap items-center gap-1 text-xs text-[rgb(189,164,123)]">
        <span>색상파트 1: </span>
        <span className="h-2 w-2 bg-[rgb(128,128,128)]" />
        <span> [R:128 G:128 B:128]</span>
      </Item.Content>
      <Item.Content className="flex flex-wrap items-center gap-1 text-xs text-[rgb(189,164,123)]">
        <span>색상파트 2: </span>
        <span className="h-2 w-2 bg-[rgb(128,128,128)]" />
        <span> [R:128 G:128 B:128]</span>
      </Item.Content>
      <Item.Content className="flex flex-wrap items-center gap-1 text-xs text-[rgb(189,164,123)]">
        <span>색상파트 3: </span>
        <span className="h-2 w-2 bg-[rgb(128,128,128)]" />
        <span> [R:128 G:128 B:128]</span>
      </Item.Content>
    </Item.Description>
  );
};

export default ItemColorPart;
