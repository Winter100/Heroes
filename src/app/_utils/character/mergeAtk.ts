import { Stat } from '@/app/_type/previewType';

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
