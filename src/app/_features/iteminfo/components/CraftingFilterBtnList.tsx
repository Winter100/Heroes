'use client';

import clsx from 'clsx';
import { useMaterialsStore } from '../store/materialsStore';
import { FILTER_VALUES } from '../constant';

const CraftingFilterBtnList = () => {
  const filterValue = useMaterialsStore((state) => state.filter);
  const setFilter = useMaterialsStore((state) => state.setFilter);
  return (
    <ul className="flex w-full gap-1 text-xs">
      {FILTER_VALUES.map((filter) => (
        <li key={filter.value}>
          <button
            onClick={() => setFilter(filter.value)}
            className={clsx(
              'rounded-sm border border-borderColor/50 p-1',
              filterValue === filter.value && 'text-blue-300'
            )}
          >
            {filter.value}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CraftingFilterBtnList;
