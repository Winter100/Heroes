import Enchant from '@/app/_components/common/enchant/Enchant';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import ItemTag from '@/app/_components/common/item/item-tag';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { EnchantTableType } from '@/app/_type/enchantType';
import { getEnchantImage } from '@/app/_utils/enchant';
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

interface ItemEnchantTableProps {
  itemRecipe: EnchantTableType[];
  handleSelectItem: (item: string) => void;
}

const ItemEnchantTable = ({
  itemRecipe,
  handleSelectItem,
}: ItemEnchantTableProps) => {
  return (
    <RoundedContainer className="flex flex-col gap-4 bg-muted/70 p-0">
      <Table className="relative w-full table-fixed border-collapse">
        <TableCaption></TableCaption>
        <TableHeader className="sticky top-0 z-10 bg-zinc-950">
          <TableRow className="bg-muted-foreground/10">
            <TableHead className="w-[7%] text-center">번호</TableHead>
            <TableHead className="w-[7%] text-center">랭크</TableHead>
            <TableHead className="w-[16%]">아이템명</TableHead>
            <TableHead className="w-[10%] text-center">접사</TableHead>
            <TableHead className="w-[15%] text-center">평균가</TableHead>
            <TableHead className="w-[15%] text-center">최대/최소가</TableHead>
            <TableHead className="w-[30%] text-center">부위</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemRecipe
            .sort((a, b) => b.average_price - a.average_price)
            .map((item, i) => {
              return (
                <TableRow
                  key={item.name}
                  className="cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
                  onClick={() => handleSelectItem(item.name.toString())}
                >
                  <TableCell className="text-center font-medium">
                    {i + 1}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {item.rank}
                  </TableCell>
                  <TableCell>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger className="text-base text-gray-400">
                        <div className="flex items-center gap-2">
                          <ImageIcon
                            className="h-4 w-4 md:h-6 md:w-6"
                            imageClassName="rounded-sm"
                            src={getEnchantImage(
                              item?.rank.toString(),
                              item?.affix.toLowerCase().toString()
                            )}
                            alt={item?.name.toString()}
                          />
                          <div className="flex items-center justify-center">
                            {item?.name}
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="min-w-80 rounded-md border bg-background text-gray-400">
                        <Enchant enchant={item} />
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="text-center">
                    {affix[item?.affix as keyof typeof affix] ?? ''}
                  </TableCell>
                  <TableCell className="text-center">
                    {item?.average_price?.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="itemc flex flex-col gap-0.5">
                      <span className="flex items-center justify-center gap-1 text-red-500">
                        <RxTriangleUp />
                        {item?.max_price?.toLocaleString()}
                      </span>
                      <span className="flex items-center justify-center gap-1 text-blue-500">
                        <RxTriangleDown />
                        {item?.min_price?.toLocaleString()}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="flex flex-wrap items-center gap-1 text-center">
                    {item.slot
                      ?.sort((a, b) => a.localeCompare(b))
                      .map((tag, idx) => (
                        <ItemTag key={tag + idx}>{tag}</ItemTag>
                      ))}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </RoundedContainer>
  );
};

export default ItemEnchantTable;

export function getUniqueBaseStrings(inputArray: string[]): string[] {
  const suffixRegex = /\s*\([a-zA-Z]\)$/;

  const uniqueSet = new Set<string>(
    inputArray.map((str) => str.replace(suffixRegex, '').trim())
  );
  return Array.from(uniqueSet);
}

const affix = {
  ['PREFIX']: '접두',
  ['SUFFIX']: '접미',
};
