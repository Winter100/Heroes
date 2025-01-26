import { EnchantContentProps } from "@/app/_type/enchantType";
import EnchantItem from "../../enchant/EnchantItem";

const EnchantContent = ({
  enchantList,
  selectedHandler,
  upgreadeType,
  enchantPriceList,
  slot,
  enchantPriceLoading,
  selectedValue,
}: EnchantContentProps) => {
  return (
    <>
      <ul className="my-2 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {enchantList?.map((item, i) => (
          <li
            className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
            key={item.name + i}
          >
            <EnchantItem
              slot={slot}
              upgreadeType={upgreadeType}
              enchantPriceList={enchantPriceList}
              enchantPriceLoading={enchantPriceLoading}
              isSelected={selectedValue === item.name}
              selectedHandler={selectedHandler}
              {...item}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default EnchantContent;
