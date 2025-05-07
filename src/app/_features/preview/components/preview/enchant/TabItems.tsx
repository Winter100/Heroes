import EnchantImage from '@/app/_components/common/enchant/EnchantImage';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { getEnchantAvgPrice } from '@/app/_components/enchant/utils/getEnchantAvgPrice';
import { usePreviewStore } from '@/app/_store/previewStore';
import Loading from '@/app/_components/common/Loading';
import { TabItemsProps } from '../../../types';

const TabItems = ({
  data,
  upgreadeType,
  slot,
  selectedHandler,
  enchantPriceList,
  enchantPriceLoading,
  selectedValue,
}: TabItemsProps) => {
  const setTotalPrice = usePreviewStore((state) => state.setTotalPrice);

  const onClick = (
    enchantName: string,
    effects: { stat_name: string; stat_value: string }[]
  ) => {
    selectedHandler(enchantName, effects);
    setTotalPrice({
      upgreadeType,
      slot,
      stat_name: enchantName,
      price: getEnchantAvgPrice({
        upgreadeType,
        enchantPriceList,
        enchantName,
      })?.avgPrice,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {data?.map((item) =>
        item?.items.map((enchant) => (
          <div
            onClick={() => onClick(enchant.name, enchant.stat_value)}
            key={enchant.name}
            className={cn(
              'rounded-md border border-muted/10 bg-background p-2 hover:animate-boundUpDown hover:cursor-pointer',
              selectedValue === enchant.name && 'border-blue-300'
            )}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex w-10 items-start justify-center">
                  <EnchantImage
                    size={28}
                    src={getEnchantImage(enchant.rank, upgreadeType)}
                    alt="E"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold">{enchant.name}</div>
                    <div>
                      <Badge variant="outline">{enchant.rank}</Badge>
                    </div>
                  </div>
                  <div className="w-full text-[10px] text-yellow-400">
                    {enchantPriceLoading ? (
                      <div className="w-4">
                        <Loading size="3" />
                      </div>
                    ) : (
                      getEnchantAvgPrice({
                        upgreadeType,
                        enchantPriceList,
                        enchantName: enchant.name,
                      })?.avgPrice.toLocaleString()
                    )}
                  </div>
                </div>
              </div>

              <div className="gap-1 text-xs">
                {enchant.stat_value.map((effect) => (
                  <div
                    key={effect.stat_name}
                    className="flex items-center gap-1"
                  >
                    <div className="text-gray-400">• {effect.stat_name}</div>
                    <div
                      className={cn(
                        'text-blue-300',
                        effect.stat_value.includes('-') && 'text-red-300'
                      )}
                    >
                      {effect.stat_value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TabItems;
