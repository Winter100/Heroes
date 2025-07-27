import { memo } from 'react';
import { ItemCraftingMaterialListProps } from '../../types';
import CraftingQuantity from './CraftingQuantity';
import PopOverItem from '@/app/_components/common/popoverItem/PopOverItem';

const ItemCraftingMaterialList = memo(
  ({ craftingList, itemCraftingMap }: ItemCraftingMaterialListProps) => {
    return (
      <>
        <div className="text-center text-sm">제작 재료</div>
        <ul className="flex w-full flex-1 flex-col gap-1 overflow-y-auto">
          {craftingList?.map((item) => {
            const category = itemCraftingMap?.get(
              item.item_name
            )?.item_category;
            return (
              <li
                className="flex items-center gap-2 text-sm"
                key={item.item_name}
              >
                <PopOverItem
                  className="w-full"
                  category={category || ''}
                  isColorName={true}
                  itemName={item.item_name}
                />
                <div className="flex items-center">
                  <div className="w-3">x</div>
                  <div className="flex items-center">
                    <CraftingQuantity item_quantity={item.item_quantity} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
);

export default ItemCraftingMaterialList;

ItemCraftingMaterialList.displayName = 'ItemCraftingMaterialList';
