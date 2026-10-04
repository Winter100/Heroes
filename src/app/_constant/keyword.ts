export const keyword = {
  project: {
    name: '마영전',
    url: 'https://www.heroes-dev.com/',
  },
};

export const AFFIX = {
  prefix: 'prefix',
  suffix: 'suffix',
  infusion: 'infusion',
};

export const LOCALSTORAGE_KEY = {
  ocidList: 'ocidList',
  waiting: 'waitingRoom',
};

export const API_PATH = {
  enchant: `/enchants?category=ENCHANT`,
  infusion: `/enchants?category=INFUSION`,
  grind: `/items/grind`,
  recipes: `/items/recipe`,
  recipeByItemName: `/items/recipe/name`,
  recipeSSG: `/items/recipe/ssg`,
  itemSetOption: `/items/set-option`,
  raid: `/raids/table`,
  raidDetailName: `/raids/name`,
  raidSSG: `/raids/ssg`,
  partholn: `/partholn`,
  characterImage: `/characters/image`,
  notice: '/notice',
  enchantTable: '/enchants/table',
  enchantSSG: '/enchants/ssg',
  enchantDetailById: '/enchants/id',
  enchantDetailByName: '/enchants/name',
};

type ApiKeyMap = {
  readonly [K in keyof typeof API_PATH]: K;
};

export const API_KEY = Object.fromEntries(
  Object.keys(API_PATH).map((key) => [key, key])
) as ApiKeyMap;

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
  ocid: 'ocid',
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

export const ITEM_CATEGORY_MAP = {
  장비: ['와드네', '에리우', '악세서리'],
  소모품: [],
  재료: ['오르나', '와드네', '에리우', '기타'],
};
