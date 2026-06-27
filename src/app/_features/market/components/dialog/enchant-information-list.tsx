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
  EnchantMergePriceType,
  EnchantTableKeyEnum,
} from '@/app/_type/enchantType';
import Row from '@/app/_components/layout/Row';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getEnchantImage } from '@/app/_utils/enchant';
import Loading from '@/app/_components/common/Loading';
import Column from '@/app/_components/layout/Column';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { Book, BookA, CircleDollarSign, HandCoins } from 'lucide-react';
import { cn } from '@/lib/utils';
import EnchantItemDialogContainer from './enchant-item-dialog-container';

const EnchantInformationList = ({
  enchants,
  isLoading,
}: {
  enchants: EnchantMergePriceType[];
  isLoading: boolean;
}) => {
  const sorted = enchants?.sort((a, b) => {
    return (b?.average_price ?? -Infinity) - (a?.average_price ?? -Infinity);
  });

  return (
    <Table className="relative w-full">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow className="sticky top-0 z-20 h-10 cursor-pointer text-xs md:text-sm">
          {TableHeadData?.map((head) => (
            <TableHead key={head.value}>
              <div className="flex items-center justify-center gap-2">
                <div>
                  <head.icon size={15} />
                </div>
                <div className="hidden lg:block">{head.name}</div>
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs">
        {sorted?.length >= 1 &&
          sorted?.map((enchant) => (
            <EnchantItemDialogContainer key={enchant.name} enchant={enchant}>
              <TableRow className={cn('h-[49px] cursor-pointer border-b')}>
                <TableCell className="text-center">{enchant.rank}</TableCell>
                <TableCell>
                  <Row className="h-full items-center gap-0.5 px-0 sm:gap-2 sm:px-2">
                    <ImageIcon
                      className="h-4 w-4 md:h-6 md:w-6"
                      imageClassName="rounded-sm"
                      src={getEnchantImage(
                        enchant?.rank.toString(),
                        enchant?.affix.toLowerCase().toString()
                      )}
                      alt={enchant?.name.toString()}
                    />
                    <div className="flex items-center justify-center">
                      {enchant?.name}
                    </div>
                  </Row>
                </TableCell>
                <TableCell>
                  {isLoading ? (
                    <Loading />
                  ) : enchant.average_price !== 0 ? (
                    <Column>
                      <span
                        title={enchant?.average_price?.toLocaleString()}
                        className="flex items-center justify-center overflow-hidden truncate whitespace-nowrap"
                      >
                        {enchant?.average_price?.toLocaleString()}
                      </span>
                    </Column>
                  ) : (
                    <span className="flex items-center justify-center text-xs">
                      -
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {isLoading ? (
                    <Loading />
                  ) : enchant.average_price !== 0 ? (
                    <Column>
                      <span className="flex flex-row items-center justify-center gap-1 text-xs text-red-500 opacity-80">
                        <RxTriangleUp />
                        {enchant.max_price?.toLocaleString()}
                      </span>
                      <span className="flex flex-row items-center justify-center gap-1 text-xs text-blue-500 opacity-80">
                        <RxTriangleDown />
                        {enchant.min_price?.toLocaleString()}
                      </span>
                    </Column>
                  ) : (
                    <span className="flex items-center justify-center text-xs">
                      -
                    </span>
                  )}
                </TableCell>
              </TableRow>
            </EnchantItemDialogContainer>
          ))}
      </TableBody>
    </Table>
  );
};

export default EnchantInformationList;

const TableHeadData = [
  {
    name: '랭크',
    value: EnchantTableKeyEnum.rank,
    icon: BookA,
    className: 'w-[12%] lg:w-[15%]',
  },
  {
    name: '인챈트',
    value: EnchantTableKeyEnum.name,
    icon: Book,
    className: 'w-[28%] lg:w-[30%]',
  },
  {
    name: '평균 거래가',
    value: EnchantTableKeyEnum.average_price,
    icon: HandCoins,
    className: 'w-[30%] lg:w-[25%]',
  },
  {
    name: '최대/최소 거래가',
    value: EnchantTableKeyEnum.max_price,
    icon: CircleDollarSign,
    className: 'w-[40%]',
  },
];
