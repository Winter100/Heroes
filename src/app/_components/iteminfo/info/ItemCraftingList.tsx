import { ItemListType } from '@/app/_constant/items/item_crafting_materials_list';
import React, { memo } from 'react';

const ItemCraftingList = memo(
  ({ itemCrafting }: { itemCrafting: ItemListType }) => {
    return (
      <div className="px-2 text-sm">
        <div className="text-center">제작 방법</div>
        <div className="flex gap-2 text-xs">
          {itemCrafting?.item_crafting.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    );
  }
);

export default ItemCraftingList;

ItemCraftingList.displayName = 'ItemCraftingList';
