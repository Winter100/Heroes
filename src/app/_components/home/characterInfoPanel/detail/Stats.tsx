import { useCharacterStore } from "@/app/_store/characterStore";
import { ComponentProps } from "react";

interface StatsProps extends ComponentProps<"div"> {}

const Stats = ({ ...props }: StatsProps) => {
  const stats = useCharacterStore((state) => state.selectedCharacter?.stat);
  return (
    <div
      {...props}
      className="grid h-full grid-cols-2 items-center justify-items-center text-white"
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
