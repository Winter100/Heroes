import { useEquipmentFilterStore } from '@/app/_store/equipmentFilterStore';
import { ItemGridDisplayProps } from '../../types';
import { CachGrid, EquipmentGrid } from './grid';

const ItemGridDisplay = ({ bag, cach }: ItemGridDisplayProps) => {
  const filterValue = useEquipmentFilterStore((state) => state.filter);

  if (filterValue === '장비') return <EquipmentGrid items={bag} />;
  return <CachGrid items={cach} filterValue={filterValue} />;
};

export default ItemGridDisplay;
