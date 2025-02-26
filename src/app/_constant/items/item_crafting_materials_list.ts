// export interface CraftingType {
//   item_category: string;
//   item_list: ItemListType[];
// }

export interface ItemListType {
  item_name: string;
  item_crafting: string[];
  item_category: string;
  item_materials: MaterialsType[];
}

export interface MaterialsType {
  item_name: string;
  item_quantity: number;
  item_description?: string;
}

export const item_crafting_materials_list: ItemListType[] = [
  {
    item_name: "+15 오르나 무기",
    item_crafting: [""],
    item_category: "장비",
    item_materials: [{ item_name: "", item_quantity: 0 }],
  },
  {
    item_name: "+15 오르나 헬름",
    item_crafting: [""],
    item_category: "장비",
    item_materials: [{ item_name: "", item_quantity: 0 }],
  },
  {
    item_name: "+15 오르나 메일",
    item_crafting: [""],
    item_category: "장비",
    item_materials: [{ item_name: "", item_quantity: 0 }],
  },
  {
    item_name: "+15 오르나 그리브즈",
    item_crafting: [""],
    item_category: "장비",
    item_materials: [{ item_name: "", item_quantity: 0 }],
  },
  {
    item_name: "+15 오르나 건틀릿",
    item_crafting: [""],
    item_category: "장비",
    item_materials: [{ item_name: "", item_quantity: 0 }],
  },
  {
    item_name: "+15 오르나 부츠",
    item_crafting: [""],
    item_category: "장비",
    item_materials: [{ item_name: "", item_quantity: 0 }],
  },
  {
    item_name: "와드네 스몰실드",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      { item_name: "스렝의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 보조 장비", item_quantity: 2 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
    ],
  },
  {
    item_name: "와드네 라지실드",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      { item_name: "스렝의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 보조 장비", item_quantity: 2 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
    ],
  },
  {
    item_name: "와드네 그랜드타지",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      { item_name: "스렝의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 보조 장비", item_quantity: 2 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
    ],
  },
  {
    item_name: "와드네 캐스틀릿",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      { item_name: "스렝의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 보조 장비", item_quantity: 2 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
    ],
  },
  {
    item_name: "와드네의 서",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      { item_name: "스렝의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 보조 장비", item_quantity: 2 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
    ],
  },
  {
    item_name: "와드네 무기",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      {
        item_name: "+15 오르나 무기",
        item_description: "해제를 제외한 모든 능력치를 최대한 연마",
        item_quantity: 1,
      },
      { item_name: "스렝의 정수", item_quantity: 4 },
      { item_name: "와드네의 파편: 무기", item_quantity: 2 },
      { item_name: "예리한 와드네의 결정", item_quantity: 10 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      {
        item_name: "추출의 룬",
        item_quantity: 1,
        item_description: "선택 재료",
      },
    ],
  },
  {
    item_name: "초급 와드네 무기",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1000000 },
      {
        item_name: "와드네 무기",
        item_quantity: 1,
      },
      { item_name: "스렝의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 무기", item_quantity: 1 },
      {
        item_name: "예리한 와드네의 결정",
        item_quantity: 10,
      },
      {
        item_name: "자르딘 강철",
        item_quantity: 15,
      },
      { item_name: "와드네 승급석: 무기", item_quantity: 1 },
      {
        item_name: "프리미엄 강화의 룬",
        item_quantity: 2,
      },
    ],
  },
  {
    item_name: "중급 와드네 무기",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1500000 },
      {
        item_name: "초급 와드네 무기",
        item_quantity: 1,
      },
      { item_name: "스피노스의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 무기", item_quantity: 2 },
      {
        item_name: "예리한 와드네의 결정",
        item_quantity: 10,
      },
      {
        item_name: "가벼운 와드네의 결정",
        item_quantity: 10,
      },

      {
        item_name: "고급 강화의 비약",
        item_quantity: 10,
      },
      {
        item_name: "자르딘 강철",
        item_quantity: 33,
      },
      { item_name: "와드네 승급석: 무기", item_quantity: 2 },
      {
        item_name: "프리미엄 강화의 룬",
        item_quantity: 2,
      },
    ],
  },
  {
    item_name: "고급 와드네 무기",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 2250000 },
      {
        item_name: "중급 와드네 무기",
        item_quantity: 1,
      },
      { item_name: "고르바스의 정수", item_quantity: 3 },
      { item_name: "와드네의 파편: 무기", item_quantity: 3 },
      {
        item_name: "예리한 와드네의 결정",
        item_quantity: 10,
      },
      {
        item_name: "가벼운 와드네의 결정",
        item_quantity: 10,
      },
      {
        item_name: "안정된 와드네의 결정",
        item_quantity: 10,
      },

      {
        item_name: "고급 강화의 비약",
        item_quantity: 25,
      },
      {
        item_name: "자르딘 강철",
        item_quantity: 72,
      },
      { item_name: "와드네 승급석: 무기", item_quantity: 3 },
      {
        item_name: "+ 프리미엄 강화의 룬",
        item_quantity: 1,
      },
    ],
  },
  {
    item_name: "와드네 헬름",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      {
        item_name: "+15 오르나 헬름",
        item_quantity: 1,
        item_description: "해제를 제외한 모든 능력치를 최대한 연마",
      },
      { item_name: "스렝의 정수", item_quantity: 4 },
      { item_name: "와드네의 파편: 머리 방어구", item_quantity: 2 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      {
        item_name: "추출의 룬",
        item_quantity: 1,
        item_description: "선택 재료",
      },
    ],
  },
  {
    item_name: "초급 와드네 헬름",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 500000 },
      { item_name: "와드네 헬름", item_quantity: 1 },

      { item_name: "스렝의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
      { item_name: "단단한 와드네의 결정", item_quantity: 5 },
      { item_name: "자르딘 강철", item_quantity: 5 },
      { item_name: "와드네 승급석: 머리 방어구", item_quantity: 1 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
    ],
  },
  {
    item_name: "중급 와드네 헬름",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 750000 },
      { item_name: "초급 와드네 헬름", item_quantity: 1 },

      { item_name: "스렝의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
      { item_name: "단단한 와드네의 결정", item_quantity: 5 },
      { item_name: "자르딘 강철", item_quantity: 11 },
      { item_name: "고급 강화의 비약", item_quantity: 5 },
      { item_name: "와드네 승급석: 머리 방어구", item_quantity: 1 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
    ],
  },
  {
    item_name: "고급 와드네 헬름",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1150000 },
      { item_name: "중급 와드네 헬름", item_quantity: 1 },

      { item_name: "스렝의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 24 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      { item_name: "와드네 승급석: 머리 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "레어 와드네 헬름",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1700000 },
      { item_name: "고급 와드네 헬름", item_quantity: 1 },

      { item_name: "스렝의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 53 },
      { item_name: "고급 강화의 비약", item_quantity: 14 },
      { item_name: "와드네 승급석: 머리 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "전설 와드네 헬름",
    item_crafting: ["승급"],
    item_category: "장비",

    item_materials: [
      { item_name: "골드", item_quantity: 2500000 },
      { item_name: "레어 와드네 헬름", item_quantity: 1 },

      { item_name: "스렝의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 117 },
      { item_name: "고급 강화의 비약", item_quantity: 30 },
      { item_name: "와드네 승급석: 머리 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "와드네 메일",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      {
        item_name: "+15 오르나 메일",
        item_description: "해제를 제외한 모든 능력치를 최대한 연마",
        item_quantity: 1,
      },
      { item_name: "고르바스의 정수", item_quantity: 4 },
      { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 2 },

      { item_name: "견고한 와드네의 결정", item_quantity: 10 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      {
        item_name: "추출의 룬",
        item_description: "선택 재료",
        item_quantity: 1,
      },
    ],
  },
  {
    item_name: "초급 와드네 메일",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 500000 },
      { item_name: "와드네 메일", item_quantity: 1 },
      { item_name: "고르바스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
      { item_name: "견고한 와드네의 결정", item_quantity: 5 },
      { item_name: "자르딘 강철", item_quantity: 5 },
      { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 1 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
    ],
  },
  {
    item_name: "중급 와드네 메일",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 750000 },
      { item_name: "초급 와드네 메일", item_quantity: 1 },

      { item_name: "고르바스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
      { item_name: "견고한 와드네의 결정", item_quantity: 5 },
      { item_name: "자르딘 강철", item_quantity: 11 },
      { item_name: "고급 강화의 비약", item_quantity: 5 },
      { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 1 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
    ],
  },
  {
    item_name: "고급 와드네 메일",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1150000 },
      { item_name: "중급 와드네 메일", item_quantity: 1 },
      { item_name: "고르바스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
      { item_name: "견고한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 24 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "레어 와드네 메일",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1700000 },
      { item_name: "고급 와드네 메일", item_quantity: 1 },
      { item_name: "고르바스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
      { item_name: "견고한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 53 },
      { item_name: "고급 강화의 비약", item_quantity: 14 },
      { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "전설 와드네 메일",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 2500000 },
      { item_name: "레어 와드네 메일", item_quantity: 1 },
      { item_name: "고르바스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
      { item_name: "견고한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 117 },
      { item_name: "고급 강화의 비약", item_quantity: 30 },
      { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "와드네 그리브즈",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      {
        item_name: "+15 오르나 그리브즈",
        item_quantity: 1,
        item_description: "해제를 제외한 모든 능력치를 최대한 연마",
      },
      { item_name: "스피노스의 정수", item_quantity: 4 },
      { item_name: "와드네의 파편: 다리 방어구", item_quantity: 2 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      {
        item_name: "추출의 룬",
        item_quantity: 1,
        item_description: "선택 재료",
      },
    ],
  },
  {
    item_name: "초급 와드네 그리브즈",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 500000 },
      { item_name: "와드네 그리브즈", item_quantity: 1 },
      { item_name: "스피노스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 5 },
      { item_name: "자르딘 강철", item_quantity: 5 },
      { item_name: "와드네 승급석: 다리 방어구", item_quantity: 1 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
    ],
  },
  {
    item_name: "중급 와드네 그리브즈",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 750000 },
      { item_name: "초급 와드네 그리브즈", item_quantity: 1 },
      { item_name: "스피노스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 5 },
      { item_name: "자르딘 강철", item_quantity: 11 },
      { item_name: "고급 강화의 비약", item_quantity: 5 },
      { item_name: "와드네 승급석: 다리 방어구", item_quantity: 1 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
    ],
  },
  {
    item_name: "고급 와드네 그리브즈",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1150000 },
      { item_name: "중급 와드네 그리브즈", item_quantity: 1 },
      { item_name: "스피노스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 24 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      { item_name: "와드네 승급석: 다리 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "레어 와드네 그리브즈",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 1700000 },
      { item_name: "고급 와드네 그리브즈", item_quantity: 1 },
      { item_name: "스피노스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 53 },
      { item_name: "고급 강화의 비약", item_quantity: 14 },
      { item_name: "와드네 승급석: 다리 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "전설 와드네 그리브즈",
    item_crafting: ["승급"],
    item_category: "장비",
    item_materials: [
      { item_name: "골드", item_quantity: 2500000 },
      { item_name: "레어 와드네 그리브즈", item_quantity: 1 },
      { item_name: "스피노스의 정수", item_quantity: 1 },
      { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
      { item_name: "자르딘 강철", item_quantity: 117 },
      { item_name: "고급 강화의 비약", item_quantity: 30 },
      { item_name: "와드네 승급석: 다리 방어구", item_quantity: 2 },
      { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "태양의 비원",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      { item_name: "스피노스의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 태양의 비원", item_quantity: 2 },
      { item_name: "단단한 와드네의 결정", item_quantity: 10 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
      { item_name: "힘이 주입된 뉴에라의 오브", item_quantity: 35 },
      { item_name: "힘이 주입된 뉴에라의 옷감", item_quantity: 20 },
      { item_name: "힘이 주입된 뉴에라의 광석", item_quantity: 60 },
    ],
  },
  {
    item_name: "저주의 허리띠",
    item_crafting: ["전문기술"],
    item_category: "장비",
    item_materials: [
      { item_name: "고르바스의 정수", item_quantity: 2 },
      { item_name: "와드네의 파편: 저주의 허리띠", item_quantity: 2 },
      { item_name: "견고한 와드네의 결정", item_quantity: 10 },
      { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
      { item_name: "힘이 주입된 뉴에라의 오브", item_quantity: 35 },
      { item_name: "힘이 주입된 뉴에라의 가죽", item_quantity: 25 },
      { item_name: "힘이 주입된 뉴에라의 광석", item_quantity: 60 },
    ],
  },

  {
    item_name: "상급 생명력 포션",
    item_crafting: ["제작의뢰"],
    item_category: "소모품",
    item_materials: [
      { item_name: "골드", item_quantity: 2000 },
      { item_name: "빈 병", item_quantity: 10 },
      { item_name: "생명의 에르그 결정", item_quantity: 5 },
    ],
  },
  {
    item_name: "고급 생명력 포션",
    item_crafting: ["제작의뢰"],
    item_category: "소모품",
    item_materials: [
      { item_name: "골드", item_quantity: 6000 },
      { item_name: "빈 병", item_quantity: 10 },
      { item_name: "생명의 에르그 결정", item_quantity: 10 },
    ],
  },
  {
    item_name: "최고급 생명력 포션",
    item_crafting: ["제작의뢰"],
    item_category: "소모품",
    item_materials: [
      { item_name: "골드", item_quantity: 16000 },
      { item_name: "빈 병", item_quantity: 10 },
      { item_name: "생명의 에르그 결정", item_quantity: 10 },
      { item_name: "오브", item_quantity: 5 },
      { item_name: "마법 가루", item_quantity: 10 },
    ],
  },
  {
    item_name: "최고급 강화석",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 800 },
      { item_name: "마나 더스트", item_quantity: 7 },
      { item_name: "마나 리포머", item_quantity: 5 },
      { item_name: "고급 철광석", item_quantity: 2 },
    ],
  },
  {
    item_name: "낙원의 강화석",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 3000 },
      { item_name: "최고급 강화석", item_quantity: 10 },
      { item_name: "정령의 흔적", item_quantity: 2 },
      { item_name: "불의 흔적", item_quantity: 2 },
      { item_name: "대지의 흔적", item_quantity: 2 },
      { item_name: "냉기의 흔적", item_quantity: 2 },
      { item_name: "생명의 흔적", item_quantity: 2 },
    ],
  },

  {
    item_name: "마법력 엘릭서",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 950 },
      { item_name: "마법 가루", item_quantity: 5 },
    ],
  },
  {
    item_name: "생명의 마법력 엘릭서",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 950 },
      { item_name: "생명의 에르그 결정", item_quantity: 3 },
    ],
  },
  {
    item_name: "축복의 마법력 엘릭서",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 1700 },
      { item_name: "마법 가루", item_quantity: 5 },
      { item_name: "축복받은 마법 가루", item_quantity: 5 },
    ],
  },
  {
    item_name: "축복받은 마법 가루",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 800 },
      { item_name: "마법 가루", item_quantity: 3 },
      { item_name: "정령의 흔적", item_quantity: 1 },
    ],
  },
  {
    item_name: "자르딘 강철",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 50000 },
      { item_name: "다마스쿠스 강철", item_quantity: 3 },
    ],
  },
  {
    item_name: "와드네 승급석: 무기",
    item_crafting: ["전문기술"],
    item_category: "재료",
    item_materials: [
      { item_name: "와드네의 파편: 무기", item_quantity: 1 },
      { item_name: "고급 강화의 비약", item_quantity: 20 },
      { item_name: "봉인의 힘: 파편", item_quantity: 100 },
      { item_name: "전승의 힘: 파편", item_quantity: 100 },
      { item_name: "+ 게브네의 강화석", item_quantity: 2 },
    ],
  },
  {
    item_name: "와드네 승급석: 머리 방어구",
    item_crafting: ["전문기술"],
    item_category: "재료",
    item_materials: [
      { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      { item_name: "봉인의 힘: 파편", item_quantity: 100 },
      { item_name: "전승의 힘: 파편", item_quantity: 100 },
      { item_name: "게브네의 강화석", item_quantity: 3 },
    ],
  },
  {
    item_name: "와드네 승급석: 가슴 방어구",
    item_crafting: ["전문기술"],
    item_category: "재료",
    item_materials: [
      { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      { item_name: "봉인의 힘: 파편", item_quantity: 100 },
      { item_name: "전승의 힘: 파편", item_quantity: 100 },
      { item_name: "게브네의 강화석", item_quantity: 3 },
    ],
  },
  {
    item_name: "와드네 승급석: 다리 방어구",
    item_crafting: ["전문기술"],
    item_category: "재료",
    item_materials: [
      { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
      { item_name: "고급 강화의 비약", item_quantity: 10 },
      { item_name: "봉인의 힘: 파편", item_quantity: 100 },
      { item_name: "전승의 힘: 파편", item_quantity: 100 },
      { item_name: "게브네의 강화석", item_quantity: 3 },
    ],
  },
  {
    item_name: "오르나 무기 강화 촉진제",
    item_crafting: ["전문기술"],
    item_category: "재료",
    item_materials: [
      { item_name: "오르나의 봉인된 힘: 무기", item_quantity: 8 },
      { item_name: "예리한 계승 원석", item_quantity: 4 },
      { item_name: "안정된 계승 원석", item_quantity: 4 },
      { item_name: "가벼운 계승 원석", item_quantity: 4 },
      { item_name: "오롯한 계승 원석", item_quantity: 4 },
      { item_name: "봉인의 힘: 파편", item_quantity: 100 },
      { item_name: "전승의 힘: 파편", item_quantity: 100 },
    ],
  },
  {
    item_name: "오르나 방어구 강화 촉진제: 가슴, 다리",
    item_crafting: ["전문기술"],
    item_category: "재료",
    item_materials: [
      { item_name: "오르나의 봉인된 힘: 가슴 방어구", item_quantity: 3 },
      { item_name: "오르나의 봉인된 힘: 다리 방어구", item_quantity: 3 },
      { item_name: "단단한 계승 원석", item_quantity: 2 },
      { item_name: "매끈한 계승 원석", item_quantity: 4 },
      { item_name: "봉인의 힘: 파편", item_quantity: 100 },
      { item_name: "전승의 힘: 파편", item_quantity: 100 },
    ],
  },
  {
    item_name: "오르나 방어구 강화 촉진제: 머리, 손, 발",
    item_crafting: ["전문기술"],
    item_category: "재료",
    item_materials: [
      { item_name: "오르나의 봉인된 힘: 머리 방어구", item_quantity: 3 },
      { item_name: "오르나의 봉인된 힘: 손 방어구", item_quantity: 3 },
      { item_name: "오르나의 봉인된 힘: 발 방어구", item_quantity: 3 },
      { item_name: "단단한 계승 원석", item_quantity: 3 },
      { item_name: "봉인의 힘: 파편", item_quantity: 100 },
      { item_name: "전승의 힘: 파편", item_quantity: 100 },
    ],
  },
  {
    item_name: "게브네의 강화석",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 1000000 },
      { item_name: "뉴에라의 강화석", item_quantity: 10 },
      { item_name: "신비의 힘: 파편", item_quantity: 3 },
    ],
  },
  {
    item_name: "+ 게브네의 강화석",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 1000000 },
      { item_name: "게브네의 강화석", item_quantity: 2 },
    ],
  },
  {
    item_name: "강화의 룬",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 1000000 },
      { item_name: "불안정한 강화의 룬", item_quantity: 2 },
      { item_name: "신비의 힘: 파편", item_quantity: 3 },
    ],
  },
  {
    item_name: "프리미엄 강화의 룬",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 1000000 },
      { item_name: "강화의 룬", item_quantity: 2 },
    ],
  },
  {
    item_name: "+ 프리미엄 강화의 룬",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 2000000 },
      { item_name: "프리미엄 강화의 룬", item_quantity: 4 },
    ],
  },
  {
    item_name: "프리미엄 방어구 강화의 룬",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 1000000 },
      { item_name: "강화의 룬", item_quantity: 3 },
    ],
  },
  {
    item_name: "미지의 조각 2단계",
    item_crafting: ["제작의뢰"],
    item_category: "재료",

    item_materials: [
      { item_name: "골드", item_quantity: 50000 },
      { item_name: "미지의 조각 1단계", item_quantity: 3 },
    ],
  },
  {
    item_name: "미지의 조각 3단계",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 80000 },
      { item_name: "미지의 조각 2단계", item_quantity: 3 },
    ],
  },
  {
    item_name: "미지의 결정",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 200000 },
      { item_name: "미지의 조각 3단계", item_quantity: 1 },
      { item_name: "와드네의 결정", item_quantity: 1 },
    ],
  },
  {
    item_name: "투쟁의 조각 2단계",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 50000 },
      { item_name: "투쟁의 조각 1단계", item_quantity: 3 },
    ],
  },
  {
    item_name: "투쟁의 조각 3단계",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 80000 },
      { item_name: "투쟁의 조각 2단계", item_quantity: 3 },
    ],
  },
  {
    item_name: "투쟁의 결정",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 200000 },
      { item_name: "투쟁의 조각 3단계", item_quantity: 1 },
      { item_name: "와드네의 결정", item_quantity: 1 },
    ],
  },
  {
    item_name: "힘이 주입된 뉴에라의 광석",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 50000 },
      { item_name: "뉴에라의 광석", item_quantity: 1 },
      { item_name: "와드네의 흔적", item_quantity: 1 },
    ],
  },
  {
    item_name: "힘이 주입된 뉴에라의 옷감",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 50000 },
      { item_name: "뉴에라의 옷감", item_quantity: 1 },
      { item_name: "와드네의 흔적", item_quantity: 1 },
    ],
  },
  {
    item_name: "힘이 주입된 뉴에라의 가죽",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 50000 },
      { item_name: "뉴에라의 가죽", item_quantity: 1 },
      { item_name: "와드네의 흔적", item_quantity: 1 },
    ],
  },
  {
    item_name: "힘이 주입된 뉴에라의 오브",
    item_crafting: ["제작의뢰"],
    item_category: "재료",
    item_materials: [
      { item_name: "골드", item_quantity: 50000 },
      { item_name: "뉴에라의 오브", item_quantity: 1 },
      { item_name: "와드네의 흔적", item_quantity: 1 },
    ],
  },
];
// export interface CraftingType {
//   item_category: string;
//   item_list: ItemListType[];
// }

