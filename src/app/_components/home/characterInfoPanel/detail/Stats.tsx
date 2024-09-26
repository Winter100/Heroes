import { ComponentProps } from "react";
import { Stat } from "@/app/_type/characterType";

interface StatsProps extends ComponentProps<"div"> {
  stats: Stat[];
}

const Stats = ({ stats, className, ...props }: StatsProps) => {
  return (
    <div
      className={`grid h-full grid-cols-2 items-center justify-items-center ${className}`}
      {...props}
    >
      {stats?.map((stat) => (
        <div
          key={stat.stat_name}
          className="flex w-full max-w-36 items-center justify-center"
        >
          <div className="flex flex-1">
            <p className="min-w-20 text-center">{stat.stat_name}</p>
            <p className="flex flex-1 items-center justify-center">
              {stat.stat_value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
