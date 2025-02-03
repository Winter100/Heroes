import {
  ComponentProps,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Tbody from "../table/Tbody";
import Thead from "../table/Thead";
import { useEnchantTable } from "@/app/_hooks/useEnchantTable/useEnchantTable";
import { mergeEnchantData } from "./utils/mergeEnchantData";
import { sortedEnchantData } from "./utils/sortedEnchantData";
import {
  EnchantStoreType,
  useSelectEnchantStore,
} from "@/app/_store/selectEnchantStore";
import TrItem from "./TrItem";
import { useEnchantFilterStore } from "@/app/_store/enchantFilterStore";
import DontSearch from "./DontSearch";

interface EnchantRankTableProps extends ComponentProps<"table"> {
  enchantData: {
    upgreadeType: string;
    rank: string;
    name: string;
    drop_item_list: string[];
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
}

type EnchantData = {
  rank: string;
  name: string;
  average_price: number;
  max_price: number;
  min_price: number;
};

const EnchantRankTable = memo(({ enchantData }: EnchantRankTableProps) => {
  const { selecteEnchant, setEnchant, resetSelectEnchant } =
    useSelectEnchantStore((state) => ({
      setEnchant: state.setEnchant,
      selecteEnchant: state.enchant,
      resetSelectEnchant: state.resetSelectEnchant,
    }));

  const { dropRaidOrItemName, enchantFilterName } = useEnchantFilterStore(
    (state) => ({
      dropRaidOrItemName: state.dropRaidOrItemName,
      enchantFilterName: state.enchantFilterName,
    }),
  );

  const { mergedEnchantPriceList, isLoading } = useEnchantTable();
  const [sortKey, setSortKey] = useState<keyof EnchantData>("rank");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const prevSelectedNameRef = useRef(selecteEnchant?.name);

  const handleSort = useCallback(
    (key: keyof EnchantData) => {
      setSortOrder((prevOrder) =>
        sortKey === key ? (prevOrder === "asc" ? "desc" : "asc") : "asc",
      );
      setSortKey(key);
    },
    [sortKey],
  );

  const enchantDataWithPrice = useMemo(
    () => mergeEnchantData(enchantData, mergedEnchantPriceList),
    [enchantData, mergedEnchantPriceList],
  );

  const sortedData = sortedEnchantData(
    enchantDataWithPrice as any,
    sortKey,
    sortOrder,
  );

  // 로딩전 미리 클릭 시 데이터 보여주고
  // 로딩 완료되면 가격 업데이트로 인한 리 랜더링
  useEffect(() => {
    if (!isLoading && selecteEnchant?.name) {
      const hasDataChanged =
        prevSelectedNameRef.current === selecteEnchant.name;

      if (!hasDataChanged) {
        const updatedEnchant = sortedData.find(
          (e) => e?.name === selecteEnchant.name,
        );

        if (
          updatedEnchant &&
          updatedEnchant.average_price !== selecteEnchant.average_price
        ) {
          setEnchant(updatedEnchant as EnchantStoreType);
        }
      }
      prevSelectedNameRef.current = selecteEnchant.name;
    }
  }, [isLoading, selecteEnchant, sortedData, setEnchant]);

  const filteredData = sortedData.filter((enchant) => {
    if (enchantFilterName) {
      const searchChars = Array.from(enchantFilterName);
      const nameMatches = searchChars.every((char) =>
        enchant.name.includes(char),
      );
      if (!nameMatches) return false;
    }

    if (dropRaidOrItemName === "all") {
      return true;
    }

    const hasMatchingItems = sortedData.some((enchant) =>
      enchant.drop_item_list.includes(dropRaidOrItemName || ""),
    );

    if (!hasMatchingItems) {
      return true;
    }

    return enchant.drop_item_list.includes(dropRaidOrItemName || "");
  });

  return (
    <table className="w-full table-fixed overflow-scroll font-sans">
      <Thead
        sortKey={sortKey}
        sortOrder={sortOrder}
        handleSort={handleSort}
        rank={<span>랭크</span>}
        name={<span>인챈트</span>}
        avgPrice={<span>평균 거래가</span>}
        maxminPrice={<span>최대/최소 거래가</span>}
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
