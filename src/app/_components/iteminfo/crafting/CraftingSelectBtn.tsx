import clsx from 'clsx';
import Item from '../../common/item/Item';
import { Item_Rating } from '@/app/_type/infoInfoType';
import { memo } from 'react';

interface CraftingSelectBtnProps {
  isSelect: boolean;
  onClick: () => void;
  itemRating: Item_Rating;
  itemName: string;
  category: string;
}

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
