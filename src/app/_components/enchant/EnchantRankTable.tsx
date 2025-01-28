import { ComponentProps } from "react";
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

interface EnchantRankTableProps extends ComponentProps<"table"> {
  enchantData: {
    upgreadeType: string;
    date: string;
    price: {
      avgPrice: number;
      minPrice: number;
      maxPrice: number;
    };
    ranking: number;
    rank: string;
    name: string;
    drop_item_list?: string[];
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
  handleClick: (enchant: {
    upgreadeType: string;
    date: string;
    price: {
      avgPrice: number;
      minPrice: number;
      maxPrice: number;
    };
    ranking: number;
    rank: string;
    name: string;
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }) => void;
  selectedEnchant: string;
  inputValue: string;
}

const EnchantRankTable = ({
  enchantData,
  handleClick,
  selectedEnchant,
  inputValue,
}: EnchantRankTableProps) => {
  const filteredEnchantData = enchantData.filter((item) =>
    item.name
      .replace(/\s+/g, "")
      .toLowerCase()
      .includes(inputValue.replace(/\s+/g, "").toLowerCase()),
  );
  return (
    <table className="w-full table-fixed overflow-scroll font-sans">
      <Thead
        ranking="순위"
        name="인챈트"
        mPrice="평균 거래가"
        price="최대/최소 거래가"
      />
      <Tbody className="text-sm">
        {filteredEnchantData?.map((enchant) => (
          <Tr
            onClick={() => handleClick(enchant)}
            className={clsx(
              "transform cursor-pointer border-t border-borderColor text-center transition-all duration-300 ease-in-out hover:bg-backgroundOne",
              selectedEnchant === enchant?.name
                ? "animate-boundUpDown text-blue-300"
                : "",
            )}
            key={enchant?.name}
          >
            <Td className="px-0">{enchant?.ranking}</Td>
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
              {enchant?.price?.avgPrice !== 0 ? (
                <Column className="">
                  <span>{enchant?.price?.avgPrice?.toLocaleString()}</span>
                </Column>
              ) : (
                <span className="text-xs">-</span>
              )}
            </Td>

            <Td className="px-0">
              {enchant?.price?.avgPrice !== 0 ? (
                <Column>
                  <span className="flex flex-row items-center justify-center gap-1 text-xs text-red-500 opacity-80">
                    <RxTriangleUp />
                    {enchant?.price?.maxPrice?.toLocaleString()}
                  </span>
                  <span className="flex flex-row items-center justify-center gap-1 text-xs text-blue-500 opacity-80">
                    <RxTriangleDown />
                    {enchant?.price?.minPrice?.toLocaleString()}
                  </span>
                </Column>
              ) : (
                <span className="text-xs">-</span>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </table>
  );
};

export default EnchantRankTable;
