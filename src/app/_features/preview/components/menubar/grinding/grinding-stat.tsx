import { useRef } from 'react';

interface Props {
  increaseValue: number;
  minPercentage: number;
  reMainPercentage: number;
  stat_name: string;
  stat_value: string;
  stat_max_value: string;
  isActivateOption: boolean;
  isMin: boolean;
  isMax: boolean;
  onMin: () => void;
  onMax: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
  onGaugeClick: (percentage: number) => void;
}

const GrindingStat = ({
  increaseValue,
  minPercentage,
  reMainPercentage,
  stat_value,
  stat_max_value,
  stat_name,
  isMin,
  isMax,
  isActivateOption,
  onDecrease,
  onIncrease,
  onMin,
  onMax,
  onGaugeClick,
}: Props) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleGaugeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActivateOption) return;
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    onGaugeClick(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className={`${isActivateOption ? 'text-white' : 'opacity-40'} flex w-full flex-col text-sm`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-row gap-2">
          <p>{stat_name}</p>
          <div className="flex items-center justify-center text-[10px] text-green-300">
            {`( +${increaseValue} )`}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-xs text-fontColor">
          <p className="flex-1 text-center">{stat_value}</p>
          <p className="flex-1 text-center">{`/`}</p>
          <p className="flex-1 text-center">{stat_max_value}</p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex w-full items-center gap-2 text-xs">
          <div className="h-2 w-full flex-1 bg-gray-600">
            <div
              ref={progressBarRef}
              onClick={handleGaugeClick}
              className={`${isActivateOption ? 'cursor-pointer' : ''} h-full w-full`}
              style={{
                background: `linear-gradient(to right, 
          #047857 0%, 
          #047857 ${minPercentage}%, 

          #4ADE80 ${minPercentage}%,
          #4ADE80 ${reMainPercentage}%, 

          transparent ${reMainPercentage}%,
          transparent 100%
        )`,
              }}
            ></div>
          </div>

          <p className="flex w-8 items-center justify-center">
            {reMainPercentage}%
          </p>
        </div>

        <div className="flex w-52 flex-1 flex-row items-center justify-center text-xs md:w-auto">
          <div className="flex flex-1 flex-row items-center justify-center gap-1">
            <button
              disabled={isMin}
              onClick={onMin}
              className={`${isMin ? 'opacity-40' : 'hover:text-white'} flex h-full flex-1 items-center justify-center rounded-md border md:w-12`}
            >
              Min
            </button>
            <button
              disabled={isMin}
              onClick={onDecrease}
              className={`${isMin ? 'opacity-40' : 'hover:text-white'} flex h-full flex-1 items-center justify-center rounded-md border md:w-12`}
            >
              -
            </button>
            <button
              disabled={isMax}
              onClick={onIncrease}
              className={`${isMax ? 'opacity-40' : 'hover:text-white'} flex h-full flex-1 items-center justify-center rounded-md border md:w-12`}
            >
              +
            </button>
            <button
              disabled={isMax}
              onClick={onMax}
              className={`${isMax ? 'opacity-40' : 'hover:text-white'} flex h-full flex-1 items-center justify-center rounded-md border md:w-12`}
            >
              Max
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GrindingStat;
