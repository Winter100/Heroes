'use client';
import GrindingSummaryDialog from './grinding-summary-dialog';
import { NewEquipmentType } from '@/app/_type/equipmentType';

const GrindingSummaryContainer = ({
  items,
  ocid,
}: {
  items: NewEquipmentType[];
  ocid: string;
}) => {
  const grindingItems = items?.filter(
    (item) => item.item_option.tuning_stat?.length
  );

  return <GrindingSummaryDialog items={grindingItems || []} ocid={ocid} />;
};

export default GrindingSummaryContainer;
