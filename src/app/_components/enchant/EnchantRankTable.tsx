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
import Tr from "../table/Tr";
import Td from "../table/Td";

import { getEnchantImage } from "./utils/getEnchantImage";
import Row from "../layout/Row";
import clsx from "clsx";
import EnchantImage from "../common/enchant/EnchantImage";
import EnchantTitle from "../common/enchant/EnchantTitle";
import Column from "../layout/Column";

import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";
import { useEnchantTable } from "@/app/_hooks/useEnchantTable/useEnchantTable";
import Loading from "../common/Loading";
import { mergeEnchantData } from "./utils/mergeEnchantData";
import { sortedEnchantData } from "./utils/sortedEnchantData";
import {
  EnchantStoreType,
  useSelectEnchantStore,
} from "@/app/_store/selectEnchantStore";

interface EnchantRankTableProps extends ComponentProps<"table"> {
  enchantData: {
    upgreadeType: string;
    rank: string;
    name: string;
    drop_item_list?: string[];
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
  const setEnchant = useSelectEnchantStore((state) => state.setEnchant);
  const selecteEnchant = useSelectEnchantStore((state) => state.enchant);
  const { mergedEnchantPriceList, isLoading } = useEnchantTable();
  const [sortKey, setSortKey] = useState<keyof EnchantData>("rank");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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

  const prevSelectedNameRef = useRef(selecteEnchant?.name);

  const sortedData = sortedEnchantData(
    enchantDataWithPrice as any,
    sortKey,
    sortOrder,
  );

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

  return (
    <table className="w-full table-fixed overflow-scroll font-sans">
      <Thead
        sortKey={sortKey}
        sortOrder={sortOrder}
        handleSort={handleSort}
        ranking="랭크"
        name="인챈트"
        avgPrice="평균 거래가"
        maxminPrice="최대/최소 거래가"
      />
      <Tbody className="text-sm">
        {sortedData?.map((enchant) => (
          <Tr
            onClick={() => setEnchant(enchant as EnchantStoreType)}
            className={clsx(
              "transform cursor-pointer border-t border-borderColor text-center transition-all duration-300 ease-in-out hover:bg-backgroundOne",
              selecteEnchant?.name === enchant?.name
                ? "animate-boundUpDown text-blue-300"
                : "",
            )}
            key={enchant?.name}
          >
            <Td className="px-0">{enchant?.rank || ""}</Td>
            <Td className="px-0">
              <Row className="h-full items-center gap-2 px-2">
                <EnchantImage
                  alt={enchant?.name}
                  src={getEnchantImage(enchant?.rank, enchant?.upgreadeType)}
                />
                <EnchantTitle
                  enchantName={enchant?.name}
                  isViewScrollTitle={false}
                />
              </Row>
            </Td>

            <Td className="px-0">
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {enchant?.average_price !== 0 ? (
                    <Column>
                      <span>{enchant?.average_price?.toLocaleString()}</span>
                    </Column>
                  ) : (
                    <span className="text-xs">-</span>
                  )}
                </>
              )}
            </Td>

            <Td className="px-0">
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {enchant?.average_price !== 0 ? (
                    <Column>
                      <span className="flex flex-row items-center justify-center gap-1 text-xs text-red-500 opacity-80">
                        <RxTriangleUp />
                        {enchant?.max_price?.toLocaleString()}
                      </span>
                      <span className="flex flex-row items-center justify-center gap-1 text-xs text-blue-500 opacity-80">
                        <RxTriangleDown />
                        {enchant?.min_price?.toLocaleString()}
                      </span>
                    </Column>
                  ) : (
                    <span className="text-xs">-</span>
                  )}
                </>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </table>
  );
});

export default EnchantRankTable;

EnchantRankTable.displayName = "EnchantRankTable";
