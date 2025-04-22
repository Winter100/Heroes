import { ItemType } from '@/app/_type/infoInfoType';
import { createAccessoriesObject } from '@/app/_utils/createAccessoriesObject';
const 태양의비원 = [
  {
    name: '태양의 비원',
    max_stage: 20,
    base_stat: [
      { stat_name: '크리티컬', stat_value: 11 },
      { stat_name: '힘', stat_value: 125 },
      { stat_name: '민첩', stat_value: 50 },
      { stat_name: '지능', stat_value: 167 },
      { stat_name: '의지', stat_value: 58 },
      { stat_name: '스태미나', stat_value: 4 },
    ],
    firstAttackIncrease: 15,
    firstDefenseIncrease: 6,
    secondAttackIncrease: 15,
    secondDefenseIncrease: 5,
  },
];
const 성소의귀걸이 = [
  {
    name: '성소의 귀걸이',
    max_stage: 20,
    base_stat: [
      { stat_name: '크리티컬', stat_value: 7 },
      { stat_name: '힘', stat_value: 125 },
      { stat_name: '민첩', stat_value: 50 },
      { stat_name: '지능', stat_value: 167 },
      { stat_name: '의지', stat_value: 58 },
      { stat_name: '스태미나', stat_value: 4 },
    ],
    firstAttackIncrease: 14,
    firstDefenseIncrease: 4,
    secondAttackIncrease: 14,
    secondDefenseIncrease: 5,
  },
];
const 차원의귀걸이 = [
  {
    name: '차원의 귀걸이',
    max_stage: 20,
    base_stat: [
      { stat_name: '크리티컬', stat_value: 5 },
      { stat_name: '힘', stat_value: 125 },
      { stat_name: '민첩', stat_value: 50 },
      { stat_name: '지능', stat_value: 167 },
      { stat_name: '의지', stat_value: 58 },
      { stat_name: '스태미나', stat_value: 4 },
    ],
    firstAttackIncrease: 12,
    firstDefenseIncrease: 4,
    secondAttackIncrease: 13,
    secondDefenseIncrease: 3,
  },
];

export const earring_list: ItemType[] = [
  {
    name: '태양의 비원',
    restrictions: ['120 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['액세서리', '귀걸이'],
    quality_stats: ['힘', '민첩', '지능', '의지'],
    enhancement_options: createAccessoriesObject(태양의비원)[0],
    color: true,
  },
  {
    name: '성소의 귀걸이',
    restrictions: ['115 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['액세서리', '귀걸이'],
    quality_stats: ['힘', '민첩', '지능', '의지'],
    enhancement_options: createAccessoriesObject(성소의귀걸이)[0],
    color: true,
  },
  {
    name: '차원의 귀걸이',
    restrictions: ['110 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    quality_stats: ['힘', '민첩', '지능', '의지'],
    rating: '고급',
    category: ['액세서리', '귀걸이'],
    color: true,
    enhancement_options: createAccessoriesObject(차원의귀걸이)[0],
  },
  {
    name: '묵언의 결의',
    restrictions: ['105 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    quality_stats: ['힘', '민첩', '지능', '의지'],
    rating: '고급',
    category: ['액세서리', '귀걸이'],
    color: true,
  },
];
