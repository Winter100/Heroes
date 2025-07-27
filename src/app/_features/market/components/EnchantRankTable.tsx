'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { memo } from 'react';
import { useEnchantRankTable } from '../hooks/useEnchantRankTable';
import { EnchantRankTableProps } from '../types';
import Enchant404 from './Enchant404';
import { getEnchantImage } from '@/app/_utils/enchant/utils/getEnchantImage';
import { EnchantStoreType } from '@/app/_type/enchantStoreType';
import { cn } from '@/lib/utils';
import Column from '@/app/_components/layout/Column';
import Row from '@/app/_components/layout/Row';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import Loading from '@/app/_components/common/Loading';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { EnchantTableKeyEnum } from '@/app/_type/enchantType';
import { Book, BookA, CircleDollarSign, HandCoins } from 'lucide-react';

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

const EnchantRankTable = memo(
  ({ enchantData, className }: EnchantRankTableProps) => {
    const {
      filteredData,
      handleSort,
      resetSelectEnchant,
      sortKey,
      sortOrder,
      isLoading,
      selecteEnchant,
      setEnchant,
    } = useEnchantRankTable({ enchantData });

    const onClick = (isSelected: boolean, enchant: EnchantStoreType) => {
      if (isSelected) return resetSelectEnchant();
      setEnchant(enchant);
    };

    return (
      <div className="">
        <Table className={cn('relative w-full', className)}>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="sticky top-0 z-20 h-10 cursor-pointer bg-black text-xs text-inherit hover:bg-black md:text-sm">
              {TableHeadData.map((head) => (
                <TableHead
                  onClick={() => handleSort(head.value)}
                  key={head.value}
                  className={cn('', head.className)}
                >
                  <div
                    className={cn(
                      `flex flex-row items-center justify-center gap-0.5 text-xs hover:animate-boundUpDown`,
                      sortKey === head.value &&
                        (sortOrder === 'desc'
                          ? 'text-blue-500'
                          : 'text-red-500')
                    )}
                  >
                    <div>
                      <head.icon size={15} />
                    </div>
                    <div className="hidden lg:block">{head.name}</div>
                    {sortKey === head.value && (
                      <div>
                        {sortOrder === 'desc' ? (
                          <RxTriangleDown />
                        ) : (
                          <RxTriangleUp />
                        )}
                      </div>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            {filteredData.length >= 1 ? (
              filteredData?.map((enchant) => (
                <TableRow
                  onClick={() =>
                    onClick(selecteEnchant?.name === enchant?.name, enchant)
                  }
                  key={enchant.name}
                  className={cn(
                    'h-[49px] cursor-pointer border-b',
                    selecteEnchant?.name === enchant?.name &&
                      'animate-boundUpDown text-blue-300'
                  )}
                >
                  <TableCell className="text-center">{enchant.rank}</TableCell>
                  <TableCell>
                    <Row className="h-full items-center gap-0.5 px-0 sm:gap-2 sm:px-2">
                      <ImageIcon
                        className="h-4 w-4 md:h-6 md:w-6"
                        imageClassName="rounded-sm"
                        src={getEnchantImage(
                          enchant?.rank,
                          enchant?.upgreadeType
                        )}
                        alt={enchant?.name}
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
                          title={enchant.average_price.toLocaleString()}
                          className="flex items-center justify-center overflow-hidden truncate whitespace-nowrap"
                        >
                          {enchant.average_price.toLocaleString()}
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
                          {enchant.max_price.toLocaleString()}
                        </span>
                        <span className="flex flex-row items-center justify-center gap-1 text-xs text-blue-500 opacity-80">
                          <RxTriangleDown />
                          {enchant.min_price.toLocaleString()}
                        </span>
                      </Column>
                    ) : (
                      <span className="flex items-center justify-center text-xs">
                        -
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Enchant404 />
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
);

export default EnchantRankTable;

EnchantRankTable.displayName = 'EnchantRankTable';
