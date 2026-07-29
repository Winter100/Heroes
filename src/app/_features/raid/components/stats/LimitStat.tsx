import { limitCalculator } from '@/app/_utils/calculate/calculate-util';
import StatDifference from '@/app/_components/common/StatDifference';
import { LimitStatProps } from '@/app/_type/characterType';

const LimitStat = (props: LimitStatProps) => {
  const selectedBoss = props.selectedBoss;
  const type = props.selectedBoss.type;
  const statName = props.stat_name;
  const statValue = props.stat_value;

  const stat = limitCalculator(
    selectedBoss,
    type,
    statName,
    statValue?.toString()
  );

  return <StatDifference stat={stat} />;
};

export default LimitStat;
