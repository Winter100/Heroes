import {
  ItemListType,
  MaterialsType,
} from '@/app/_constant/items/item_crafting_materials_list';

export interface ItemCraftingMaterialListProps {
  craftingList: MaterialsType[];
  itemCraftingMap: Map<string, ItemListType>;
}
