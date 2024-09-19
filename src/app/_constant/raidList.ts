export interface MonstersType {
  name: string;
  limit: { stat_name: string; stat_value: string }[];
}

export interface RaidListType {
  raid_name: string;
  monsters: MonstersType[];
}

export const raidList: RaidListType[] = [
  {
    raid_name: "아르드리",
    monsters: [
      {
        name: "왕성 토파즈 홀",
        limit: [
          { stat_name: "이름", stat_value: "로메르" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "42300" },
          { stat_name: "크리티컬", stat_value: "215" },
          { stat_name: "크리티컬 저항", stat_value: "175" },
          { stat_name: "대항력 저항", stat_value: "88" },
          { stat_name: "밸런스 저항", stat_value: "7" },
        ],
      },
      {
        name: "잊혀진 제단",
        limit: [
          { stat_name: "이름", stat_value: "나베리우스" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "44110" },
          { stat_name: "크리티컬", stat_value: "223" },
          { stat_name: "크리티컬 저항", stat_value: "181" },
          { stat_name: "대항력 저항", stat_value: "92" },
          { stat_name: "밸런스 저항", stat_value: "9" },
        ],
      },
      {
        name: "죽음의 변증법",
        limit: [
          { stat_name: "이름", stat_value: "밀레드" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "45920" },
          { stat_name: "크리티컬", stat_value: "231" },
          { stat_name: "크리티컬 저항", stat_value: "188" },
          { stat_name: "대항력 저항", stat_value: "100" },
          { stat_name: "밸런스 저항", stat_value: "12" },
        ],
      },
      {
        name: "원한의 암굴",
        limit: [
          { stat_name: "이름", stat_value: "카사르" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "47780" },
          { stat_name: "크리티컬", stat_value: "240" },
          { stat_name: "크리티컬 저항", stat_value: "195" },
          { stat_name: "대항력 저항", stat_value: "108" },
          { stat_name: "밸런스 저항", stat_value: "14" },
        ],
      },
      {
        name: "위대한 사역",
        limit: [
          { stat_name: "이름", stat_value: "에녹" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "47780" },
          { stat_name: "크리티컬", stat_value: "248" },
          { stat_name: "크리티컬 저항", stat_value: "204" },
          { stat_name: "대항력 저항", stat_value: "116" },
          { stat_name: "밸런스 저항", stat_value: "16" },
        ],
      },
    ],
  },

  {
    raid_name: "오르나",
    monsters: [
      {
        name: "로흘란의 바람",
        limit: [
          { stat_name: "이름", stat_value: "이루산" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "48780" },
          { stat_name: "크리티컬", stat_value: "262" },
          { stat_name: "크리티컬 저항", stat_value: "206" },
          { stat_name: "대항력 저항", stat_value: "116" },
          { stat_name: "밸런스 저항", stat_value: "20" },
        ],
      },
      {
        name: "창조와 파괴의 성소",
        limit: [
          { stat_name: "이름", stat_value: "에메트" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "50180" },
          { stat_name: "크리티컬", stat_value: "270" },
          { stat_name: "크리티컬 저항", stat_value: "214" },
          { stat_name: "대항력 저항", stat_value: "116" },
          { stat_name: "밸런스 저항", stat_value: "28" },
        ],
      },

      {
        name: "검의 무덤",
        limit: [
          { stat_name: "이름", stat_value: "야르니르" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "52330" },
          { stat_name: "크리티컬", stat_value: "279" },
          { stat_name: "크리티컬 저항", stat_value: "226" },
          { stat_name: "대항력 저항", stat_value: "136" },
          { stat_name: "밸런스 저항", stat_value: "37" },
        ],
      },
      {
        name: "시드 별궁",
        limit: [
          { stat_name: "이름", stat_value: "브레스" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "53860" },
          { stat_name: "크리티컬", stat_value: "288" },
          { stat_name: "크리티컬 저항", stat_value: "240" },
          { stat_name: "대항력 저항", stat_value: "156" },
          { stat_name: "밸런스 저항", stat_value: "44" },
        ],
      },
    ],
  },

  {
    raid_name: "와드네",
    monsters: [
      {
        name: "제단을 지키는 자",
        limit: [
          { stat_name: "이름", stat_value: "스렝" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "53920" },
          { stat_name: "크리티컬", stat_value: "298" },
          { stat_name: "크리티컬 저항", stat_value: "246" },
          { stat_name: "대항력 저항", stat_value: "186" },
          { stat_name: "밸런스 저항", stat_value: "53" },
        ],
      },
      {
        name: "그릇된 고해",
        limit: [
          { stat_name: "이름", stat_value: "스피노스" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "55920" },
          { stat_name: "크리티컬", stat_value: "315" },
          { stat_name: "크리티컬 저항", stat_value: "261" },
          { stat_name: "대항력 저항", stat_value: "196" },
          { stat_name: "밸런스 저항", stat_value: "56" },
        ],
      },
    ],
  },

  {
    raid_name: "스페셜 전투",
    monsters: [
      {
        name: "스페셜 전투",
        limit: [
          { stat_name: "이름", stat_value: "스페셜 전투" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "53920" },
          { stat_name: "크리티컬", stat_value: "298" },
          { stat_name: "크리티컬 저항", stat_value: "246" },
          { stat_name: "대항력 저항", stat_value: "186" },
          { stat_name: "밸런스 저항", stat_value: "53" },
        ],
      },
    ],
  },

  {
    raid_name: "시공간 왜곡",
    monsters: [
      {
        name: "찬탈자의 성채",
        limit: [
          { stat_name: "이름", stat_value: "혼의 찬탈자 타로스" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "50000" },
          { stat_name: "크리티컬", stat_value: "290" },
          { stat_name: "크리티컬 저항", stat_value: "229" },
          { stat_name: "대항력 저항", stat_value: "180" },
          { stat_name: "밸런스 저항", stat_value: "34" },
        ],
      },
      {
        name: "몰락한 기사의 전당",
        limit: [
          { stat_name: "이름", stat_value: "몰락자 아이젠리터" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "52850" },
          { stat_name: "크리티컬", stat_value: "320" },
          { stat_name: "크리티컬 저항", stat_value: "254" },
          { stat_name: "대항력 저항", stat_value: "220" },
          { stat_name: "밸런스 저항", stat_value: "59" },
        ],
      },
    ],
  },

  {
    raid_name: "결사대",
    monsters: [
      {
        name: "사념의 바다",
        limit: [
          { stat_name: "이름", stat_value: "네반" },
          { stat_name: "레벨", stat_value: "90" },
          { stat_name: "공격력", stat_value: "27000" },
          { stat_name: "크리티컬", stat_value: "125" },
          { stat_name: "크리티컬 저항", stat_value: "90" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
      },
      {
        name: "달의 이면",
        limit: [
          { stat_name: "이름", stat_value: "발로르" },
          { stat_name: "레벨", stat_value: "95" },
          { stat_name: "공격력", stat_value: "33500" },
          { stat_name: "크리티컬", stat_value: "150" },
          { stat_name: "크리티컬 저항", stat_value: "123" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
      },
      {
        name: "모루 위의 검",
        limit: [
          { stat_name: "이름", stat_value: "브리지트" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "40000" },
          { stat_name: "크리티컬", stat_value: "200" },
          { stat_name: "크리티컬 저항", stat_value: "150" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
      },
      {
        name: "생명의 나무",
        limit: [
          { stat_name: "이름", stat_value: "라우라" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "45500" },
          { stat_name: "크리티컬", stat_value: "235" },
          { stat_name: "크리티컬 저항", stat_value: "185" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "4" },
        ],
      },
    ],
  },

  {
    raid_name: "결사대 [헬]",
    monsters: [
      {
        name: "사념의 바다",
        limit: [
          { stat_name: "이름", stat_value: "네반" },
          { stat_name: "레벨", stat_value: "90" },
          { stat_name: "공격력", stat_value: "39000" },
          { stat_name: "크리티컬", stat_value: "185" },
          { stat_name: "크리티컬 저항", stat_value: "145" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
      },
      {
        name: "달의 이면",
        limit: [
          { stat_name: "이름", stat_value: "발로르" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "39000" },
          { stat_name: "크리티컬", stat_value: "185" },
          { stat_name: "크리티컬 저항", stat_value: "145" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
      },
      {
        name: "모루 위의 검",
        limit: [
          { stat_name: "이름", stat_value: "브리지트" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "45500" },
          { stat_name: "크리티컬", stat_value: "225" },
          { stat_name: "크리티컬 저항", stat_value: "185" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
      },
      {
        name: "생명의 나무",
        limit: [
          { stat_name: "이름", stat_value: "라우라" },
          { stat_name: "레벨", stat_value: "105" },
          { stat_name: "공격력", stat_value: "47280" },
          { stat_name: "크리티컬", stat_value: "249" },
          { stat_name: "크리티컬 저항", stat_value: "206" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "17" },
        ],
      },
    ],
  },
];

const 아르드리 = {
  raid_name: "아르드리",
  monster: [
    {
      name: "왕성 토파즈 홀",
      limit: [
        { stat_name: "이름", stat_value: "로메르" },
        { stat_name: "레벨", stat_value: "110" },
        { stat_name: "공격력", stat_value: "42300" },
        { stat_name: "크리티컬", stat_value: "215" },
        { stat_name: "크리티컬 저항", stat_value: "175" },
        { stat_name: "대항력 저항", stat_value: "88" },
        { stat_name: "밸런스 저항", stat_value: "7" },
      ],
    },
    {
      name: "잊혀진 제단",
      limit: [
        { stat_name: "이름", stat_value: "나베리우스" },
        { stat_name: "레벨", stat_value: "110" },
        { stat_name: "공격력", stat_value: "44110" },
        { stat_name: "크리티컬", stat_value: "223" },
        { stat_name: "크리티컬 저항", stat_value: "181" },
        { stat_name: "대항력 저항", stat_value: "92" },
        { stat_name: "밸런스 저항", stat_value: "9" },
      ],
    },
    {
      name: "죽음의 변증법",
      limit: [
        { stat_name: "이름", stat_value: "밀레드" },
        { stat_name: "레벨", stat_value: "110" },
        { stat_name: "공격력", stat_value: "45920" },
        { stat_name: "크리티컬", stat_value: "231" },
        { stat_name: "크리티컬 저항", stat_value: "188" },
        { stat_name: "대항력 저항", stat_value: "100" },
        { stat_name: "밸런스 저항", stat_value: "12" },
      ],
    },
    {
      name: "원한의 암굴",
      limit: [
        { stat_name: "이름", stat_value: "카사르" },
        { stat_name: "레벨", stat_value: "110" },
        { stat_name: "공격력", stat_value: "47780" },
        { stat_name: "크리티컬", stat_value: "240" },
        { stat_name: "크리티컬 저항", stat_value: "195" },
        { stat_name: "대항력 저항", stat_value: "108" },
        { stat_name: "밸런스 저항", stat_value: "14" },
      ],
    },
    {
      name: "위대한 사역",
      limit: [
        { stat_name: "이름", stat_value: "에녹" },
        { stat_name: "레벨", stat_value: "110" },
        { stat_name: "공격력", stat_value: "47780" },
        { stat_name: "크리티컬", stat_value: "248" },
        { stat_name: "크리티컬 저항", stat_value: "204" },
        { stat_name: "대항력 저항", stat_value: "116" },
        { stat_name: "밸런스 저항", stat_value: "16" },
      ],
    },
  ],
};

const 오르나 = {
  raid_name: "오르나",
  monsters: [
    {
      name: "창조와 파괴의 성소",
      limit: [
        { stat_name: "이름", stat_value: "에메트" },
        { stat_name: "레벨", stat_value: "115" },
        { stat_name: "공격력", stat_value: "50180" },
        { stat_name: "크리티컬", stat_value: "270" },
        { stat_name: "크리티컬 저항", stat_value: "214" },
        { stat_name: "대항력 저항", stat_value: "116" },
        { stat_name: "밸런스 저항", stat_value: "28" },
      ],
    },
    {
      name: "로흘란의 바람",
      limit: [
        { stat_name: "이름", stat_value: "이루산" },
        { stat_name: "레벨", stat_value: "115" },
        { stat_name: "공격력", stat_value: "48780" },
        { stat_name: "크리티컬", stat_value: "262" },
        { stat_name: "크리티컬 저항", stat_value: "206" },
        { stat_name: "대항력 저항", stat_value: "116" },
        { stat_name: "밸런스 저항", stat_value: "20" },
      ],
    },
    {
      name: "검의 무덤",
      limit: [
        { stat_name: "이름", stat_value: "야르니르" },
        { stat_name: "레벨", stat_value: "115" },
        { stat_name: "공격력", stat_value: "52330" },
        { stat_name: "크리티컬", stat_value: "279" },
        { stat_name: "크리티컬 저항", stat_value: "226" },
        { stat_name: "대항력 저항", stat_value: "136" },
        { stat_name: "밸런스 저항", stat_value: "37" },
      ],
    },
    {
      name: "시드 별궁",
      limit: [
        { stat_name: "이름", stat_value: "브레스" },
        { stat_name: "레벨", stat_value: "115" },
        { stat_name: "공격력", stat_value: "53860" },
        { stat_name: "크리티컬", stat_value: "288" },
        { stat_name: "크리티컬 저항", stat_value: "240" },
        { stat_name: "대항력 저항", stat_value: "156" },
        { stat_name: "밸런스 저항", stat_value: "44" },
      ],
    },
  ],
};

const 와드네 = {
  raid_name: "와드네",
  monsters: [
    {
      name: "제단을 지키는 자",
      limit: [
        { stat_name: "이름", stat_value: "스렝" },
        { stat_name: "레벨", stat_value: "120" },
        { stat_name: "공격력", stat_value: "53920" },
        { stat_name: "크리티컬", stat_value: "298" },
        { stat_name: "크리티컬 저항", stat_value: "246" },
        { stat_name: "대항력 저항", stat_value: "186" },
        { stat_name: "밸런스 저항", stat_value: "53" },
      ],
    },
    {
      name: "그릇된 고해",
      limit: [
        { stat_name: "이름", stat_value: "스피노스" },
        { stat_name: "레벨", stat_value: "120" },
        { stat_name: "공격력", stat_value: "55920" },
        { stat_name: "크리티컬", stat_value: "315" },
        { stat_name: "크리티컬 저항", stat_value: "261" },
        { stat_name: "대항력 저항", stat_value: "196" },
        { stat_name: "밸런스 저항", stat_value: "56" },
      ],
    },
  ],
};

const 스페셜전투 = {
  raid_name: "스페셜 전투",
  monsters: [
    {
      name: "스페셜 전투",
      limit: [
        { stat_name: "이름", stat_value: "스페셜 전투" },
        { stat_name: "레벨", stat_value: "120" },
        { stat_name: "공격력", stat_value: "53920" },
        { stat_name: "크리티컬", stat_value: "298" },
        { stat_name: "크리티컬 저항", stat_value: "246" },
        { stat_name: "대항력 저항", stat_value: "186" },
        { stat_name: "밸런스 저항", stat_value: "53" },
      ],
    },
  ],
};

const 시공간왜곡 = {
  raid_name: "시공간 왜곡",
  monsters: [
    {
      name: "스페셜 전투",
      limit: [
        { stat_name: "이름", stat_value: "혼의 찬탈자 타로스" },
        { stat_name: "레벨", stat_value: "110" },
        { stat_name: "공격력", stat_value: "50000" },
        { stat_name: "크리티컬", stat_value: "290" },
        { stat_name: "크리티컬 저항", stat_value: "229" },
        { stat_name: "대항력 저항", stat_value: "180" },
        { stat_name: "밸런스 저항", stat_value: "34" },
      ],
    },
    {
      name: "몰락한 기사의 전당",
      limit: [
        { stat_name: "이름", stat_value: "몰락자 아이젠리터" },
        { stat_name: "레벨", stat_value: "115" },
        { stat_name: "공격력", stat_value: "52850" },
        { stat_name: "크리티컬", stat_value: "320" },
        { stat_name: "크리티컬 저항", stat_value: "254" },
        { stat_name: "대항력 저항", stat_value: "220" },
        { stat_name: "밸런스 저항", stat_value: "59" },
      ],
    },
  ],
};

const 결사대 = {
  raid_name: "결사대",
  monsters: [
    {
      name: "사념의 바다",
      limit: [
        { stat_name: "이름", stat_value: "네반" },
        { stat_name: "레벨", stat_value: "90" },
        { stat_name: "공격력", stat_value: "27000" },
        { stat_name: "크리티컬", stat_value: "125" },
        { stat_name: "크리티컬 저항", stat_value: "90" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "0" },
      ],
    },
    {
      name: "달의 이면",
      limit: [
        { stat_name: "이름", stat_value: "발로르" },
        { stat_name: "레벨", stat_value: "95" },
        { stat_name: "공격력", stat_value: "33500" },
        { stat_name: "크리티컬", stat_value: "150" },
        { stat_name: "크리티컬 저항", stat_value: "123" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "0" },
      ],
    },
    {
      name: "모루 위의 검",
      limit: [
        { stat_name: "이름", stat_value: "브리지트" },
        { stat_name: "레벨", stat_value: "100" },
        { stat_name: "공격력", stat_value: "40000" },
        { stat_name: "크리티컬", stat_value: "200" },
        { stat_name: "크리티컬 저항", stat_value: "150" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "0" },
      ],
    },
    {
      name: "생명의 나무",
      limit: [
        { stat_name: "이름", stat_value: "라우라" },
        { stat_name: "레벨", stat_value: "100" },
        { stat_name: "공격력", stat_value: "45500" },
        { stat_name: "크리티컬", stat_value: "235" },
        { stat_name: "크리티컬 저항", stat_value: "185" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "4" },
      ],
    },
  ],
};

const 헬결사대 = {
  raid_name: "헬 결사대",
  monsters: [
    {
      name: "사념의 바다",
      limit: [
        { stat_name: "이름", stat_value: "네반" },
        { stat_name: "레벨", stat_value: "90" },
        { stat_name: "공격력", stat_value: "39000" },
        { stat_name: "크리티컬", stat_value: "185" },
        { stat_name: "크리티컬 저항", stat_value: "145" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "0" },
      ],
    },
    {
      name: "달의 이면",
      limit: [
        { stat_name: "이름", stat_value: "발로르" },
        { stat_name: "레벨", stat_value: "100" },
        { stat_name: "공격력", stat_value: "39000" },
        { stat_name: "크리티컬", stat_value: "185" },
        { stat_name: "크리티컬 저항", stat_value: "145" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "0" },
      ],
    },
    {
      name: "모루 위의 검",
      limit: [
        { stat_name: "이름", stat_value: "브리지트" },
        { stat_name: "레벨", stat_value: "100" },
        { stat_name: "공격력", stat_value: "45500" },
        { stat_name: "크리티컬", stat_value: "225" },
        { stat_name: "크리티컬 저항", stat_value: "185" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "0" },
      ],
    },
    {
      name: "생명의 나무",
      limit: [
        { stat_name: "이름", stat_value: "라우라" },
        { stat_name: "레벨", stat_value: "105" },
        { stat_name: "공격력", stat_value: "47280" },
        { stat_name: "크리티컬", stat_value: "249" },
        { stat_name: "크리티컬 저항", stat_value: "206" },
        { stat_name: "대항력 저항", stat_value: "0" },
        { stat_name: "밸런스 저항", stat_value: "17" },
      ],
    },
  ],
};
