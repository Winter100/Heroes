import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ItemTooltipByType from '@/app/_components/tooltip/ItemTooltipByType';
import { Drop_items } from '../../../types';
import PopoverTriggerImage from './PopoverTriggerImage';

const ItemsTab = ({ items }: { items: Drop_items[] }) => {
  return (
    <Table className="caption-top">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="text-xs sm:text-sm">
          <TableHead className="text-center">아이템명</TableHead>
          <TableHead className="text-center">부스트 적용</TableHead>
          <TableHead className="text-center">부스트 한정</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((drop) => (
          <TableRow
            className="text-xs hover:text-white sm:text-sm"
            key={drop.item_name}
          >
            <TableCell>
              <Popover>
                <PopoverTrigger className="flex w-full items-center gap-2">
                  <PopoverTriggerImage drop={drop} />
                </PopoverTrigger>
                <PopoverContent className="dark w-[370px] p-1">
                  <ItemTooltipByType
                    itemName={drop.item_name}
                    category={drop.item_filter}
                  />
                </PopoverContent>
              </Popover>
            </TableCell>
            <TableCell className="text-center">
              {drop.core_boost_apply && `O`}
            </TableCell>
            <TableCell className="text-center">
              {drop.core_boost_drop && `O`}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemsTab;
