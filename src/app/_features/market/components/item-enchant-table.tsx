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
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { MergedEnchantType } from '../enchant-fiter-list';
import SuspenseContainer from '../../iteminfo/components/suspense-container';

interface ItemEnchantTableProps {
  enchants: MergedEnchantType[];
  isLoading: boolean;
  handleSort: (key: string) => void;
  renderSortIndicator: (key: string) => string | null;
}

const ItemEnchantTable = ({
  enchants,
  isLoading,
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
              className="hidden w-[10%] cursor-pointer select-none text-center hover:text-white md:block"
              onClick={() => handleSort('rank')}
            >
              랭크{renderSortIndicator('rank')}
            </TableHead>
            <TableHead
              className="w-[20%] cursor-pointer select-none hover:text-white md:w-[15%]"
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
              className="w-[20%] cursor-pointer select-none text-center hover:text-white md:w-[15%]"
              onClick={() => handleSort('average_price')}
            >
              평균가{renderSortIndicator('average_price')}
            </TableHead>
            <TableHead
              className="w-[20%] cursor-pointer select-none text-center hover:text-white md:w-[15%]"
              onClick={() => handleSort('max_price')}
            >
              최대/최소가{renderSortIndicator('max_price')}
            </TableHead>
            <TableHead className="hidden text-center md:block md:w-[35%]">
              부위
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs md:text-balance">
          {enchants.map((item) => {
            return (
              <TableRow
                key={item.name}
                className="relative h-14 cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
              >
                <TableCell className="hidden text-center md:block">
                  {item.rank}
                </TableCell>
                <TableCell>
                  <SuspenseContainer
                    aria-label={item.name}
                    className="absolute inset-0"
                    path="/market/enchant"
                    link={item.name}
                  >
                    {null}
                  </SuspenseContainer>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="text-gray-400">
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
                        <strong className="flex items-center justify-center">
                          {item?.name}
                        </strong>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="w-[340px] rounded-md border bg-background text-gray-400">
                      <Enchant enchant={item} />
                    </TooltipContent>
                  </Tooltip>
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
                <TableCell className="hidden align-middle md:block">
                  <div className="flex flex-wrap items-center gap-1 px-1 py-2">
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
