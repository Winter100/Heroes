"use client";

import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";
import Loading from "../common/Loading";
import PreviewItem from "./PreviewItem";
import { useEnchant } from "@/app/_hooks/useEnchant/useEnchant";
import AvgPrice from "./AvgPrice";
import { useStats } from "@/app/_hooks/useStats/useStats";

const PreviewBody = ({ name }: { name: string }) => {
  const { bag, isLoading } = useEquipment(name);
  const { isLoading: StatsLoading } = useStats(name);

  const { data: enchantList } = useEnchant(name);

  if (isLoading || StatsLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg p-2">
        <Loading width="10" height="10" />
      </div>
    );
  }

  return (
    <ul className="flex h-full w-full flex-col rounded-lg p-2">
      {bag?.map((item) => (
        <li className="flex-1" key={item?.item_equipment_slot_name}>
          <PreviewItem
            enchant={enchantList ?? []}
            item={item}
            slot={item?.item_equipment_slot_name}
          />
        </li>
      ))}
      <AvgPrice name={name} />
    </ul>
  );
};

export default PreviewBody;
