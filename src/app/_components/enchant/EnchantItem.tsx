
import EnchantImageAndTitle from "./EnchantImageAndTitle";
import EnchantDescription from "./EnchantDescription";
import EnchantPrice from "./EnchantPrice";

import { usePreviewStore } from "@/app/_store/previewStore";
import { getEnchantImage } from "./utils/getEnchantImage";
import { getEnchantAvgPrice } from "./utils/getEnchantAvgPrice";
import { EnchantPrice as EnchantPriceType } from "@/app/_type/enchantPriceType";
import Column from "../layout/Column";

interface EnchantItemProps {
  slot: string;
  rank: string;
  stat_name: string;
  description: string;
  stat_value: {
    stat_name: string;
    stat_value: string;
  }[];
  upgreadeType: string;
  enchantPriceList: EnchantPriceType[];
  isLoading: boolean;
  isSelected: boolean;
}

const EnchantItem = ({
  slot,
  rank,
  stat_name: enchantName,
  description: enchantDescription,
  stat_value: enchantEffects,
  isSelected = false,
  isLoading,
  upgreadeType,
  enchantPriceList,
}: EnchantItemProps) => {
  const setTotalPrice = usePreviewStore((state) => state.setTotalPrice);

  const src = getEnchantImage(rank, upgreadeType);
  const avgPrice = getEnchantAvgPrice(
    upgreadeType,
    enchantPriceList,
    enchantName,
  );

  const onClick = () => {
    setTotalPrice({
      previewName: upgreadeType,
      slot,
      stat_name: enchantName,
      price: avgPrice,
    });
  };
  // 더블클릭 기능 추가하기?
  return (
    <Column
      onClick={() => onClick()}
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
      <EnchantPrice avgPrice={avgPrice} isLoading={isLoading} />
    </Column>
  );
};

export default EnchantItem;
