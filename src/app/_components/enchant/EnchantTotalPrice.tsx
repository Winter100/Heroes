import { usePreviewStore } from "@/app/_store/previewStore";
import EnchantPrice from "../common/enchant/EnchantPrice";

const EnchantTotalPrice = () => {
  const totalPriceItem = usePreviewStore((state) => state.totalPriceItem);
  const sumAvg = totalPriceItem?.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <EnchantPrice
      label="예상 골드 :"
      falseLabel=""
      avgPrice={sumAvg}
      enchantPriceLoading={false}
    />
  );
};

export default EnchantTotalPrice;
