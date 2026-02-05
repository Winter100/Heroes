import { ItemType } from '@/app/_type/infoInfoType';
import { createAccessoriesObject } from '@/app/_utils/createAccessoriesObject';

const 어둠의허리띠 = [
  {
    name: '어둠의 허리띠',
    max_stage: 20,
    base_stat: [
      { stat_name: '밸런스', stat_value: 6 },
      { stat_name: '힘', stat_value: 145 },
      { stat_name: '민첩', stat_value: 95 },
      { stat_name: '지능', stat_value: 193 },
      { stat_name: '의지', stat_value: 105 },
    ],
    firstAttackIncrease: 12,
    firstDefenseIncrease: 4,
    secondAttackIncrease: 13,
    secondDefenseIncrease: 3,
  },
];
const 투쟁의허리띠 = [
  {
    name: '투쟁의허리띠',
    max_stage: 20,
    base_stat: [
      { stat_name: '밸런스', stat_value: 8 },
      { stat_name: '힘', stat_value: 145 },
      { stat_name: '민첩', stat_value: 95 },
      { stat_name: '지능', stat_value: 193 },
      { stat_name: '의지', stat_value: 105 },
    ],
    firstAttackIncrease: 14,
    firstDefenseIncrease: 4,
    secondAttackIncrease: 14,
    secondDefenseIncrease: 5,
  },
];
const 저주의허리띠 = [
  {
    name: '저주의허리띠',
    max_stage: 20,
    base_stat: [
      { stat_name: '밸런스', stat_value: 12 },
      { stat_name: '힘', stat_value: 145 },
      { stat_name: '민첩', stat_value: 95 },
      { stat_name: '지능', stat_value: 193 },
      { stat_name: '의지', stat_value: 105 },
    ],
    firstAttackIncrease: 15,
    firstDefenseIncrease: 6,
    secondAttackIncrease: 15,
    secondDefenseIncrease: 5,
  },
];
const 스타라이트 = [
  {
    name: '스타라이트 벨트',
    max_stage: 20,
    base_stat: [
      { stat_name: '밸런스', stat_value: 16 },
      { stat_name: '힘', stat_value: 145 },
      { stat_name: '민첩', stat_value: 95 },
      { stat_name: '지능', stat_value: 193 },
      { stat_name: '의지', stat_value: 105 },
    ],
    firstAttackIncrease: 16,
    firstDefenseIncrease: 7,
    secondAttackIncrease: 16,
    secondDefenseIncrease: 6,
  },
];

export const belt_list: ItemType[] = [
  {
    name: '정신의 허리띠',
    restrictions: ['105 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['액세서리', '벨트'],
    quality_stats: ['힘', '민첩', '지능', '의지'],
    color: true,
  },
  {
    name: '어둠의 허리띠',
    restrictions: ['110 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['액세서리', '벨트'],
    quality_stats: ['힘', '민첩', '지능', '의지'],
    color: true,
    enhancement_options: createAccessoriesObject(어둠의허리띠)[0],
  },
  {
    name: '투쟁의 허리띠',
    restrictions: ['115 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['액세서리', '벨트'],
    quality_stats: ['힘', '민첩', '지능', '의지'],
    color: true,
    enhancement_options: createAccessoriesObject(투쟁의허리띠)[0],
  },
  {
    name: '저주의 허리띠',
    restrictions: ['120 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['액세서리', '벨트'],
    quality_stats: ['힘', '민첩', '지능', '의지'],
    color: true,
    enhancement_options: createAccessoriesObject(저주의허리띠)[0],
  },
  {
    name: '스타라이트 벨트',
    restrictions: ['125 레벨 이상'],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['액세서리', '벨트'],
    quality_stats: ['힘', '민첩', '지능', '의지'],
    color: true,
    enhancement_options: createAccessoriesObject(스타라이트)[0],
  },
];
