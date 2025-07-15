'use client';

import clsx from 'clsx';
import { FILTER_VALUES } from '../constant';
import { CraftingProps } from './CraftingInfo';

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
