import { calculateAccessoriesStats } from "../_components/iteminfo/util/calculateAccessoriesStats";

type StatItem = {
  stat_name: string;
  stat_value: number;
};

type Item = {
  name: string;
  max_stage: number;
  base_stat: StatItem[];
  firstAttackIncrease: number;
  firstDefenseIncrease: number;
  secondAttackIncrease: number;
  secondDefenseIncrease: number;
};

export const createAccessoriesObject = (items: Item[]) => {
  const result: Record<string, Record<number, StatItem[]>> = {};

  items.forEach((item) => {
    const {
      name,
      max_stage,
      base_stat,
      firstAttackIncrease,
      firstDefenseIncrease,
      secondAttackIncrease,
      secondDefenseIncrease,
    } = item;

    result[name] = {};

    // 0강화는 base_stat만 적용
    result[name][0] = [...base_stat];

    // 1강화부터 max_stage까지 계산
    for (let stage = 1; stage <= max_stage; stage++) {
      const additionalStats = calculateAccessoriesStats(
        stage,
        firstAttackIncrease,
        firstDefenseIncrease,
        secondAttackIncrease,
        secondDefenseIncrease,
      );

      result[name][stage] = [...base_stat, ...additionalStats];
    }
  });

  // 아이템 이름을 제거하고 배열 형태로 변환
  return Object.values(result).flat();
};
