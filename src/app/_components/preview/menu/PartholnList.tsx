import { PreviewSelectedType, Stat } from "@/app/_type/previewType";

interface PartholnListProps {
  partholn: {
    level: number;
    stat: Stat[];
  }[];
  level: number | null;
  setLevel: (level: number) => void;
  setBeforeStats: (stat: PreviewSelectedType) => void;
}

const PartholnList = ({
  partholn,
  level = 0,
  setLevel,
  setBeforeStats,
}: PartholnListProps) => {
  const onChage = (level: number, stat: Stat[]) => {
    const beforeStat = {
      slot: "partholn",
      previewName: "partholn",
      stat_name: "partholn",
      stat_value: stat,
    };
    setLevel(level);
    setBeforeStats(beforeStat);
  };
  return (
    <ul className="flex flex-col items-center justify-center gap-3">
      {partholn?.map((item) => (
        <li
          className={`${level === item?.level ? "text-blue-300" : ""} flex w-full flex-row items-center justify-center gap-2 text-xs sm:gap-2`}
          key={item.level}
        >
          <input
            type="radio"
            className="w-4"
            checked={level === item?.level}
            onChange={() => onChage(item?.level, item?.stat)}
          />

          <p className="w-12 text-center">{item?.level} 단계</p>
          <div className="flex flex-1 flex-row items-center gap-2">
            {item?.stat.map((stat) => (
              <div
                key={stat?.stat_name}
                className="flex flex-col items-center justify-center gap-1 text-xs sm:flex-row"
              >
                <p>{stat?.stat_name}</p>
                <p>{stat?.stat_value}</p>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PartholnList;
