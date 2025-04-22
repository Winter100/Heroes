import { Basic, Guild, MergedCharacter } from '@/app/_type/characterType';
import { Stat } from '@/app/_type/previewType';

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
