import { EquipmentType } from "@/app/_type/equipmentType";
import { getSpecificTitle } from "./getSpecificTitle";
import { oneGrinding } from "@/app/_constant/grinding";

interface UpdateStats {
  stat_min_value: string;
  stat_name: string;
  stat_value: string;
  stat_one_value: string;
  stat_max_value: string;
  one_ingredient: {
    stat_name: string;
    stat_value: string;
  }[];
}
[];
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

  const newTuning = updateStats(tuning_stat as UpdateStats[]);

  return newTuning;
};

const updateStats = (tuningStats: UpdateStats[]) => {
  const limit1 = tuningStats?.find((stat) => stat.stat_name === "해제");
  const limit2 = tuningStats?.find((stat) => stat.stat_name === "해제 2");

  if (
    limit1 &&
    limit2 &&
    parseInt(limit1.stat_value) > parseInt(limit1.stat_max_value)
  ) {
    const limit2Value =
      Number(limit1.stat_value) - Number(limit1.stat_max_value);

    limit1.stat_min_value = limit1.stat_max_value;
    limit1.stat_value = limit1.stat_max_value;

    limit2.stat_min_value = limit2Value.toString();
    limit2.stat_value = limit2Value.toString();
  }

  return tuningStats;
};
