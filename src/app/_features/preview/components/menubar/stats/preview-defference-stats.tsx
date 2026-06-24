import { DefferenceStatsProps } from '@/app/_type/enchantType';

const PreviewDefferenceStats = ({
  simulationsStats,
  stat,
}: DefferenceStatsProps) => {
  const statValue = Number(
    simulationsStats.find((i) => i.stat_name === stat.stat_name)?.stat_value
  );

  if (statValue !== 0 && !isNaN(statValue)) {
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

export default PreviewDefferenceStats;
