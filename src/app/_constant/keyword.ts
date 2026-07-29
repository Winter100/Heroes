export const keyword = {
  statName: {
    str: '힘',
    agi: '민첩',
    int: '지능',
    wil: '의지',
    luk: '운',
    max_hp: '최대 생명력',
    max_sta: '',
    balance: '밸런스',
    att_speed: '공격 속도',
    att_surplus: '',
    att: '공격력',
    def: '방어력',
    critical: '크리티컬',
    critical_damage: '크리티컬 대미지',
    critical_resist: '크리티컬 저항',
    max_stamina: '최대 스태미나',
  },
  slot: {
    righthand: 'Right Hand',
    leftthand: 'Left Hand',
    head: 'Head',
    upper: 'Upper',
    lower: 'Lower',
    hand: 'Hand',
    leg: 'Leg',
    materials: 'Materials',
    accessories: 'Accessories',
  },
  itemName: {
    ardri: '아르드리',
    orna: '오르나',
    uaithne: '와드네',
  },
  upgradeType: {
    infusion: 'infusion',
    prefix: 'prefix',
    suffix: 'suffix',
    접두: 'prefix',
    접미: 'suffix',
  },
  project: {
    name: '마영전',
    url: 'https://heroes-dev.com/',
  },
};

export const AFFIX = {
  prefix: 'prefix',
  suffix: 'suffix',
  infusion: 'infusion',
};

export const LOCALSTORAGE_KEY = {
  ocidList: 'ocidList',
  characterInfoList: 'characterInfoList',
  waiting: 'waitingRoom',
};

export const API_PATH = {
  enchant: `/enchants?category=ENCHANT`,
  infusion: `/enchants?category=INFUSION`,
  grind: `/items/grind`,
  recipe: `/items/recipe`,
  itemSetOption: `/items/set-option`,
  raid: `/raids/table`,
  partholn: `/partholn`,
  character: `/characters/image`,
  notice: '/notice',
};

export const initialTitleList = [
  { stat_name: '이름', isView: true },
  { stat_name: '직업', isView: true },
  { stat_name: '공격력', isView: true },
  { stat_name: '파괴력', isView: true },
  { stat_name: '추가피해', isView: true },
  { stat_name: '방어력 관통', isView: true },
  { stat_name: '크리티컬', isView: true },
  { stat_name: '밸런스', isView: true },
  { stat_name: '크리티컬 저항', isView: false },
  { stat_name: '공격속도', isView: false },
  { stat_name: '길드', isView: false },
  { stat_name: '카르제', isView: false },
  { stat_name: '레벨', isView: false },
];

export const previewInitialTitleList = [
  { stat_name: '공격력', isView: true },
  { stat_name: '크리티컬', isView: true },
  { stat_name: '밸런스', isView: true },
  { stat_name: '방어력 관통', isView: true },
  { stat_name: '크리티컬 저항', isView: true },
  { stat_name: '추가피해', isView: true },
  { stat_name: '방어력', isView: true },
  { stat_name: '공격속도', isView: true },
  { stat_name: '파괴력', isView: true },
];

export const PREVIEW_BEFORE_AND_AFTER_STATS_TITLE = [
  '공격력',
  '방어력',
  '힘',
  '민첩',
  '지능',
  '의지',
  '행운',
  '최대 생명력',
  '최대 스태미나',
  '공격속도',
  '추가피해',
  '크리티컬',
  '크리티컬 피해량',
  '크리티컬 저항',
  '밸런스',
  '파괴력',
  '방어력 관통',
];

export const SEARCH_PARAMS_KEY = {
  basic: 'basic',
  ocid: 'ocid',
  stat: 'stat',
  guild: 'guild',
  character_name: 'character_name',
  type: 'type',
  item_name: 'item_name',
};

const ENCHANT_EFFECTS_SORT_DATA = [
  '공격력',
  '마법공격력',
  '방어력',
  '공격속도',
  '크리티컬',
  '크리티컬 저항',
  '밸런스',
  '파괴력',
  '관통력',
  '최대 스태미나',
  '최대 생명력',
];
const INFUSIONS_SORT_DATA = [
  '방어력 101',
  '방어력 102',
  '방어력 103',
  '크리티컬 저항 1',
  '크리티컬 저항 2',
  '크리티컬 저항 3',
  '밸런스 1',
  '밸런스 2',
  '밸런스 3',
  '크리티컬 1',
  '크리티컬 2',
  '크리티컬 3',
  '공격속도 1',
];

export const enchantEffectOrderMap = new Map(
  ENCHANT_EFFECTS_SORT_DATA.map((name, index) => [name, index])
);

export const infusionEffectOrderMap = new Map(
  INFUSIONS_SORT_DATA.map((name, index) => [name, index])
);

export const getInfusionIndex = (text: string) => {
  const index = INFUSIONS_SORT_DATA.findIndex((keyword) =>
    text.startsWith(keyword)
  );

  return index === -1 ? Infinity : index;
};

// export const ITEM_CATEGORY_MAP = {
//   category: ['장비', '소모품', '재료'],
//   subCategory: ['오르나', '와드네', '에리우', '기타'],
// };
export const ITEM_CATEGORY_MAP = {
  장비: ['와드네', '에리우', '악세서리'],
  소모품: [],
  재료: ['오르나', '와드네', '에리우', '기타'],
};