// export interface ItemListType {
//   item_name: string;
//   item_crafting: string[];
//   item_materials: MaterialsType[];
// }

// export interface MaterialsType {
//   item_name: string;
//   item_quantity: number;
//   item_description?: string;
// }

// export const item_crafting_materials_list: CraftingType[] = [
//   {
//     item_category: "장비",
//     item_list: [
//       {
//         item_name: "와드네 보조 장비",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "스렝의 정수", item_quantity: 2 },
//           { item_name: "와드네의 파편: 보조 장비", item_quantity: 2 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 10 },
//         ],
//       },
//       {
//         item_name: "와드네 무기",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           {
//             item_name: "+15 오르나 무기",
//             item_description:
//               "해제를 제외한 모든 능력치를 최대한 연마",
//             item_quantity: 1,
//           },
//           { item_name: "스렝의 정수", item_quantity: 4 },
//           { item_name: "와드네의 파편: 무기", item_quantity: 2 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//           { item_name: "예리한 와드네의 결정", item_quantity: 10 },
//           {
//             item_name: "추출의 룬",
//             item_quantity: 1,
//             item_description: "선택 재료",
//           },
//         ],
//       },
//       {
//         item_name: "초급 와드네 무기",
//         item_crafting: ["승급"],
//         item_materials: [
//           {
//             item_name: "와드네 무기",
//             item_quantity: 1,
//           },
//           { item_name: "골드", item_quantity: 1000000 },
//           { item_name: "와드네 승급석: 무기", item_quantity: 1 },
//           { item_name: "스렝의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 무기", item_quantity: 1 },
//           {
//             item_name: "예리한 와드네의 결정",
//             item_quantity: 10,
//           },
//           {
//             item_name: "프리미엄 강화의 룬",
//             item_quantity: 2,
//           },
//           {
//             item_name: "자르딘 강철",
//             item_quantity: 15,
//           },
//         ],
//       },
//       {
//         item_name: "중급 와드네 무기",
//         item_crafting: ["승급"],
//         item_materials: [
//           {
//             item_name: "초급 와드네 무기",
//             item_quantity: 1,
//           },
//           { item_name: "골드", item_quantity: 1500000 },
//           { item_name: "와드네 승급석: 무기 ", item_quantity: 2 },
//           { item_name: "스피노스의 정수", item_quantity: 2 },
//           { item_name: "와드네의 파편: 무기", item_quantity: 2 },
//           {
//             item_name: "예리한 와드네의 결정",
//             item_quantity: 10,
//           },
//           {
//             item_name: "가벼운 와드네의 결정",
//             item_quantity: 10,
//           },
//           {
//             item_name: "프리미엄 강화의 룬",
//             item_quantity: 2,
//           },
//           {
//             item_name: "고급 강화의 비약",
//             item_quantity: 10,
//           },
//           {
//             item_name: "자르딘 강철",
//             item_quantity: 33,
//           },
//         ],
//       },
//       {
//         item_name: "와드네 고급 무기",
//         item_crafting: ["승급"],
//         item_materials: [
//           {
//             item_name: "중급 와드네 무기",
//             item_quantity: 1,
//           },
//           { item_name: "골드", item_quantity: 2250000 },
//           { item_name: "와드네 승급석: 무기", item_quantity: 3 },
//           { item_name: "고르바스의 정수", item_quantity: 2 },
//           { item_name: "와드네의 파편: 무기", item_quantity: 3 },
//           {
//             item_name: "예리한 와드네의 결정",
//             item_quantity: 10,
//           },
//           {
//             item_name: "가벼운 와드네의 결정",
//             item_quantity: 10,
//           },
//           {
//             item_name: "안정된 와드네의 결정",
//             item_quantity: 10,
//           },
//           {
//             item_name: "+ 프리미엄 강화의 룬",
//             item_quantity: 1,
//           },
//           {
//             item_name: "고급 강화의 비약",
//             item_quantity: 25,
//           },
//           {
//             item_name: "자르딘 강철",
//             item_quantity: 72,
//           },
//         ],
//       },
//       {
//         item_name: "와드네 헬름",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           {
//             item_name: "+15 오르나 헬름",
//             item_quantity: 1,
//             item_description:
//               "해제를 제외한 모든 능력치를 최대한 연마",
//           },
//           { item_name: "스렝의 정수", item_quantity: 4 },
//           { item_name: "와드네의 파편: 머리 방어구", item_quantity: 2 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 10 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//           {
//             item_name: "추출의 룬",
//             item_quantity: 1,
//             item_description: "선택 재료",
//           },
//         ],
//       },
//       {
//         item_name: "초급 와드네 헬름",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "와드네 헬름", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 500000 },
//           { item_name: "와드네 승급석: 머리 방어구", item_quantity: 1 },
//           { item_name: "스렝의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 5 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
//           { item_name: "자르딘 강철", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "중급 와드네 헬름",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "초급 와드네 헬름", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 750000 },
//           { item_name: "와드네 승급석: 머리 방어구", item_quantity: 1 },
//           { item_name: "스렝의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 5 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
//           { item_name: "자르딘 강철", item_quantity: 11 },
//           { item_name: "고급 강화의 비약", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "고급 와드네 헬름",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "중급 와드네 헬름", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 1150000 },
//           { item_name: "와드네 승급석: 머리 방어구", item_quantity: 2 },
//           { item_name: "스렝의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 24 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//         ],
//       },
//       {
//         item_name: "레어 와드네 헬름",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "고급 와드네 헬름", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 1700000 },
//           { item_name: "와드네 승급석: 머리 방어구", item_quantity: 2 },
//           { item_name: "스렝의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 53 },
//           { item_name: "고급 강화의 비약", item_quantity: 14 },
//         ],
//       },
//       {
//         item_name: "와드네 전설 헬름",
//         item_crafting: ["승급"],

