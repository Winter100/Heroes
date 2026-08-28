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
import { MergedEnchantType } from '@/app/_features/market/enchant-fiter-list';
import { ItemRecipes } from '@/app/_type/itemType';

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
  // Key: 인챈트 이름, Value: 최신 인챈트 데이터
  const enchantMap = new Map<string, EnchantFormatingType>();

  for (const currentItem of items) {
    const enchantInfo = extractEnchantInfo(currentItem.item_option);

    // 방어 코드: 인챈트 정보가 없으면 다음 아이템으로 넘어감
    if (!enchantInfo || !enchantInfo.name) continue;

    const enchantName = enchantInfo.name;
    const currentItemDate = new Date(currentItem.date_update).getTime();
    const existing = enchantMap.get(enchantName);

    // Map에 해당 인챈트가 없거나,
    // 현재 아이템의 날짜가 기존 저장된 아이템의 날짜보다 최신일 경우에만 데이터 세팅(덮어쓰기)
    if (
      !existing ||
      currentItemDate > new Date(existing.date_update).getTime()
    ) {
      enchantMap.set(enchantName, {
        item_name: enchantName,
        min_price: currentItem.min_price ?? 0,
        max_price: currentItem.max_price ?? 0,
        average_price: currentItem.average_price ?? 0,
        date_update: currentItem.date_update,
        affix: enchantInfo.affix,
      });
    }
  }

  return Array.from(enchantMap.values());
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

export const recipeFilter = (
  recipes: ItemRecipes[],
  currentCategory: string | null,
  currentSubCategory?: string | null
) => {
  return recipes.filter((item) => {
    if (currentCategory && item.category !== currentCategory) return false;

    if (currentCategory === '장비' && currentSubCategory) {
      if (currentSubCategory === '악세서리') {
        return !['오르나', '와드네', '에리우'].some((keyword) =>
          item.name.includes(keyword)
        );
      }
      return item.name.includes(currentSubCategory);
    }

    if (currentCategory === '재료' && currentSubCategory) {
      if (currentSubCategory === '기타') {
        return !['오르나', '와드네', '에리우'].some((keyword) =>
          item.name.includes(keyword)
        );
      }
      const keyword = currentSubCategory.replace(' 관련', '');
      return item.name.includes(keyword);
    }

    return true;
  });
};

export const enchantFilter = (
  enchants: MergedEnchantType[],
  currentCategory: string | null,
  currentSubCategory: string | null
) => {
  const curCategory = category[currentCategory as keyof typeof category];
  return enchants.filter((item) => {
    // 카테고리만 있고 서브카테고리 없으면 카테고리만 렌더링
    if (currentCategory && !currentSubCategory) {
      return item.affix.toUpperCase() === curCategory;
    }

    if (curCategory && currentSubCategory) {
      const isCategory = item.affix.toUpperCase() === curCategory;
      const isSubCategory = item.slot?.some((slot) =>
        slot?.name.includes(currentSubCategory)
      );
      return isCategory && isSubCategory;
    }

    // 아무것도 선택이 안되어 있을때 모두 보기
    return true;
  });
};

const category = {
  ['접두']: 'PREFIX',
  ['접미']: 'SUFFIX',
};

export const convertPriceMap = (priceData: EnchantFormatingType[]) => {
  if (!priceData) {
    return new Map<string, EnchantFormatingType>();
  }

  return new Map<string, EnchantFormatingType>(
    priceData.map((price) => [price.item_name, price])
  );
};

export const mergeEnchantPriceServer = (
  enchants: EnchantOptionType[],
  priceMap: Map<string, EnchantFormatingType>
) => {
  return enchants.map((item) => {
    const priceInfo = priceMap.get(item.name);
    return {
      ...item,
      ...priceInfo,
    };
  });
};

export function parseItemSlug(slug: string) {
  const match = slug.match(/^(\d+)-(.+)$/);

  if (!match) {
    return null;
  }

  const [, idStr, encodedName] = match;

  return {
    itemId: Number(idStr),
    itemName: decodeURIComponent(encodedName),
  };
}
