import { bagList, cachList } from '@/app/_utils/preview/bagList';
import { getNewTuning } from '@/app/_utils/preview/getNewTuning';
import { Item_equipment } from '@/app/_type/equipmentType';

export const bagFilter = (data: Item_equipment | undefined) => {
  const filterCach =
    data?.item_equipment?.filter((i) => i.item_equipment_page === 'Cash') ?? [];

  const filterBag =
    data?.item_equipment?.filter((i) => i.item_equipment_page === 'Bag') ?? [];

  const bag = bagList(filterBag).map((item) => {
    const newTuning = getNewTuning(item);
    return {
      ...item,
      item_option: { ...item.item_option, tuning_stat: newTuning ?? null },
    };
  });

  const cach = cachList(filterCach);

  return { bag, cach };
};