//         item_materials: [
//           { item_name: "레어 와드네 헬름", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 2500000 },
//           { item_name: "와드네 승급석: 머리 방어구", item_quantity: 2 },
//           { item_name: "스렝의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 117 },
//           { item_name: "고급 강화의 비약", item_quantity: 30 },
//         ],
//       },
//       {
//         item_name: "와드네 메일",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           {
//             item_name: "+15 오르나 메일",
//             item_description:
//               "해제를 제외한 모든 능력치를 최대한 연마",
//             item_quantity: 1,
//           },
//           { item_name: "고르바스의 정수", item_quantity: 4 },
//           { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 2 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//           { item_name: "견고한 와드네의 결정", item_quantity: 10 },
//           { item_name: "예리한 와드네의 결정", item_quantity: 10 },
//           {
//             item_name: "추출의 룬",
//             item_description: "선택 재료",
//             item_quantity: 1,
//           },
//         ],
//       },
//       {
//         item_name: "초급 와드네 메일",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "와드네 메일", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 500000 },
//           { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 1 },
//           { item_name: "고르바스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
//           { item_name: "견고한 와드네의 결정", item_quantity: 5 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
//           { item_name: "자르딘 강철", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "중급 와드네 메일",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "초급 와드네 메일", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 750000 },
//           { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 1 },
//           { item_name: "고르바스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
//           { item_name: "견고한 와드네의 결정", item_quantity: 5 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
//           { item_name: "자르딘 강철", item_quantity: 11 },
//           { item_name: "고급 강화의 비약", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "고급 와드네 메일",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "중급 와드네 메일", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 1150000 },
//           { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 2 },
//           { item_name: "고르바스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
//           { item_name: "견고한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 24 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//         ],
//       },
//       {
//         item_name: "레어 와드네 메일",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "고급 와드네 메일", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 1700000 },
//           { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 2 },
//           { item_name: "고르바스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
//           { item_name: "견고한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 53 },
//           { item_name: "고급 강화의 비약", item_quantity: 14 },
//         ],
//       },
//       {
//         item_name: "와드네 전설 메일",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "레어 와드네 메일", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 2500000 },
//           { item_name: "와드네 승급석: 가슴 방어구", item_quantity: 2 },
//           { item_name: "스피노스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
//           { item_name: "견고한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 117 },
//           { item_name: "고급 강화의 비약", item_quantity: 30 },
//         ],
//       },
//       {
//         item_name: "와드네 그리브즈",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           {
//             item_name: "+15 오르나 그리브즈",
//             item_quantity: 1,
//             item_description:
//               "해제를 제외한 모든 능력치를 최대한 연마",
//           },
//           { item_name: "스피노스의 정수", item_quantity: 4 },
//           { item_name: "와드네의 파편: 다리 방어구", item_quantity: 2 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//           {
//             item_name: "추출의 룬",
//             item_quantity: 1,
//             item_description: "선택 재료",
//           },
//         ],
//       },
//       {
//         item_name: "초급 와드네 그리브즈",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "와드네 그리브즈", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 500000 },
//           { item_name: "와드네 승급석: 다리 방어구", item_quantity: 1 },
//           { item_name: "스피노스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 5 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
//           { item_name: "자르딘 강철", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "중급 와드네 그리브즈",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "초급 와드네 그리브즈", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 750000 },
//           { item_name: "와드네 승급석: 다리 방어구", item_quantity: 1 },
//           { item_name: "스피노스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 5 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 1 },
//           { item_name: "자르딘 강철", item_quantity: 11 },
//           { item_name: "고급 강화의 비약", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "고급 와드네 그리브즈",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "중급 와드네 그리브즈", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 1150000 },
//           { item_name: "와드네 승급석: 다리 방어구", item_quantity: 2 },
//           { item_name: "스피노스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 24 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//         ],
//       },
//       {
//         item_name: "레어 와드네 그리브즈",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "고급 와드네 그리브즈", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 1700000 },
//           { item_name: "와드네 승급석: 다리 방어구", item_quantity: 2 },
//           { item_name: "스피노스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 53 },
//           { item_name: "고급 강화의 비약", item_quantity: 14 },
//         ],
//       },
//       {
//         item_name: "와드네 전설 그리브즈",
//         item_crafting: ["승급"],
//         item_materials: [
//           { item_name: "레어 와드네 그리브즈", item_quantity: 1 },
//           { item_name: "골드", item_quantity: 2500000 },
//           { item_name: "와드네 승급석: 다리 방어구", item_quantity: 2 },
//           { item_name: "스피노스의 정수", item_quantity: 1 },
//           { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
//           { item_name: "프리미엄 방어구 강화의 룬", item_quantity: 2 },
//           { item_name: "자르딘 강철", item_quantity: 117 },
//           { item_name: "고급 강화의 비약", item_quantity: 30 },
//         ],
//       },
//       {
//         item_name: "태양의 비원",
//         item_crafting: ["전문기술", "제작의뢰"],
//         item_materials: [
//           { item_name: "스피노스의 정수", item_quantity: 2 },
//           { item_name: "와드네의 파편: 태양의 비원", item_quantity: 2 },
//           { item_name: "단단한 와드네의 결정", item_quantity: 10 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
//           { item_name: "힘이 주입된 뉴에라의 오브", item_quantity: 35 },
//           { item_name: "힘이 주입된 뉴에라의 옷감", item_quantity: 20 },
//           { item_name: "힘이 주입된 뉴에라의 광석", item_quantity: 60 },
//         ],
//       },
//       {
//         item_name: "저주의 허리띠",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "고르바스의 정수", item_quantity: 2 },
//           { item_name: "와드네의 파편: 저주의 허리띠", item_quantity: 2 },
//           { item_name: "견고한 와드네의 결정", item_quantity: 10 },
//           { item_name: "매끈한 와드네의 결정", item_quantity: 10 },
//           { item_name: "힘이 주입된 뉴에라의 오브", item_quantity: 35 },
//           { item_name: "힘이 주입된 뉴에라의 가죽", item_quantity: 25 },
//           { item_name: "힘이 주입된 뉴에라의 광석", item_quantity: 60 },
//         ],
//       },
//     ],
//   },
//   {
//     item_category: "소모품",
//     item_list: [
//       {
//         item_name: "상급 생명력 포션",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 2000 },
//           { item_name: "빈 병", item_quantity: 10 },
//           { item_name: "생명의 에르그 결정", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "고급 생명력 포션",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 6000 },
//           { item_name: "빈 병", item_quantity: 10 },
//           { item_name: "생명의 에르그 결정", item_quantity: 10 },
//         ],
//       },
//       {
//         item_name: "최고급 생명력 포션",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 16000 },
//           { item_name: "빈 병", item_quantity: 10 },
//           { item_name: "생명의 에르그 결정", item_quantity: 10 },
//           { item_name: "오브", item_quantity: 5 },
//           { item_name: "마법 가루", item_quantity: 10 },
//         ],
//       },
//     ],
//   },
//   {
//     item_category: "재료",
//     item_list: [
//       {
//         item_name: "최고급 강화석",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 800 },
//           { item_name: "고급 철광석", item_quantity: 2 },
//           { item_name: "마나 더스트", item_quantity: 7 },
//           { item_name: "마나 리포머", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "낙원의 강화석",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 3000 },
//           { item_name: "최고급 강화석", item_quantity: 10 },
//           { item_name: "정령의 흔적", item_quantity: 2 },
//           { item_name: "불의 흔적", item_quantity: 2 },
//           { item_name: "대지의 흔적", item_quantity: 2 },
//           { item_name: "냉기의 흔적", item_quantity: 2 },
//           { item_name: "생명의 흔적", item_quantity: 2 },
//         ],
//       },

