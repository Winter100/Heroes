import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ItemTooltipItem from './item-tooltip-item';
import { ItemRecipe } from '@/app/_type/itemType';

/**
 * Todo
 * 아이템 툴팁 컨테이너
 * - DB에서 온 데이터 형식을 넣으면 아이템 툴팁이 표시 될 것
 *
 */
const ItemTooltipContainer = ({
  children,
  itemRecipe,
}: {
  children: React.ReactNode;
  itemRecipe: ItemRecipe;
}) => {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger className="text-base text-gray-400">
        {children}
      </TooltipTrigger>
      <TooltipContent className="w-80 border bg-background">
        <ItemTooltipItem item={itemRecipe} />
      </TooltipContent>
    </Tooltip>
  );
};

export default ItemTooltipContainer;
