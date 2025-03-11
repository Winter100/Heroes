import { ItemType } from "@/app/_type/infoInfoType";
import { leg_level_options } from "../item_level_options/leg_level_options";

export const leg_list: ItemType[] = [
  {
    name: "밀레시안 부츠",
    restrictions: ["105 레벨 이상", "최대 강화 15단계", "최대 품질 5성"],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: "레어",
    category: ["플레이트", "발 방어구"],
    quality_stats: ["방어력", "힘", "민첩", "지능", "의지"],

    set: "밀레시안",
    grinding: true,
  },
  {
    name: "아르드리 부츠",
    restrictions: [
      "110 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: "레어",
    category: ["플레이트", "발 방어구"],
    quality_stats: ["방어력", "힘", "민첩", "지능", "의지"],

    set: "아르드리",
    enhancement_options: leg_level_options.아르드리,
    grinding: true,
  },
  {
    name: "오르나 부츠",
    restrictions: [
      "115 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: "레어",
    category: ["플레이트", "발 방어구"],
    quality_stats: ["방어력", "힘", "민첩", "지능", "의지"],
    set: "오르나",
    slot: "Leg",
    enhancement_options: leg_level_options.오르나,
    grinding: true,
  },
  {
    name: "+15 오르나 부츠",
    restrictions: [
      "115 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    color: false,
    quality: 2,
    quality_selection_available: true,
    rating: "레어",
    category: ["플레이트", "발 방어구"],
    quality_stats: ["방어력", "힘", "민첩", "지능", "의지"],
    set: "오르나",
    enhancement_options: leg_level_options["15오르나"],
    grinding: true,
  },
];
