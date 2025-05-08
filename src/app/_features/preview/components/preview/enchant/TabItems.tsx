import EnchantImage from '@/app/_components/common/enchant/EnchantImage';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
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
                <div className="relative flex flex-col items-start justify-center">
                  <EnchantImage
                    size={45}
                    src={getEnchantImage(enchant.rank, upgreadeType)}
                    alt="E"
                  />
                  <div
                    className={cn(
                      'absolute -left-2 -top-2 h-3.5 w-3.5 rounded-full text-center text-[9px] font-bold text-muted/70',
                      Number(enchant.rank) <= 6
                        ? 'bg-yellow-500'
                        : 'bg-purple-500'
                    )}
                  >
                    {enchant.rank}
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-xs">
                          <div className="font-bold">{enchant.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {enchant.description && (
                    <div className="flex items-center gap-1 text-[10px]">
                      <div className="text-gray-400">{enchant.description}</div>
                    </div>
                  )}
                  <div>
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
// import EnchantImage from '@/app/_components/common/enchant/EnchantImage';
// import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
// import { Badge } from '@/components/ui/badge';
// import { cn } from '@/lib/utils';
// import { getEnchantAvgPrice } from '@/app/_components/enchant/utils/getEnchantAvgPrice';
// import { usePreviewStore } from '@/app/_store/previewStore';
// import Loading from '@/app/_components/common/Loading';
// import { TabItemsProps } from '../../../types';

// const TabItems = ({
//   data,
//   upgreadeType,
//   slot,
//   selectedHandler,
//   enchantPriceList,
//   enchantPriceLoading,
//   selectedValue,
// }: TabItemsProps) => {
//   const setTotalPrice = usePreviewStore((state) => state.setTotalPrice);

//   const onClick = (
//     enchantName: string,
//     effects: { stat_name: string; stat_value: string }[]
//   ) => {
//     selectedHandler(enchantName, effects);
//     setTotalPrice({
//       upgreadeType,
//       slot,
//       stat_name: enchantName,
//       price: getEnchantAvgPrice({
//         upgreadeType,
//         enchantPriceList,
//         enchantName,
//       })?.avgPrice,
//     });
//   };

//   return (
//     <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
//       {data?.map((item) =>
//         item?.items.map((enchant) => (
//           <div
//             onClick={() => onClick(enchant.name, enchant.stat_value)}
//             key={enchant.name}
//             className={cn(
//               'rounded-md border border-muted/10 bg-background p-2 hover:animate-boundUpDown hover:cursor-pointer',
//               selectedValue === enchant.name && 'border-blue-300'
//             )}
//           >
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-2">
//                 <div className="relative flex w-10 flex-col items-start justify-center">
//                   <EnchantImage
//                     size={28}
//                     src={getEnchantImage(enchant.rank, upgreadeType)}
//                     alt="E"
//                   />
//                   <div className="absolute -left-2 -top-2 h-3.5 w-3.5 rounded-full bg-zinc-700 text-center text-[9px]">
//                     {enchant.rank}
//                   </div>

//                   {/* <Badge className="p-1 text-[10px]" variant="outline">
//                     {enchant.rank}
//                   </Badge> */}
//                 </div>
//                 <div className="flex w-full flex-col">
//                   <div className="flex items-center gap-2">
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2">
//                         <div className="flex items-center gap-1 text-xs">
//                           {/* <Badge variant="outline">{enchant.rank}</Badge> */}
//                           <div className="font-bold">{enchant.name}</div>
//                         </div>
//                         {/* <div>
//                           <div className="w-full text-[10px] text-yellow-400">
//                             {enchantPriceLoading ? (
//                               <div className="w-4">
//                                 <Loading size="3" />
//                               </div>
//                             ) : (
//                               getEnchantAvgPrice({
//                                 upgreadeType,
//                                 enchantPriceList,
//                                 enchantName: enchant.name,
//                               })?.avgPrice.toLocaleString()
//                             )}
//                           </div>
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="w-full text-[10px] text-yellow-400">
//                       {enchantPriceLoading ? (
//                         <div className="w-4">
//                           <Loading size="3" />
//                         </div>
//                       ) : (
//                         getEnchantAvgPrice({
//                           upgreadeType,
//                           enchantPriceList,
//                           enchantName: enchant.name,
//                         })?.avgPrice.toLocaleString()
//                       )}
//                     </div>
//                   </div>
//                   {/* {enchant.description && (
//                     <div className="text-[9px] text-gray-400">
//                       {enchant.description}
//                     </div>
//                   )} */}
//                 </div>
//               </div>

//               <div className="gap-1 text-xs">
//                 {enchant.description && (
//                   <div className="flex items-center gap-1">
//                     <div className="text-gray-400">• {enchant.description}</div>
//                   </div>
//                 )}
//                 {enchant.stat_value.map((effect) => (
//                   <div
//                     key={effect.stat_name}
//                     className="flex items-center gap-1"
//                   >
//                     <div className="text-gray-400">• {effect.stat_name}</div>
//                     <div
//                       className={cn(
//                         'text-blue-300',
//                         effect.stat_value.includes('-') && 'text-red-300'
//                       )}
//                     >
//                       {effect.stat_value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default TabItems;
