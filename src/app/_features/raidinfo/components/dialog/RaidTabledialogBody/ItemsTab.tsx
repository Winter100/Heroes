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
import Image from 'next/image';
import { getImageByName } from '@/app/_utils/getImageByName';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
import { getEnchantItemByName } from '../../../utils/getEnchantItemByName';
import ItemTooltipByType from '@/app/_components/tooltip/ItemTooltipByType';
import { Drop_items } from '../../../types';

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
                  <Image
                    title={drop.item_name}
                    alt="item"
                    src={
                      drop.item_filter !== '인챈트'
                        ? getImageByName(drop.item_name)
                        : getEnchantImage(
                            getEnchantItemByName(drop.item_name)?.rank || '',
                            getEnchantItemByName(drop.item_name)
                              ?.upgreadeType || ''
                          )
                    }
                    width={20}
                    height={20}
                  />

                  <div className="flex flex-col">
                    <div className="text-start">{drop.item_name}</div>
                    {drop.item_description && (
                      <div className="flex flex-col items-center text-[11px]">
                        {drop.item_description?.map((item) => (
                          <div className="w-full text-start" key={item}>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
