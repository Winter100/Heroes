import { ItemType } from "@/app/_type/infoInfoType";

export const leg_list: ItemType[] = [
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
    set: "오르나",
    grinding: true,
    stats: [
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "방어력", stat_value: 4338 },
      { stat_name: "파괴시 방어력", stat_value: 3558 },
      { stat_name: "추가피해", stat_value: 750 },
      { stat_name: "크리티컬 저항", stat_value: 29 },
    ],
  },
];
