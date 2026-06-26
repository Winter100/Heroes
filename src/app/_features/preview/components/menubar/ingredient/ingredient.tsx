'use client';

import { NewEquipmentType } from '@/app/_type/equipmentType';
import { useIngredient } from '@/app/_hooks';
import ImageIcon from '@/app/_components/common/image/Image-Icon';

const Ingredient = ({ items }: { items: NewEquipmentType[] }) => {
  const materialList = useIngredient(items);

  return (
    <div className="grid w-full grid-cols-2 items-start justify-items-center gap-2 rounded-md bg-background p-2 sm:grid-cols-3">
      {materialList?.map((item) => (
        <div
          key={item.name}
          className={`${item.isZeroValue ? 'opacity-40' : 'text-white'} flex w-full flex-col items-center justify-center gap-2 text-xs hover:cursor-default`}
        >
          <div className="flex items-center justify-center">{item.name}</div>
          <div className="flex w-full flex-row items-center gap-2 rounded-lg border border-muted p-0.5">
            <ImageIcon
              className="h-4 w-4"
              src={item.src ?? ''}
              alt={item.name}
            />
            <p className="w-full">{item.value.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ingredient;
