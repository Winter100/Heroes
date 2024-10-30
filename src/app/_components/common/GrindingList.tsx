"use client";
import GrindingItem from "./GrindingItem";
import { NewEquipmentType } from "@/app/_type/equipmentType";
import { usePreviewStore } from "@/app/_store/previewStore";

interface GrindingProps {
  item: NewEquipmentType;
}

const GrindingList = ({ item }: GrindingProps) => {
  const setIncreaseStat = usePreviewStore((state) => state.setIncreaseStat);
  const setDecreaseStat = usePreviewStore((state) => state.setDecreaseStat);
  const setMin = usePreviewStore((state) => state.setMin);
  const setMax = usePreviewStore((state) => state.setMax);
  return (
    <>
      {item.item_option.tuning_stat?.map((stat) => (
        <GrindingItem
          key={stat.stat_name}
          stat_name={stat.stat_name}
          percentage={Math.floor(
            (Number(stat.stat_value) / Number(stat.stat_max_value)) * 100,
          )}
          value={stat.stat_value}
          maxValue={stat.stat_max_value}
          onIncrease={() =>
            setIncreaseStat(item.item_equipment_slot_name, stat.stat_name)
          }
          onDecrease={() =>
            setDecreaseStat(item.item_equipment_slot_name, stat.stat_name)
          }
          onMin={() => setMin(item.item_equipment_slot_name, stat.stat_name)}
          onMax={() => setMax(item.item_equipment_slot_name, stat.stat_name)}
        />
      ))}
    </>
  );
};

export default GrindingList;
