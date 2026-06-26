import { RaidType } from '@/app/_store/useRaidStore';
import {
  Basic,
  Guild,
  MergedCharacter,
  SkillData,
} from '@/app/_type/characterType';
import { Item_Rating } from '@/app/_type/infoInfoType';
import { RaidListType } from '@/app/_type/raidType';
import { extractNumber } from '../get';
import { enchantEffectOrderMap } from '@/app/_constant/keyword';
import { EnchantGroup, EnchantOptionType } from '@/app/_type/enchantType';
import { EnchantOptionSort } from '@/app/_utils/enchant';
import { BasicEventType } from '@/app/_type/homeType';

interface ConvertResult {
  itemName: string;
  gradeMatch: Item_Rating;
}
/**
 * - 아이템 이름과 슬롯을 넣으면 이름과 등급을 리턴
 * @param name
 * @param slot
 * @returns
 */
export const convertItemNameBySlot = (
  name: string,
  slot: string
): ConvertResult => {
  if (slot !== 'Right Hand') return { itemName: name, gradeMatch: null };

  const baseNames = ['밀레시안', '아르드리', '오르나', '와드네', '에리우'];
  const gradeNames: Item_Rating[] = [
    '일반',
    '초급',
    '중급',
    '고급',
    '레어',
    '전설',
  ];

  const baseMatch = baseNames.find((base) => name.includes(base));
  if (!baseMatch) return { itemName: name, gradeMatch: null };

  const itemName = `${baseMatch} 무기`;
  // gradeMatch가 undefined일 수 있으므로 기본값 설정
  const gradeMatch =
    gradeNames.find((grade) => name.includes(grade || '')) || null;

  return { itemName, gradeMatch };
};

export const convertToKST = (utcDate: string): string => {
  try {
    const date = new Date(utcDate);

    return new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      dateStyle: 'medium',
      timeStyle: 'medium',
    }).format(date);
  } catch {
    return '';
  }
};

/**
 * - 테이블 조회에서 캐릭터 필터 및 정렬 해주는 함수
 * @param characters
 * @param selectedTitleList
 * @returns
 */
export const filterCharacters = (
  characters: MergedCharacter[],
  selectedTitleList: { stat_name: string; isView: boolean }[]
) => {
  const filterdData = characters
    .map((c) => {
      const filterdInfo = c?.info
        ?.filter((infoItem) => {
          return selectedTitleList?.some(
            (selectedItem) =>
              selectedItem.stat_name.includes(infoItem.stat_name) &&
              selectedItem.isView === true
          );
        })
        .sort((a, b) => {
          const indexA = selectedTitleList.findIndex(
            (selectedItem) => selectedItem.stat_name === a.stat_name
          );
          const indexB = selectedTitleList.findIndex(
            (selectedItem) => selectedItem.stat_name === b.stat_name
          );
          return indexA - indexB;
        });

      return [
        {
          name: filterdInfo.find((c) => c.stat_name === '이름')?.stat_value,
          info: filterdInfo,
        },
      ];
    })
    .flat();
  return filterdData;
};

/**
 * - 컨디션 조건에 따른 레이드 리스트 리턴
 * @param raidList
 * @param condition
 * @returns
 */
export const filterRaidList = (
  raidList: RaidListType[],
  condition: RaidType
): RaidListType[] => {
  return raidList
    .map((raid) => {
      const filteredMonsters = raid.monsters.filter((monster) => {
        if (condition === '빠른전투') {
          return monster.entry && monster.entry.length > 0;
        } else {
          return monster.limit && monster.limit.length > 0;
        }
      });

      return {
        ...raid,
        monsters: filteredMonsters,
      };
    })
    .filter((raid) => raid.monsters.length > 0);
};

/**
 * 캐릭터 정보 정렬
 * @param title
 * @param ascending
 * @param characterInfo
 * @returns
 */
export const sortCharacters = (
  title: string,
  ascending: boolean,
  characterInfo: MergedCharacter[]
) => {
  const characters = [...characterInfo];

  const sortedData = characters.sort((a, b) => {
    const statA = a.info.find((stat) =>
      stat.stat_name.replace(/\s/g, '').includes(title)
    );
    const statB = b.info.find((stat) =>
      stat.stat_name.replace(/\s/g, '').includes(title)
    );
    const valueA = statA ? statA.stat_value : '0';
    const valueB = statB ? statB.stat_value : '0';

    const numA = parseFloat(valueA?.toString());
    const numB = parseFloat(valueB?.toString());

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      const statA = a.name;
      const statB = b.name;
      if (statA < statB) return ascending ? -1 : 1;
      if (statA > statB) return ascending ? 1 : -1;
      return 0;
    }
    return ascending ? numA - numB : numB - numA;
  });

  return sortedData;
};

/**
 * 스킬 각성 정렬 함수
 * @param skill
 * @param include
 * @param exclude
 * @returns
 */
export const filterByStoneName = (
  skill: SkillData[],
  include: string[],
  exclude: string[] = []
) => {
  return skill
    .filter(
      (s) =>
        include.every((inc) => s.item_name.includes(inc)) &&
        exclude.every((exc) => !s.item_name.includes(exc))
    )
    .sort((a, b) => {
      const numA = extractNumber(a.item_name);
      const numB = extractNumber(b.item_name);
      if (numA === null || numB === null) return 0;
      return numB - numA;
    });
};

/**
 * 캐릭터 기본 정보 합쳐주는 함수
 * @param basic
 * @param guild
 * @returns
 */
export const mergeProfileData = (basic: Basic, guild: Guild) => {
  return [
    { title: '카르제', value: basic?.cairde_name },
    { title: '직업', value: basic?.character_class_name },
    { title: '레벨', value: basic?.character_level },
    { title: '타이틀', value: basic?.total_title_count },
    { title: '길드', value: guild?.guild_name },
  ];
};

export const groupByRank = (
  data: EnchantOptionType[],
  type: 'prefix' | 'suffix' | 'infusion' = 'infusion'
): EnchantGroup[] => {
  const rankMap = new Map();

  rankMap.set('all', []);

  const list = EnchantOptionSort(data, enchantEffectOrderMap, type);

  list.forEach((item) => {
    const rank = item.rank;

    if (!rankMap.has(rank)) {
      rankMap.set(rank, []);
    }

    rankMap.get('all').push(item);
    rankMap.get(rank).push(item);
  });

  return Array.from(rankMap, ([rank, enchants]) => {
    const strRank = rank.toString();
    return {
      title: rank === 'all' ? '전체' : `${strRank}`,
      rank: strRank,
      enchants,
    };
  });
};

export const sortEventsByDate = (items: BasicEventType[]) => {
  return items?.slice().sort((a, b) => {
    const aStart = a.date_event_start
      ? new Date(a.date_event_start).getTime()
      : Infinity;
    const bStart = b.date_event_start
      ? new Date(b.date_event_start).getTime()
      : Infinity;

    const aEnd = a.date_event_end
      ? new Date(a.date_event_end).getTime()
      : Infinity;
    const bEnd = b.date_event_end
      ? new Date(b.date_event_end).getTime()
      : Infinity;
    if (aEnd !== bEnd) return aEnd - bEnd;
    return aStart - bStart;
  });
};
