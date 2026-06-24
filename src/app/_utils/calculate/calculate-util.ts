import { MonstersType } from '@/app/_type/raidType';

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

/**
 * - 아이템 첫번째, 두번째를 이어 쭉 강화 수치를 계산해 리턴
 * @param max_stage
 * @param firstAttackIncrease
 * @param firstDefenseIncrease
 * @param secondAttackIncrease
 * @param secondDefenseIncrease
 * @returns
 */

export const calculateAccessoriesStats = (
  max_stage: number,
  firstAttackIncrease: number,
  firstDefenseIncrease: number,
  secondAttackIncrease: number,
  secondDefenseIncrease: number
) => {
  let totalAttack = 0;
  let totalDefense = 0;

  for (let i = 1; i <= max_stage; i++) {
    if (i % 2 === 1) {
      totalAttack += firstAttackIncrease;
      totalDefense += firstDefenseIncrease;
    } else {
      totalAttack += secondAttackIncrease;
      totalDefense += secondDefenseIncrease;
    }
  }

  return [
    { stat_name: '공격력', stat_value: totalAttack },
    { stat_name: '마법공격력', stat_value: totalAttack },
    { stat_name: '방어력 관통', stat_value: totalDefense },
  ];
};

/**
 * - 빠른 전투 또는 상한 컷을 계산해주는 함수
 * @param monsterInfo
 * @param bossEntry
 * @param user_stat_name
 * @param user_stat_value
 * @returns
 */
export const limitCalculator = (
  monsterInfo: MonstersType | null,
  bossEntry: '상한' | '빠른전투' = '상한',
  user_stat_name: string,
  user_stat_value: string
) => {
  if (bossEntry === '상한') {
    //상한
    switch (user_stat_name) {
      case '공격력': {
        const Mstat = monsterInfo?.limit?.find(
          (s) => s?.stat_name === '공격력'
        );
        return (
          Number(user_stat_value) - (Number(Mstat?.stat_value) - 10000 + 22000)
        );
      }

      case '크리티컬': {
        const Mstat = monsterInfo?.limit?.find(
          (s) => s?.stat_name === '크리티컬 저항'
        );
        return Number(user_stat_value) - (Number(Mstat?.stat_value) + 50);
      }
      case '밸런스': {
        const Mstat = monsterInfo?.limit?.find(
          (s) => s?.stat_name === '밸런스 저항'
        );
        return Number(user_stat_value) - (Number(Mstat?.stat_value) + 100);
      }
      // case '대항력': {
      //   const Mstat = monsterInfo?.limit?.find(
      //     (s) => s?.stat_name === '대항력 저항'
      //   );
      //   return Number(user_stat_value) - (Number(Mstat?.stat_value) + 100);
      // }
      case '크리티컬 저항': {
        const Mstat = monsterInfo?.limit?.find(
          (s) => s.stat_name === '크리티컬'
        );
        return Number(user_stat_value) - (Number(Mstat?.stat_value) - 3);
      }
      // case '파괴력': {
      //   return parseFloat((Number(user_stat_value) * 0.0022).toFixed(2));
      //   // const Mstat = monsterInfo?.limit?.find(
      //   //   (s) => s.stat_name === '크리티컬'
      //   // );
      //   // return Number(user_stat_value) - (Number(Mstat?.stat_value) - 3);
      // }
      default:
        return null;
    }
  } else {
    // 빠른전투
    switch (user_stat_name) {
      case '공격력': {
        const Mstat = monsterInfo?.entry?.find(
          (s) => s?.stat_name === '공격력'
        );
        // const limit = user_limit_stat !== null ? Number(user_limit_stat) : 0;
        return Number(user_stat_value) - Number(Mstat?.stat_value);
      }

      case '크리티컬': {
        const Mstat = monsterInfo?.entry?.find(
          (s) => s?.stat_name === '크리티컬'
        );
        return Number(user_stat_value) - Number(Mstat?.stat_value);
      }
      case '밸런스': {
        const Mstat = monsterInfo?.entry?.find(
          (s) => s?.stat_name === '밸런스'
        );
        return Number(user_stat_value) - Number(Mstat?.stat_value);
      }
      case '방어력 관통': {
        const Mstat = monsterInfo?.entry?.find(
          (s) => s?.stat_name === '방어력 관통'
        );
        return Number(user_stat_value) - Number(Mstat?.stat_value);
      }
      case '추가피해': {
        const Mstat = monsterInfo?.entry?.find(
          (s) => s.stat_name === '추가피해'
        );
        return Number(user_stat_value) - Number(Mstat?.stat_value);
      }
      case '방어력': {
        const Mstat = monsterInfo?.entry?.find((s) => s.stat_name === '방어력');
        return Number(user_stat_value) - Number(Mstat?.stat_value);
      }
      case '파괴력': {
        const Mstat = monsterInfo?.entry?.find((s) => s.stat_name === '파괴력');
        return Number(user_stat_value) - Number(Mstat?.stat_value);
      }

      default:
        return null;
    }
  }
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
        secondDefenseIncrease
      );

      result[name][stage] = [...base_stat, ...additionalStats];
    }
  });

  // 아이템 이름을 제거하고 배열 형태로 변환
  return Object.values(result).flat();
};
