import {
  ItemListType,
  MaterialsType,
} from '@/app/_constant/items/item_crafting_materials_list';
import { Item_Rating } from '@/app/_type/infoInfoType';

export interface ItemCraftingItemProps {
  item_name: string;
  handleSelect: () => void;
  isSelect: boolean;
  category: string;
  materials: MaterialsType[];
  filter: string;
}

export interface CratingSelectImageProps {
  isSelect: boolean;
  src: string;
  itemName: string;
}

export interface CraftingSelectBtnProps {
  isSelect: boolean;
  onClick: () => void;
  itemRating: Item_Rating;
  itemName: string;
  category: string;
}

export interface ItemCraftingMaterialListProps {
  craftingList: MaterialsType[];
  itemCraftingMap: Map<string, ItemListType>;
}

export interface MaterialsCraftingItemProps extends MaterialsType {
  depth?: number;
  category: string;
}
