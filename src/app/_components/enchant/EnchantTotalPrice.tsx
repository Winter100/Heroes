import { usePreviewStore } from "@/app/_store/previewStore";
import EnchantPrice from "./EnchantPrice";

const EnchantTotalPrice = () => {
  const totalPriceItem = usePreviewStore((state) => state.totalPriceItem);
  const sumAvg = totalPriceItem?.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <EnchantPrice
      label="예상 가격 :"
      falseLabel="인챈트 평균 거래가의 합이 이곳에 표시됩니다"
      avgPrice={sumAvg}
      enchantPriceLoading={false}
    />
  );
};

export default EnchantTotalPrice;
