import { ItemType } from "@/app/_type/infoInfoType";

export const belt_list: ItemType[] = [
  {
    name: "어둠의 허리띠",
    restrictions: ["110 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "벨트"],
    color: true,
    enhancement_info: {
      attack: {
        first_increase: 12,
        second_increase: 13,
      },
      defense: {
        first_increase: 4,
        second_increase: 3,
      },
    },
    stats: [
      { stat_name: "밸런스", stat_value: 6 },
      { stat_name: "힘", stat_value: 145 },
      { stat_name: "민첩", stat_value: 95 },
      { stat_name: "지능", stat_value: 193 },
      { stat_name: "의지", stat_value: 105 },
    ],
  },
  {
    name: "투쟁의 허리띠",
    restrictions: ["115 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "벨트"],
    color: true,
    enhancement_info: {
      attack: {
        first_increase: 14,
        second_increase: 14,
      },
      defense: {
        first_increase: 4,
        second_increase: 5,
      },
    },
    stats: [
      { stat_name: "밸런스", stat_value: 8 },
      { stat_name: "힘", stat_value: 145 },
      { stat_name: "민첩", stat_value: 95 },
      { stat_name: "지능", stat_value: 193 },
      { stat_name: "의지", stat_value: 105 },
    ],
  },
  {
    name: "저주의 허리띠",
    restrictions: ["120 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "귀걸이"],
    color: true,
    enhancement_info: {
      attack: {
        first_increase: 15,
        second_increase: 15,
      },
      defense: {
        first_increase: 6,
        second_increase: 5,
      },
    },
    stats: [
      { stat_name: "밸런스", stat_value: 12 },
      { stat_name: "힘", stat_value: 145 },
      { stat_name: "민첩", stat_value: 95 },
      { stat_name: "지능", stat_value: 193 },
      { stat_name: "의지", stat_value: 105 },
    ],
  },
];
