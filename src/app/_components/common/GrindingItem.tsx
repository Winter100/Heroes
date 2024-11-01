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

  const increaseValue = Number(stat_value) - Number(stat_min_value);

  const minPercentage = (Number(stat_min_value) / Number(stat_max_value)) * 100;
  const reMainPercentage = Math.floor(
    (Number(stat_value) / Number(stat_max_value)) * 100,
  );

  return (
    <div
      className={`${isView ? "" : "opacity-40"} flex w-full flex-col text-sm`}
    >
      <div className="flex gap-4">
        <p className="w-24">{stat_name}</p>
      </div>

      <div className="flex w-full flex-row items-center justify-center">
        <div className="flex flex-1 items-center gap-2">
          <div className="h-2 w-full flex-1 bg-gray-600">
            <div
              className="h-2"
              style={{
                width: `${100}%`,
                background: `linear-gradient(to right, 
                  #047857 0%, 
                  #047857 ${minPercentage}%,

                  #4ADE80 ${minPercentage}%,
                  #4ADE80 ${reMainPercentage}%,

                  transparent ${reMainPercentage}%,
                  transparent ${100}%

                  )`,
              }}
            ></div>
          </div>

          <p className="flex w-8 items-center justify-center">
            {reMainPercentage}%
          </p>
        </div>

        <div className="flex w-20 items-center justify-center sm:w-24">
          <div className="flex w-full items-center justify-center gap-1 px-3">
            <p className="flex-1 text-center">{stat_value}</p>
            <p className="flex-1 text-center">{`/`}</p>
            <p className="flex-1 text-center">{stat_max_value}</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-1 text-xs">
          <button
            disabled={isMin}
            onClick={onMin}
            className={`${isMin ? "opacity-40" : "hover:text-white"} h-full w-8 rounded-sm bg-background`}
          >
            Min
          </button>
          <button
            disabled={isMin}
            onClick={onDecrease}
            className={`${isMin ? "opacity-40" : "hover:text-white"} h-full w-8 rounded-sm bg-background`}
          >
            -
          </button>
          <button
            disabled={isMax}
            onClick={onIncrease}
            className={`${isMax ? "opacity-40" : "hover:text-white"} h-full w-8 rounded-sm bg-background`}
          >
            +
          </button>
          <button
            disabled={isMax}
            onClick={onMax}
            className={`${isMax ? "opacity-40" : "hover:text-white"} h-full w-8 rounded-sm bg-background`}
          >
            Max
          </button>
        </div>

        <div className="flex w-10 items-center justify-center text-green-300">
          <p>{increaseValue}</p>
        </div>
      </div>
    </div>
  );
};

export default GrindingItem;
