"use client";

import BeforeAndAfter from "../common/beforeAndAfter/BeforeAndAfter";
import Row from "../layout/Row";
import { PrviewItemProps } from "@/app/_type/previewType";
import ItemTooltip from "../tooltip/ItemTooltip";
import PreviewModal from "../preview/menu/PreviewModal";
import { getItemInfoOptions } from "../iteminfo/util/getItemInfoOptions";
import TooltipImage from "../common/tooltip/TooltipImage";
import { getTooltipImageSrc } from "@/app/_utils/getTooltipImageSrc";
import OneGrindingDialog from "../dialog/OneGrindingDialog";
import { memo } from "react";

const PreviewItem = memo(({ item, slot }: PrviewItemProps) => {
  const itemName = {
    name: item.item_name ?? "",
    level: item?.item_option?.enhancement_level ?? "",
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

  const src = getTooltipImageSrc(item.item_name, slot);

  return (
    <Row className="flex h-full w-full items-center gap-2 text-sm">
      <BeforeAndAfter className="w-8 justify-start sm:w-28 sm:justify-center md:w-36 lg:w-40">
        {/* <BeforeAndAfter.Title>아이템 이름</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            <TooltipImage
              src={src}
              itemName={item.item_name}
              isRatingBorder={true}
            />
            <ItemTooltip
              isItemInfo={true}
              itemName={item.item_name}
              {...item}
            />
          </BeforeAndAfter.Before>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
      <BeforeAndAfter className="w-6">
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
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {beforeInfusionName + beforeInfusionValue}
          </BeforeAndAfter.Before>

          <BeforeAndAfter.After>
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
        {/* <BeforeAndAfter.Title>접두</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {beforePrefixEnchantName || ""}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>
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
        {/* <BeforeAndAfter.Title>접미</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {beforeSuffixEnchantName || ""}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After>
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

PreviewItem.displayName = "PreviewItem";
