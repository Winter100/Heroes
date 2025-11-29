import { limitCalculator } from '@/app/_utils/raid/limitCalculator';
import { LimitStatProps } from '../../types';
import StatDifference from '@/app/_components/common/StatDifference';

const LimitStat = (props: LimitStatProps) => {
  const selectedBoss = props.selectedBoss;
  const statName = props.stat_name;
  const statValue = props.stat_value;

  const stat = limitCalculator(
    selectedBoss,
    '상한',
    statName,
    statValue?.toString()
  );

  return <StatDifference stat={stat} />;
};

export default LimitStat;
