import { RefObject } from 'react';

interface Props {
  progressBarRef: RefObject<HTMLDivElement>;
  handleGaugeClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  minPercentage: number;
  reMainPercentage: number;
  isActivateOption: boolean;
}

const ItemGrindGraph = ({
  progressBarRef,
  handleGaugeClick,
  minPercentage,
  reMainPercentage,
  isActivateOption,
}: Props) => {
  return (
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
  );
};

export default ItemGrindGraph;
