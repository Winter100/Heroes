'use client';

import {
  EquipmentFilterValuesType,
  useEquipmentFilterStore,
} from '@/app/_store/equipmentFilterStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const filters: EquipmentFilterValuesType[] = ['장비', '아바타', '캐쉬'];

const ChracterItemFilter = () => {
  const filter = useEquipmentFilterStore((state) => state.filter);
  const setFilter = useEquipmentFilterStore((state) => state.setFilter);

  return (
    <div>
      <ul className="flex gap-2 pr-2">
        {filters.map((f) => (
          <li key={f}>
            <Button
              variant="ghost"
              className={cn('p-2', f === filter && 'bg-muted text-white')}
              size="sm"
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChracterItemFilter;
