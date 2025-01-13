import { EnchantPrice } from "@/app/_type/enchantPriceType";
import EnchantItem from "../../enchant/EnchantItem";

interface EnchantContentProps {
  upgreadeType: string;
  enchantPriceList: EnchantPrice[];
  slot: string;
  enchantList: {
    rank: string;
    stat_name: string;
    description: string;
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  }[];
  selectedHandler: (
    enchantName: string,
    enchantDescription: {
      stat_name: string;
      stat_value: string;
    }[],
  ) => void;
  isLoading: boolean;
  selectedValue: string;
}
const EnchantContent = ({
  enchantList,
  selectedHandler,
  upgreadeType,
  enchantPriceList,
  slot,
  isLoading,
  selectedValue,
}: EnchantContentProps) => {
  return (
    <>
      <ul className="my-2 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {enchantList?.map((item, i) => (
          <li
            onClick={() => selectedHandler(item?.stat_name, item?.stat_value)}
            className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
            key={item.stat_name + i}
          >
            <EnchantItem
              slot={slot}
              upgreadeType={upgreadeType}
              enchantPriceList={enchantPriceList}
              isLoading={isLoading}
              isSelected={selectedValue === item.stat_name}
              {...item}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default EnchantContent;
