'use client';
import { useUserEquipment } from '@/app/_hooks';
import GrindingSummaryDialog from './grinding-summary-dialog';

const GrindingSummaryContainer = ({ ocid }: { ocid: string }) => {
  const { data } = useUserEquipment(ocid);
  const grindingItems = data?.item_equipment.filter(
    (item) => item.item_option.tuning_stat?.length
  );

  return <GrindingSummaryDialog items={grindingItems || []} ocid={ocid} />;
};

export default GrindingSummaryContainer;
