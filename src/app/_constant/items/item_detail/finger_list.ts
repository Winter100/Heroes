import { ItemType } from "@/app/_type/infoInfoType";
import { createAccessoriesObject } from "@/app/_utils/createAccessoriesObject";

const 균열의공포 = [
  {
    name: "균열의 공포",
    max_stage: 20,
    base_stat: [
      { stat_name: "밸런스", stat_value: 5 },
      { stat_name: "크리티컬", stat_value: 6 },
      { stat_name: "힘", stat_value: 140 },
      { stat_name: "민첩", stat_value: 70 },
      { stat_name: "지능", stat_value: 180 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "최대 생명력", stat_value: 125 },
    ],
    firstAttackIncrease: 12,
    firstDefenseIncrease: 4,
    secondAttackIncrease: 13,
    secondDefenseIncrease: 3,
  },
];
const 어둠속달빛 = [
  {
    name: "어둠 속 달빛",
    max_stage: 20,
    base_stat: [
      { stat_name: "밸런스", stat_value: 5 },
      { stat_name: "크리티컬", stat_value: 6 },
      { stat_name: "힘", stat_value: 140 },
      { stat_name: "민첩", stat_value: 70 },
      { stat_name: "지능", stat_value: 180 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "최대 생명력", stat_value: 125 },
    ],
    firstAttackIncrease: 14,
    firstDefenseIncrease: 4,
    secondAttackIncrease: 14,
    secondDefenseIncrease: 5,
  },
];

export const finger_list: ItemType[] = [
  {
    name: "어둠 속 달빛",
    restrictions: ["115 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "반지"],
    quality_stats: ["힘", "민첩", "지능", "의지"],

    color: true,
    set: "어둠 반지",
    enhancement_options: createAccessoriesObject(어둠속달빛)[0],
  },
  {
    name: "어둠 속 그림자",
    restrictions: ["115 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "반지"],
    quality_stats: ["힘", "민첩", "지능", "의지"],

    color: true,
    set: "어둠 반지",
    enhancement_options: createAccessoriesObject(어둠속달빛)[0],
  },

  {
    name: "균열의 분노",
    restrictions: ["110 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "반지"],
    quality_stats: ["힘", "민첩", "지능", "의지"],
    color: true,
    set: "균열의 반지",
    enhancement_options: createAccessoriesObject(균열의공포)[0],
  },
  {
    name: "균열의 공포",
    restrictions: ["110 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "반지"],
    quality_stats: ["힘", "민첩", "지능", "의지"],
    color: true,
    set: "균열의 반지",
    enhancement_options: createAccessoriesObject(균열의공포)[0],
  },
  {
    name: "황혼의 수호",
    restrictions: ["105 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "반지"],
    quality_stats: ["힘", "민첩", "지능", "의지"],
    color: true,
    set: "황혼의 반지",
  },
  {
    name: "황혼의 칼날",
    restrictions: ["105 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "반지"],
    quality_stats: ["힘", "민첩", "지능", "의지"],
    color: true,
    set: "황혼의 반지",
  },
];
