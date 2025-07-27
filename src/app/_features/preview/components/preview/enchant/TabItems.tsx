import { cn } from '@/lib/utils';
import { getEnchantAvgPrice } from '@/app/_utils/enchant/utils/getEnchantAvgPrice';
import { usePreviewStore } from '@/app/_store/previewStore';
import { TabItemsProps } from '../../../types';
import TabEnchantDescription from './TabEnchantDescription';
import TabEnchantPrice from './TabEnchantPrice';
import { AnimatePresence, motion } from 'framer-motion';
import { ITEM_ANIMATION } from '../../../constant';
import EnchantEffects from '@/app/_components/common/enchant/EnchantEffects';
import { getEnchantImage } from '@/app/_utils/enchant/utils/getEnchantImage';
import { ENCHANT_DESTRUCTION_RANK } from '@/app/_constant/enchant';
import ImageIcon from '@/app/_components/common/image/Image-Icon';

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
      <AnimatePresence>
        {data?.map((item) =>
          item?.items.map((enchant) => (
            <motion.div
              onClick={() => onClick(enchant.name, enchant.stat_value)}
              className={cn(
                'rounded-md border border-muted/10 bg-background p-2 hover:animate-boundUpDown hover:cursor-pointer',
                selectedValue === enchant.name && 'border-blue-300'
              )}
              key={enchant.name}
              variants={ITEM_ANIMATION}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <ImageIcon
                      className="h-8 w-8"
                      src={getEnchantImage(enchant?.rank, upgreadeType)}
                      alt="e"
                    />
                    <div
                      className={cn(
                        'absolute -left-2 -top-2 h-3.5 w-3.5 rounded-full text-center text-[9px] text-gray-900',
                        Number(enchant?.rank) <= ENCHANT_DESTRUCTION_RANK
                          ? 'bg-yellow-500'
                          : 'bg-purple-500'
                      )}
                    >
                      {enchant?.rank}
                    </div>
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="text-xs font-bold">{enchant.name}</div>
                    {enchant.description && (
                      <TabEnchantDescription
                        description={enchant.description}
                      />
                    )}
                    <TabEnchantPrice
                      enchantPriceLoading={enchantPriceLoading}
                      upgreadeType={upgreadeType}
                      enchantPriceList={enchantPriceList}
                      enchant={enchant.name}
                    />
                  </div>
                </div>

                <div className="gap-1 p-1 text-xs">
                  <EnchantEffects effects={enchant.stat_value} />
                </div>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default TabItems;
