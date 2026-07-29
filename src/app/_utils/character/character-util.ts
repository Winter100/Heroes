import { Stat } from '@/app/_type/previewType';
import { Basic, Guild, MergedCharacter } from '@/app/_type/characterType';

const STAT_NAME_MAP: { [key: string]: string } = {
  '공격력 제한 해제': '파괴력',
  대항력: '방어력 관통',
};

/**
 *
 * @param stats
 * @returns 공격력과 마법공격력중 더 높은 스텟을 공격력 값으로 합친 후 스텟 배열을 리턴합니다.
 */
export const mergeAtk = (stats: { stat: Stat[] }) => {
  const copyStats = [...stats.stat];

  const atkValue = copyStats.find(
    (stat) => stat.stat_name === '공격력'
  )?.stat_value;
  const matkValue = copyStats.find(
    (stat) => stat.stat_name === '마법공격력'
  )?.stat_value;

  const maxAtk = Math.max(
    parseInt(atkValue?.toString() || '0'),
    parseInt(matkValue?.toString() || '0')
  );

  const mergedAtkStats = copyStats
    .filter((stat) => stat.stat_name !== '마법공격력')
    .map((name) => {
      if (name.stat_name === '공격력') {
        return { stat_name: '공격력', stat_value: maxAtk?.toString() };
      } else {
        return { ...name };
      }
    });

  return mergedAtkStats;
};

export const mergeCharacterData = (
  basic: Basic,
  stat: Stat[],
  guild: Guild = { guild_name: '' }
) => {
  const mergedCharacterData: MergedCharacter = {
    name: basic?.character_name,
    basic: [
      {
        stat_name: '이름',
        stat_value: basic?.character_name ?? '',
      },
      {
        stat_name: '직업',
        stat_value: basic?.character_class_name ?? '',
      },
      {
        stat_name: '길드',
        stat_value: guild?.guild_name ?? '',
      },
      {
        stat_name: '레벨',
        stat_value: basic?.character_level.toString() ?? '0',
      },
      {
        stat_name: '카르제',
        stat_value: basic?.cairde_name ?? '',
      },
    ],
    info: [
      {
        stat_name: '이름',
        stat_value: basic?.character_name ?? '',
      },
      {
        stat_name: '직업',
        stat_value: basic?.character_class_name ?? '',
      },
      {
        stat_name: '길드',
        stat_value: guild?.guild_name ?? '',
      },
      {
        stat_name: '레벨',
        stat_value: basic?.character_level.toString() ?? '0',
      },
      {
        stat_name: '카르제',
        stat_value: basic?.cairde_name ?? '',
      },
      ...stat,
    ],
    stat: [...stat],
    skill: [...basic.skill_awakening],
  };
  return mergedCharacterData;
};

/**
 *
 * @param stats
 * @returns 공격력과 마법공격력 중 더 높은 스탯의 값을 공격력으로 남긴후 반환합니다.
 */
export const transformHighAttack = (stats: { stat: Stat[] }): Stat[] => {
  const copyStats = [...stats.stat];

  const atkValue = copyStats.find(
    (stat) => stat.stat_name === '공격력'
  )?.stat_value;
  const matkValue = copyStats.find(
    (stat) => stat.stat_name === '마법공격력'
  )?.stat_value;

  const maxAtk = Math.max(
    parseInt(atkValue?.toString() || '0'),
    parseInt(matkValue?.toString() || '0')
  );

  return copyStats
    .filter((stat) => stat.stat_name !== '마법공격력')
    .map((name) => {
      if (name.stat_name === '공격력') {
        return { stat_name: '공격력', stat_value: maxAtk?.toString() };
      } else {
        return { ...name };
      }
    });
};

/**
 * 공격력 제한 해제 -> 파괴력
 *
 * 대항력 -> 방어력 관통
 *
 * 위 스탯의 이름을 변경 후 반환합니다.
 *
 * @param stats
 * @returns 이름이 변경된 스탯
 */
export const transformAtkLimitAndForce = (stats: Stat[]): Stat[] => {
  return stats.map((stat) => {
    const newName = STAT_NAME_MAP[stat.stat_name];
    if (newName)
      return {
        ...stat,
        stat_name: newName,
        stat_value: Number(stat.stat_value),
      };
    return stat;
  });
};

/**
 * 스탯 배열을 받아 특정 스탯 이름을 통일된 이름으로 바꿈.
 * @param stats - 원본 스탯 배열
 * @returns 번역된 새 스탯 배열
 */
export const translateAndUnifyStats = (stats: Stat[]): Stat[] => {
  return stats.map((stat) => {
    const newName = STAT_NAME_MAP[stat.stat_name];
    if (newName) {
      return { ...stat, stat_name: newName };
    }
    return stat;
  });
};
