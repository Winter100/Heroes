'use client';
import { item_crafting_materials_list } from '@/app/_constant/items/item_crafting_materials_list';
import { useMaterialsStore } from '../store/materialsStore';
import CraftingItem from './crafting/CraftingItem';

const CraftingItemList = () => {
  const setMaterials = useMaterialsStore((state) => state.setMaterials);
  const materials = useMaterialsStore((state) => state.materials);
  const filter = useMaterialsStore((state) => state.filter);

  return (
    <ul className="flex flex-col gap-1">
      {item_crafting_materials_list
        .filter(
          (crafting) =>
            crafting.item_category === filter &&
            !crafting.item_name.includes('+15 오르나')
        )
        .map((mat) => (
          <li key={mat?.item_name}>
            <CraftingItem
              setMaterials={setMaterials}
              materials={mat.item_materials}
              category={mat.item_category}
              isSelect={materials === mat.item_name}
              item_name={mat?.item_name}
              filter={filter}
            />
          </li>
        ))}
    </ul>
  );
};

export default CraftingItemList;
