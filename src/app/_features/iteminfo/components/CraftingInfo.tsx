'use client';
import { useMaterialsStore } from '../store/materialsStore';
import {
  CraftingFilterBtnList,
  CraftingItemList,
  MaterialsCrafting,
} from '@/app/_features/iteminfo';

export interface CraftingProps {
  filterValue: string;
  setFilter: (filter: string) => void;
}

const CraftingInfo = () => {
  const {
    filter,
    setFilter,
    itemName,
    setItemName,
    category,
    setCount,
    count,
  } = useMaterialsStore();
  return (
    <div className="mx-auto h-full w-full">
      <CraftingFilterBtnList filterValue={filter} setFilter={setFilter} />
      <div className="mt-2 flex w-full flex-1 flex-col gap-2 rounded-md border p-2 md:flex-row">
        <div className="flex w-full md:max-w-lg">
          <CraftingItemList
            filter={filter}
            itemName={itemName}
            setItemName={setItemName}
          />
        </div>
        <div className="flex w-full">
          <MaterialsCrafting
            category={category}
            itemName={itemName}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
    </div>
  );
};

export default CraftingInfo;
