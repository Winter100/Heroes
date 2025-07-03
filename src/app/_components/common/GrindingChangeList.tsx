'use client';
import { useEffect } from 'react';
import GrindingItem from './GrindingItem';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import { usePreviewStore } from '@/app/_store/previewStore';
import clsx from 'clsx';
import { convertNewTuning, isLimitEvery } from '@/app/_utils/convertNewTuning';

interface GrindingProps {
  item: NewEquipmentType;
  className?: string;
}

const GrindingChangeList = ({ item, className }: GrindingProps) => {
  const setIncreaseStat = usePreviewStore((state) => state.setIncreaseStat);
  const setDecreaseStat = usePreviewStore((state) => state.setDecreaseStat);
  const setMin = usePreviewStore((state) => state.setMin);
  const setMax = usePreviewStore((state) => state.setMax);

  const setLimitZero = usePreviewStore((state) => state.setLimitZero);

  // convert 작업을 통해 연마 버튼 활성화 여부 결정
  const newTuning = convertNewTuning(item);

  const limitFinished1 = isLimitEvery(
    item,
    (stat) => !stat.stat_name.includes('해제')
  );
  const limitFinished2 = isLimitEvery(
    item,
    (stat) => stat.stat_name !== '해제 2' && stat.stat_name !== '해제 3'
  );

  {
    /* 에리우 장비의 해제2단계는 해제1만 완료되어있으면 가능함 */
  }
  const eliuLimitFinished2 = isLimitEvery(
    item,
    (stat) => stat.stat_name === '해제'
  );

  const limitFinished3 = isLimitEvery(
    item,
    (stat) => stat.stat_name !== '해제 3'
  );

  useEffect(() => {
    if (item.item_name.includes('오르나') && !limitFinished1) {
      setLimitZero(item.item_equipment_slot_name, '해제');
    }
  }, [
    item.item_equipment_slot_name,
    item.item_name,
    limitFinished1,
    setLimitZero,
  ]);

  useEffect(() => {
    if (item.item_name.includes('와드네') && !limitFinished2) {
      setLimitZero(item.item_equipment_slot_name, '해제 2');
    }
  }, [
    item.item_equipment_slot_name,
    item.item_name,
    limitFinished2,
    setLimitZero,
  ]);

  useEffect(() => {
    if (item.item_name.includes('에리우') && !eliuLimitFinished2) {
      setLimitZero(item.item_equipment_slot_name, '해제 2');
    }
  }, [
    item.item_equipment_slot_name,
    item.item_name,
    eliuLimitFinished2,
    setLimitZero,
  ]);

  useEffect(() => {
    if (item.item_name.includes('에리우') && !limitFinished3) {
      setLimitZero(item.item_equipment_slot_name, '해제 3');
    }
  }, [
    item.item_equipment_slot_name,
    item.item_name,
    limitFinished3,
    setLimitZero,
  ]);

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
