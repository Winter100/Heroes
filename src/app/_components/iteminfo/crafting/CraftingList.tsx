'use client';
import { useMaterialsStore } from '@/app/_store/materialsStore';
import { item_crafting_materials_list } from '@/app/_constant/items/item_crafting_materials_list';
import CraftingItem from './CraftingItem';

const CraftingList = () => {
  const setMaterials = useMaterialsStore((state) => state.setMaterials);
  const materials = useMaterialsStore((state) => state.materials);
  const filter = useMaterialsStore((state) => state.filter);

  return (
    <ul className="flex flex-col gap-1">
      {item_crafting_materials_list
        .filter((crafting) => crafting.item_category === filter)
        .filter((item) => !item.item_name.includes('+15 오르나'))
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

export default CraftingList;
