import { Item_equipment } from "./../../../_type/equipmentType";
import { EquipmentType } from "@/app/_type/equipmentType";

const slot_name = [
  { item_slot: "Right Hand", item_name: "무기" },
  { item_slot: "Left Hand", item_name: "보조 무기" },
  { item_slot: "Head", item_name: "헬름" },
  { item_slot: "Upper", item_name: "메일" },
  { item_slot: "Lower", item_name: "그리브즈" },
  { item_slot: "Hand", item_name: "건틀릿" },
  { item_slot: "Leg", item_name: "부츠" },
  { item_slot: "Rhod", item_name: "로드" },
  { item_slot: "Left Finger", item_name: "왼쪽 반지" },
  { item_slot: "Right Finger", item_name: "오른쪽 반지" },
  { item_slot: "Earring", item_name: "귀걸이" },
  { item_slot: "Belt", item_name: "허리띠" },
  { item_slot: "Charm", item_name: "브로치" },
  { item_slot: "Artifact", item_name: "아티팩트" },
  { item_slot: "Left Wrist", item_name: "왼쪽 팔찌" },
  { item_slot: "Right Wrist", item_name: "오른쪽 팔찌" },
  { item_slot: "Necklace", item_name: "목걸이" },
];

export const bagList = (bag: EquipmentType[]) => {
  return slot_name.map((slot) => {
    const foundItem = bag.find(
      (items) => items.item_equipment_slot_name === slot.item_slot,
    );

    return foundItem
      ? {
          ...foundItem,
          item_option: {
            ...foundItem.item_option,
            tuning_stat: foundItem.item_option.tuning_stat.map((stat) =>
              stat.stat_name === "공격력 제한 해제"
                ? { ...stat, stat_name: "해제" }
                : stat,
            ),
          },
        }
      : {
          item_equipment_page: "Bag",
          item_equipment_slot_name: slot.item_slot,
          item_name: slot.item_name,
          item_option: {
            enhancement_level: null,
            tuning_stat: [
              {
                stat_name: "",
                stat_value: "",
              },
            ],
            ability_name: "",
            prefix_enchant_use_preset_no: 0,
            suffix_enchant_use_preset_no: 0,
            prefix_enchant_preset_1: "",
            suffix_enchant_preset_1: "",
            prefix_enchant_preset_2: "",
            suffix_enchant_preset_2: "",
            power_infusion_use_preset_no: 0,
            power_infusion_preset_1: {
              stat_name: "",
              stat_value: "",
            },
            power_infusion_preset_2: {
              stat_name: "",
              stat_value: "",
            },
            cash_item_color: {
              color_1: "",
              color_2: "",
              color_3: "",
            },
            avatar_color_use_preset_no: null,
            avatar_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
            },
            avatar_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
            },
            avatar_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
            },
            avatar_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
            },
            avatar_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
            },
            avatar_inner_armor_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              default_color_flag: null,
            },
          },
        };
  });
};
