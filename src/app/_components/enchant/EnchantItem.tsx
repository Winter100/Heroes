import { usePreviewStore } from '@/app/_store/previewStore';
import { getEnchantImage } from './utils/getEnchantImage';
import { getEnchantAvgPrice } from './utils/getEnchantAvgPrice';

import Column from '../layout/Column';
import { EnchantItemProps } from '@/app/_type/enchantType';
import EnchantEffects from '../common/enchant/EnchantEffects';
import EnchantPrice from '../common/enchant/EnchantPrice';
import EnchantRank from '../common/enchant/EnchantRank';
import EnchantTitle from '../common/enchant/EnchantTitle';
import EnchantImage from '../common/enchant/EnchantImage';
import EnchantDescription from '../common/enchant/EnchantDescription';
import Row from '../layout/Row';

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
  const setTotalPrice = usePreviewStore((state) => state.setTotalPrice);

  const src = getEnchantImage(rank, upgreadeType);
  const avgPrice = getEnchantAvgPrice({
    upgreadeType,
    enchantPriceList,
    enchantName,
  })?.avgPrice;

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
    <button
      className="w-full"
      onClick={onClick}
      // onDoubleClick={() => setOpenModal(false)}
    >
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
