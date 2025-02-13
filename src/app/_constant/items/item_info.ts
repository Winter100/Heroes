import { Item_Rating } from "@/app/_type/infoInfoType";

export interface ItemType {
  item_name: string;
  item_restrictions: string[];
  item_quality: number;
  item_rating: Item_Rating;
  item_category: string[];
  item_color: boolean;
  item_set?: string;
  item_grinding?: boolean;
  item_stats: {
    stat_name: string;
    stat_value: number;
  }[];
}
export const item_info: ItemType[] = [
  {
    item_name: "와드네 스몰실드",
    item_restrictions: [
      "피오나 전용",
      "120 레벨 이상",
      "실드 마스터리 6랭크 이상",
    ],
    item_category: ["방패"],
    item_quality: 2,
    item_rating: "레어",
    item_color: false,
    item_stats: [
      { stat_name: "공격력", stat_value: 1410 },
      { stat_name: "마법공격력", stat_value: 1410 },
      { stat_name: "크리티컬", stat_value: 10 },
      { stat_name: "공격속도", stat_value: 3 },
      { stat_name: "방어력", stat_value: 3090 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "크리티컬 저항", stat_value: 17 },
    ],
  },
  {
    item_name: "와드네 라지실드",
    item_restrictions: [
      "피오나 전용",
      "120 레벨 이상",
      "라지실드 마스터리 6랭크 이상",
    ],
    item_category: ["대형방패"],
    item_quality: 2,
    item_rating: "레어",
    item_color: false,
    item_stats: [
      { stat_name: "공격력", stat_value: 1410 },
      { stat_name: "마법공격력", stat_value: 1410 },
      { stat_name: "크리티컬", stat_value: 10 },
      { stat_name: "공격속도", stat_value: 3 },
      { stat_name: "방어력", stat_value: 3530 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "크리티컬 저항", stat_value: 17 },
    ],
  },
  {
    item_name: "와드네 그랜드타지",
    item_restrictions: [
      "아켈 전용",
      "120 레벨 이상",
      "그랜드타지 마스터리 6랭크 이상",
    ],
    item_category: ["그랜드타지"],
    item_quality: 2,
    item_rating: "레어",
    item_color: false,
    item_stats: [
      { stat_name: "공격력", stat_value: 1410 },
      { stat_name: "마법공격력", stat_value: 1410 },
      { stat_name: "크리티컬", stat_value: 10 },
      { stat_name: "공격속도", stat_value: 3 },
      { stat_name: "방어력", stat_value: 3090 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "크리티컬 저항", stat_value: 17 },
    ],
  },
  {
    item_name: "와드네 캐스틀릿",
    item_restrictions: [
      "아리샤 전용",
      "120 레벨 이상",
      "캐스틀릿 마스터리 A랭크 이상",
    ],
    item_category: ["캐스틀릿"],
    item_quality: 2,
    item_rating: "레어",
    item_color: true,

    item_stats: [
      { stat_name: "공격력", stat_value: 1410 },
      { stat_name: "마법공격력", stat_value: 1410 },
      { stat_name: "크리티컬", stat_value: 10 },
      { stat_name: "공격속도", stat_value: 3 },
      { stat_name: "방어력", stat_value: 3090 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "크리티컬 저항", stat_value: 17 },
    ],
  },
  {
    item_name: "와드네의 서",
    item_restrictions: [
      "리시타",
      "이비",
      "카이",
      "벨라",
      "허크",
      "린",
      "헤기",
      "델리아",
      "미리",
      "그림덴",
      "미울",
      "벨",
      "레서",
      "카엘",
      "테사",
      "단아",
      "레티",
      "라티야",
      "체른",
      "소우",
      "사냐",
      "네반",
      "120 레벨 이상",
    ],
    item_category: ["수호부"],
    item_quality: 2,
    item_rating: "레어",
    item_color: true,
    item_stats: [
      { stat_name: "공격력", stat_value: 1410 },
      { stat_name: "마법공격력", stat_value: 1410 },
      { stat_name: "크리티컬", stat_value: 10 },
      { stat_name: "공격속도", stat_value: 3 },
      { stat_name: "방어력", stat_value: 3090 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "크리티컬 저항", stat_value: 17 },
    ],
  },

  {
    item_name: "와드네 무기",
    item_restrictions: [
      "120 레벨 이상",
      "무기 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "일반",
    item_category: ["무기"],
    item_color: false,
    item_set: "와드네",

    item_stats: [
      { stat_name: "공격력", stat_value: 34900 },
      { stat_name: "마법공격력", stat_value: 34900 },
      { stat_name: "밸런스", stat_value: 67 },
      { stat_name: "크리티컬", stat_value: 128 },
      { stat_name: "공격속도", stat_value: 47 },
      { stat_name: "추가피해", stat_value: 3750 },
      { stat_name: "힘", stat_value: 110 },
      { stat_name: "민첩", stat_value: 60 },
      { stat_name: "지능", stat_value: 148 },
      { stat_name: "의지", stat_value: 80 },
    ],
  },
  {
    item_name: "와드네 초급 무기",
    item_restrictions: [
      "120 레벨 이상",
      "무기 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "초급",
    item_category: ["무기"],
    item_color: false,
    item_set: "와드네",
    item_stats: [
      { stat_name: "공격력", stat_value: 35400 },
      { stat_name: "마법공격력", stat_value: 35400 },
      { stat_name: "밸런스", stat_value: 67 },
      { stat_name: "크리티컬", stat_value: 128 },
      { stat_name: "공격속도", stat_value: 47 },
      { stat_name: "추가피해", stat_value: 3850 },
      { stat_name: "힘", stat_value: 110 },
      { stat_name: "민첩", stat_value: 60 },
      { stat_name: "지능", stat_value: 148 },
      { stat_name: "의지", stat_value: 80 },
    ],
  },
  {
    item_name: "와드네 중급 무기",
    item_restrictions: [
      "120 레벨 이상",
      "무기 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "중급",
    item_category: ["무기"],
    item_color: false,
    item_set: "와드네",

    item_stats: [
      { stat_name: "공격력", stat_value: 35900 },
      { stat_name: "마법공격력", stat_value: 35900 },
      { stat_name: "밸런스", stat_value: 67 },
      { stat_name: "크리티컬", stat_value: 128 },
      { stat_name: "공격속도", stat_value: 47 },
      { stat_name: "추가피해", stat_value: 3950 },
      { stat_name: "힘", stat_value: 110 },
      { stat_name: "민첩", stat_value: 60 },
      { stat_name: "지능", stat_value: 148 },
      { stat_name: "의지", stat_value: 80 },
    ],
  },
  {
    item_name: "와드네 고급 무기",
    item_restrictions: [
      "120 레벨 이상",
      "무기 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "고급",
    item_category: ["무기"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "공격력", stat_value: 36400 },
      { stat_name: "마법공격력", stat_value: 36400 },
      { stat_name: "밸런스", stat_value: 67 },
      { stat_name: "크리티컬", stat_value: 128 },
      { stat_name: "공격속도", stat_value: 47 },
      { stat_name: "추가피해", stat_value: 4050 },
      { stat_name: "힘", stat_value: 110 },
      { stat_name: "민첩", stat_value: 60 },
      { stat_name: "지능", stat_value: 148 },
      { stat_name: "의지", stat_value: 80 },
    ],
  },
  {
    item_name: "와드네 헬름",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "일반",
    item_category: ["플레이트", "머리 방어구"],
    item_color: false,
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 750 },
      { stat_name: "방어력", stat_value: 4338 },
      { stat_name: "파괴시 방어력", stat_value: 3904 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 33 },
    ],
  },
  {
    item_name: "와드네 초급 헬름",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "초급",
    item_category: ["플레이트", "머리 방어구"],
    item_color: false,
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 780 },
      { stat_name: "방어력", stat_value: 4448 },
      { stat_name: "파괴시 방어력", stat_value: 4003 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 33 },
    ],
  },
  {
    item_name: "와드네 중급 헬름",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "중급",
    item_category: ["플레이트", "머리 방어구"],
    item_color: false,
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 810 },
      { stat_name: "방어력", stat_value: 4558 },
      { stat_name: "파괴시 방어력", stat_value: 4102 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 33 },
    ],
  },
  {
    item_name: "와드네 고급 헬름",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "고급",
    item_category: ["플레이트", "머리 방어구"],
    item_color: false,
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 840 },
      { stat_name: "방어력", stat_value: 4668 },
      { stat_name: "파괴시 방어력", stat_value: 4201 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 33 },
    ],
  },
  {
    item_name: "와드네 레어 헬름",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "머리 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 870 },
      { stat_name: "방어력", stat_value: 4778 },
      { stat_name: "파괴시 방어력", stat_value: 4300 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 33 },
    ],
  },
  {
    item_name: "와드네 전설 헬름",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "전설",
    item_category: ["플레이트", "머리 방어구"],
    item_color: false,
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 900 },
      { stat_name: "방어력", stat_value: 4888 },
      { stat_name: "파괴시 방어력", stat_value: 4399 },
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 33 },
    ],
  },

  {
    item_name: "와드네 메일",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "일반",
    item_set: "와드네",

    item_category: ["플레이트", "가슴 방어구"],
    item_stats: [
      { stat_name: "추가피해", stat_value: 750 },
      { stat_name: "방어력", stat_value: 4508 },
      { stat_name: "파괴시 방어력", stat_value: 4057 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 44 },
    ],
  },
  {
    item_name: "와드네 초급 메일",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "초급",
    item_category: ["플레이트", "가슴 방어구"],
    item_set: "와드네",

    item_color: false,
    item_stats: [
      { stat_name: "추가피해", stat_value: 780 },
      { stat_name: "방어력", stat_value: 4618 },
      { stat_name: "파괴시 방어력", stat_value: 4156 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 44 },
    ],
  },
  {
    item_name: "와드네 중급 메일",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "중급",
    item_category: ["플레이트", "가슴 방어구"],
    item_set: "와드네",

    item_color: false,
    item_stats: [
      { stat_name: "추가피해", stat_value: 810 },
      { stat_name: "방어력", stat_value: 4728 },
      { stat_name: "파괴시 방어력", stat_value: 4255 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 44 },
    ],
  },
  {
    item_name: "와드네 고급 메일",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "고급",
    item_category: ["플레이트", "가슴 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 840 },
      { stat_name: "방어력", stat_value: 4838 },
      { stat_name: "파괴시 방어력", stat_value: 4354 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 44 },
    ],
  },
  {
    item_name: "와드네 레어 메일",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "가슴 방어구"],
    item_set: "와드네",

    item_color: false,
    item_stats: [
      { stat_name: "추가피해", stat_value: 870 },
      { stat_name: "방어력", stat_value: 4948 },
      { stat_name: "파괴시 방어력", stat_value: 4453 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 44 },
    ],
  },
  {
    item_name: "와드네 전설 메일",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "전설",
    item_category: ["플레이트", "가슴 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 900 },
      { stat_name: "방어력", stat_value: 5058 },
      { stat_name: "파괴시 방어력", stat_value: 4552 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 44 },
    ],
  },

  {
    item_name: "와드네 그리브즈",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "일반",
    item_category: ["플레이트", "다리 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 750 },
      { stat_name: "방어력", stat_value: 4293 },
      { stat_name: "파괴시 방어력", stat_value: 3863 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 52 },
    ],
  },
  {
    item_name: "와드네 초급 그리브즈",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "초급",
    item_category: ["플레이트", "다리 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 780 },
      { stat_name: "방어력", stat_value: 4403 },
      { stat_name: "파괴시 방어력", stat_value: 3962 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 52 },
    ],
  },
  {
    item_name: "와드네 중급 그리브즈",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "중급",
    item_category: ["플레이트", "다리 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 810 },
      { stat_name: "방어력", stat_value: 4513 },
      { stat_name: "파괴시 방어력", stat_value: 4061 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 52 },
    ],
  },
  {
    item_name: "와드네 고급 그리브즈",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "고급",
    item_category: ["플레이트", "다리 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 840 },
      { stat_name: "방어력", stat_value: 4623 },
      { stat_name: "파괴시 방어력", stat_value: 4160 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 52 },
    ],
  },
  {
    item_name: "와드네 레어 그리브즈",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "다리 방어구"],
    item_set: "와드네",
    item_stats: [
      { stat_name: "추가피해", stat_value: 870 },
      { stat_name: "방어력", stat_value: 4733 },
      { stat_name: "파괴시 방어력", stat_value: 4259 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 52 },
    ],
  },
  {
    item_name: "와드네 전설 그리브즈",
    item_restrictions: [
      "120 레벨 이상",
      "방어구 마스터리 5랭크 이상",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "전설",
    item_category: ["플레이트", "다리 방어구"],
    item_set: "와드네",

    item_stats: [
      { stat_name: "추가피해", stat_value: 900 },
      { stat_name: "방어력", stat_value: 4843 },
      { stat_name: "파괴시 방어력", stat_value: 4358 },
      { stat_name: "힘", stat_value: 225 },
      { stat_name: "민첩", stat_value: 113 },
      { stat_name: "지능", stat_value: 304 },
      { stat_name: "의지", stat_value: 100 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "크리티컬 저항", stat_value: 52 },
    ],
  },

  {
    item_name: "+15 오르나 무기",
    item_restrictions: [
      "115 레벨 이상",
      "무기 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["무기"],
    item_set: "오르나",
    item_grinding: true,
    item_stats: [
      { stat_name: "공격력", stat_value: 34900 },
      { stat_name: "마법공격력", stat_value: 34900 },
      { stat_name: "밸런스", stat_value: 59 },
      { stat_name: "크리티컬", stat_value: 120 },
      { stat_name: "공격속도", stat_value: 47 },
      { stat_name: "추가피해", stat_value: 3750 },
      { stat_name: "힘", stat_value: 110 },
      { stat_name: "민첩", stat_value: 60 },
      { stat_name: "지능", stat_value: 148 },
      { stat_name: "의지", stat_value: 80 },
    ],
  },
  // {
  //   item_name: "+15 오르나 무기",
  //   item_restrictions: [
  //     "115 레벨 이상",
  //     "무기 마스터리 6랭크 이상",
  //     "최대 강화 15단계",
  //     "최대 품질 5성",
  //   ],
  //   item_color: false,
  //   item_quality: 2,
  //   item_rating: "레어",
  //   item_category: ["무기"],
  //   item_set: "오르나",
  //   item_grinding: true,
  //   item_stats: [
  //     { stat_name: "공격력", stat_value: 32744 },
  //     { stat_name: "마법공격력", stat_value: 32744 },
  //     { stat_name: "밸런스", stat_value: 52 },
  //     { stat_name: "크리티컬", stat_value: 105 },
  //     { stat_name: "공격속도", stat_value: 7 },
  //     { stat_name: "힘", stat_value: 110 },
  //     { stat_name: "민첩", stat_value: 60 },
  //     { stat_name: "지능", stat_value: 148 },
  //     { stat_name: "의지", stat_value: 80 },
  //   ],
  // },
  {
    item_name: "+15 오르나 헬름",
    item_restrictions: [
      "115 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "머리 방어구"],
    item_set: "오르나",
    item_grinding: true,
    item_stats: [
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
  // {
  //   item_name: "+15 오르나 헬름",
  //   item_restrictions: [
  //     "115 레벨 이상",
  //     "방어구 마스터리 6랭크 이상",
  //     "최대 강화 15단계",
  //     "최대 품질 5성",
  //   ],
  //   item_color: false,
  //   item_quality: 2,
  //   item_rating: "레어",
  //   item_category: ["플레이트", "머리 방어구"],
  //   item_set: "오르나",
  //   item_grinding: true,
  //   item_stats: [
  //     { stat_name: "힘", stat_value: 180 },
  //     { stat_name: "지능", stat_value: 243 },
  //     { stat_name: "민첩", stat_value: 90 },
  //     { stat_name: "의지", stat_value: 80 },
  //     { stat_name: "생명력", stat_value: 500 },
  //     { stat_name: "방어력", stat_value: 3833 },
  //     { stat_name: "파괴시 방어력", stat_value: 3104 },
  //     { stat_name: "추가피해", stat_value: 750 },
  //     { stat_name: "크리티컬 저항", stat_value: 23 },
  //   ],
  // },
  {
    item_name: "+15 오르나 메일",
    item_restrictions: [
      "115 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "가슴 방어구"],
    item_set: "오르나",
    item_grinding: true,
    item_stats: [
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "방어력", stat_value: 4508 },
      { stat_name: "파괴시 방어력", stat_value: 3711 },
      { stat_name: "추가피해", stat_value: 750 },
      { stat_name: "크리티컬 저항", stat_value: 39 },
    ],
  },
  // {
  //   item_name: "+15 오르나 메일",
  //   item_restrictions: [
  //     "115 레벨 이상",
  //     "방어구 마스터리 6랭크 이상",
  //     "최대 강화 15단계",
  //     "최대 품질 5성",
  //   ],
  //   item_color: false,
  //   item_quality: 2,
  //   item_rating: "레어",
  //   item_category: ["플레이트", "가슴 방어구"],
  //   item_set: "오르나",
  //   item_grinding: true,
  //   item_stats: [
  //     { stat_name: "힘", stat_value: 180 },
  //     { stat_name: "지능", stat_value: 243 },
  //     { stat_name: "민첩", stat_value: 90 },
  //     { stat_name: "의지", stat_value: 80 },
  //     { stat_name: "생명력", stat_value: 500 },
  //     { stat_name: "방어력", stat_value: 4017 },
  //     { stat_name: "파괴시 방어력", stat_value: 3269 },
  //     { stat_name: "추가피해", stat_value: 750 },
  //     { stat_name: "크리티컬 저항", stat_value: 29 },
  //   ],
  // },
  {
    item_name: "+15 오르나 그리브즈",
    item_restrictions: [
      "115 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "다리 방어구"],
    item_set: "오르나",
    item_grinding: true,
    item_stats: [
      { stat_name: "힘", stat_value: 180 },
      { stat_name: "지능", stat_value: 243 },
      { stat_name: "민첩", stat_value: 90 },
      { stat_name: "의지", stat_value: 80 },
      { stat_name: "생명력", stat_value: 500 },
      { stat_name: "방어력", stat_value: 4293 },
      { stat_name: "파괴시 방어력", stat_value: 3518 },
      { stat_name: "추가피해", stat_value: 750 },
      { stat_name: "크리티컬 저항", stat_value: 46 },
    ],
  },
  // {
  //   item_name: "+15 오르나 그리브즈",
  //   item_restrictions: [
  //     "115 레벨 이상",
  //     "방어구 마스터리 6랭크 이상",
  //     "최대 강화 15단계",
  //     "최대 품질 5성",
  //   ],
  //   item_color: false,
  //   item_quality: 2,
  //   item_rating: "레어",
  //   item_category: ["플레이트", "다리 방어구"],
  //   item_set: "오르나",
  //   item_grinding: true,
  //   item_stats: [
  //     { stat_name: "힘", stat_value: 180 },
  //     { stat_name: "지능", stat_value: 243 },
  //     { stat_name: "민첩", stat_value: 90 },
  //     { stat_name: "의지", stat_value: 80 },
  //     { stat_name: "생명력", stat_value: 500 },
  //     { stat_name: "방어력", stat_value: 3826 },
  //     { stat_name: "파괴시 방어력", stat_value: 3097 },
  //     { stat_name: "추가피해", stat_value: 750 },
  //     { stat_name: "크리티컬 저항", stat_value: 33 },
  //   ],
  // },
  {
    item_name: "+15 오르나 건틀릿",
    item_restrictions: [
      "115 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "손 방어구"],
    item_set: "오르나",
    item_grinding: true,
    item_stats: [
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
  // {
  //   item_name: "+15 오르나 건틀릿",
  //   item_restrictions: [
  //     "115 레벨 이상",
  //     "방어구 마스터리 6랭크 이상",
  //     "최대 강화 15단계",
  //     "최대 품질 5성",
  //   ],
  //   item_color: false,
  //   item_quality: 2,
  //   item_rating: "레어",
  //   item_category: ["플레이트", "손 방어구"],
  //   item_set: "오르나",
  //   item_grinding: true,
  //   item_stats: [
  //     { stat_name: "힘", stat_value: 180 },
  //     { stat_name: "지능", stat_value: 243 },
  //     { stat_name: "민첩", stat_value: 90 },
  //     { stat_name: "의지", stat_value: 80 },
  //     { stat_name: "생명력", stat_value: 500 },
  //     { stat_name: "방어력", stat_value: 3833 },
  //     { stat_name: "파괴시 방어력", stat_value: 3104 },
  //     { stat_name: "추가피해", stat_value: 750 },
  //     { stat_name: "크리티컬 저항", stat_value: 23 },
  //   ],
  // },
  {
    item_name: "+15 오르나 부츠",
    item_restrictions: [
      "115 레벨 이상",
      "방어구 마스터리 6랭크 이상",
      "최대 강화 15단계",
      "최대 품질 5성",
    ],
    item_color: false,
    item_quality: 2,
    item_rating: "레어",
    item_category: ["플레이트", "발 방어구"],
    item_set: "오르나",
    item_grinding: true,
    item_stats: [
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
  // {
  //   item_name: "+15 오르나 부츠",
  //   item_restrictions: [
  //     "115 레벨 이상",
  //     "방어구 마스터리 6랭크 이상",
  //     "최대 강화 15단계",
  //     "최대 품질 5성",
  //   ],
  //   item_color: false,
  //   item_quality: 2,
  //   item_rating: "레어",
  //   item_category: ["플레이트", "발 방어구"],
  //   item_set: "오르나",
  //   item_grinding: true,
  //   item_stats: [
  //     { stat_name: "힘", stat_value: 180 },
  //     { stat_name: "지능", stat_value: 243 },
  //     { stat_name: "민첩", stat_value: 90 },
  //     { stat_name: "의지", stat_value: 80 },
  //     { stat_name: "생명력", stat_value: 500 },
  //     { stat_name: "방어력", stat_value: 3833 },
  //     { stat_name: "파괴시 방어력", stat_value: 3104 },
  //     { stat_name: "추가피해", stat_value: 750 },
  //     { stat_name: "크리티컬 저항", stat_value: 23 },
  //   ],
  // },

  {
    item_name: "태양의 비원",
    item_restrictions: ["120 레벨 이상"],
    item_quality: 2,
    item_rating: "고급",
    item_category: ["액세서리", "귀걸이"],
    item_color: true,
    item_stats: [
      { stat_name: "크리티컬", stat_value: 11 },
      { stat_name: "힘", stat_value: 125 },
      { stat_name: "지능", stat_value: 167 },
      { stat_name: "민첩", stat_value: 50 },
      { stat_name: "의지", stat_value: 58 },
      { stat_name: "스태미나", stat_value: 4 },
    ],
  },
  {
    item_name: "저주의 허리띠",
    item_restrictions: ["120 레벨 이상"],
    item_quality: 2,
    item_rating: "고급",
    item_category: ["액세서리", "귀걸이"],
    item_color: true,
    item_stats: [
      { stat_name: "밸런스", stat_value: 12 },
      { stat_name: "힘", stat_value: 145 },
      { stat_name: "지능", stat_value: 193 },
      { stat_name: "민첩", stat_value: 95 },
      { stat_name: "의지", stat_value: 105 },
    ],
  },
];

export const item_set_bonus = [
  {
    item_name: "오르나",
    item_set_list: [
      "오르나 무기",
      "오르나 머리 방어구",
      "오르나 가슴 방어구",
      "오르나 다리 방어구",
      "오르나 손 방어구",
      "오르나 발 방어구",
    ],
    item_set_bonus: [
      { level: 1, stat_bonus: [{ stat_name: "밸런스", stat_value: 1 }] },
      { level: 2, stat_bonus: [{ stat_name: "밸런스", stat_value: 2 }] },
      {
        level: 3,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 3 },
          { stat_name: "방어력", stat_value: 415 },
          { stat_name: "힘", stat_value: 95 },
          { stat_name: "지능", stat_value: 131 },
          { stat_name: "생명력", stat_value: 370 },
          { stat_name: "스태미나", stat_value: 5 },
        ],
      },
      {
        level: 4,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 4 },
          { stat_name: "방어력", stat_value: 470 },
          { stat_name: "힘", stat_value: 115 },
          { stat_name: "지능", stat_value: 158 },
          { stat_name: "생명력", stat_value: 410 },
          { stat_name: "스태미나", stat_value: 6 },
        ],
      },
      {
        level: 5,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 6 },
          { stat_name: "방어력", stat_value: 525 },
          { stat_name: "힘", stat_value: 135 },
          { stat_name: "지능", stat_value: 185 },
          { stat_name: "생명력", stat_value: 450 },
          { stat_name: "스태미나", stat_value: 7 },
        ],
      },
      {
        level: 6,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 8 },
          { stat_name: "방어력", stat_value: 580 },
          { stat_name: "힘", stat_value: 155 },
          { stat_name: "지능", stat_value: 209 },
          { stat_name: "생명력", stat_value: 490 },
          { stat_name: "스태미나", stat_value: 10 },
        ],
      },
    ],
  },
  {
    item_name: "와드네",
    item_set_list: [
      "와드네 무기",
      "와드네 머리 방어구",
      "와드네 가슴 방어구",
      "와드네 다리 방어구",
      "와드네 손 방어구",
      "와드네 발 방어구",
    ],
    item_set_bonus: [
      { level: 1, stat_bonus: [{ stat_name: "밸런스", stat_value: 2 }] },
      { level: 2, stat_bonus: [{ stat_name: "밸런스", stat_value: 4 }] },
      {
        level: 3,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 5 },
          { stat_name: "방어력", stat_value: 450 },
          { stat_name: "힘", stat_value: 95 },
          { stat_name: "지능", stat_value: 131 },
          { stat_name: "생명력", stat_value: 370 },
          { stat_name: "스태미나", stat_value: 5 },
        ],
      },
      {
        level: 4,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 6 },
          { stat_name: "방어력", stat_value: 510 },
          { stat_name: "힘", stat_value: 115 },
          { stat_name: "지능", stat_value: 158 },
          { stat_name: "생명력", stat_value: 410 },
          { stat_name: "스태미나", stat_value: 6 },
        ],
      },
      {
        level: 5,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 8 },
          { stat_name: "방어력", stat_value: 570 },
          { stat_name: "힘", stat_value: 135 },
          { stat_name: "지능", stat_value: 185 },
          { stat_name: "생명력", stat_value: 450 },
          { stat_name: "스태미나", stat_value: 7 },
        ],
      },
      {
        level: 6,
        stat_bonus: [
          { stat_name: "밸런스", stat_value: 10 },
          { stat_name: "방어력", stat_value: 630 },
          { stat_name: "힘", stat_value: 155 },
          { stat_name: "지능", stat_value: 209 },
          { stat_name: "생명력", stat_value: 490 },
          { stat_name: "스태미나", stat_value: 10 },
        ],
      },
    ],
  },
];
