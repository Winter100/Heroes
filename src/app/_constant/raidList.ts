const item_filter = {
  equipment: '장비',
  materials: '재료',
  consumables: '소모품',
  enchant: '인챈트',
} as const;

export interface MonstersOmitEntry {
  raid_name: string;
  monsters: Omit<MonstersType, 'entry'>[];
}

export interface MonstersOmitLimit {
  raid_name: string;
  monsters: Omit<MonstersType, 'limit'>[];
}

export interface MonstersType {
  name: string;
  basic_reward?: { name: string; value: string }[];
  entry: { stat_name: string; stat_value: string }[];
  limit: { stat_name: string; stat_value: string }[];
  drop_items: {
    item_name: string;
    item_description?: string[];
    item_filter: (typeof item_filter)[keyof typeof item_filter];
    core_boost_apply: boolean;
    core_boost_drop: boolean;
  }[];
  raid_description?: string;
  bonus: { bonus_description: string; bonus_value: string }[];
}

export interface RaidListType {
  raid_name: string;
  monsters: MonstersType[];
}

export const raidList: RaidListType[] = [
  {
    raid_name: '아르드리',
    monsters: [
      {
        name: '왕성 토파즈 홀',
        raid_description: `더 이상의 대화는 불필요하다. 결국, 살아남는 쪽만이 자신의 정의를 관철하는 법이다.`,
        basic_reward: [
          { name: '골드', value: '64700' },
          { name: '경험치', value: '6000000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '로메르에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '마나 출혈 효과에 걸리지 않고 전투 승리',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '로메르' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '40630' },
          { stat_name: '크리티컬', stat_value: '214' },
          { stat_name: '밸런스', stat_value: '93' },
          { stat_name: '추가피해', stat_value: '4400' },
          { stat_name: '방어력', stat_value: '23300' },
          { stat_name: '대항력', stat_value: '162' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '로메르' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '42300' },
          { stat_name: '크리티컬', stat_value: '215' },
          { stat_name: '크리티컬 저항', stat_value: '175' },
          { stat_name: '대항력 저항', stat_value: '88' },
          { stat_name: '밸런스 저항', stat_value: '7' },
        ],
        drop_items: [
          {
            item_name: '아르드리의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '아르드리의 봉인된 힘: 무기',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '아르드리의 봉인된 힘: 머리 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '예리한 계승석 조각',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '진격 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '상급 청동 사자 조각상',
            item_filter: item_filter.equipment,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '잊혀진 제단',
        basic_reward: [
          { name: '골드', value: '64700' },
          { name: '경험치', value: '6000000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '나베리우스에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '1회 행동 불능 되지 않고 보스 처치',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '나베리우스' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '42110' },
          { stat_name: '크리티컬', stat_value: '217' },
          { stat_name: '밸런스', stat_value: '94' },
          { stat_name: '추가피해', stat_value: '4500' },
          { stat_name: '방어력', stat_value: '23310' },
          { stat_name: '대항력', stat_value: '170' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '나베리우스' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '44110' },
          { stat_name: '크리티컬', stat_value: '223' },
          { stat_name: '크리티컬 저항', stat_value: '181' },
          { stat_name: '대항력 저항', stat_value: '92' },
          { stat_name: '밸런스 저항', stat_value: '9' },
        ],
        drop_items: [
          {
            item_name: '나베리우스의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '아르드리의 봉인된 힘: 가슴 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오롯한 계승석 조각',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '추적자의 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '원한 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '상급 전쟁 여신의 조각상',
            item_filter: item_filter.equipment,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '죽음의 변증법',
        basic_reward: [
          { name: '골드', value: '64700' },
          { name: '경험치', value: '6000000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '밀레드에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '염화 상태효과 50% 이상 되지 않고 전투 승리',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '밀레드' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '43110' },
          { stat_name: '크리티컬', stat_value: '220' },
          { stat_name: '밸런스', stat_value: '96' },
          { stat_name: '추가피해', stat_value: '4600' },
          { stat_name: '방어력', stat_value: '24300' },
          { stat_name: '대항력', stat_value: '178' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '밀레드' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '45920' },
          { stat_name: '크리티컬', stat_value: '231' },
          { stat_name: '크리티컬 저항', stat_value: '188' },
          { stat_name: '대항력 저항', stat_value: '100' },
          { stat_name: '밸런스 저항', stat_value: '12' },
        ],
        drop_items: [
          {
            item_name: '밀레드의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '아르드리의 봉인된 힘: 다리 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '안정된 계승석 조각',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '격노 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '한탄 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '상급 서큐버스의 송곳니',
            item_filter: item_filter.equipment,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '원한의 암굴',
        basic_reward: [
          { name: '골드', value: '64700' },
          { name: '경험치', value: '6000000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '카사르에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description:
              '화염, 석화, 기력 감소 상태효과에 걸리지 않고 전투 승리',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '카사르' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '44280' },
          { stat_name: '크리티컬', stat_value: '227' },
          { stat_name: '밸런스', stat_value: '98' },
          { stat_name: '추가피해', stat_value: '4700' },
          { stat_name: '방어력', stat_value: '25350' },
          { stat_name: '대항력', stat_value: '186' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '카사르' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '47780' },
          { stat_name: '크리티컬', stat_value: '240' },
          { stat_name: '크리티컬 저항', stat_value: '195' },
          { stat_name: '대항력 저항', stat_value: '108' },
          { stat_name: '밸런스 저항', stat_value: '14' },
        ],
        drop_items: [
          {
            item_name: '카사르의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '아르드리의 봉인된 힘: 손 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '가벼운 계승석 조각',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '광기 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '광분 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '상급 의문의 고양이 조각상',
            item_filter: item_filter.equipment,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '위대한 사역',
        basic_reward: [
          { name: '골드', value: '64700' },
          { name: '경험치', value: '6000000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '에녹에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '에녹의 맹독 2단계 이상에 걸리지 않고 전투 승리',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '에녹' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '45280' },
          { stat_name: '크리티컬', stat_value: '234' },
          { stat_name: '밸런스', stat_value: '100' },
          { stat_name: '추가피해', stat_value: '4800' },
          { stat_name: '방어력', stat_value: '26350' },
          { stat_name: '대항력', stat_value: '194' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '에녹' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '47780' },
          { stat_name: '크리티컬', stat_value: '248' },
          { stat_name: '크리티컬 저항', stat_value: '204' },
          { stat_name: '대항력 저항', stat_value: '116' },
          { stat_name: '밸런스 저항', stat_value: '16' },
        ],
        drop_items: [
          {
            item_name: '에녹의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '아르드리의 봉인된 힘: 발 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '단단한 계승석 조각',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '매끈한 계승석 조각',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '뒤틀린 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '상급 웨어울프의 앞발',
            item_filter: item_filter.equipment,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
    ],
  },

  {
    raid_name: '오르나',
    monsters: [
      {
        name: '로흘란의 바람',
        basic_reward: [
          { name: '골드', value: '97000' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '이루산에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description:
              '이루산의 낙인의 불길 2단계 이상에 걸리지 않고 전투 승리',
            // 이루산의 바람의 상흔에 걸리지 않고 전투 승리 (추후 교체)
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '이루산' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '46280' },
          { stat_name: '크리티컬', stat_value: '236' },
          { stat_name: '밸런스', stat_value: '104' },
          { stat_name: '추가피해', stat_value: '5600' },
          { stat_name: '방어력', stat_value: '26350' },
          { stat_name: '대항력', stat_value: '205' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '이루산' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '48780' },
          { stat_name: '크리티컬', stat_value: '262' },
          { stat_name: '크리티컬 저항', stat_value: '206' },
          { stat_name: '대항력 저항', stat_value: '116' },
          { stat_name: '밸런스 저항', stat_value: '20' },
        ],
        drop_items: [
          {
            item_name: '오르나의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오르나의 봉인된 힘: 무기',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오르나의 봉인된 힘: 머리 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '예리한 계승 원석',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '안정된 계승 원석',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '복수의 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '예언의 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '창조와 파괴의 성소',
        basic_reward: [
          { name: '골드', value: '97000' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '에메트에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '에메트의 마나 뇌격 2단계 걸리지 않고 전투 승리',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '에메트' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '47680' },
          { stat_name: '크리티컬', stat_value: '244' },
          { stat_name: '밸런스', stat_value: '108' },
          { stat_name: '추가피해', stat_value: '5600' },
          { stat_name: '방어력', stat_value: '27750' },
          { stat_name: '대항력', stat_value: '216' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '에메트' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '50180' },
          { stat_name: '크리티컬', stat_value: '270' },
          { stat_name: '크리티컬 저항', stat_value: '214' },
          { stat_name: '대항력 저항', stat_value: '116' },
          { stat_name: '밸런스 저항', stat_value: '28' },
        ],
        drop_items: [
          {
            item_name: '에메트의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오르나의 봉인된 힘: 가슴 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '가벼운 계승 원석',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오롯한 계승 원석',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '잊혀진 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고대의 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },

      {
        name: '검의 무덤',
        basic_reward: [
          { name: '골드', value: '97000' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '야르니르에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description:
              '야르니르의 검의 불길 2단계 이상에 걸리지 않고 전투 승리',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '야르니르' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '49830' },
          { stat_name: '크리티컬', stat_value: '256' },
          { stat_name: '밸런스', stat_value: '118' },
          { stat_name: '추가피해', stat_value: '5900' },
          { stat_name: '방어력', stat_value: '29900' },
          { stat_name: '대항력', stat_value: '230' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '야르니르' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '52330' },
          { stat_name: '크리티컬', stat_value: '279' },
          { stat_name: '크리티컬 저항', stat_value: '226' },
          { stat_name: '대항력 저항', stat_value: '136' },
          { stat_name: '밸런스 저항', stat_value: '37' },
        ],
        drop_items: [
          {
            item_name: '야르니르의 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오르나의 봉인된 힘: 다리 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '단단한 계승 원석',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '매끈한 계승 원석',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '승자의 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '대적자의 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '일격 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '시드 별궁',
        basic_reward: [
          { name: '골드', value: '97000' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '브레스에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description:
              '브레스의 과다 출혈 2단계 이상에 걸리지 않고 전투 승리',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '브레스' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '51360' },
          { stat_name: '크리티컬', stat_value: '264' },
          { stat_name: '밸런스', stat_value: '128' },
          { stat_name: '추가피해', stat_value: '6150' },
          { stat_name: '방어력', stat_value: '31430' },
          { stat_name: '대항력', stat_value: '250' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '브레스' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '53860' },
          { stat_name: '크리티컬', stat_value: '288' },
          { stat_name: '크리티컬 저항', stat_value: '240' },
          { stat_name: '대항력 저항', stat_value: '156' },
          { stat_name: '밸런스 저항', stat_value: '44' },
        ],
        drop_items: [
          {
            item_name: '브레스의 달빛 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '브레스의 그림자 봉인된 힘',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오르나의 봉인된 힘: 손 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오르나의 봉인된 힘: 발 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '단단한 계승 원석',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '우아한 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '찬미 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
    ],
  },

  {
    raid_name: '와드네',
    monsters: [
      {
        name: '제단을 지키는 자',
        basic_reward: [
          { name: '골드', value: '129400' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '스렝에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '1회 행동 불능 되지 않고 보스 처치',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '스렝' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '52920' },
          { stat_name: '크리티컬', stat_value: '278' },
          { stat_name: '밸런스', stat_value: '136' },
          { stat_name: '추가피해', stat_value: '7150' },
          { stat_name: '방어력', stat_value: '31430' },
          { stat_name: '대항력', stat_value: '270' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '스렝' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '53920' },
          { stat_name: '크리티컬', stat_value: '298' },
          { stat_name: '크리티컬 저항', stat_value: '246' },
          { stat_name: '대항력 저항', stat_value: '186' },
          { stat_name: '밸런스 저항', stat_value: '53' },
        ],
        drop_items: [
          {
            item_name: '와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '스렝의 정수',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '와드네의 파편: 보조 장비',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 무기',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 머리 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '예리한 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '단단한 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '투혼 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '[금속무기] 레시피 스크롤',
            item_description: ['와드네 무기'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[금속갑옷] 레시피 스크롤',
            item_description: [
              '와드네 머리 방어구',
              '와드네 방패',
              '그랜드타지',
            ],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[세공] 레시피 스크롤',
            item_description: ['와드네 무기', '와드네 수호부', '캐스틀릿'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[재봉] 레시피 스크롤',
            item_description: ['와드네 머리 방어구'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
        ],
      },
      {
        name: '그릇된 고해',
        basic_reward: [
          { name: '골드', value: '129400' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '스피노스에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '1회 행동 불능 되지 않고 보스 처치',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '스피노스' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '54920' },
          { stat_name: '크리티컬', stat_value: '284' },
          { stat_name: '밸런스', stat_value: '144' },
          { stat_name: '추가피해', stat_value: '7250' },
          { stat_name: '방어력', stat_value: '32130' },
          { stat_name: '대항력', stat_value: '285' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '스피노스' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '55920' },
          { stat_name: '크리티컬', stat_value: '315' },
          { stat_name: '크리티컬 저항', stat_value: '261' },
          { stat_name: '대항력 저항', stat_value: '196' },
          { stat_name: '밸런스 저항', stat_value: '56' },
        ],
        drop_items: [
          {
            item_name: '와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '스피노스의 정수',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '와드네의 파편: 태양의 비원',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 무기',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 다리 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '예리한 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '가벼운 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '매끈한 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '사념 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '[금속갑옷] 레시피 스크롤',
            item_description: ['와드네 다리 방어구'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[세공] 레시피 스크롤',
            item_description: ['태양의 비원'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[재봉] 레시피 스크롤',
            item_description: ['와드네 다리 방어구'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
        ],
      },
      {
        name: '탐욕의 연회장',
        basic_reward: [
          { name: '골드', value: '129400' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '고르바스에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '1회 행동 불능 되지 않고 보스 처치',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '고르바스' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '56920' },
          { stat_name: '크리티컬', stat_value: '290' },
          { stat_name: '밸런스', stat_value: '152' },
          { stat_name: '추가피해', stat_value: '7350' },
          { stat_name: '방어력', stat_value: '32830' },
          { stat_name: '대항력', stat_value: '300' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '고르바스' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '57920' },
          { stat_name: '크리티컬', stat_value: '327' },
          { stat_name: '크리티컬 저항', stat_value: '276' },
          { stat_name: '대항력 저항', stat_value: '216' },
          { stat_name: '밸런스 저항', stat_value: '64' },
        ],
        drop_items: [
          {
            item_name: '와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '고르바스의 정수',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '와드네의 파편: 저주의 허리띠',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 무기',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 가슴 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '가벼운 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '안정된 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '견고한 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '시련 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '[금속갑옷] 레시피 스크롤',
            item_description: ['와드네 가슴 방어구'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[세공] 레시피 스크롤',
            item_description: ['저주의 허리띠'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[재봉] 레시피 스크롤',
            item_description: ['와드네 가슴 방어구'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
        ],
      },
      {
        name: '따를 수 없는 예언',
        basic_reward: [
          { name: '골드', value: '129400' },
          { name: '경험치', value: '6400000' },
          { name: 'AP', value: '50' },
        ],
        bonus: [
          {
            bonus_description: '모르간트에게 피격횟수 8회 미만으로 전투 승리',
            bonus_value: '28,800',
          },
          {
            bonus_description: '1회 행동 불능 되지 않고 보스 처치',
            bonus_value: '11,100',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '모르간트' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '57620' },
          { stat_name: '크리티컬', stat_value: '300' },
          { stat_name: '밸런스', stat_value: '160' },
          { stat_name: '추가피해', stat_value: '7450' },
          { stat_name: '방어력', stat_value: '33530' },
          { stat_name: '대항력', stat_value: '315' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '모르간트' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '58620' },
          { stat_name: '크리티컬', stat_value: '349' },
          { stat_name: '크리티컬 저항', stat_value: '281' },
          { stat_name: '대항력 저항', stat_value: '236' },
          { stat_name: '밸런스 저항', stat_value: '72' },
        ],
        drop_items: [
          {
            item_name: '와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '모르간트의 정수',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '와드네의 파편: 침묵의 증표',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 고요의 증표',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 무기',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 손 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '와드네의 파편: 발 방어구',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '안정된 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '오롯한 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '굳건한 와드네의 결정',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고독 인챈트 스크롤',
            item_filter: item_filter.enchant,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 강화의 비약',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '[금속갑옷] 레시피 스크롤',
            item_description: ['와드네 손 방어구', '와드네 발 방어구'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[세공] 레시피 스크롤',
            item_description: ['침묵의 증표', '고요의 증표'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[재봉] 레시피 스크롤',
            item_description: ['와드네 손 방어구', '와드네 발 방어구'],
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
        ],
      },
    ],
  },

  {
    raid_name: '스페셜 전투',
    monsters: [
      {
        name: '스페셜 전투',
        basic_reward: [
          { name: '골드', value: '64700' },
          { name: '경험치', value: '3000000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [
          {
            bonus_description: '',
            bonus_value: '',
          },
        ],
        entry: [
          { stat_name: '이름', stat_value: '스페셜 전투' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '52920' },
          { stat_name: '크리티컬', stat_value: '278' },
          { stat_name: '밸런스', stat_value: '136' },
          { stat_name: '추가피해', stat_value: '7150' },
          { stat_name: '방어력', stat_value: '31430' },
          { stat_name: '대항력', stat_value: '270' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '스페셜 전투' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '53920' },
          { stat_name: '크리티컬', stat_value: '298' },
          { stat_name: '크리티컬 저항', stat_value: '246' },
          { stat_name: '대항력 저항', stat_value: '186' },
          { stat_name: '밸런스 저항', stat_value: '53' },
        ],
        drop_items: [
          {
            item_name: '스페셜 던전: 인챈트 주머니',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '고급 미지의 팔찌 장식함',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '자르딘 강철',
            item_filter: item_filter.materials,
            core_boost_apply: true,
            core_boost_drop: false,
          },
          {
            item_name: '장인의 단단한 플라스크',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '장인의 섬세한 플라스크',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '불안정한 강화의 룬',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: true,
          },

          {
            item_name: '[금속갑옷] 아바타 레시피 스크롤',
            item_filter: item_filter.materials,
            item_description: [
              '오르나 방어구(남성/여성)',
              '브라하 방어구(남성/여성)',
              '헤레몬 방어구(남성/여성)',
              '잉켈스 방어구(남성/여성)',
            ],
            core_boost_apply: false,
            core_boost_drop: true,
          },
          {
            item_name: '[재봉] 아바타 레시피 스크롤',
            item_filter: item_filter.materials,
            item_description: [
              '오르나 방어구(남성/여성)',
              '브라하 방어구(남성/여성)',
              '로얄가드 방어구(남성/여성)',
              '스위프트 레이더스 방어구',
            ],
            core_boost_apply: false,
            core_boost_drop: true,
          },
        ],
      },
    ],
  },

  {
    raid_name: '시공간 왜곡',
    monsters: [
      {
        name: '찬탈자의 성채',
        basic_reward: [
          { name: '골드', value: '300000' },
          { name: '경험치', value: '2054000' },
          { name: 'AP', value: '200' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [
          { stat_name: '이름', stat_value: '혼의 찬탈자 타로스' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '52000' },
          { stat_name: '크리티컬', stat_value: '245' },
          { stat_name: '밸런스', stat_value: '115' },
          { stat_name: '해제', stat_value: '4500' },
          { stat_name: '추가피해', stat_value: '7000' },
          { stat_name: '방어력', stat_value: '29000' },
          { stat_name: '대항력', stat_value: '240' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '혼의 찬탈자 타로스' },
          { stat_name: '레벨', stat_value: '110' },
          { stat_name: '공격력', stat_value: '50000' },
          { stat_name: '크리티컬', stat_value: '290' },
          { stat_name: '크리티컬 저항', stat_value: '229' },
          { stat_name: '대항력 저항', stat_value: '180' },
          { stat_name: '밸런스 저항', stat_value: '34' },
        ],
        drop_items: [
          {
            item_name: '시공의 상자: 찬탈자의 성채',
            item_filter: item_filter.materials,
            item_description: ['부스트 사용 시 코어 부스트 상자가 드롭됩니다.'],
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '몰락한 기사의 전당',
        basic_reward: [
          { name: '골드', value: '400000' },
          { name: '경험치', value: '2054000' },
          { name: 'AP', value: '200' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [
          { stat_name: '이름', stat_value: '몰락자 아이젠리터' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '58850' },
          { stat_name: '크리티컬', stat_value: '281' },
          { stat_name: '밸런스', stat_value: '139' },
          { stat_name: '해제', stat_value: '6000' },
          { stat_name: '추가피해', stat_value: '7500' },
          { stat_name: '방어력', stat_value: '33000' },
          { stat_name: '대항력', stat_value: '280' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '몰락자 아이젠리터' },
          { stat_name: '레벨', stat_value: '115' },
          { stat_name: '공격력', stat_value: '52850' },
          { stat_name: '크리티컬', stat_value: '320' },
          { stat_name: '크리티컬 저항', stat_value: '254' },
          { stat_name: '대항력 저항', stat_value: '220' },
          { stat_name: '밸런스 저항', stat_value: '59' },
        ],
        drop_items: [
          {
            item_name: '시공의 상자: 몰락한 기사의 전당',
            item_filter: item_filter.materials,
            item_description: ['부스트 사용 시 코어 부스트 상자가 드롭됩니다.'],
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '주시자의 신전',
        basic_reward: [
          { name: '골드', value: '800000' },
          { name: '경험치', value: '2054000' },
          { name: 'AP', value: '200' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [
          { stat_name: '이름', stat_value: '주시자 요르드라' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '65000' },
          { stat_name: '크리티컬', stat_value: '332' },
          { stat_name: '밸런스', stat_value: '172' },
          { stat_name: '해제', stat_value: '11300' },
          { stat_name: '추가피해', stat_value: '8100' },
          { stat_name: '방어력', stat_value: '35000' },
          { stat_name: '대항력', stat_value: '370' },
        ],
        limit: [
          { stat_name: '이름', stat_value: '주시자 요르드라' },
          { stat_name: '레벨', stat_value: '120' },
          { stat_name: '공격력', stat_value: '55000' },
          { stat_name: '크리티컬', stat_value: '365' },
          { stat_name: '크리티컬 저항', stat_value: '305' },
          { stat_name: '대항력 저항', stat_value: '300' },
          { stat_name: '밸런스 저항', stat_value: '100' },
        ],
        drop_items: [
          {
            item_name: '시공의 상자: 주시자의 신전',
            item_filter: item_filter.materials,
            item_description: ['부스트 사용 시 코어 부스트 상자가 드롭됩니다.'],
            core_boost_apply: true,
            core_boost_drop: false,
          },
        ],
      },
    ],
  },

  {
    raid_name: '결사대',
    monsters: [
      {
        name: '사념의 바다',
        basic_reward: [
          { name: '골드', value: '200000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '네반' },
          { stat_name: '레벨', stat_value: '90' },
          { stat_name: '공격력', stat_value: '27000' },
          { stat_name: '크리티컬', stat_value: '125' },
          { stat_name: '크리티컬 저항', stat_value: '90' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '0' },
        ],
        drop_items: [
          {
            item_name: '신념의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '달의 이면',
        basic_reward: [
          { name: '골드', value: '200000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '발로르' },
          { stat_name: '레벨', stat_value: '95' },
          { stat_name: '공격력', stat_value: '33500' },
          { stat_name: '크리티컬', stat_value: '150' },
          { stat_name: '크리티컬 저항', stat_value: '123' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '0' },
        ],
        drop_items: [
          {
            item_name: '결의의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '모루 위의 검',
        basic_reward: [
          { name: '골드', value: '200000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '브리지트' },
          { stat_name: '레벨', stat_value: '100' },
          { stat_name: '공격력', stat_value: '40000' },
          { stat_name: '크리티컬', stat_value: '200' },
          { stat_name: '크리티컬 저항', stat_value: '150' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '0' },
        ],
        drop_items: [
          {
            item_name: '용맹의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '생명의 나무',
        basic_reward: [
          { name: '골드', value: '200000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '라우라' },
          { stat_name: '레벨', stat_value: '100' },
          { stat_name: '공격력', stat_value: '45500' },
          { stat_name: '크리티컬', stat_value: '235' },
          { stat_name: '크리티컬 저항', stat_value: '185' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '4' },
        ],
        drop_items: [
          {
            item_name: '강림의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
    ],
  },

  {
    raid_name: '결사대 [헬]',
    monsters: [
      {
        name: '사념의 바다 [헬]',
        basic_reward: [
          { name: '골드', value: '1000000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '네반' },
          { stat_name: '레벨', stat_value: '90' },
          { stat_name: '공격력', stat_value: '39000' },
          { stat_name: '크리티컬', stat_value: '185' },
          { stat_name: '크리티컬 저항', stat_value: '145' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '0' },
        ],
        drop_items: [
          {
            item_name: '신념의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '달의 이면 [헬]',
        basic_reward: [
          { name: '골드', value: '1000000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '발로르' },
          { stat_name: '레벨', stat_value: '100' },
          { stat_name: '공격력', stat_value: '39000' },
          { stat_name: '크리티컬', stat_value: '185' },
          { stat_name: '크리티컬 저항', stat_value: '145' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '0' },
        ],
        drop_items: [
          {
            item_name: '결의의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '모루 위의 검 [헬]',
        basic_reward: [
          { name: '골드', value: '1000000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '브리지트' },
          { stat_name: '레벨', stat_value: '100' },
          { stat_name: '공격력', stat_value: '45500' },
          { stat_name: '크리티컬', stat_value: '225' },
          { stat_name: '크리티컬 저항', stat_value: '185' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '0' },
        ],
        drop_items: [
          {
            item_name: '용맹의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
      {
        name: '생명의 나무 [헬]',
        basic_reward: [
          { name: '골드', value: '1000000' },
          { name: '경험치', value: '21400000' },
          { name: 'AP', value: '100' },
        ],
        bonus: [{ bonus_description: '', bonus_value: '' }],
        entry: [],
        limit: [
          { stat_name: '이름', stat_value: '라우라' },
          { stat_name: '레벨', stat_value: '105' },
          { stat_name: '공격력', stat_value: '47280' },
          { stat_name: '크리티컬', stat_value: '249' },
          { stat_name: '크리티컬 저항', stat_value: '206' },
          { stat_name: '대항력 저항', stat_value: '0' },
          { stat_name: '밸런스 저항', stat_value: '17' },
        ],
        drop_items: [
          {
            item_name: '강림의 상자: 결사대',
            item_filter: item_filter.materials,
            core_boost_apply: false,
            core_boost_drop: false,
          },
        ],
      },
    ],
  },
];
