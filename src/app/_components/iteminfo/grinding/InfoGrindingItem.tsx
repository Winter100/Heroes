import clsx from "clsx";

interface InfoGrindingItemProps {
  stat_name: string;
  stat_max_value: number;
}
const InfoGrindingItem = ({
  stat_max_value,
  stat_name,
}: InfoGrindingItemProps) => {
  return (
    <div className="flex w-full flex-col gap-0.5 px-2">
      <div className="flex flex-row text-[11px] text-zinc-400">
        <span className="">{stat_name}</span>
        <div className="flex items-center pl-1">
          <span>
            ( {stat_name === "해제" ? 0 : stat_max_value} / {stat_max_value} )
          </span>
        </div>
      </div>
      <div className="h-2 pr-4">
        <div
          className={clsx(
            "h-full w-full",
            stat_name === "해제" ? "bg-gray-600" : "bg-green-600",
          )}
        />
      </div>
    </div>
  );
};

export default InfoGrindingItem;
