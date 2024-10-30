"use client";

interface GrindingItemProps {
  stat_name: string;
  percentage: number;
  value: string;
  maxValue: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onMin: () => void;
  onMax: () => void;
}

const GrindingItem = ({
  stat_name,
  percentage,
  value,
  maxValue,
  onIncrease,
  onDecrease,
  onMin,
  onMax,
}: GrindingItemProps) => {
  return (
    <div className="grid w-[600px] grid-cols-4 items-center justify-items-center text-sm">
      <div>
        <p>{stat_name}</p>
      </div>

      <div className="flex w-full items-center gap-1">
        <div className="h-2 flex-1 bg-gray-600">
          <div
            className="h-2 bg-green-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <p className="flex w-10 items-center justify-center">{percentage}%</p>
      </div>

      <div className="w-full">
        <div className="flex w-full items-center justify-center gap-2">
          <p>{value}</p>
          <p>{`/`}</p>
          <p>{maxValue}</p>
        </div>
      </div>

      <div>
        <button onClick={onMin} className="h-full w-8">
          Min
        </button>
        <button onClick={onDecrease} className="h-full w-8">
          -
        </button>
        <button onClick={onIncrease} className="h-full w-8">
          +
        </button>
        <button onClick={onMax} className="h-full w-8">
          Max
        </button>
      </div>
    </div>
  );
};

export default GrindingItem;
