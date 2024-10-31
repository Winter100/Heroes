"use client";

import { NewTuning_stat } from "@/app/_type/equipmentType";

interface GrindingItemProps extends NewTuning_stat {
  onIncrease: () => void;
  onDecrease: () => void;
  onMin: () => void;
  onMax: () => void;
  isView: boolean;
}

const GrindingItem = ({
  stat_name,
  stat_value,
  stat_min_value,
  stat_max_value,
  onIncrease,
  onDecrease,
  onMin,
  onMax,
  isView,
}: GrindingItemProps) => {
  const isMin = stat_min_value === stat_value;
  const isMax =
    stat_name === "해제 2"
      ? (stat_max_value === stat_value) === isView
      : stat_max_value === stat_value;

  const percentage = Math.floor(
    (Number(stat_value) / Number(stat_max_value)) * 100,
  );
  const increaseValue = Number(stat_value) - Number(stat_min_value);

  return (
    <div
      className={`${isView ? "" : "opacity-40"} flex w-[750px] flex-row items-center gap-4 text-sm`}
    >
      {/* <div className="grid w-[650px] grid-cols-5 items-center justify-items-center text-sm"> */}
      <div className="w-52 text-center">
        <p>{stat_name}</p>
      </div>

      <div className="flex w-full items-center gap-1">
        <div className="h-2 flex-1 bg-gray-600">
          <div
            className="h-2 bg-green-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <p className="flex w-8 items-center justify-center">{percentage}%</p>
      </div>

      <div className="flex w-48 items-center justify-center">
        <div className="flex w-full items-center justify-center gap-2">
          <p>{stat_value}</p>
          <p>{`/`}</p>
          <p>{stat_max_value}</p>
        </div>
      </div>

      <div className="flex w-48 flex-row text-xs">
        <button
          disabled={isMin}
          onClick={onMin}
          className={`${isMin ? "opacity-40" : "hover:text-white"} h-full w-7 border-none`}
        >
          Min
        </button>
        <button
          disabled={isMin}
          onClick={onDecrease}
          className={`${isMin ? "opacity-40" : "hover:text-white"} h-full w-7 border-none`}
        >
          -
        </button>
        <button
          disabled={isMax}
          onClick={onIncrease}
          className={`${isMax ? "opacity-40" : "hover:text-white"} h-full w-7 border-none`}
        >
          +
        </button>
        <button
          disabled={isMax}
          onClick={onMax}
          className={`${isMax ? "opacity-40" : "hover:text-white"} h-full w-7 border-none`}
        >
          Max
        </button>
      </div>

      <div className="flex w-24 items-center justify-center text-green-300">
        <p>{increaseValue}</p>
      </div>
    </div>
  );
};

export default GrindingItem;
