'use client';

import clsx from 'clsx';
import { CraftingProps } from './CraftingInfo';

const FILTER_VALUES = [
  { value: '장비' },
  { value: '소모품' },
  { value: '재료' },
];

const CraftingFilterBtnList = ({ filterValue, setFilter }: CraftingProps) => {
  return (
    <ul className="flex w-full gap-1 text-xs">
      {FILTER_VALUES?.map((filter) => (
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
