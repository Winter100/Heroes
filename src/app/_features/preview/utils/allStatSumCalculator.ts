import { Simulations } from '@/app/_store/useEnchantStore';
import { SIMULATION_AFFIX_PART } from '@/app/_type/enchantType';
import { Stat } from '@/app/_type/previewType';

/**
 * 모든 아이템의 연마, 인챈트 등으로 변경된 스텟의 합을 더해 리턴합니다.
 *
 * 값이 마법공격력, NaN인 스텟들은 제외 (고유그룹, 스테미나 회복 등)
 * @param simulations
 * @returns
 */

export const allStatSumCalculator = (
  simulations: Simulations,
  type: 'before' | 'after'
) => {
  const totalStats: Record<string, number> = {};

  // 데이터 순회
  Object.values(simulations).forEach((itemContent) => {
    SIMULATION_AFFIX_PART.forEach((part) => {
      const detail = itemContent[part];
      if (!detail) return;

      // type('before' | 'after')에 따라 대상 데이터를 선택
      const target = detail[type];

      // 계산 시 기존 옵션(isExisting)이면 계산에서 제외
      if (target?.isExisting) return;

      // 스탯 누적 실행
      accumulateEffect(totalStats, target?.effects);
    });
  });

  return totalStats;
};

// 개별 효과를 totalStats에 누적하는 헬퍼 함수
const accumulateEffect = (
  totalStats: Record<string, number>,
  effects: Stat[] | undefined
) => {
  effects?.forEach(({ stat_name, stat_value }) => {
    // 불필요한 값 필터링
    if (stat_name === '마법공격력') return;
    const value = Number(stat_value);
    if (isNaN(value)) return;

    // 파괴력 1, 2, 3 등을 '파괴력'으로 통합
    const normalizedName = stat_name.startsWith('파괴력')
      ? '파괴력'
      : stat_name;

    totalStats[normalizedName] = (totalStats[normalizedName] || 0) + value;
  });
};
