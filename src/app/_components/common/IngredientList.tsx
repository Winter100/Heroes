import { NewEquipmentType } from '@/app/_type/equipmentType';
import IngredientItem from './IngredientItem';
import { useAbilityStore } from '@/app/_store/abilityStore';
import clsx from 'clsx';
import { getNeedMaterials } from '@/app/_features/preview/utils/getNeedMaterials';

interface IngredientListProps {
  item: NewEquipmentType;
  className?: string;
}

const IngredientList = ({ item, className }: IngredientListProps) => {
  const ability = useAbilityStore((state) => state.ability);
  const needMaterials = getNeedMaterials(item, ability);

  return (
    <div
      className={clsx(
        'grid w-full grid-cols-2 items-start justify-items-center gap-2 md:grid-cols-3',
        className
      )}
    >
      {needMaterials?.map((item) => (
        <IngredientItem key={item.name} {...item} />
      ))}
    </div>
  );
};

export default IngredientList;
