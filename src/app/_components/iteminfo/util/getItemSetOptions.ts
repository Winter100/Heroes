import {
  accessoriesSetList,
  itemSetList,
} from "./../../../_constant/items/item_set_bonus/item_set_bonus";
import { item_set_bonus } from "@/app/_constant/items/item_set_bonus/item_set_bonus";
import { ItemInfoQuipmentProps } from "@/app/_type/equipmentType";

export const getItemSetOptions = (
  info: ItemInfoQuipmentProps[],
  set: string,
) => {
  const setName = item_set_bonus.find(
    (item) => item.item_name === set,
  )?.item_name;
  const list = item_set_bonus
    .find((item) => item.item_name === set)
    ?.item_set_list.filter((item) => item?.name);
  const slotList = item_set_bonus.find(
    (item) => item.item_name === set,
  )?.item_set_slot;
  const bonus = item_set_bonus.find(
    (item) => item.item_name === set,
  )?.item_set_bonus;

  const sameSlotItems = info.filter((item) =>
    slotList?.includes(item.item_equipment_slot_name),
  );

  const totalSetLength = slotList?.length;
  if (itemSetList.includes(set)) {
    const setItemList = sameSlotItems.filter((item) =>
      item.item_name.includes(set),
    );

    const filterList = list?.filter((item) =>
      setItemList.some((i) => i?.item_equipment_slot_name === item?.slot),
    );

    const usedSetLength = setItemList?.length;

    const haveSetList = filterList?.map((item) => {
      return item?.name || "";
    });

    return { setName, bonus, usedSetLength, haveSetList, totalSetLength, list };
  } else if (accessoriesSetList.includes(set)) {
    const setArr = new Set(sameSlotItems.map((item) => item.item_name));
    const haveSetList = list
      ?.filter((item) => setArr.has(item?.name || ""))
      .map((i) => {
        return i?.name || "";
      });

    const usedSetLength = haveSetList?.length;

    return { setName, bonus, usedSetLength, haveSetList, totalSetLength, list };
  }

  return {};
};
