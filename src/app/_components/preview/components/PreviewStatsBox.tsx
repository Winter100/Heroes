import { ComponentProps } from "react";
import { Stat } from "@/app/_type/characterType";

interface StatsProps extends ComponentProps<"div"> {
  stats: Stat[];
  statDifference?: Stat[];
  isTitle?: boolean;
}

const PreviewStatsBox = ({
  isTitle = true,
  stats,
  statDifference,
  className,
  ...props
}: StatsProps) => {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center text-xs ${className}`}
      // className={`flex h-full flex-col items-center justify-items-center text-[11px] ${className}`}
      {...props}
    >
      {stats?.map((stat) => (
        <div
          key={stat.stat_name}
          className="flex h-full w-full items-center justify-center"
        >
          <div className="flex w-full flex-1 items-center justify-center">
            {isTitle && (
              <p
                className={`w-24 ${
                  statDifference &&
                  (() => {
                    const statValue = Number(
                      statDifference.find((i) => i.stat_name === stat.stat_name)
                        ?.stat_value,
                    );

                    if (statValue > 0) {
                      return "text-green-300";
                    } else if (statValue < 0) {
                      return "text-red-300";
                    }

                    return "";
                  })()
                }`}
              >
                {stat.stat_name}
              </p>
            )}

            <div className="flex flex-1 items-center justify-between gap-1">
              <p>{stat.stat_value}</p>
              <>
                {statDifference &&
                  (() => {
                    const statValue = Number(
                      statDifference.find((i) => i.stat_name === stat.stat_name)
                        ?.stat_value,
                    );

                    if (statValue !== 0) {
                      return (
                        <p
                          className={`${statValue >= 1 ? "text-green-300" : "text-red-300"}`}
                        >
                          {statValue !== null && statValue >= 0
                            ? `+${statValue}`
                            : `${statValue}`}
                        </p>
                      );
                    }

                    return null;
                  })()}
              </>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewStatsBox;
