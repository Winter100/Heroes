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

  const beforeinfusionName =
    item?.item_option?.power_infusion_preset_1?.stat_name;
  const beforeInfusionValue =
    item?.item_option?.power_infusion_preset_1?.stat_value;
  const beforeinFusion = `${beforeinfusionName} ${beforeInfusionValue}`;

  const beforePrefixName =
    item?.item_option?.prefix_enchant_use_preset_no === 1
      ? item.item_option?.prefix_enchant_preset_1
      : item.item_option?.prefix_enchant_preset_2;
  const beforeSuffixName =
    item?.item_option?.suffix_enchant_use_preset_no === 1
      ? item.item_option?.suffix_enchant_preset_1
      : item.item_option?.suffix_enchant_preset_2;

  return (
    <Row className="h-full flex-1 gap-2 rounded-lg text-sm text-white">
      <BeforeAndAfter>
        {/* <BeforeAndAfter.Title>아이템 이름</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before>
            {itemName.level} {itemName.name}
          </BeforeAndAfter.Before>
        </BeforeAndAfter.Content>
      </BeforeAndAfter>
      <BeforeAndAfter>
        {/* <BeforeAndAfter.Title>정령</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before>{preInfusions}</BeforeAndAfter.Before>

          <BeforeAndAfter.After
            className={`${infusions?.length >= 1 ? "border border-zinc-600" : ""} text-blue-300`}
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

      <BeforeAndAfter>
        {/* <BeforeAndAfter.Title>접두</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before>{beforePrefixName}</BeforeAndAfter.Before>
          <BeforeAndAfter.After
            className={`${sortedPrefixEnchant?.length >= 1 ? "border border-zinc-600" : ""} text-blue-300`}
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
      <BeforeAndAfter>
        {/* <BeforeAndAfter.Title>접미</BeforeAndAfter.Title> */}
        <BeforeAndAfter.Content>
          <BeforeAndAfter.Before>{beforeSuffixName}</BeforeAndAfter.Before>
          <BeforeAndAfter.After
            className={`${sortedSuffixEnchant?.length >= 1 ? "border border-zinc-600" : ""} text-blue-300`}
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
