'use client';
import { useEffect } from 'react';
import GrindingItem from './GrindingItem';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import { usePreviewStore } from '@/app/_store/previewStore';
import clsx from 'clsx';
import {
  convertNewTuning,
  isLimit1Every,
  isLimit2Every,
} from '@/app/_utils/convertNewTuning';

interface GrindingProps {
  item: NewEquipmentType;
  className?: string;
}

const GrindingChangeList = ({ item, className }: GrindingProps) => {
  const setIncreaseStat = usePreviewStore((state) => state.setIncreaseStat);
  const setDecreaseStat = usePreviewStore((state) => state.setDecreaseStat);
  const setMin = usePreviewStore((state) => state.setMin);
  const setMax = usePreviewStore((state) => state.setMax);

  const setLimit1Zero = usePreviewStore((state) => state.setLimit1Zero);
  const setLimit2Zero = usePreviewStore((state) => state.setLimit2Zero);

  const newTuning = convertNewTuning(item);
  const isLimit1 = isLimit1Every(newTuning);
  const isLimit2 = isLimit2Every(item);

  useEffect(() => {
    if (!item.item_name.includes('와드네') && !isLimit1) {
      setLimit1Zero(item.item_equipment_slot_name);
    }
  }, [item.item_equipment_slot_name, item.item_name, isLimit1, setLimit1Zero]);

  useEffect(() => {
    if (!isLimit2) {
      setLimit2Zero(item.item_equipment_slot_name);
    }
  }, [item.item_equipment_slot_name, isLimit2, setLimit2Zero]);

  return (
    <div
      className={clsx(
        'flex w-full cursor-default flex-col gap-2 p-1 md:gap-4',
        className
      )}
    >
      {newTuning?.map((stat) => (
        <GrindingItem
          key={stat.stat_name}
          slot={item.item_equipment_slot_name}
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

export default GrindingChangeList;
