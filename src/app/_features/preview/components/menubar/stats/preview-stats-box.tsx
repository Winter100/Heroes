import { StatsProps } from '@/app/_type/enchantType';
import DefferenceStats from './preview-defference-stats';

const PreviewStatsBox = ({
  isTitle = true,
  stats,
  simulationsStats,
  className,
  ...props
}: StatsProps) => {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center text-xs ${className}`}
      {...props}
    >
      {stats?.map((stat) => {
        const statValue: number = Number(
          simulationsStats?.find((i) => i.stat_name === stat.stat_name)
            ?.stat_value
        );
        const statColor: string =
          statValue > 0
            ? 'text-green-300'
            : statValue < 0
              ? 'text-red-300'
              : '';

        return (
          <div
            key={stat.stat_name}
            className="flex h-full w-full items-center justify-center"
          >
            <div className="flex w-full flex-1 items-center justify-center">
              {isTitle && (
                <p className={`w-24 ${statColor}`}>{stat.stat_name}</p>
              )}

              <div className="flex flex-1 items-center justify-between gap-1">
                <p className={statColor}>{stat.stat_value}</p>
                {simulationsStats && (
                  <DefferenceStats
                    simulationsStats={simulationsStats}
                    stat={stat}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewStatsBox;
