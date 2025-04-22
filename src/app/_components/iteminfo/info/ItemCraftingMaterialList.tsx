import {
  ItemListType,
  MaterialsType,
} from '@/app/_constant/items/item_crafting_materials_list';
import { memo } from 'react';
import MaterialsCraftingItem from './MaterialsCraftingItem';

interface ItemCraftingMaterialListProps {
  craftingList: MaterialsType[];
  itemCraftingMap: Map<string, ItemListType>;
}

const ItemCraftingMaterialList = memo(
  ({ craftingList, itemCraftingMap }: ItemCraftingMaterialListProps) => {
    return (
      <>
        <div className="text-center text-sm">제작 재료</div>
        <div>
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto">
            {craftingList?.map((item) => {
              const category = itemCraftingMap?.get(
                item.item_name
              )?.item_category;
              return (
                <li className="flex items-center" key={item.item_name}>
                  <MaterialsCraftingItem category={category || ''} {...item} />
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
);

export default ItemCraftingMaterialList;

ItemCraftingMaterialList.displayName = 'ItemCraftingMaterialList';
