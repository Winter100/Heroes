export const getQualityStats = (
  quality: number,
  stat_values: { stat_name: string; stat_value: number }[] | null,
  quality_stats: string[] // 품질 계산을 적용할 스탯 목록 추가
) => {
  const qualityMultipliers: Record<number, { [key: string]: number }> = {
    1: { base: 0.96, attribute: 0.8 },
    2: { base: 1, attribute: 1 },
    3: { base: 1.02, attribute: 1.15 },
    4: { base: 1.04, attribute: 1.2 },
    5: { base: 1.06, attribute: 1.25 },
  };

  if (!stat_values) return null;

  const multiplier = qualityMultipliers[quality] || { base: 1, attribute: 1 };

  return stat_values.map((stat) => {
    const { stat_name, stat_value } = stat;

    if (!quality_stats.includes(stat_name)) {
      return stat;
    }

    if (['공격력', '마법공격력', '방어력'].includes(stat_name)) {
      return {
        stat_name,
        stat_value: Math.floor(stat_value * multiplier.base),
      };
    }

    if (['힘', '민첩', '의지', '지능'].includes(stat_name)) {
      return {
        stat_name,
        stat_value: Math.floor(stat_value * multiplier.attribute),
      };
    }

    return stat;
  });
};

// export const getQualityStats = (
//   quality: number,
//   stat_values: { stat_name: string; stat_value: number }[] | null,
// ) => {
//   const qualityMultipliers: Record<number, { [key: string]: number }> = {
//     1: { base: 0.96, attribute: 0.8 },
//     2: { base: 1, attribute: 1 },
//     3: { base: 1.02, attribute: 1.15 },
//     4: { base: 1.04, attribute: 1.2 },
//     5: { base: 1.06, attribute: 1.25 },
//   };

//   if (!stat_values) return null;

//   const multiplier = qualityMultipliers[quality] || { base: 1, attribute: 1 };

//   return stat_values.map((stat) => {
//     const { stat_name, stat_value } = stat;

//     if (["공격력", "마법공격력", "방어력"].includes(stat_name)) {
//       return {
//         stat_name,
//         stat_value: Math.floor(stat_value * multiplier.base),
//       };
//     }

//     if (["힘", "민첩", "의지", "지능"].includes(stat_name)) {
//       return {
//         stat_name,
//         stat_value: Math.floor(stat_value * multiplier.attribute),
//       };
//     }

//     return stat;
//   });
// };
