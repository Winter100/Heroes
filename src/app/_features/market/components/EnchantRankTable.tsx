'use client';
import { memo } from 'react';
import Thead from '@/app/_components/table/Thead';
import TrItem from '@/app/_components/enchant/TrItem';
import { useEnchantRankTable } from '../hooks/useEnchantRankTable';
import { EnchantRankTableProps } from '../types';
import Enchant404 from './Enchant404';
import Tbody from '@/app/_components/table/Tbody';

const EnchantRankTable = memo(({ enchantData }: EnchantRankTableProps) => {
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

  return (
    <div className="fixed-scrollbar h-96 overflow-x-hidden overflow-y-scroll md:h-[730px]">
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
                enchant={enchant}
                isSelected={selecteEnchant?.name === enchant?.name}
                setEnchant={setEnchant}
                isLoading={isLoading}
                length={filteredData.length}
                resetSelectEnchant={resetSelectEnchant}
              />
            ))
          ) : (
            <Enchant404 />
          )}
        </Tbody>
      </table>
    </div>
  );
});

export default EnchantRankTable;

EnchantRankTable.displayName = 'EnchantRankTable';