//       {
//         item_name: "마법력 엘릭서",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 950 },
//           { item_name: "마법 가루", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "생명의 마법력 엘릭서",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 950 },
//           { item_name: "생명의 에르그 결정", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "축복의 마법력 엘릭서",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 1700 },
//           { item_name: "마법 가루", item_quantity: 5 },
//           { item_name: "축복받은 마법 가루", item_quantity: 5 },
//         ],
//       },
//       {
//         item_name: "축복받은 마법 가루",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 800 },
//           { item_name: "마법 가루", item_quantity: 3 },
//           { item_name: "정령의 흔적", item_quantity: 1 },
//         ],
//       },
//       {
//         item_name: "자르딘 강철",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 50000 },
//           { item_name: "다마스쿠스 강철", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "와드네 승급석: 무기",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "와드네의 파편: 무기", item_quantity: 1 },
//           { item_name: "+ 게브네의 강화석", item_quantity: 2 },
//           { item_name: "고급 강화의 비약", item_quantity: 20 },
//           { item_name: "봉인의 힘: 파편", item_quantity: 100 },
//           { item_name: "전승의 힘: 파편", item_quantity: 100 },
//         ],
//       },
//       {
//         item_name: "와드네 승급석: 머리 방어구",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "와드네의 파편: 머리 방어구", item_quantity: 1 },
//           { item_name: "게브네의 강화석", item_quantity: 3 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//           { item_name: "봉인의 힘: 파편", item_quantity: 100 },
//           { item_name: "전승의 힘: 파편", item_quantity: 100 },
//         ],
//       },
//       {
//         item_name: "와드네 승급석: 가슴 방어구",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "와드네의 파편: 가슴 방어구", item_quantity: 1 },
//           { item_name: "게브네의 강화석", item_quantity: 3 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//           { item_name: "봉인의 힘: 파편", item_quantity: 100 },
//           { item_name: "전승의 힘: 파편", item_quantity: 100 },
//         ],
//       },
//       {
//         item_name: "와드네 승급석: 다리 방어구",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "와드네의 파편: 다리 방어구", item_quantity: 1 },
//           { item_name: "게브네의 강화석", item_quantity: 3 },
//           { item_name: "고급 강화의 비약", item_quantity: 10 },
//           { item_name: "봉인의 힘: 파편", item_quantity: 100 },
//           { item_name: "전승의 힘: 파편", item_quantity: 100 },
//         ],
//       },
//       {
//         item_name: "오르나 무기 강화 촉진제",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "오르나의 봉인된 힘: 무기", item_quantity: 8 },
//           { item_name: "예리한 계승 원석", item_quantity: 4 },
//           { item_name: "안정된 계승 원석", item_quantity: 4 },
//           { item_name: "가벼운 계승 원석", item_quantity: 4 },
//           { item_name: "오롯한 계승 원석", item_quantity: 4 },
//           { item_name: "봉인의 힘: 파편", item_quantity: 100 },
//           { item_name: "전승의 힘: 파편", item_quantity: 100 },
//         ],
//       },
//       {
//         item_name: "오르나 방어구 강화 촉진제: 가슴, 다리",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "오르나의 봉인된 힘: 가슴 방어구", item_quantity: 3 },
//           { item_name: "오르나의 봉인된 힘: 다리 방어구", item_quantity: 3 },
//           { item_name: "단단한 계승 원석", item_quantity: 2 },
//           { item_name: "매끈한 계승 원석", item_quantity: 4 },
//           { item_name: "봉인의 힘: 파편", item_quantity: 100 },
//           { item_name: "전승의 힘: 파편", item_quantity: 100 },
//         ],
//       },
//       {
//         item_name: "오르나 방어구 강화 촉진제: 머리, 손, 발",
//         item_crafting: ["전문기술"],
//         item_materials: [
//           { item_name: "오르나의 봉인된 힘: 머리 방어구", item_quantity: 3 },
//           { item_name: "오르나의 봉인된 힘: 손 방어구", item_quantity: 3 },
//           { item_name: "오르나의 봉인된 힘: 발 방어구", item_quantity: 3 },
//           { item_name: "단단한 계승 원석", item_quantity: 3 },
//           { item_name: "봉인의 힘: 파편", item_quantity: 100 },
//           { item_name: "전승의 힘: 파편", item_quantity: 100 },
//         ],
//       },
//       {
//         item_name: "게브네의 강화석",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 1000000 },
//           { item_name: "뉴에라의 강화석", item_quantity: 10 },
//           { item_name: "신비의 힘: 파편", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "+ 게브네의 강화석",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 1000000 },
//           { item_name: "게브네의 강화석", item_quantity: 2 },
//         ],
//       },
//       {
//         item_name: "강화의 룬",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 1000000 },
//           { item_name: "불안정한 강화의 룬", item_quantity: 2 },
//           { item_name: "신비의 힘: 파편", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "프리미엄 강화의 룬",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 1000000 },
//           { item_name: "강화의 룬", item_quantity: 2 },
//         ],
//       },
//       {
//         item_name: "+ 프리미엄 강화의 룬",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 2000000 },
//           { item_name: "프리미엄 강화의 룬", item_quantity: 4 },
//         ],
//       },
//       {
//         item_name: "프리미엄 방어구 강화의 룬",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 1000000 },
//           { item_name: "강화의 룬", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "미지의 조각 2단계",
//         item_crafting: ["제작의뢰"],

