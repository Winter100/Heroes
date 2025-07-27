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
    { stat_name: '대항력', stat_value: totalDefense },
  ];
};
