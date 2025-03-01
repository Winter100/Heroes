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

export const convertLevel = (level?: string | number): number => {
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
