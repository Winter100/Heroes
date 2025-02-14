import { memo } from "react";
import Tbody from "../table/Tbody";
import Thead from "../table/Thead";
import TrItem from "./TrItem";
import DontSearch from "./DontSearch";
import { EnchantRankTableProps } from "@/app/_type/enchantType";
import { useEnchantRankTable } from "./hooks/useEnchantRankTable";

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
          <DontSearch />
        )}
      </Tbody>
    </table>
  );
});

export default EnchantRankTable;

EnchantRankTable.displayName = "EnchantRankTable";