//         item_materials: [
//           { item_name: "골드", item_quantity: 50000 },
//           { item_name: "미지의 조각 1단계", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "미지의 조각 3단계",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 80000 },
//           { item_name: "미지의 조각 2단계", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "미지의 결정",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 200000 },
//           { item_name: "미지의 조각 3단계", item_quantity: 1 },
//           { item_name: "와드네의 결정", item_quantity: 1 },
//         ],
//       },
//       {
//         item_name: "투쟁의 조각 2단계",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 50000 },
//           { item_name: "투쟁의 조각 1단계", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "투쟁의 조각 3단계",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 80000 },
//           { item_name: "투쟁의 조각 2단계", item_quantity: 3 },
//         ],
//       },
//       {
//         item_name: "투쟁의 결정",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 200000 },
//           { item_name: "투쟁의 조각 3단계", item_quantity: 1 },
//           { item_name: "와드네의 결정", item_quantity: 1 },
//         ],
//       },
//       {
//         item_name: "힘이 주입된 뉴에라의 광석",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 50000 },
//           { item_name: "뉴에라의 광석", item_quantity: 1 },
//           { item_name: "와드네의 흔적", item_quantity: 1 },
//         ],
//       },
//       {
//         item_name: "힘이 주입된 뉴에라의 옷감",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 50000 },
//           { item_name: "뉴에라의 옷감", item_quantity: 1 },
//           { item_name: "와드네의 흔적", item_quantity: 1 },
//         ],
//       },
//       {
//         item_name: "힘이 주입된 뉴에라의 가죽",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 50000 },
//           { item_name: "뉴에라의 가죽", item_quantity: 1 },
//           { item_name: "와드네의 흔적", item_quantity: 1 },
//         ],
//       },
//       {
//         item_name: "힘이 주입된 뉴에라의 오브",
//         item_crafting: ["제작의뢰"],
//         item_materials: [
//           { item_name: "골드", item_quantity: 50000 },
//           { item_name: "뉴에라의 오브", item_quantity: 1 },
//           { item_name: "와드네의 흔적", item_quantity: 1 },
//         ],
//       },
//     ],
//   },
// ];
