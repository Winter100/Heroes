'use client';
import { RaidListType } from '@/app/_type/raidType';
import GrindingSummaryDialog from './grinding-summary-dialog';
import { NewEquipmentType } from '@/app/_type/equipmentType';

const GrindingSummaryContainer = ({
  items,
  ocid,
  raid,
}: {
  items: NewEquipmentType[];
  ocid: string;
  raid: RaidListType[];
}) => {
  const grindingItems = items?.filter(
    (item) => item.item_option.tuning_stat?.length
  );

  return (
    <GrindingSummaryDialog
      items={grindingItems || []}
      ocid={ocid}
      raid={raid}
    />
  );
};

export default GrindingSummaryContainer;
