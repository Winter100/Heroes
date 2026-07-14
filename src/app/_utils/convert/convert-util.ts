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
import { enchantEffectOrderMap, raidSortKey } from '@/app/_constant/keyword';
import {
  EnchantFormatingType,
  EnchantGroup,
  EnchantMergePriceType,
  EnchantOptionType,
  ItemPriceType,
  SIMULATION_AFFIX_TYPE,
} from '@/app/_type/enchantType';
import { EnchantOptionSort } from '@/app/_utils/enchant';
import { BasicEventType } from '@/app/_type/homeType';
import { ItemRecipe } from '@/app/_type/itemType';

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

/**
 * 중복된 아이템을 하나로 합치고, 가격과 날짜를 최신화하는 함수
 * @param items 원본 EnchantPriceItemType 배열
 * @returns 가공이 완료된 EnchantPriceItemType 배열
 */
function extractEnchantInfo(itemOption: ItemPriceType['item_option']) {
  if (itemOption.prefix_enchant_preset_1)
    return {
      name: itemOption.prefix_enchant_preset_1.trim(),
      affix: 'PREFIX' as SIMULATION_AFFIX_TYPE,
    };
  if (itemOption.prefix_enchant_preset_2)
    return {
      name: itemOption.prefix_enchant_preset_2.trim(),
      affix: 'PREFIX' as SIMULATION_AFFIX_TYPE,
    };
  if (itemOption.suffix_enchant_preset_1)
    return {
      name: itemOption.suffix_enchant_preset_1.trim(),
      affix: 'SUFFIX' as SIMULATION_AFFIX_TYPE,
    };
  if (itemOption.suffix_enchant_preset_2)
    return {
      name: itemOption.suffix_enchant_preset_2.trim(),
      affix: 'SUFFIX' as SIMULATION_AFFIX_TYPE,
    };

  return null; // 4개 필드가 모두 비어있는 예외 케이스
}

/**
 * 인챈트 이름을 기준으로 데이터를 그룹화하고 가격 및 날짜를 정산하는 함수
 */
export function aggregateByEnchantPreset(
  items: ItemPriceType[]
): EnchantFormatingType[] {
  // Key: 인챈트 이름, Value: 누적 집계 데이터
  const enchantMap = new Map<
    string,
    {
      min_price: number;
      max_price: number;
      total_price: number;
      count: number;
      date_update: string;
      affix: SIMULATION_AFFIX_TYPE;
    }
  >();

  items.forEach((currentItem) => {
    // 1. 4개 필드 중 값이 있는 인챈트 이름과 PREFIX/SUFFIX 종류를 추출
    const enchantInfo = extractEnchantInfo(currentItem.item_option);

    // 만약 인챈트 정보가 아예 없는 아이템 데이터라면 스킵 처리 (방어 코드)
    if (!enchantInfo || !enchantInfo.name) return;

    const enchantName = enchantInfo?.name ?? '';
    const currentMin = currentItem?.min_price ?? 0;
    const currentMax = currentItem?.max_price ?? 0;
    const currentAvg = currentItem?.average_price ?? 0;
    const currentDate = new Date(currentItem?.date_update) ?? '';

    if (!enchantMap.has(enchantName)) {
      // 최초 등록
      enchantMap.set(enchantName, {
        min_price: currentMin,
        max_price: currentMax,
        total_price: currentAvg,
        count: 1,
        date_update: currentItem.date_update,
        affix: enchantInfo.affix,
      });
    } else {
      // 기존 데이터가 있다면 갱신
      const existing = enchantMap.get(enchantName)!;

      existing.min_price = Math.min(existing.min_price, currentMin);
      existing.max_price = Math.max(existing.max_price, currentMax);
      existing.total_price += currentAvg;
      existing.count += 1;

      if (currentDate > new Date(existing.date_update)) {
        existing.date_update = currentItem.date_update;
      }
    }
  });

  // 최종 배열 변환 및 포맷팅
  return Array.from(enchantMap.entries()).map(([enchantName, info]) => {
    return {
      ...info,
      item_name: enchantName,
      min_price: info.min_price,
      max_price: info.max_price,
      average_price: Math.round(info.total_price / info.count),
      date_update: info.date_update,
      affix: info.affix,
    };
  });
}

