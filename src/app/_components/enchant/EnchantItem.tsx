import EnchantImageAndTitle from "./EnchantImageAndTitle";
import EnchantDescription from "./EnchantDescription";
import EnchantPrice from "./EnchantPrice";

import { usePreviewStore } from "@/app/_store/previewStore";
import { getEnchantImage } from "./utils/getEnchantImage";
import { getEnchantAvgPrice } from "./utils/getEnchantAvgPrice";

import Column from "../layout/Column";
import { EnchantItemProps } from "@/app/_type/enchantType";

const EnchantItem = ({
  slot,
  rank,
  stat_name: enchantName,
  description: enchantDescription,
  stat_value: enchantEffects,
  isSelected = false,
  enchantPriceLoading,
  upgreadeType,
  enchantPriceList,
  selectedHandler,
}: EnchantItemProps) => {
  const setTotalPrice = usePreviewStore((state) => state.setTotalPrice);

  const src = getEnchantImage(rank, upgreadeType);
  const avgPrice = getEnchantAvgPrice(
    upgreadeType,
    enchantPriceList,
    enchantName,
  );

  const onClick = () => {
    selectedHandler(enchantName, enchantEffects);
    setTotalPrice({
      upgreadeType,
      slot,
      stat_name: enchantName,
      price: avgPrice,
    });
  };
  // 더블클릭 기능 추가하기?
  return (
    <Column
      onClick={onClick}
      // onDoubleClick={() => setOpenModal(false)}
      className={`${isSelected ? "text-blue-300" : "text-zinc-400 hover:text-gray-200"} h-full w-full gap-1 rounded-lg bg-zinc-800 p-1 font-sans text-xs`}
    >
      <EnchantImageAndTitle
        src={src}
        rank={rank}
        enchantName={enchantName}
        enchantDescription={enchantDescription}
      />
      <EnchantDescription enchantEffects={enchantEffects} />
      <EnchantPrice
        avgPrice={avgPrice}
        enchantPriceLoading={enchantPriceLoading}
      />
    </Column>
  );
};

export default EnchantItem;
