import { ItemType } from '@/app/_type/infoInfoType';
import { leg_level_options } from '../item_level_options/leg_level_options';

export const leg_list: ItemType[] = [
  {
    name: '밀레시안 부츠',
    restrictions: ['105 레벨 이상', '최대 강화 15단계', '최대 품질 5성'],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: '레어',
    category: ['플레이트', '발 방어구'],
    quality_stats: ['방어력', '힘', '민첩', '지능', '의지'],

    set: '밀레시안',
    grinding: true,
  },
  {
    name: '아르드리 부츠',
    restrictions: [
      '110 레벨 이상',
      '방어구 마스터리 6랭크 이상',
      '최대 강화 15단계',
      '최대 품질 5성',
    ],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: '레어',
    category: ['플레이트', '발 방어구'],
    quality_stats: ['방어력', '힘', '민첩', '지능', '의지'],

    set: '아르드리',
    enhancement_options: leg_level_options.아르드리,
    grinding: true,
  },
  {
    name: '오르나 부츠',
    restrictions: [
      '115 레벨 이상',
      '방어구 마스터리 6랭크 이상',
      '최대 강화 15단계',
      '최대 품질 5성',
    ],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: '레어',
    category: ['플레이트', '발 방어구'],
    quality_stats: ['방어력', '힘', '민첩', '지능', '의지'],
    set: '오르나',
    slot: 'Leg',
    enhancement_options: leg_level_options.오르나,
    grinding: true,
  },
  {
    name: '+15 오르나 부츠',
    restrictions: [
      '115 레벨 이상',
      '방어구 마스터리 6랭크 이상',
      '최대 강화 15단계',
      '최대 품질 5성',
    ],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: '레어',
    category: ['플레이트', '발 방어구'],
    set: '오르나',
    slot: 'Leg',
    enhancement_options: leg_level_options['15오르나'],
    quality_stats: ['공격력', '마법공격력', '힘', '민첩', '지능', '의지'],
    grinding: true,
  },
  {
    name: '와드네 부츠',
    restrictions: [
      '120 레벨 이상',
      '방어구 마스터리 5랭크 이상',
      '최대 품질 5성',
    ],
    quality: 2,
    quality_selection_available: true,
    rating: '일반',
    category: ['플레이트', '발 방어구'],
    color: false,
    enhancement_options: leg_level_options.와드네,
    quality_stats: ['공격력', '마법공격력', '힘', '민첩', '지능', '의지'],
    set: '와드네',
  },
  {
    name: '초급 와드네 부츠',
    restrictions: [
      '120 레벨 이상',
      '방어구 마스터리 5랭크 이상',
      '최대 품질 5성',
    ],
    quality: 2,
    quality_selection_available: true,
    rating: '초급',
    category: ['플레이트', '발 방어구'],
    color: false,
    enhancement_options: leg_level_options.와드네,
    quality_stats: ['공격력', '마법공격력', '힘', '민첩', '지능', '의지'],
    set: '와드네',
  },
  {
    name: '중급 와드네 부츠',
    restrictions: [
      '120 레벨 이상',
      '방어구 마스터리 5랭크 이상',
      '최대 품질 5성',
    ],
    quality: 2,
    quality_selection_available: true,
    rating: '중급',
    category: ['플레이트', '발 방어구'],
    color: false,
    enhancement_options: leg_level_options.와드네,
    quality_stats: ['공격력', '마법공격력', '힘', '민첩', '지능', '의지'],
    set: '와드네',
  },
  {
    name: '고급 와드네 부츠',
    restrictions: [
      '120 레벨 이상',
      '방어구 마스터리 5랭크 이상',
      '최대 품질 5성',
    ],
    quality: 2,
    quality_selection_available: true,
    rating: '고급',
    category: ['플레이트', '발 방어구'],
    color: false,
    enhancement_options: leg_level_options.와드네,
    quality_stats: ['공격력', '마법공격력', '힘', '민첩', '지능', '의지'],
    set: '와드네',
  },
  {
    name: '레어 와드네 부츠',
    restrictions: [
      '120 레벨 이상',
      '방어구 마스터리 5랭크 이상',
      '최대 품질 5성',
    ],
    quality: 2,
    quality_selection_available: true,
    rating: '레어',
    category: ['플레이트', '발 방어구'],
    color: false,
    enhancement_options: leg_level_options.와드네,
    quality_stats: ['공격력', '마법공격력', '힘', '민첩', '지능', '의지'],
    set: '와드네',
  },
  {
    name: '전설 와드네 부츠',
    restrictions: [
      '120 레벨 이상',
      '방어구 마스터리 5랭크 이상',
      '최대 품질 5성',
    ],
    quality: 2,
    quality_selection_available: true,
    rating: '전설',
    category: ['플레이트', '발 방어구'],
    color: false,
    enhancement_options: leg_level_options.와드네,
    quality_stats: ['공격력', '마법공격력', '힘', '민첩', '지능', '의지'],
    set: '와드네',
  },
];
