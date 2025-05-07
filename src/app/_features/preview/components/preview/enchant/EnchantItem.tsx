import EnchantDescription from '@/app/_components/common/enchant/EnchantDescription';
import EnchantEffects from '@/app/_components/common/enchant/EnchantEffects';
import EnchantImage from '@/app/_components/common/enchant/EnchantImage';
import EnchantPrice from '@/app/_components/common/enchant/EnchantPrice';
import EnchantRank from '@/app/_components/common/enchant/EnchantRank';
import EnchantTitle from '@/app/_components/common/enchant/EnchantTitle';
import { getEnchantAvgPrice } from '@/app/_components/enchant/utils/getEnchantAvgPrice';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
import Column from '@/app/_components/layout/Column';
import Row from '@/app/_components/layout/Row';
import { usePreviewStore } from '@/app/_store/previewStore';
import { EnchantItemProps } from '@/app/_type/enchantType';

const EnchantItem = ({
  slot,
  rank,
  name: enchantName,
  description: enchantDescription,
  stat_value: enchantEffects,
  isSelected = false,
  enchantPriceLoading,
  upgreadeType,
  enchantPriceList,
  selectedHandler,
}: EnchantItemProps) => {
  const src = getEnchantImage(rank, upgreadeType);
  const avgPrice = getEnchantAvgPrice({
    upgreadeType,
    enchantPriceList,
    enchantName,
  })?.avgPrice;
  const setTotalPrice = usePreviewStore((state) => state.setTotalPrice);

  const onClick = () => {
    selectedHandler(enchantName, enchantEffects);
    setTotalPrice({
      upgreadeType,
      slot,
      stat_name: enchantName,
      price: avgPrice,
    });
  };

  return (
    <button className="w-full" onClick={onClick}>
      <Column
        className={`${isSelected ? 'text-blue-300' : 'text-zinc-400 hover:text-gray-200'} h-full w-full gap-1 rounded-lg bg-zinc-800 p-1 font-sans text-xs`}
      >
        <Row className="w-full">
          <EnchantImage src={src} alt={enchantName} />
          <Column className="w-full">
            <Row className="flex h-full w-full items-center justify-center gap-2">
              <EnchantRank enchantRank={rank} />
              <EnchantTitle enchantName={enchantName} />
            </Row>
            <EnchantDescription
              className="text-xs"
              enchantDescription={enchantDescription}
            />
          </Column>
        </Row>
        <EnchantEffects
          className="min-h-24 bg-black/20"
          enchantEffects={enchantEffects}
        />
        <EnchantPrice
          avgPrice={avgPrice}
          enchantPriceLoading={enchantPriceLoading}
        />
      </Column>
    </button>
  );
};

export default EnchantItem;
