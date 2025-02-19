import { ItemType } from "@/app/_type/infoInfoType";

export const earring_list: ItemType[] = [
  {
    name: "태양의 비원",
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
  },
  {
    name: "성소의 귀걸이",
    restrictions: ["115 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "귀걸이"],
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
      { stat_name: "크리티컬", stat_value: 7 },
      { stat_name: "힘", stat_value: 125 },
      { stat_name: "민첩", stat_value: 50 },
      { stat_name: "지능", stat_value: 167 },
      { stat_name: "의지", stat_value: 58 },
      { stat_name: "스태미나", stat_value: 4 },
    ],
  },
  {
    name: "차원의 귀걸이",
    restrictions: ["110 레벨 이상"],
    quality: 2,
    quality_selection_available: true,
    rating: "고급",
    category: ["액세서리", "귀걸이"],
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
      { stat_name: "크리티컬", stat_value: 5 },
      { stat_name: "힘", stat_value: 125 },
      { stat_name: "민첩", stat_value: 50 },
      { stat_name: "지능", stat_value: 167 },
      { stat_name: "의지", stat_value: 58 },
      { stat_name: "스태미나", stat_value: 4 },
    ],
  },
];
