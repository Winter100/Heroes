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

interface EnchantRankTableProps extends ComponentProps<"table"> {
  enchantData: {
    upgreadeType: string;
    price: number;
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
    price: number;
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
}

const EnchantRankTable = ({
  enchantData,
  handleClick,
  selectedEnchant,
}: EnchantRankTableProps) => {
  return (
    <table className="w-full table-fixed overflow-scroll font-sans">
      <Thead ranking="순위" rank="랭크" name="인챈트" price="가격" />
      <Tbody className="text-sm">
        {enchantData.map((enchant) => (
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
            <Td className="px-0">{enchant?.rank}</Td>
            <Td className="px-0">
              <Row className="h-full items-center gap-2 px-0">
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
            <Td className="px-0">{enchant?.price?.toLocaleString()}</Td>
          </Tr>
        ))}
      </Tbody>
    </table>
  );
};

export default EnchantRankTable;
