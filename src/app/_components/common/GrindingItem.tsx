'use client';

import { usePreviewStore } from '@/app/_store/previewStore';
import { NewTuning_stat } from '@/app/_type/equipmentType';
import { MouseEvent, useRef } from 'react';
import { calculateNearestProgress } from '../preview/utils/calculateNearestProgress';

interface GrindingItemProps extends NewTuning_stat {
  onIncrease: () => void;
  onDecrease: () => void;
  onMin: () => void;
  onMax: () => void;
  isView: boolean;
  slot: string;
}

const GrindingItem = ({
  stat_name,
  stat_value,
  stat_min_value,
  stat_max_value,
  stat_one_value,
  onIncrease,
  onDecrease,
  onMin,
  onMax,
  isView,
  slot,
}: GrindingItemProps) => {
  const setProgeress = usePreviewStore((state) => state.setProgeress);

  const isMin = stat_min_value === stat_value || !isView;
  const isMax =
    stat_name === '해제 3' || stat_name === '해제 2' || stat_name === '해제'
      ? (stat_max_value === stat_value) === isView
      : stat_max_value === stat_value;

  const increaseValue = Math.ceil(Number(stat_value) - Number(stat_min_value));

  const minPercentage = Math.ceil(
    (Number(stat_min_value) / Number(stat_max_value)) * 100
  );
  const reMainPercentage = Math.ceil(
    (Number(stat_value) / Number(stat_max_value)) * 100
  );

  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (progressBarRef === null) return;
    if (!isView) return;
    const barWidth = progressBarRef?.current?.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;

    const newProgress = Math.ceil(
      (Number(clickPosition) / Number(barWidth)) * 100
    );

    if (newProgress <= minPercentage) return;

    if (!barWidth) return;

    const percentage = (clickPosition / barWidth) * 100;
    const newProgeress = calculateNearestProgress(
      percentage,
      stat_max_value,
      stat_one_value
    );

    setProgeress(slot, stat_name, newProgeress);
  };

  return (
    <div
      className={`${isView ? 'text-white' : 'opacity-40'} flex w-full flex-col text-sm`}
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
        <div className="flex w-full items-center gap-2">
          <div className="h-2 w-full flex-1 bg-gray-600">
            <div
              ref={progressBarRef}
              onClick={handleClick}
              className={`${isView ? 'cursor-pointer' : ''} h-2`}
              style={{
                width: '100%',
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

        <div className="flex w-52 flex-1 flex-row items-center justify-center md:w-auto">
          <div className="flex flex-1 flex-row items-center justify-center gap-1 text-xs">
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

export default GrindingItem;
