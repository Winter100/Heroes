import Enchant from '@/app/_components/common/enchant/Enchant';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import ItemTag from '@/app/_components/common/item/item-tag';
import Loading from '@/app/_components/common/Loading';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { getEnchantImage, getUniqueBaseStrings } from '@/app/_utils/enchant';
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
import Link from 'next/link';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { MergedEnchantType } from '../enchant-fiter-list';

interface ItemEnchantTableProps {
  enchants: MergedEnchantType[];
  isLoading: boolean;
  handleSort: (key: string) => void;
  handleSelectItem: (item: string) => string;
  renderSortIndicator: (key: string) => string | null;
}

const ItemEnchantTable = ({
  enchants,
  isLoading,
  handleSelectItem,
  handleSort,
  renderSortIndicator,
}: ItemEnchantTableProps) => {
  return (
    <RoundedContainer className="flex flex-col gap-4 p-0">
      <Table className="relative w-full table-fixed border-collapse">
        <TableCaption></TableCaption>
        <TableHeader className="sticky top-0 z-10 bg-zinc-950">
          <TableRow className="bg-muted-foreground/10">
            <TableHead
              className="w-[10%] cursor-pointer select-none text-center hover:text-white"
              onClick={() => handleSort('rank')}
            >
              랭크{renderSortIndicator('rank')}
            </TableHead>
            <TableHead
              className="w-[15%] cursor-pointer select-none hover:text-white"
              onClick={() => handleSort('name')}
            >
              아이템명{renderSortIndicator('name')}
            </TableHead>
            <TableHead
              className="w-[10%] cursor-pointer select-none text-center hover:text-white"
              onClick={() => handleSort('affix')}
            >
              접사{renderSortIndicator('affix')}
            </TableHead>
            <TableHead
              className="w-[15%] cursor-pointer select-none text-center hover:text-white"
              onClick={() => handleSort('average_price')}
            >
              평균가{renderSortIndicator('average_price')}
            </TableHead>
            <TableHead
              className="w-[15%] cursor-pointer select-none text-center hover:text-white"
              onClick={() => handleSort('max_price')}
            >
              최대/최소가{renderSortIndicator('max_price')}
            </TableHead>
            <TableHead className="w-[35%] text-center">부위</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {enchants.map((item) => {
            return (
              <TableRow
                key={item.name}
                className="h-14 cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
              >
                <TableCell className="text-center font-medium">
                  {item.rank}
                </TableCell>
                <TableCell>
                  <Link href={handleSelectItem(item.name.toString())}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger className="text-base text-gray-400">
                        <div className="flex items-center gap-2">
                          <ImageIcon
                            className="h-4 w-4 shrink-0 md:h-6 md:w-6"
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
                      <TooltipContent className="w-[340px] rounded-md border bg-background text-gray-400">
                        <Enchant enchant={item} />
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  {affix[item?.affix as keyof typeof affix] ?? ''}
                </TableCell>
                <TableCell className="text-center">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    item?.average_price?.toLocaleString()
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <div className="itemc flex flex-col gap-0.5">
                    <span className="flex items-center justify-center gap-1 text-red-500">
                      {isLoading ? null : (
                        <>
                          {item?.max_price && <RxTriangleUp />}
                          {item?.max_price?.toLocaleString()}
                        </>
                      )}
                    </span>
                    <span className="flex items-center justify-center gap-1 text-blue-500">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <>
                          {item?.min_price && <RxTriangleDown />}
                          {item?.min_price?.toLocaleString()}
                        </>
                      )}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="align-middle">
                  <div className="flex flex-nowrap items-center gap-1 overflow-x-auto px-1 py-2">
                    {getUniqueBaseStrings(item.slot?.map((e) => e.name) ?? [])
                      .sort((a, b) => a.localeCompare(b))
                      .map((slot) => {
                        return (
                          <div key={slot} className="shrink-0">
                            <ItemTag>{slot}</ItemTag>
                          </div>
                        );
                      })}
                  </div>
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

const affix = {
  ['PREFIX']: '접두',
  ['SUFFIX']: '접미',
};
