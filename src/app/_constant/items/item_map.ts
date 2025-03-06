import { item_crafting_materials_list } from "./item_crafting_materials_list";
import { item_info } from "./item_info";
import { materials_info } from "./materials_info";

export const materialsMap = new Map(
  materials_info?.map((item) => [item.item_name, item]),
);
export const itemCraftingMap = new Map(
  item_crafting_materials_list?.map((item) => [item.item_name, item]),
);
export const itemInfoMap = new Map(item_info?.map((item) => [item.name, item]));
