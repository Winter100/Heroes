"use client";

import BeforeAndAfter from "../common/beforeAndAfter/BeforeAndAfter";

import Row from "../layout/Row";
import {
  prefix_enchant_name_list,
  prefix_enchant_options,
  suffix_enchant_name_list,
  suffix_enchant_options,
} from "@/app/_constant/enchant";

import { sortEnchant } from "./utils/sortEnchant";
import { preview_infusion } from "@/app/_constant/infusions";
import {
  beforeAndAfterStatsType,
  PrviewItemProps,
} from "@/app/_type/previewType";
import PreviewModal from "./menu/PreviewModal";
import ItemModal from "./menu/ItemModal";

const PreviewItem = ({ item, slot, enchant }: PrviewItemProps) => {
  const prefix_list =
    enchant &&
    enchant.map((item) =>
      item.item.filter((c) => c.item_option.prefix_enchant_preset_1),
    );
  const suffix_list =
    enchant &&
    enchant.map((item) =>
      item.item.filter((c) => c.item_option.suffix_enchant_preset_1),
    );

  const infusions =
    preview_infusion.find((item) => item.equipment.includes(slot))?.value ?? [];

  const sortedPrefixEnchant = sortEnchant(
    prefix_enchant_name_list,
    prefix_enchant_options,
    slot,
  );

  const sortedSuffixEnchant = sortEnchant(
    suffix_enchant_name_list,
    suffix_enchant_options,
    slot,
  );

  const enchant_list = {
    prefix: prefix_list.flat(),
    suffix: suffix_list.flat(),
  };

  const infusion_name =
    item.item_option.power_infusion_use_preset_no === 1
      ? item.item_option?.power_infusion_preset_1?.stat_name
      : item.item_option?.power_infusion_preset_2?.stat_name;

  const infusion_value =
    item.item_option.power_infusion_use_preset_no === 1
      ? item.item_option?.power_infusion_preset_1?.stat_value
      : item.item_option?.power_infusion_preset_2?.stat_value;

  const preInfusions = `${infusion_name ?? ""} ${infusion_value ?? ""}`;

  const prepreInfusions = infusions.find((i) => i.stat_name === preInfusions);
  const preSortedPrefixEnchant = sortedPrefixEnchant.find(
    (i) => i.stat_name === item.item_option?.prefix_enchant_preset_1,
  );
  const preSortedSuffixEnchant = sortedSuffixEnchant.find(
    (i) => i.stat_name === item.item_option.suffix_enchant_preset_1,
  );

  const preInfuion = {
    previewName: "infusions",
    ...prepreInfusions,
  } as beforeAndAfterStatsType;

  const preFixEnchant = {
    previewName: "prefix",
    ...preSortedPrefixEnchant,
  } as beforeAndAfterStatsType;

  const suffixEnchant = {
    previewName: "suffix",
    ...preSortedSuffixEnchant,
  } as beforeAndAfterStatsType;

  const itemName = {
    name: item.item_name ?? "",
    level: item?.item_option?.enhancement_level ?? "",
  };

  const beforeinFusion = `${infusion_name} ${infusion_value}`;

  const beforePrefixName =
    item?.item_option?.prefix_enchant_use_preset_no === 1
      ? item.item_option?.prefix_enchant_preset_1
      : item.item_option?.prefix_enchant_preset_2;
  const beforeSuffixName =
    item?.item_option?.suffix_enchant_use_preset_no === 1
      ? item.item_option?.suffix_enchant_preset_1
      : item.item_option?.suffix_enchant_preset_2;

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
            {preInfusions}
          </BeforeAndAfter.Before>

          <BeforeAndAfter.After
            className={`${infusions?.length >= 1 ? "border border-zinc-600" : ""} text-[9px] text-white sm:text-xs`}
          >
            {infusions?.length >= 1 && (
              <PreviewModal
                beforeName={beforeinFusion}
                itemName={itemName}
                before={preInfuion}
                previewName="infusions"
                slot={slot}
                options={infusions}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        {/* <BeforeAndAfter.Title>접두</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
            {/* <BeforeAndAfter.Before className="items-center overflow-hidden text-ellipsis whitespace-nowrap sm:flex sm:w-28 sm:justify-center md:w-36 lg:w-40"> */}
            {beforePrefixName}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After
            className={`${sortedPrefixEnchant?.length >= 1 ? "border border-zinc-600" : ""} text-[9px] text-white sm:text-xs`}
          >
            {sortedPrefixEnchant?.length >= 1 && (
              <PreviewModal
                beforeName={beforePrefixName}
                enchantList={enchant_list?.prefix}
                itemName={itemName}
                before={preFixEnchant}
                previewName="prefix"
                slot={slot}
                options={sortedPrefixEnchant}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        {/* <BeforeAndAfter.Title>접미</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before className="flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
            {/* <BeforeAndAfter.Before className="flex w-full items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap"> */}
            {beforeSuffixName}
          </BeforeAndAfter.Before>
          <BeforeAndAfter.After
            className={`${sortedSuffixEnchant?.length >= 1 ? "border border-zinc-600" : ""} text-[9px] text-white sm:text-xs`}
          >
            {sortedSuffixEnchant?.length >= 1 && (
              <PreviewModal
                beforeName={beforeSuffixName}
                enchantList={enchant_list.suffix}
                itemName={itemName}
                before={suffixEnchant}
                previewName="suffix"
                slot={slot}
                options={sortedSuffixEnchant}
              />
            )}
          </BeforeAndAfter.After>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
    </Row>
  );
};

export default PreviewItem;
