export interface MonstersType {
  name: string;
  entry?: { stat_name: string; stat_value: string }[];
  limit: { stat_name: string; stat_value: string }[];
  drop_item: { item_name: string; item_src: string }[];
}

export interface RaidListType {
  raid_name: string;
  monsters: MonstersType[];
}

export const raidDropItem: RaidListType[] = [
  {
    raid_name: "아르드리",
    monsters: [
      {
        name: "왕성 토파즈 홀",
        entry: [
          { stat_name: "이름", stat_value: "로메르" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "40630" },
          { stat_name: "크리티컬", stat_value: "214" },
          { stat_name: "추가피해", stat_value: "4400" },
          { stat_name: "방어력", stat_value: "23300" },
          { stat_name: "밸런스", stat_value: "93" },
          { stat_name: "대항력", stat_value: "162" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "로메르" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "42300" },
          { stat_name: "크리티컬", stat_value: "215" },
          { stat_name: "크리티컬 저항", stat_value: "175" },
          { stat_name: "대항력 저항", stat_value: "88" },
          { stat_name: "밸런스 저항", stat_value: "7" },
        ],
        drop_item: [
          { item_name: "아르드리의 봉인된 힘", item_src: "" },
          { item_name: "아르드리의 봉인된 힘: 무기", item_src: "" },
          { item_name: "아르드리의 봉인된 힘: 머리 방어구", item_src: "" },
          { item_name: "예리한 계승석 조각", item_src: "" },
          { item_name: "진격 인챈트 스크롤", item_src: "" },
          { item_name: "상급 청동 사자 조각상", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
      {
        name: "잊혀진 제단",
        entry: [
          { stat_name: "이름", stat_value: "나베리우스" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "42110" },
          { stat_name: "크리티컬", stat_value: "217" },
          { stat_name: "추가피해", stat_value: "4500" },
          { stat_name: "방어력", stat_value: "23310" },
          { stat_name: "밸런스", stat_value: "94" },
          { stat_name: "대항력", stat_value: "170" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "나베리우스" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "44110" },
          { stat_name: "크리티컬", stat_value: "223" },
          { stat_name: "크리티컬 저항", stat_value: "181" },
          { stat_name: "대항력 저항", stat_value: "92" },
          { stat_name: "밸런스 저항", stat_value: "9" },
        ],
        drop_item: [
          { item_name: "나베리우스의 봉인된 힘", item_src: "" },
          { item_name: "아르드리의 봉인된 힘: 가슴 방어구", item_src: "" },
          { item_name: "오롯한 계승석 조각", item_src: "" },
          { item_name: "추적자의 인챈트 스크롤", item_src: "" },
          { item_name: "원한 인챈트 스크롤", item_src: "" },
          { item_name: "상급 전쟁 여신의 조각상", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
      {
        name: "죽음의 변증법",
        entry: [
          { stat_name: "이름", stat_value: "밀레드" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "43110" },
          { stat_name: "크리티컬", stat_value: "220" },
          { stat_name: "추가피해", stat_value: "4600" },
          { stat_name: "방어력", stat_value: "24300" },
          { stat_name: "밸런스", stat_value: "96" },
          { stat_name: "대항력", stat_value: "178" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "밀레드" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "45920" },
          { stat_name: "크리티컬", stat_value: "231" },
          { stat_name: "크리티컬 저항", stat_value: "188" },
          { stat_name: "대항력 저항", stat_value: "100" },
          { stat_name: "밸런스 저항", stat_value: "12" },
        ],
        drop_item: [
          { item_name: "밀레드의 봉인된 힘", item_src: "" },
          { item_name: "아르드리의 봉인된 힘: 다리 방어구", item_src: "" },
          { item_name: "안정된 계승석 조각", item_src: "" },
          { item_name: "격노 인챈트 스크롤", item_src: "" },
          { item_name: "한탄 인챈트 스크롤", item_src: "" },
          { item_name: "상급 서큐버스의 송곳니", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
      {
        name: "원한의 암굴",
        entry: [
          { stat_name: "이름", stat_value: "카사르" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "44280" },
          { stat_name: "크리티컬", stat_value: "227" },
          { stat_name: "추가피해", stat_value: "4700" },
          { stat_name: "방어력", stat_value: "25350" },
          { stat_name: "밸런스", stat_value: "98" },
          { stat_name: "대항력", stat_value: "186" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "카사르" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "47780" },
          { stat_name: "크리티컬", stat_value: "240" },
          { stat_name: "크리티컬 저항", stat_value: "195" },
          { stat_name: "대항력 저항", stat_value: "108" },
          { stat_name: "밸런스 저항", stat_value: "14" },
        ],
        drop_item: [
          { item_name: "카사르의 봉인된 힘", item_src: "" },
          { item_name: "아르드리의 봉인된 힘: 손 방어구", item_src: "" },
          { item_name: "가벼운 계승석 조각", item_src: "" },
          { item_name: "광기 인챈트 스크롤", item_src: "" },
          { item_name: "광분 인챈트 스크롤", item_src: "" },
          { item_name: "상급 의문의 고양이 조각상", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
      {
        name: "위대한 사역",
        entry: [
          { stat_name: "이름", stat_value: "에녹" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "45280" },
          { stat_name: "크리티컬", stat_value: "234" },
          { stat_name: "추가피해", stat_value: "4800" },
          { stat_name: "방어력", stat_value: "26350" },
          { stat_name: "밸런스", stat_value: "100" },
          { stat_name: "대항력", stat_value: "194" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "에녹" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "47780" },
          { stat_name: "크리티컬", stat_value: "248" },
          { stat_name: "크리티컬 저항", stat_value: "204" },
          { stat_name: "대항력 저항", stat_value: "116" },
          { stat_name: "밸런스 저항", stat_value: "16" },
        ],
        drop_item: [
          { item_name: "에녹의 봉인된 힘", item_src: "" },
          { item_name: "아르드리의 봉인된 힘: 발 방어구", item_src: "" },
          { item_name: "단단한 계승석 조각", item_src: "" },
          { item_name: "매끈한 계승석 조각", item_src: "" },
          { item_name: "뒤틀린 인챈트 스크롤", item_src: "" },
          { item_name: "상급 웨어울프의 앞발", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
    ],
  },

  {
    raid_name: "오르나",
    monsters: [
      {
        name: "로흘란의 바람",
        entry: [
          { stat_name: "이름", stat_value: "이루산" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "46280" },
          { stat_name: "크리티컬", stat_value: "236" },
          { stat_name: "추가피해", stat_value: "5600" },
          { stat_name: "방어력", stat_value: "26350" },
          { stat_name: "밸런스", stat_value: "104" },
          { stat_name: "대항력", stat_value: "205" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "이루산" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "48780" },
          { stat_name: "크리티컬", stat_value: "262" },
          { stat_name: "크리티컬 저항", stat_value: "206" },
          { stat_name: "대항력 저항", stat_value: "116" },
          { stat_name: "밸런스 저항", stat_value: "20" },
        ],
        drop_item: [
          { item_name: "오르나의 봉인된 힘", item_src: "" },
          { item_name: "오르나의 봉인된 힘: 무기", item_src: "" },
          { item_name: "오르나의 봉인된 힘: 머리 방어구", item_src: "" },
          { item_name: "예리한 계승 원석", item_src: "" },
          { item_name: "안정된 계승 원석", item_src: "" },
          { item_name: "복수의 인챈트 스크롤", item_src: "" },
          { item_name: "예언의 인챈트 스크롤", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
      {
        name: "창조와 파괴의 성소",
        entry: [
          { stat_name: "이름", stat_value: "에메트" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "47680" },
          { stat_name: "크리티컬", stat_value: "244" },
          { stat_name: "추가피해", stat_value: "5600" },
          { stat_name: "방어력", stat_value: "27750" },
          { stat_name: "밸런스", stat_value: "108" },
          { stat_name: "대항력", stat_value: "216" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "에메트" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "50180" },
          { stat_name: "크리티컬", stat_value: "270" },
          { stat_name: "크리티컬 저항", stat_value: "214" },
          { stat_name: "대항력 저항", stat_value: "116" },
          { stat_name: "밸런스 저항", stat_value: "28" },
        ],
        drop_item: [
          { item_name: "에메트의 봉인된 힘", item_src: "" },
          { item_name: "오르나의 봉인된 힘: 가슴 방어구", item_src: "" },
          { item_name: "가벼운 계승 원석", item_src: "" },
          { item_name: "오롯한 계승 원석", item_src: "" },
          { item_name: "잊혀진 인챈트 스크롤", item_src: "" },
          { item_name: "고대의 인챈트 스크롤", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },

      {
        name: "검의 무덤",
        entry: [
          { stat_name: "이름", stat_value: "야르니르" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "49830" },
          { stat_name: "크리티컬", stat_value: "256" },
          { stat_name: "추가피해", stat_value: "5900" },
          { stat_name: "방어력", stat_value: "29900" },
          { stat_name: "밸런스", stat_value: "118" },
          { stat_name: "대항력", stat_value: "230" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "야르니르" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "52330" },
          { stat_name: "크리티컬", stat_value: "279" },
          { stat_name: "크리티컬 저항", stat_value: "226" },
          { stat_name: "대항력 저항", stat_value: "136" },
          { stat_name: "밸런스 저항", stat_value: "37" },
        ],
        drop_item: [
          { item_name: "아르니르의 봉인된 힘", item_src: "" },
          { item_name: "오르나의 봉인된 힘: 다리 방어구", item_src: "" },
          { item_name: "단단한 계승 원석", item_src: "" },
          { item_name: "매끈한 계승 원석", item_src: "" },
          { item_name: "승자의 인챈트 스크롤", item_src: "" },
          { item_name: "대적자의 인챈트 스크롤", item_src: "" },
          { item_name: "일격 인챈트 스크롤", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
      {
        name: "시드 별궁",
        entry: [
          { stat_name: "이름", stat_value: "브레스" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "51360" },
          { stat_name: "크리티컬", stat_value: "264" },
          { stat_name: "추가피해", stat_value: "6150" },
          { stat_name: "방어력", stat_value: "31430" },
          { stat_name: "밸런스", stat_value: "128" },
          { stat_name: "대항력", stat_value: "250" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "브레스" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "53860" },
          { stat_name: "크리티컬", stat_value: "288" },
          { stat_name: "크리티컬 저항", stat_value: "240" },
          { stat_name: "대항력 저항", stat_value: "156" },
          { stat_name: "밸런스 저항", stat_value: "44" },
        ],
        drop_item: [
          { item_name: "브레스의 달빛 봉인된 힘", item_src: "" },
          { item_name: "브레스의 그림자 봉인된 힘", item_src: "" },
          { item_name: "오르나의 봉인된 힘: 손 방어구", item_src: "" },
          { item_name: "오르나의 봉인된 힘: 발 방어구", item_src: "" },
          { item_name: "단단한 계승 원석", item_src: "" },
          { item_name: "우아한 인챈트 스크롤", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
        ],
      },
    ],
  },

  {
    raid_name: "와드네",
    monsters: [
      {
        name: "제단을 지키는 자",
        entry: [
          { stat_name: "이름", stat_value: "스렝" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "52920" },
          { stat_name: "크리티컬", stat_value: "278" },
          { stat_name: "추가피해", stat_value: "7150" },
          { stat_name: "방어력", stat_value: "31430" },
          { stat_name: "밸런스", stat_value: "136" },
          { stat_name: "대항력", stat_value: "270" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "스렝" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "53920" },
          { stat_name: "크리티컬", stat_value: "298" },
          { stat_name: "크리티컬 저항", stat_value: "246" },
          { stat_name: "대항력 저항", stat_value: "186" },
          { stat_name: "밸런스 저항", stat_value: "53" },
        ],
        drop_item: [
          { item_name: "(부스트 한정) 와드네의 결정", item_src: "" },
          { item_name: "(부스트 한정) 스렝의 정수", item_src: "" },
          { item_name: "와드네의 파편: 보조 장비", item_src: "" },
          { item_name: "와드네의 파편: 무기", item_src: "" },
          { item_name: "와드네의 파편: 머리 방어구", item_src: "" },
          { item_name: "예리한 와드네의 결정", item_src: "" },
          { item_name: "단단한 와드네의 결정", item_src: "" },
          { item_name: "투혼 인챈트 스크롤", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
          {
            item_name: "(부스트 한정) 금속무기 레시피 스크롤: 와드네 무기",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) 금속갑옷 레시피 스크롤: 와드네 머리 방어구",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) 금속갑옷 레시피 스크롤: 와드네 방패, 그랜드타지",
            item_src: "",
          },
          {
            item_name: "(부스트 한정) 세공 레시피 스크롤: 와드네 무기",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) 세공 레시피 스크롤: 와드네 수호부, 캐스틀릿",
            item_src: "",
          },
          {
            item_name: "(부스트 한정) 재봉 레시피 스크롤: 와드네 머리 방어구",
            item_src: "",
          },
        ],
      },
      {
        name: "그릇된 고해",
        entry: [
          { stat_name: "이름", stat_value: "스피노스" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "54920" },
          { stat_name: "크리티컬", stat_value: "284" },
          { stat_name: "추가피해", stat_value: "7250" },
          { stat_name: "방어력", stat_value: "32130" },
          { stat_name: "밸런스", stat_value: "144" },
          { stat_name: "대항력", stat_value: "285" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "스피노스" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "55920" },
          { stat_name: "크리티컬", stat_value: "315" },
          { stat_name: "크리티컬 저항", stat_value: "261" },
          { stat_name: "대항력 저항", stat_value: "196" },
          { stat_name: "밸런스 저항", stat_value: "56" },
        ],
        drop_item: [
          { item_name: "(부스트 한정) 와드네의 결정", item_src: "" },
          { item_name: "(부스트 한정) 스피노스의 정수", item_src: "" },
          { item_name: "와드네의 파편: 태양의 비원", item_src: "" },
          { item_name: "와드네의 파편: 무기", item_src: "" },
          { item_name: "와드네의 파편: 다리 방어구", item_src: "" },
          { item_name: "예리한 와드네의 결정", item_src: "" },
          { item_name: "가벼운 와드네의 결정", item_src: "" },
          { item_name: "매끈한 와드네의 결정", item_src: "" },
          { item_name: "고급 강화의 비약", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
          {
            item_name:
              "(부스트 한정) 금속갑옷 레시피 스크롤: 와드네 다리 방어구",
            item_src: "",
          },
          {
            item_name: "(부스트 한정) 세공 레시피 스크롤: 태양의 비원",
            item_src: "",
          },
          {
            item_name: "(부스트 한정) 재봉 레시피 스크롤: 와드네 다리 방어구",
            item_src: "",
          },
        ],
      },
    ],
  },

  {
    raid_name: "스페셜 전투",
    monsters: [
      {
        name: "스페셜 전투",
        entry: [
          { stat_name: "이름", stat_value: "스페셜 전투" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "52920" },
          { stat_name: "크리티컬", stat_value: "278" },
          { stat_name: "추가피해", stat_value: "7150" },
          { stat_name: "방어력", stat_value: "31430" },
          { stat_name: "밸런스", stat_value: "136" },
          { stat_name: "대항력", stat_value: "270" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "스페셜 전투" },
          { stat_name: "레벨", stat_value: "120" },
          { stat_name: "공격력", stat_value: "53920" },
          { stat_name: "크리티컬", stat_value: "298" },
          { stat_name: "크리티컬 저항", stat_value: "246" },
          { stat_name: "대항력 저항", stat_value: "186" },
          { stat_name: "밸런스 저항", stat_value: "53" },
        ],
        drop_item: [
          { item_name: "스페셜 던전: 인챈트 주머니", item_src: "" },
          { item_name: "고급 미지의 팔찌 장식함", item_src: "" },
          { item_name: "자르딘 강철", item_src: "" },
          { item_name: "(부스트 한정) 장인의 단단한 플라스크", item_src: "" },
          { item_name: "(부스트 한정) 장인의 섬세한 플라스트", item_src: "" },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 오르나 방어구 아바타 세트 (남성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 오르나 방어구 아바타 세트 (여성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 브라하 방어구 아바타 세트 (남성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 브라하 방어구 아바타 세트 (여성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 헤레몬 방어구 아바타 세트 (남성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 헤레몬 방어구 아바타 세트 (여성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 잉켈스 방어구 아바타 세트 (남성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [금속갑옷] 아바타 레시피 스크롤: 잉켈스 방어구 아바타 세트 (여성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [재봉] 아바타 레시피 스크롤: 로얄가드 방어구 아바타 세트 (남성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [재봉] 아바타 레시피 스크롤: 로얄가드 방어구 아바타 세트 (여성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [재봉] 아바타 레시피 스크롤: 스위프트 방어구 아바타 세트 (남성)",
            item_src: "",
          },
          {
            item_name:
              "(부스트 한정) [재봉] 아바타 레시피 스크롤: 스위프트 방어구 아바타 세트 (여성)",
            item_src: "",
          },
          {
            item_name: "(부스트 한정) 불안정한 강화의 룬",
            item_src: "",
          },
        ],
      },
    ],
  },

  {
    raid_name: "시공간 왜곡",
    monsters: [
      {
        name: "찬탈자의 성채",
        entry: [
          { stat_name: "이름", stat_value: "혼의 찬탈자 타로스" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "52000" },
          { stat_name: "크리티컬", stat_value: "245" },
          { stat_name: "추가피해", stat_value: "7000" },
          { stat_name: "방어력", stat_value: "29000" },
          { stat_name: "밸런스", stat_value: "115" },
          { stat_name: "대항력", stat_value: "240" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "혼의 찬탈자 타로스" },
          { stat_name: "레벨", stat_value: "110" },
          { stat_name: "공격력", stat_value: "50000" },
          { stat_name: "크리티컬", stat_value: "290" },
          { stat_name: "크리티컬 저항", stat_value: "229" },
          { stat_name: "대항력 저항", stat_value: "180" },
          { stat_name: "밸런스 저항", stat_value: "34" },
        ],
        drop_item: [],
      },
      {
        name: "몰락한 기사의 전당",
        entry: [
          { stat_name: "이름", stat_value: "몰락자 아이젠리터" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "58850" },
          { stat_name: "크리티컬", stat_value: "281" },
          { stat_name: "추가피해", stat_value: "7500" },
          { stat_name: "방어력", stat_value: "33000" },
          { stat_name: "밸런스", stat_value: "139" },
          { stat_name: "대항력", stat_value: "280" },
        ],
        limit: [
          { stat_name: "이름", stat_value: "몰락자 아이젠리터" },
          { stat_name: "레벨", stat_value: "115" },
          { stat_name: "공격력", stat_value: "52850" },
          { stat_name: "크리티컬", stat_value: "320" },
          { stat_name: "크리티컬 저항", stat_value: "254" },
          { stat_name: "대항력 저항", stat_value: "220" },
          { stat_name: "밸런스 저항", stat_value: "59" },
        ],
        drop_item: [],
      },
    ],
  },

  {
    raid_name: "결사대",
    monsters: [
      {
        name: "사념의 바다",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "네반" },
          { stat_name: "레벨", stat_value: "90" },
          { stat_name: "공격력", stat_value: "27000" },
          { stat_name: "크리티컬", stat_value: "125" },
          { stat_name: "크리티컬 저항", stat_value: "90" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
        drop_item: [{ item_name: "신념의 상자: 결사대", item_src: "" }],
      },
      {
        name: "달의 이면",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "발로르" },
          { stat_name: "레벨", stat_value: "95" },
          { stat_name: "공격력", stat_value: "33500" },
          { stat_name: "크리티컬", stat_value: "150" },
          { stat_name: "크리티컬 저항", stat_value: "123" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
        drop_item: [{ item_name: "결의의 상자: 결사대", item_src: "" }],
      },
      {
        name: "모루 위의 검",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "브리지트" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "40000" },
          { stat_name: "크리티컬", stat_value: "200" },
          { stat_name: "크리티컬 저항", stat_value: "150" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
        drop_item: [{ item_name: "용맹의 상자: 결사대", item_src: "" }],
      },
      {
        name: "생명의 나무",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "라우라" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "45500" },
          { stat_name: "크리티컬", stat_value: "235" },
          { stat_name: "크리티컬 저항", stat_value: "185" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "4" },
        ],
        drop_item: [{ item_name: "강림의 상자: 결사대", item_src: "" }],
      },
    ],
  },

  {
    raid_name: "결사대 [헬]",
    monsters: [
      {
        name: "사념의 바다",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "네반" },
          { stat_name: "레벨", stat_value: "90" },
          { stat_name: "공격력", stat_value: "39000" },
          { stat_name: "크리티컬", stat_value: "185" },
          { stat_name: "크리티컬 저항", stat_value: "145" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
        drop_item: [{ item_name: "신념의 상자: 결사대", item_src: "" }],
      },
      {
        name: "달의 이면",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "발로르" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "39000" },
          { stat_name: "크리티컬", stat_value: "185" },
          { stat_name: "크리티컬 저항", stat_value: "145" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
        drop_item: [{ item_name: "결의의 상자: 결사대", item_src: "" }],
      },
      {
        name: "모루 위의 검",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "브리지트" },
          { stat_name: "레벨", stat_value: "100" },
          { stat_name: "공격력", stat_value: "45500" },
          { stat_name: "크리티컬", stat_value: "225" },
          { stat_name: "크리티컬 저항", stat_value: "185" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "0" },
        ],
        drop_item: [{ item_name: "용맹의 상자: 결사대", item_src: "" }],
      },
      {
        name: "생명의 나무",
        entry: [],
        limit: [
          { stat_name: "이름", stat_value: "라우라" },
          { stat_name: "레벨", stat_value: "105" },
          { stat_name: "공격력", stat_value: "47280" },
          { stat_name: "크리티컬", stat_value: "249" },
          { stat_name: "크리티컬 저항", stat_value: "206" },
          { stat_name: "대항력 저항", stat_value: "0" },
          { stat_name: "밸런스 저항", stat_value: "17" },
        ],
        drop_item: [{ item_name: "강림의 상자: 결사대", item_src: "" }],
      },
    ],
  },
];
