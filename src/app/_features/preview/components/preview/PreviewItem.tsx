'use client';

import { PrviewItemProps } from '@/app/_type/previewType';
import { memo } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Row from '@/app/_components/layout/Row';
import { getItemInfoOptions } from '../../utils/getItemInfoOptions';
import BeforeAndAfter from '@/app/_components/common/beforeAndAfter/BeforeAndAfter';
import ItemPrviewImage from '@/app/_components/iteminfo/info/ItemPrviewImage';
import ItemTooltip from '@/app/_components/tooltip/ItemTooltip';
import PreviewModal from '@/app/_components/preview/menu/PreviewModal';
import OneGrindingDialog from './grinding';

const PreviewItem = memo(({ item, slot }: PrviewItemProps) => {
  const itemName = {
    name: item.item_name ?? '',
    level: item?.item_option?.enhancement_level ?? '',
  };

  const {
    usableInfusionList,
    usablePrefixEnchantList,
    usableSuffixEnchantList,
    existingPrefixEnchant,
    existingSuffixEnchant,
    existingInfuion,
  } = getItemInfoOptions(item);

  const {
    beforeInfusionName,
    beforeInfusionValue,
    beforePrefixEnchantName,
    beforeSuffixEnchantName,
  } = item?.before;

  return (
    <Row className="flex h-full w-full items-center gap-2 text-sm">
      <BeforeAndAfter className="w-12 justify-start sm:justify-center">
        {/* <BeforeAndAfter.Title>아이템 이름</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            <Popover>
              <PopoverTrigger className="h-full w-full">
                <div className="flex h-full flex-col items-center justify-center">
                  <ItemPrviewImage
                    materials={item.item_name}
                    slot={item.item_equipment_slot_name}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="dark w-[350px] p-1">
                <ItemTooltip
                  isItemInfo={true}
                  itemName={item.item_name}
                  {...item}
                />
              </PopoverContent>
            </Popover>
          </BeforeAndAfter.Before>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
      <BeforeAndAfter className="w-5">
        {/* <BeforeAndAfter.Title>연마</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {item.item_option.tuning_stat !== null ? (
              <div className="flex items-center justify-center">
                <OneGrindingDialog item={item} />
              </div>
            ) : null}
          </BeforeAndAfter.Before>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        {/* <BeforeAndAfter.Title>정령</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content className="flex-col gap-0.5 sm:flex-row sm:gap-0">
          <BeforeAndAfter.Before className="flex items-center justify-center text-[10px] sm:text-xs">
            {`${beforeInfusionName} ${beforeInfusionValue}`}
          </BeforeAndAfter.Before>

          <BeforeAndAfter.After className="text-blue-300">
            {usableInfusionList?.length >= 1 && (
              <PreviewModal
                itemName={itemName}
                existing={existingInfuion}
                upgreadeType="infusions"
                slot={slot}
                usableItemList={usableInfusionList}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Content className="flex-col gap-0.5 sm:flex-row sm:gap-0">
          <BeforeAndAfter.Before className="flex items-center justify-center text-[10px] sm:text-xs">
            {beforePrefixEnchantName || ''}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After className="text-blue-300">
            {usablePrefixEnchantList?.length >= 1 && (
              <PreviewModal
                itemName={itemName}
                existing={existingPrefixEnchant}
                upgreadeType="prefix"
                slot={slot}
                usableItemList={usablePrefixEnchantList}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Content className="flex-col gap-0.5 sm:flex-row sm:gap-0">
          <BeforeAndAfter.Before className="flex items-center justify-center text-[10px] sm:text-xs">
            {beforeSuffixEnchantName || ''}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After className="text-blue-300">
            {usableSuffixEnchantList?.length >= 1 && (
              <PreviewModal
                itemName={itemName}
                existing={existingSuffixEnchant}
                upgreadeType="suffix"
                slot={slot}
                usableItemList={usableSuffixEnchantList}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
    </Row>
  );
});

export default PreviewItem;

PreviewItem.displayName = 'PreviewItem';
// 'use client';

// import { PrviewItemProps } from '@/app/_type/previewType';
// import { memo } from 'react';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import Row from '@/app/_components/layout/Row';
// import { getItemInfoOptions } from '../../utils/getItemInfoOptions';
// import BeforeAndAfter from '@/app/_components/common/beforeAndAfter/BeforeAndAfter';
// import ItemPrviewImage from '@/app/_components/iteminfo/info/ItemPrviewImage';
// import ItemTooltip from '@/app/_components/tooltip/ItemTooltip';
// import PreviewModal from '@/app/_components/preview/menu/PreviewModal';
// import OneGrindingDialog from './grinding';

// const PreviewItem = memo(({ item, slot }: PrviewItemProps) => {
//   const itemName = {
//     name: item.item_name ?? '',
//     level: item?.item_option?.enhancement_level ?? '',
//   };

//   const {
//     usableInfusionList,
//     usablePrefixEnchantList,
//     usableSuffixEnchantList,
//     existingPrefixEnchant,
//     existingSuffixEnchant,
//     existingInfuion,
//   } = getItemInfoOptions(item);

//   const {
//     beforeInfusionName,
//     beforeInfusionValue,
//     beforePrefixEnchantName,
//     beforeSuffixEnchantName,
//   } = item?.before;

//   return (
//     <Row className="flex h-full w-full items-center gap-2 text-sm">
//       <BeforeAndAfter className="w-12 justify-start sm:justify-center">
//         {/* <BeforeAndAfter.Title>아이템 이름</BeforeAndAfter.Title> */}
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex items-center justify-center">
//             <Popover>
//               <PopoverTrigger className="h-full w-full">
//                 <div className="flex h-full flex-col items-center justify-center">
//                   <ItemPrviewImage
//                     materials={item.item_name}
//                     slot={item.item_equipment_slot_name}
//                   />
//                 </div>
//               </PopoverTrigger>
//               <PopoverContent className="dark w-[350px] p-1">
//                 <ItemTooltip
//                   isItemInfo={true}
//                   itemName={item.item_name}
//                   {...item}
//                 />
//               </PopoverContent>
//             </Popover>
//           </BeforeAndAfter.Before>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>
//       <BeforeAndAfter className="w-5">
//         {/* <BeforeAndAfter.Title>연마</BeforeAndAfter.Title> */}
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex items-center justify-center">
//             {item.item_option.tuning_stat !== null ? (
//               <div className="flex items-center justify-center">
//                 <OneGrindingDialog item={item} />
//               </div>
//             ) : null}
//           </BeforeAndAfter.Before>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>

//       <BeforeAndAfter className="flex-1">
//         {/* <BeforeAndAfter.Title>정령</BeforeAndAfter.Title> */}
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex  items-center justify-center text-[10px] sm:text-xs">
//             {beforeInfusionName + beforeInfusionValue}
//           </BeforeAndAfter.Before>

//           <BeforeAndAfter.After className=" text-blue-300">
//             {usableInfusionList?.length >= 1 && (
//               <PreviewModal
//                 itemName={itemName}
//                 existing={existingInfuion}
//                 upgreadeType="infusions"
//                 slot={slot}
//                 usableItemList={usableInfusionList}
//               />
//             )}
//           </BeforeAndAfter.After>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>

//       <BeforeAndAfter className="flex-1">
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex  items-center justify-center text-[10px] sm:text-xs">
//             {beforePrefixEnchantName || ''}
//           </BeforeAndAfter.Before>
//           <BeforeAndAfter.After className="text-blue-300">
//             {usablePrefixEnchantList?.length >= 1 && (
//               <PreviewModal
//                 itemName={itemName}
//                 existing={existingPrefixEnchant}
//                 upgreadeType="prefix"
//                 slot={slot}
//                 usableItemList={usablePrefixEnchantList}
//               />
//             )}
//           </BeforeAndAfter.After>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>

//       <BeforeAndAfter className="flex-1">
//         <BeforeAndAfter.Content>
//           <BeforeAndAfter.Before className="flex  items-center justify-center text-[10px] sm:text-xs">
//             {beforeSuffixEnchantName || ''}
//           </BeforeAndAfter.Before>
//           <BeforeAndAfter.After className=" text-blue-300">
//             {usableSuffixEnchantList?.length >= 1 && (
//               <PreviewModal
//                 itemName={itemName}
//                 existing={existingSuffixEnchant}
//                 upgreadeType="suffix"
//                 slot={slot}
//                 usableItemList={usableSuffixEnchantList}
//               />
//             )}
//           </BeforeAndAfter.After>
//         </BeforeAndAfter.Content>
//       </BeforeAndAfter>
//     </Row>
//   );
// });

// export default PreviewItem;

// PreviewItem.displayName = 'PreviewItem';
