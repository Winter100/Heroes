'use client';
import { memo } from 'react';
import Thead from '@/app/_components/table/Thead';
import TrItem from '@/app/_components/enchant/TrItem';
import { useEnchantRankTable } from '../hooks/useEnchantRankTable';
import { EnchantRankTableProps } from '../types';
import Enchant404 from './Enchant404';
import Tbody from '@/app/_components/table/Tbody';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
import { EnchantStoreType } from '@/app/_type/enchantStoreType';
import { cn } from '@/lib/utils';

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
      <div className={cn('', className)}>
        <table className="w-full table-fixed overflow-scroll font-sans">
          <Thead
            sortKey={sortKey}
            sortOrder={sortOrder}
            handleSort={handleSort}
            rank="랭크"
            name="인챈트"
            avgPrice="평균 거래가"
            maxminPrice="최대/최소 거래가"
          />
          <Tbody className="text-xs sm:text-sm">
            {filteredData.length >= 1 ? (
              filteredData?.map((enchant) => (
                <TrItem
                  key={enchant?.name}
                  onClick={() =>
                    onClick(selecteEnchant?.name === enchant?.name, enchant)
                  }
                  isSelected={selecteEnchant?.name === enchant?.name}
                  src={getEnchantImage(enchant?.rank, enchant?.upgreadeType)}
                  enchant={enchant}
                  isLoading={isLoading}
                  length={filteredData.length}
                />
              ))
            ) : (
              <Enchant404 />
            )}
          </Tbody>
        </table>
      </div>
    );
  }
);

export default EnchantRankTable;

EnchantRankTable.displayName = 'EnchantRankTable';
