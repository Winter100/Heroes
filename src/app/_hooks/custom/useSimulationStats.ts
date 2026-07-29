'use client';
import { useEnchantStore } from '../../_store/useEnchantStore';
import { useGrindStore } from '../../_store/useGrindStore';
import { Stat } from '../../_type/previewType';
import { allStatSumCalculator } from '../../_utils/calculate/calculate-util';
import { useUserStat } from '../get/useUserStat';

export const useSimulationStats = (ocid: string) => {
  const { data: beforeStats, isError } = useUserStat(ocid);
  const simulations = useEnchantStore((state) => state.simulations);
  const grindSimulations = useGrindStore((state) => state.simulations);

  const beforeEnchantStats = allStatSumCalculator(simulations, 'before');
  const afterEnchantStats = allStatSumCalculator(simulations, 'after');

  // 연마(Grinding) 수치 추가 계산
  Object.entries(grindSimulations).forEach(([, data]) => {
    Object.entries(data.grind.after).forEach(([statName, afterValue]) => {
      const beforeValue = data.grind.before[statName] ?? afterValue;
      const diff = afterValue - beforeValue;
      if (diff !== 0) {
        // 파괴력 1, 2, 3 등을 '파괴력'으로 통합
        const normalizedName = statName.startsWith('파괴력')
          ? '파괴력'
          : statName;
        afterEnchantStats[normalizedName] =
          (afterEnchantStats[normalizedName] || 0) + diff;
      }
    });
  });

  const { finalStatsArray, simulationsStatArray, diffStatsArray } =
    getCombinedStats(beforeEnchantStats, afterEnchantStats, beforeStats ?? []);

  return {
    beforeStats,
    finalStatsArray,
    simulationsStatArray,
    diffStatsArray,
    isError,
  };
};

const getCombinedStats = (
  beforeEnchantStats: Record<string, number>,
  afterEnchantStats: Record<string, number>,
  beforeStats: Stat[]
) => {
  const statsMap: Record<string, number> = {};

  // 1. 원본 스탯(beforeStats) 보관용 맵 (비교를 위해 필요)
  const originalStatsMap: Record<string, number> = {};

  // 기본 스탯 세팅
  beforeStats?.forEach(({ stat_name, stat_value }) => {
    const value = Number(stat_value);
    // 파괴력 통합
    const normalizedName = stat_name.startsWith('파괴력')
      ? '파괴력'
      : stat_name;

    statsMap[normalizedName] = (statsMap[normalizedName] || 0) + value;
    originalStatsMap[normalizedName] =
      (originalStatsMap[normalizedName] || 0) + value;
  });

  // 2. 기존 인챈트 차감 (-) 및 신규 인챈트 가산 (+)
  Object.entries(beforeEnchantStats).forEach(([name, value]) => {
    if (statsMap[name] !== undefined) statsMap[name] -= value;
  });
  Object.entries(afterEnchantStats).forEach(([name, value]) => {
    statsMap[name] = (statsMap[name] || 0) + value;
  });

  // 3. 최종 스탯 배열 생성 (finalStatsArray)
  const finalStatsArray = Object.entries(statsMap).map(
    ([stat_name, stat_value]) => ({
      stat_name,
      stat_value,
    })
  );

  // 4. 변화량 계산 (diffStatsArray)
  // finalStats와 originalStats를 비교하여 차이만 계산
  const diffStatsArray = Object.entries(statsMap)
    .map(([stat_name, finalValue]) => {
      const originalValue = originalStatsMap[stat_name] || 0;
      const diff = finalValue - originalValue;

      return { stat_name, stat_value: diff };
    })
    .filter((stat) => stat.stat_value !== 0); // 변화가 없는 스탯은 제외 (선택 사항)

  // 신규 인챈트 수치만 보여주는 배열
  const simulationsStatArray = Object.entries(afterEnchantStats).map(
    ([stat_name, stat_value]) => ({
      stat_name,
      stat_value,
    })
  );

  return { finalStatsArray, simulationsStatArray, diffStatsArray };
};
