import { EquipmentType } from "@/app/_type/equipmentType";
import { getSpecificTitle } from "./getSpecificTitle";
import { oneGrinding } from "@/app/_constant/grinding";

export const getNewTuning = (item: EquipmentType) => {
  const item_title = getSpecificTitle(item?.item_name);
  const item_slot = item?.item_equipment_slot_name;

  const grinding = oneGrinding
    .find((item) => item?.title?.includes(item_title))
    ?.item.find((item) => item?.item_slot?.includes(item_slot));

  const tuning_stat = grinding?.item_value.map((stat) => {
    const tuning_stat = item?.item_option?.tuning_stat;
    const findStat = tuning_stat?.find((s) => s.stat_name === stat.stat_name);

    if (findStat) {
      return {
        ...stat,
        ...findStat,
        stat_min_value: findStat.stat_value ?? "0",
      };
    } else {
      return {
        ...stat,
        stat_value: "0",
        stat_min_value: "0",
      };
    }
  });

  return tuning_stat;
};
