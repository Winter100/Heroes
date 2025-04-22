import { ItemType } from '@/app/_type/infoInfoType';

export const rhod_list: ItemType[] = [
  {
    name: '몰락자의 녹슨 로드',
    description: `이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 중급, 고급 등급으로는 변환할 수 없습니다.
    `,
    restrictions: ['115 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '초급',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 1000 },
        { stat_name: '마법공격력', stat_value: 1000 },
        { stat_name: '크리티컬', stat_value: 5 },
        { stat_name: '공격력 제한 해제', stat_value: 300 },
      ],
    },
  },
  {
    name: '몰락자의 로드',
    description: `이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 고급 등급으로는 변환할 수 없습니다.
    `,
    restrictions: ['115 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '중급',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 1000 },
        { stat_name: '마법공격력', stat_value: 1000 },
        { stat_name: '크리티컬', stat_value: 7 },
        { stat_name: '공격력 제한 해제', stat_value: 300 },
      ],
    },
  },
  {
    name: '몰락자의 빛나는 로드',
    description: `이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.`,
    restrictions: ['115 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '고급',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 1000 },
        { stat_name: '마법공격력', stat_value: 1000 },
        { stat_name: '크리티컬', stat_value: 7 },
        { stat_name: '공격력 제한 해제', stat_value: 450 },
      ],
    },
  },
  {
    name: '몰락자의 완전한 로드',
    description: `마력을 주입하여 완성된 몰락자의 로드.
    
    이 로드를 착용 또는 소지품함에 보유하고 있을 경우 다음 혜택이 적용됩니다.
    - '몰락한 기사의 전당' 전투를 클리어할 경우 '시공의 편린: 몰락한 기사의 전당'을 추가로 1개 더 획득할 수 있습니다.
    - '몰락한 기사의 전당' 전투를 매 주 출정 횟수 소모 없이 1회 더 출정할 수 있습니다.`,
    restrictions: ['115 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '레어',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 2000 },
        { stat_name: '마법공격력', stat_value: 2000 },
        { stat_name: '크리티컬', stat_value: 10 },
        { stat_name: '공격력 제한 해제', stat_value: 600 },
      ],
    },
  },
  {
    name: '찬탈자의 녹슨 로드',
    description: `이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 중급, 고급 등급으로는 변환할 수 없습니다.
    `,
    restrictions: ['110 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '초급',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 500 },
        { stat_name: '마법공격력', stat_value: 500 },
        { stat_name: '크리티컬', stat_value: 1 },
      ],
    },
  },
  {
    name: '찬탈자의 로드',
    description: `이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.
    
    ※ 주의사항: 고급 등급으로는 변환할 수 없습니다.
    `,
    restrictions: ['110 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '중급',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 500 },
        { stat_name: '마법공격력', stat_value: 500 },
        { stat_name: '크리티컬', stat_value: 3 },
      ],
    },
  },
  {
    name: '찬탈자의 빛나는 로드',
    description: `이 아이템은 마력 주입을 통해 레어 등급으로 변환할 수 있습니다.`,
    restrictions: ['110 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '고급',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 500 },
        { stat_name: '마법공격력', stat_value: 500 },
        { stat_name: '크리티컬', stat_value: 3 },
        { stat_name: '공격력 제한 해제', stat_value: 150 },
      ],
    },
  },
  {
    name: '찬탈자의 완전한 로드',
    description: `마력을 주입하여 완성된 찬탈자의 로드.
    
    이 로드를 착용 또는 소지품함에 보유하고 있을 경우 다음 혜택이 적용됩니다.
    - '찬탈자의 성채' 전투를 클리어할 경우 '시공의 편린: 찬탈자의 성채'를 추가로 1개 더 획득할 수 있습니다.
    - '찬탈자의 성채' 전투를 매 주 출정 횟수 소모 없이 1회 더 출정할 수 있습니다.`,
    restrictions: ['110 레벨 이상'],
    quality: 2,
    quality_selection_available: false,
    rating: '레어',
    category: ['로드'],
    color: true,
    enhancement_options: {
      0: [
        { stat_name: '공격력', stat_value: 1000 },
        { stat_name: '마법공격력', stat_value: 1000 },
        { stat_name: '크리티컬', stat_value: 5 },
        { stat_name: '공격력 제한 해제', stat_value: 300 },
      ],
    },
  },
];
