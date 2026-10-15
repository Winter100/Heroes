export const EQUIPMENT_TO_CHARACTER_STAT_NAMES: Readonly<
  Record<string, string>
> = {
  크리티컬: '크리티컬 확률',
  '최대 생명력': '생명력',
  '최대 스태미나': '스태미나',
};

export const CHARACTER_TO_EQUIPMENT_STAT_NAMES: Readonly<
  Record<string, string>
> = Object.fromEntries(
  Object.entries(EQUIPMENT_TO_CHARACTER_STAT_NAMES).map(
    ([equipment, character]) => [character, equipment]
  )
);

export const STAT_NAME_ALIASES: Readonly<Record<string, string>> = {
  ...EQUIPMENT_TO_CHARACTER_STAT_NAMES,
  ...CHARACTER_TO_EQUIPMENT_STAT_NAMES,
};
