'use client';
import { item_crafting_materials_list } from '@/app/_constant/items/item_crafting_materials_list';
import PopOverImage from '@/app/_components/common/popoverItem/PopOverImage';
import Item from '@/app/_components/common/item/Item';
import { getItemOrMaterialsRating } from '../utils/getItemRating';

interface CraftingItemListProps {
  itemName: string;
  filter: string;
  setItemName: (item: string, category: string) => void;
}

const CraftingItemList = ({
  filter,
  itemName,
  setItemName,
}: CraftingItemListProps) => {
  return (
    <ul className="flex h-[300px] w-full flex-col gap-1 overflow-y-auto lg:h-[800px]">
      {item_crafting_materials_list
        .filter(
          (crafting) =>
            crafting.item_category === filter &&
            !crafting.item_name.includes('+15 오르나')
        )
        .map((mat) => {
          const rating =
            getItemOrMaterialsRating(filter, mat.item_name) ?? '일반';
          const type = itemName === mat.item_name ? rating : null;
          return (
            <li key={mat?.item_name} className="flex flex-row gap-1 text-sm">
              <PopOverImage
                category={mat.item_category}
                item_name={mat?.item_name}
                isRatingBorder={itemName === mat.item_name}
              />
              <button
                className="h-9 w-full px-2 text-start hover:bg-muted/50"
                onClick={() => setItemName(mat.item_name, mat.item_category)}
              >
                <Item.Title type={type}>{mat?.item_name}</Item.Title>
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default CraftingItemList;
