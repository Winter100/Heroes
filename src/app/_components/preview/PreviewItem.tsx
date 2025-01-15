"use client";

import BeforeAndAfter from "../common/beforeAndAfter/BeforeAndAfter";

import Row from "../layout/Row";
import {
  prefix_enchant_name_list,
  prefix_enchant_options,
  suffix_enchant_name_list,
  suffix_enchant_options,
} from "@/app/_constant/enchant";

import { getUsableItemEnchantList } from "./utils/getUsableItemEnchantList";
import { preview_infusion } from "@/app/_constant/infusions";
import {
  beforeAndAfterStatsType,
  PrviewItemProps,
} from "@/app/_type/previewType";
import PreviewModal from "./menu/PreviewModal";
import ItemModal from "./menu/ItemModal";
import { getUsableItemInfusionList } from "./utils/getUsableItemInfusionList";
import { getOption } from "./utils/getOption";
import { findMatchingItem } from "./utils/findMatchingItem";

const PreviewItem = ({ item, slot }: PrviewItemProps) => {
  const itemName = {
    name: item.item_name ?? "",
    level: item?.item_option?.enhancement_level ?? "",
  };

  const usableInfusionList = getUsableItemInfusionList(preview_infusion, slot);

  const usablePrefixEnchantList = getUsableItemEnchantList(
    prefix_enchant_name_list,
    prefix_enchant_options,
    slot,
  );
  const usableSuffixEnchantList = getUsableItemEnchantList(
    suffix_enchant_name_list,
    suffix_enchant_options,
    slot,
  );

  const existing_infusion_name = getOption<{ stat_name: string }>(
    item.item_option,
    "power_infusion_use_preset_no",
    "power_infusion_preset_1",
    "power_infusion_preset_2",
  )?.stat_name;

  const existing_infusion_value = getOption<{ stat_value: string }>(
    item.item_option,
    "power_infusion_use_preset_no",
    "power_infusion_preset_1",
    "power_infusion_preset_2",
  )?.stat_value;

  const existing_prefix_enchant_name = getOption<string>(
    item.item_option,
    "prefix_enchant_use_preset_no",
    "prefix_enchant_preset_1",
    "prefix_enchant_preset_2",
  );

  const existing_suffix_enchant_name = getOption<string>(
    item.item_option,
    "suffix_enchant_use_preset_no",
    "suffix_enchant_preset_1",
    "suffix_enchant_preset_2",
  );

  const existing_infusion = `${existing_infusion_name ?? ""} ${existing_infusion_value ?? ""}`;
  const existingInfuion = {
    upgreadeType: "infusions",
    ...findMatchingItem(usableInfusionList, existing_infusion),
  } as beforeAndAfterStatsType;

  const existingPrefixEnchant = {
    upgreadeType: "prefix",
    ...findMatchingItem(
      usablePrefixEnchantList,
      existing_prefix_enchant_name ?? "",
    ),
  } as beforeAndAfterStatsType;

  const existingSuffixEnchant = {
    upgreadeType: "suffix",
    ...findMatchingItem(
      usableSuffixEnchantList,
      existing_suffix_enchant_name ?? "",
    ),
  } as beforeAndAfterStatsType;

  return (
    <Row className="flex h-full w-full items-center gap-2 text-sm">
      <BeforeAndAfter className="w-10 justify-start sm:w-28 sm:justify-center md:w-36 lg:w-40">
        {/* <BeforeAndAfter.Title>아이템 이름</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap sm:flex sm:w-28 sm:justify-center md:w-36 lg:w-40">
            {item.item_option.tuning_stat !== null ? (
              <ItemModal item={item} />
            ) : (
              <>
                {item?.item_option?.enhancement_level} {item?.item_name}
              </>
            )}
          </BeforeAndAfter.Before>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        {/* <BeforeAndAfter.Title>정령</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center">
            {existingInfuion.stat_name}
          </BeforeAndAfter.Before>

          <BeforeAndAfter.After
            className={`${usableInfusionList?.length >= 1 ? "border border-zinc-600" : ""} text-[9px] text-white sm:text-xs`}
          >
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
          <BeforeAndAfter.Before className="flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
            {existingPrefixEnchant.stat_name}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After
            className={`${usablePrefixEnchantList?.length >= 1 ? "border border-zinc-600" : ""} text-[9px] text-white sm:text-xs`}
          >
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
          <BeforeAndAfter.Before className="flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
            {existingSuffixEnchant.stat_name}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After
            className={`${usableSuffixEnchantList?.length >= 1 ? "border border-zinc-600" : ""} text-[9px] text-white sm:text-xs`}
          >
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
};

export default PreviewItem;
