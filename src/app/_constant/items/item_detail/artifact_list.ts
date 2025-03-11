import { ItemType } from "@/app/_type/infoInfoType";

export const artifact_list: ItemType[] = [
  {
    name: "의문의 고양이 조각상",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 SP게이지를 한칸 회복합니다.

    재사용 대기 시간: 90초`,
  },
  {
    name: "상급 의문의 고양이 조각상",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 SP게이지를 한칸 회복합니다.

    재사용 대기 시간: 70초`,
  },
  {
    name: "주시자의 녹슨 의문의 고양이 조각상",
    quality_selection_available: false,
    quality: 2,
    restrictions: ["120 레벨 이상"],
    rating: "초급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 280 SP를 회복합니다.

    재사용 대기 시간: 70초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 중급, 고급 등급으로는 변환할 수 없습니다.
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 1 },
      ],
    },
  },
  {
    name: "주시자의 의문의 고양이 조각상",
    quality_selection_available: false,
    quality: 2,
    restrictions: ["120 레벨 이상"],
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 280 SP를 회복합니다.

    재사용 대기 시간: 70초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 중급, 고급 등급으로는 변환할 수 없습니다.
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 3 },
      ],
    },
  },
  {
    name: "주시자의 빛나는 의문의 고양이 조각상",
    quality_selection_available: false,
    quality: 2,
    restrictions: ["120 레벨 이상"],
    rating: "고급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 280 SP를 회복합니다.

    재사용 대기 시간: 70초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 3 },
        { stat_name: "공격력 제한 해제", stat_value: 150 },
      ],
    },
  },
  {
    name: "주시자의 완전한 의문의 고양이 조각상",
    quality_selection_available: false,
    quality: 2,
    restrictions: ["120 레벨 이상"],
    rating: "레어",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 280 SP를 회복합니다.

    재사용 대기 시간: 70초
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 5 },
        { stat_name: "공격력 제한 해제", stat_value: 300 },
      ],
    },
  },

  {
    name: "웨어울프의 앞발 (30일)",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 자신의 이동 속도와 공격 속도가 20% 상승합니다.

    사용 시간: 20초
    재사용 대기 시간: 120초`,
  },
  {
    name: "웨어울프의 앞발",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 자신의 이동 속도와 공격 속도가 20% 상승합니다.

    사용 시간: 20초
    재사용 대기 시간: 120초`,
  },
  {
    name: "상급 웨어울프의 앞발",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 자신의 이동 속도와 공격 속도가 20% 상승합니다.

    사용 시간: 30초
    재사용 대기 시간: 120초`,
  },
  {
    name: "주시자의 녹슨 웨어울프의 앞발",
    quality_selection_available: false,
    quality: 2,
    rating: "초급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 자신의 이동 속도와 공격속도가 22% 상승합니다.

    사용 시간: 30초
    재사용 대기 시간: 120초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 중급, 고급 등급으로는 변환할 수 없습니다.`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 1 },
      ],
    },
  },
  {
    name: "주시자의 웨어울프의 앞발",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 자신의 이동 속도와 공격속도가 22% 상승합니다.

    사용 시간: 30초
    재사용 대기 시간: 120초
    
    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 고급 등급으로는 변환할 수 없습니다.`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 3 },
      ],
    },
  },

  {
    name: "주시자의 빛나는 웨어울프의 앞발",
    quality_selection_available: false,
    quality: 2,
    rating: "고급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 자신의 이동 속도와 공격속도가 22% 상승합니다.

    사용 시간: 30초
    재사용 대기 시간: 120초`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 3 },
        { stat_name: "공격력 제한 해제", stat_value: 150 },
      ],
    },
  },

  {
    name: "주시자의 완전한 웨어울프의 앞발",
    quality_selection_available: false,
    quality: 2,
    rating: "레어",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 자신의 이동 속도와 공격속도가 22% 상승합니다.

    사용 시간: 30초
    재사용 대기 시간: 120초`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 5 },
        { stat_name: "공격력 제한 해제", stat_value: 300 },
      ],
    },
  },

  {
    name: "상급 청동 사자 조각상",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 일시적으로 5000의 생명력이 증가합니다.

    사용 시간: 10초
    재사용 대기 시간: 150초`,
  },

  {
    name: "주시자의 녹슨 전쟁 여신의 조각상",
    quality_selection_available: false,
    quality: 2,
    rating: "초급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 일시적으로 추가 피해가 1000만큼 증가합니다.

    사용 시간: 20초
    재사용 대기 시간: 70초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 중급, 고급 등급으로는 변환할 수 없습니다.`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 1 },
      ],
    },
  },
  {
    name: "주시자의 전쟁 여신의 조각상",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 일시적으로 추가 피해가 1000만큼 증가합니다.

    사용 시간: 20초
    재사용 대기 시간: 70초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 고급 등급으로는 변환할 수 없습니다.`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 3 },
      ],
    },
  },
  {
    name: "주시자의 빛나는 전쟁 여신의 조각상",
    quality_selection_available: false,
    quality: 2,
    rating: "고급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 일시적으로 추가 피해가 1000만큼 증가합니다.

    사용 시간: 20초
    재사용 대기 시간: 70초`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 3 },
        { stat_name: "공격력 제한 해제", stat_value: 150 },
      ],
    },
  },
  {
    name: "주시자의 완전한 전쟁 여신의 조각상",
    quality_selection_available: false,
    quality: 2,
    rating: "레어",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 시 일시적으로 추가 피해가 1000만큼 증가합니다.

    사용 시간: 20초
    재사용 대기 시간: 70초`,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 5 },
        { stat_name: "공격력 제한 해제", stat_value: 300 },
      ],
    },
  },

  {
    name: "서큐버스의 송곳니",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 후 공격 시 입힌 대미지의 10% 만큼 생명력을 회복합니다.

    사용 시간: 20초
    재사용 대기 시간: 180초`,
  },
  {
    name: "상급 서큐버스의 송곳니",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 후 공격 시 입힌 대미지의 13% 만큼 생명력을 회복합니다.

    사용 시간: 20초
    재사용 대기 시간: 180초`,
  },
  {
    name: "주시자의 녹슨 서큐버스의 송곳니",
    quality_selection_available: false,
    quality: 2,
    rating: "초급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 후 공격 시 입힌 대미지의 15% 만큼 생명력을 회복합니다.

    사용 시간: 20초
    재사용 대기 시간: 180초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 중급, 고급 등급으로는 변환할 수 없습니다.
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 1 },
      ],
    },
  },
  {
    name: "주시자의 서큐버스의 송곳니",
    quality_selection_available: false,
    quality: 2,
    rating: "중급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 후 공격 시 입힌 대미지의 15% 만큼 생명력을 회복합니다.

    사용 시간: 20초
    재사용 대기 시간: 180초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 고급 등급으로는 변환할 수 없습니다.
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 500 },
        { stat_name: "마법공격력", stat_value: 500 },
        { stat_name: "밸런스", stat_value: 3 },
      ],
    },
  },
  {
    name: "주시자의 빛나는 서큐버스의 송곳니",
    quality_selection_available: false,
    quality: 2,
    rating: "고급",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 후 공격 시 입힌 대미지의 15% 만큼 생명력을 회복합니다.

    사용 시간: 20초
    재사용 대기 시간: 180초

    이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 3 },
        { stat_name: "공격력 제한 해제", stat_value: 150 },
      ],
    },
  },
  {
    name: "주시자의 완전한 서큐버스의 송곳니",
    quality_selection_available: false,
    quality: 2,
    rating: "레어",
    restrictions: ["120 레벨 이상"],
    category: ["액세서리", "아티팩트"],
    color: true,
    description: `사용 후 공격 시 입힌 대미지의 15% 만큼 생명력을 회복합니다.

    사용 시간: 20초
    재사용 대기 시간: 180초
    `,
    enhancement_options: {
      0: [
        { stat_name: "공격력", stat_value: 1000 },
        { stat_name: "마법공격력", stat_value: 1000 },
        { stat_name: "밸런스", stat_value: 5 },
        { stat_name: "공격력 제한 해제", stat_value: 300 },
      ],
    },
  },
];
