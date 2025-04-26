import { EquipmentType } from '@/app/_type/equipmentType';

const slot_name = [
  { item_slot: 'Right Hand', item_name: '무기 (미착용)' },
  { item_slot: 'Left Hand', item_name: '보조 무기 (미착용)' },
  { item_slot: 'Head', item_name: '헬름 (미착용)' },
  { item_slot: 'Upper', item_name: '메일 (미착용)' },
  { item_slot: 'Lower', item_name: '그리브즈 (미착용)' },
  { item_slot: 'Hand', item_name: '건틀릿 (미착용)' },
  { item_slot: 'Leg', item_name: '부츠 (미착용)' },
  { item_slot: 'Rhod', item_name: '로드 (미착용)' },
  { item_slot: 'Left Finger', item_name: '왼쪽 반지 (미착용)' },
  { item_slot: 'Right Finger', item_name: '오른쪽 반지 (미착용)' },
  { item_slot: 'Earring', item_name: '귀걸이 (미착용)' },
  { item_slot: 'Belt', item_name: '허리띠 (미착용)' },
  { item_slot: 'Charm', item_name: '브로치 (미착용)' },
  { item_slot: 'Artifact', item_name: '아티팩트 (미착용)' },
  { item_slot: 'Left Wrist', item_name: '왼쪽 팔찌 (미착용)' },
  { item_slot: 'Right Wrist', item_name: '오른쪽 팔찌 (미착용)' },
  { item_slot: 'Necklace', item_name: '목걸이 (미착용)' },
];

const cach_slot_name = [
  { item_slot: 'Avatar_Helm', item_name: '머리 (미착용)' },
  { item_slot: 'Avatar_Rear', item_name: '날개 (미착용)' },
  { item_slot: 'Avatar_Weapon', item_name: '무기 (미착용)' },
  { item_slot: 'Avatar_Tunic', item_name: '상의 (미착용)' },
  { item_slot: '(Unknown)', item_name: '보조' },
  { item_slot: 'Avatar_Pants', item_name: '하의 (미착용)' },
  { item_slot: 'Avatar_Gloves', item_name: '손 (미착용)' },
  { item_slot: 'Avatar_Tail', item_name: '꼬리 (미착용)' },
  { item_slot: 'Avatar_Boots', item_name: '신발 (미착용)' },

  { item_slot: 'Right Epaulet', item_name: '견장 (미착용)' },
  { item_slot: 'Hair', item_name: '헤어 (미착용)' },
  { item_slot: 'Left Epaulet', item_name: '견장 (미착용)' },
  { item_slot: 'FacePainting', item_name: '페이스페인팅 (미착용)' },
  { item_slot: 'Lens', item_name: '렌즈 (미착용)' },
  { item_slot: 'Scar', item_name: '흉터 (미착용)' },
  { item_slot: 'Inner Armor', item_name: '이너아머 (미착용)' },
  { item_slot: 'MakeUp', item_name: '메이크업 (미착용)' },
  { item_slot: 'Body Shape', item_name: '체형 (미착용)' },
  { item_slot: 'BodyPainting', item_name: '바디페인팅 (미착용)' },
  { item_slot: 'Badge', item_name: '뱃지 (미착용)' },
];

export const bagList = (bag: EquipmentType[]) => {
  return slot_name.map((slot) => {
    const foundItem = bag.find(
      (items) => items.item_equipment_slot_name === slot.item_slot
    );

    return foundItem
      ? {
          ...foundItem,
          item_option: {
            ...foundItem.item_option,
            tuning_stat: foundItem.item_option.tuning_stat.map((stat) =>
              stat.stat_name === '공격력 제한 해제'
                ? { ...stat, stat_name: '해제' }
                : stat
            ),
          },
        }
      : {
          item_equipment_page: 'Bag',
          item_equipment_slot_name: slot.item_slot,
          item_name: slot.item_name,
          item_option: {
            enhancement_level: null,
            tuning_stat: [
              {
                stat_name: '',
                stat_value: '',
              },
            ],
            ability_name: '',
            prefix_enchant_use_preset_no: 0,
            suffix_enchant_use_preset_no: 0,
            prefix_enchant_preset_1: '',
            suffix_enchant_preset_1: '',
            prefix_enchant_preset_2: '',
            suffix_enchant_preset_2: '',
            power_infusion_use_preset_no: 0,
            power_infusion_preset_1: {
              stat_name: '',
              stat_value: '',
            },
            power_infusion_preset_2: {
              stat_name: '',
              stat_value: '',
            },
            cash_item_color: {
              color_1: '',
              color_2: '',
              color_3: '',
              color_4: '',
              color_5: '',
            },
            avatar_color_use_preset_no: null,
            avatar_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_inner_armor_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
          },
        };
  });
};
export const cachList = (cach: EquipmentType[]) => {
  return cach_slot_name.map((slot) => {
    const foundItem = cach.find(
      (items) => items.item_equipment_slot_name === slot.item_slot
    );

    return foundItem
      ? {
          ...foundItem,
        }
      : {
          item_equipment_page: 'Cach',
          item_equipment_slot_name: slot.item_slot,
          item_name: slot.item_name,
          item_option: {
            enhancement_level: null,
            // tuning_stat: [
            //   {
            //     stat_name: "",
            //     stat_value: "",
            //   },
            // ],
            ability_name: '',
            prefix_enchant_use_preset_no: 0,
            suffix_enchant_use_preset_no: 0,
            prefix_enchant_preset_1: '',
            suffix_enchant_preset_1: '',
            prefix_enchant_preset_2: '',
            suffix_enchant_preset_2: '',
            power_infusion_use_preset_no: 0,
            power_infusion_preset_1: {
              stat_name: '',
              stat_value: '',
            },
            power_infusion_preset_2: {
              stat_name: '',
              stat_value: '',
            },
            cash_item_color: {
              color_1: '',
              color_2: '',
              color_3: '',
              color_4: '',
              color_5: '',
            },
            avatar_color_use_preset_no: null,
            avatar_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
            },
            avatar_inner_armor_color_preset_1: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_2: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_3: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_4: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
            avatar_inner_armor_color_preset_5: {
              color_1: null,
              color_2: null,
              color_3: null,
              color_4: null,
              color_5: null,
              default_color_flag: null,
            },
          },
        };
  });
};
