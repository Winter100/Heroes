export const getAwakeningStoneType = (input: string): string => {
  const keyword = ["대미지", "재사용시간", "SP", "다운", "스태미나"];

  const mapping: Record<string, string> = {
    ["대미지"]: "각성의 돌: 대미지 증가",
    ["재사용시간"]: "각성의 돌: 재사용시간 감소",
    ["SP"]: "각성의 돌: SP소모 감소",
    ["다운"]: "각성의 돌: 다운 확률 증가",
    ["스태미나"]: "각성의 돌: 스태미나 소모 감소",
  };

  for (const key of keyword) {
    if (input.includes(key)) {
      return mapping[key];
    }
  }

  return "";
};
