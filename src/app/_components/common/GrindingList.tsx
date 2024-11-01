"use client";
import GrindingItem from "./GrindingItem";
import { NewEquipmentType } from "@/app/_type/equipmentType";
import { usePreviewStore } from "@/app/_store/previewStore";
import { useEffect } from "react";

interface GrindingProps {
  item: NewEquipmentType;
}

const GrindingList = ({ item }: GrindingProps) => {
  const setIncreaseStat = usePreviewStore((state) => state.setIncreaseStat);
  const setDecreaseStat = usePreviewStore((state) => state.setDecreaseStat);
  const setMin = usePreviewStore((state) => state.setMin);
  const setMax = usePreviewStore((state) => state.setMax);
  const setLimit2Zero = usePreviewStore((state) => state.setLimit2Zero);

  const newTuning = item.item_option.tuning_stat?.map((stat, _, arr) => {
    if (stat.stat_name === "해제 2") {
      const limit1 = arr.find((s) => s.stat_name === "해제");
      const isLimitTrue = limit1?.stat_max_value === limit1?.stat_value;
      return {
        ...stat,
        isView: isLimitTrue,
      };
    } else {
      return { ...stat, isView: true };
    }
  });

  const limit1 = newTuning?.find((stat) => stat.stat_name === "해제");

  useEffect(() => {
    if (limit1?.stat_value !== limit1?.stat_max_value) {
      setLimit2Zero(item.item_equipment_slot_name);
    }
  }, [
    limit1?.stat_value,
    limit1?.stat_max_value,
    item.item_equipment_slot_name,
    setLimit2Zero,
  ]);

  return (
    <div className="flex w-full flex-col gap-4">
      {newTuning?.map((stat) => (
        <GrindingItem
          key={stat.stat_name}
          onIncrease={() =>
            setIncreaseStat(item.item_equipment_slot_name, stat.stat_name)
          }
          onDecrease={() =>
            setDecreaseStat(item.item_equipment_slot_name, stat.stat_name)
          }
          onMin={() => setMin(item.item_equipment_slot_name, stat.stat_name)}
          onMax={() => setMax(item.item_equipment_slot_name, stat.stat_name)}
          {...stat}
        />
      ))}
    </div>
  );
};

export default GrindingList;
