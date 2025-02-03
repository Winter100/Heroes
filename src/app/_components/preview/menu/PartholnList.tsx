import { PreviewSelectedType, Stat } from "@/app/_type/previewType";
import clsx from "clsx";
import { memo } from "react";

interface PartholnListProps {
  partholn: {
    level: number;
    stat: Stat[];
  }[];
  level: number | null;
  setLevel: (level: number) => void;
  setBeforeStats: (stat: PreviewSelectedType) => void;
}

const PartholnList = memo(
  ({ partholn, level = 0, setLevel, setBeforeStats }: PartholnListProps) => {
    const onSelect = (level: number, stat: Stat[]) => {
      const beforeStat = {
        slot: "partholn",
        upgreadeType: "partholn",
        name: "partholn",
        stat_value: stat,
      };
      setLevel(level);
      setBeforeStats(beforeStat);
    };
    return (
      <table className="w-full table-fixed overflow-scroll font-sans">
        <thead>
          <tr className="text-white">
            <th className="w-1/12 py-2 text-center font-normal sm:w-auto">
              단계
            </th>
            <th className="w-[20%] text-center font-normal sm:w-auto">
              스태미나
            </th>
            <th className="text-center font-normal sm:w-auto">공격력</th>
            <th className="text-center font-normal sm:w-auto">방어력</th>
            <th className="w-[20%] text-center font-normal sm:w-auto">
              크리티컬
            </th>
            <th className="text-center font-normal sm:w-auto">해제</th>
            <th className="text-center font-normal sm:w-auto">관통력</th>
          </tr>
        </thead>
        <tbody>
          {partholn?.map((item) => (
            <tr
              onClick={() => onSelect(item?.level, item?.stat)}
              key={item?.level}
              className={clsx(
                "h-10 cursor-pointer border-t border-borderColor text-sm hover:text-red-300",
                level === item?.level && "text-red-300",
              )}
            >
              <td className="text-center">
                <span>{item?.level}</span>
              </td>
              {item?.stat?.map((stat) => (
                <td
                  key={stat?.stat_name}
                  className="border-borderColor text-center"
                >
                  <span>{stat?.stat_value}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
);

PartholnList.displayName = "PartholnList";

export default PartholnList;
