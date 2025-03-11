type ItemData = {
  name: string;
  restrictions: string[];
  quality: number;
  quality_selection_available: boolean;
  quality_stats: string[];
  rating: string;
  category: string[];
  color: boolean;
  set: string;
  enhancement_options: Record<
    number,
    { stat_name: string; stat_value: number }[]
  >;
};

export const convertLevel = (level?: string | number | null): number => {
  if (typeof level === "number") {
    return level;
  }

  const levelMap: Record<string, number> = {
    초급: 1,
    중급: 2,
    고급: 3,
    레어: 4,
    전설: 5,
  };

  return level ? (levelMap[level] ?? 0) : 0;
};

// 스탯 찾는 함수
export const getStatsByLevel = (item: ItemData, level?: string | number) => {
  const normalizedLevel = convertLevel(level);
  return item.enhancement_options[normalizedLevel] || [];
};

export const getGradeValue = (name: string): number => {
  const gradeMap: Record<string, number> = {
    초급: 1,
    중급: 2,
    고급: 3,
    레어: 4,
    전설: 5,
  };

  // 앞에 붙은 숫자 찾기 (예: "+15 와드네 무기")
  const match = name.match(/^(\+?\d+)/);
  if (match) {
    return parseInt(match[1], 10); // 숫자를 반환
  }

  // 등급 찾기
  for (const grade in gradeMap) {
    if (name.includes(grade)) {
      return gradeMap[grade];
    }
  }

  return 0;
};