export const mergeEnchantPrice = (
  enchants: EnchantOptionType[],
  priceList: EnchantFormatingType[]
) => {
  const enchantMap = new Map<string, EnchantMergePriceType>();

  enchants.forEach((enchant) => {
    const enchantName = enchant?.name?.toString();
    const enchantPrice = priceList.find(
      (price) => price.item_name === enchantName
    );
    if (!enchantMap.has(enchantName)) {
      enchantMap.set(enchantName, {
        ...enchant,
        item_name: enchantName,
        min_price: enchantPrice?.min_price ?? 0,
        max_price: enchantPrice?.max_price ?? 0,
        average_price: enchantPrice?.average_price ?? 0,
        date_update: enchantPrice?.date_update ?? '',
      });
    }
  });

  return Array.from(enchantMap, ([, value]) => ({
    ...value,
  }));
};

export const raidSort = (raid: RaidListType[]): RaidListType[] => {
  return [...raid].sort((a, b) => {
    const indexA = raidSortKey.indexOf(a.raid_name);
    const indexB = raidSortKey.indexOf(b.raid_name);

    const posA = indexA === -1 ? Infinity : indexA;
    const posB = indexB === -1 ? Infinity : indexB;

    return posA - posB;
  });
};

export const PREFIX_PRIORITY = {
  '': 0,
  초급: 1,
  중급: 2,
  고급: 3,
  레어: 4,
  전설: 5,
};

const PREFIXES = Object.keys(PREFIX_PRIORITY).filter((p) => p !== '');

// 아이템 이름에서 수식어와 핵심 키워드(와드네/에리우)를 분석하는 헬퍼 함수
export const parseGameItem = (name: string) => {
  const isSpecial = name.includes('와드네') || name.includes('에리우');

  if (!isSpecial) {
    return { isSpecial: false, baseName: name, priority: Infinity };
  }

  const firstWord = name.split(' ')[0];
  const hasPrefix = PREFIXES.includes(firstWord);

  const prefix = hasPrefix ? firstWord : '';
  const baseName = hasPrefix ? name.replace(`${firstWord} `, '') : name;
  const priority = PREFIX_PRIORITY[prefix as keyof typeof PREFIX_PRIORITY] ?? 0;

  return { isSpecial: true, baseName, priority };
};

// 1. 부위별 우선순위를 명시적인 배열로 선언 (인덱스가 작을수록 우선순위가 높음)
const PARTS_ORDER = ['무기', '헬름', '메일', '그리브즈', '건틀릿', '부츠'];

// 2. 아이템 이름이나 baseName을 받아 부위 점수를 반환하는 헬퍼 함수
const getPartsPriority = (name: string): number => {
  const index = PARTS_ORDER.findIndex((part) => name.includes(part));

  // 배열에 없는 부위(예: 악세서리, 반지 등)는 가장 뒤로 보냄 (큰 숫자 부여)
  return index === -1 ? PARTS_ORDER.length : index;
};

export const sortRecipe = (items: ItemRecipe[]): ItemRecipe[] => {
  return items
    .sort((a, b) => {
      const itemA = parseGameItem(a.name);
      const itemB = parseGameItem(b.name);

      // 규칙 1: 특수 아이템 그룹을 일반 아이템보다 무조건 앞으로
      if (itemA.isSpecial !== itemB.isSpecial) {
        return itemA.isSpecial ? -1 : 1;
      }

      // 둘 다 특수 아이템인 경우
      if (itemA.isSpecial && itemB.isSpecial) {
        // [추가된 규칙]: 무기, 헬름, 메일, 그리브즈, 건틀릿, 부츠 순서로 먼저 정렬
        const partPriorityA = getPartsPriority(itemA.baseName);
        const partPriorityB = getPartsPriority(itemB.baseName);

        if (partPriorityA !== partPriorityB) {
          return partPriorityA - partPriorityB; // 점수가 낮은(우선순위가 높은) 것이 앞으로
        }

        // 규칙 2: 부위 순서가 같다면(예: 둘 다 그리브즈), 진짜 아이템 종류(baseName)가 같은지 비교
        if (itemA.baseName !== itemB.baseName) {
          return itemA.baseName.localeCompare(itemB.baseName, 'ko');
        }

        // 규칙 3: 아이템 종류까지 완벽히 일치한다면, 그 안에서 등급 순서대로 세웁니다.
        return itemA.priority - itemB.priority;
      }

      // 둘 다 일반 아이템인 경우 가나다순 정렬
      return a.name.localeCompare(b.name, 'ko');
    })
    .filter((i) => !i.name.includes('+15'));
};
