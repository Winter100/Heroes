import { DefferenceStatsProps } from '../../../types';

const DefferenceStats = ({ statDifference, stat }: DefferenceStatsProps) => {
  const statValue = Number(
    statDifference.find((i) => i.stat_name === stat.stat_name)?.stat_value
  );

  if (statValue !== 0) {
    return (
      <p className={`${statValue >= 1 ? 'text-green-300' : 'text-red-300'}`}>
        {statValue !== null && statValue >= 0
          ? `+${statValue}`
          : `${statValue}`}
      </p>
    );
  }

  return null;
};

export default DefferenceStats;
