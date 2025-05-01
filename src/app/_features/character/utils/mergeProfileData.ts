import { Basic, Guild } from '@/app/_type/characterType';

export const mergeProfileData = (basic: Basic, guild: Guild) => {
  return [
    { title: '카르제', value: basic?.cairde_name },
    { title: '직업', value: basic?.character_class_name },
    { title: '레벨', value: basic?.character_level },
    { title: '타이틀', value: basic?.total_title_count },
    { title: '길드', value: guild?.guild_name },
  ];
};
