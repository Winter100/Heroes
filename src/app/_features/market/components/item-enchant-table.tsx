import Enchant from '@/app/_components/common/enchant/Enchant';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import Loading from '@/app/_components/common/Loading';
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
    <Table className="w-full min-w-[720px] table-fixed border-collapse text-sm">
      <TableCaption></TableCaption>
      <TableHeader className="sticky top-0 z-10 bg-zinc-900">
        <TableRow>
          <TableHead
            className="w-[15%] cursor-pointer select-none text-center hover:text-white"
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
            onClick={() => handleSort('min_price')}
          >
            최소가{renderSortIndicator('min_price')}
          </TableHead>
          <TableHead
            className="w-[15%] cursor-pointer select-none text-center hover:text-white"
            onClick={() => handleSort('max_price')}
          >
            최대가{renderSortIndicator('max_price')}
          </TableHead>
          <TableHead className="w-[30%] cursor-pointer select-none text-center hover:text-white">
            부위
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs">
        {enchants.map((item) => {
          return (
            <TableRow
              key={item.name}
              className="relative h-14 cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
            >
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
                    <div className="flex items-center gap-2 px-2">
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
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 font-medium ${
                    affix[item?.affix as keyof typeof affix] === '접두'
                      ? 'bg-primary/15 text-primary'
                      : 'bg-purple-600/30 text-foreground'
                  }`}
                >
                  {affix[item?.affix as keyof typeof affix] ?? ''}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    item?.average_price?.toLocaleString()
                  )}
                </span>
              </TableCell>
              <TableCell className="text-center">
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
              </TableCell>
              <TableCell className="text-center">
                <span className="flex items-center justify-center gap-1 text-red-500">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {item?.max_price && <RxTriangleUp />}
                      {item?.max_price?.toLocaleString()}
                    </>
                  )}
                </span>
              </TableCell>
              <TableCell className="items-center">
                <div className="flex flex-wrap items-center gap-2">
                  {getUniqueBaseStrings(item.slot?.map((e) => e.name) ?? [])
                    .sort((a, b) => a.localeCompare(b))
                    .map((slot) => {
                      return (
                        <span
                          key={slot}
                          className="shrink-0 rounded-sm bg-zinc-800/70 px-2 py-0.5"
                        >
                          {slot}
                        </span>
                      );
                    })}
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ItemEnchantTable;

const affix = {
  ['PREFIX']: '접두',
  ['SUFFIX']: '접미',
};
