import clsx from 'clsx';
import { memo } from 'react';
import { CraftingSelectBtnProps } from '../../types';
import Item from '@/app/_components/common/item/Item';

const CraftingSelectBtn = memo(
  ({ isSelect, onClick, itemName, itemRating }: CraftingSelectBtnProps) => {
    return (
      <div
        className={clsx(
          'h-full w-full flex-col items-start justify-center hover:bg-zinc-800'
        )}
      >
        <button
          className={clsx('h-full w-full text-start', isSelect && 'text-white')}
          onClick={onClick}
        >
          {isSelect ? (
            <Item.Title type={itemRating}>{itemName}</Item.Title>
          ) : (
            <span>{itemName}</span>
          )}
        </button>
      </div>
    );
  }
);

export default CraftingSelectBtn;

CraftingSelectBtn.displayName = 'CraftingSelectBtn';
