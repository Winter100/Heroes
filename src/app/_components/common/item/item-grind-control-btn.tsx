interface Props {
  isMin: boolean;
  isMax: boolean;
  onMin: () => void;
  onMax: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
}

const ItemGrindControlBtn = ({
  isMin,
  isMax,
  onMin,
  onMax,
  onDecrease,
  onIncrease,
}: Props) => {
  return (
    <div className="gap0 flex flex-1 flex-row items-center justify-center md:gap-1">
      <button
        disabled={isMin}
        onClick={onMin}
        className={`${isMin ? 'opacity-40' : 'hover:text-white'} flex h-full w-4 flex-1 items-center justify-center rounded-md border md:w-12`}
      >
        Min
      </button>
      <button
        disabled={isMin}
        onClick={onDecrease}
        className={`${isMin ? 'opacity-40' : 'hover:text-white'} flex h-full w-4 flex-1 items-center justify-center rounded-md border md:w-12`}
      >
        -
      </button>
      <button
        disabled={isMax}
        onClick={onIncrease}
        className={`${isMax ? 'opacity-40' : 'hover:text-white'} flex h-full w-4 flex-1 items-center justify-center rounded-md border md:w-12`}
      >
        +
      </button>
      <button
        disabled={isMax}
        onClick={onMax}
        className={`${isMax ? 'opacity-40' : 'hover:text-white'} flex h-full w-4 flex-1 items-center justify-center rounded-md border md:w-12`}
      >
        Max
      </button>
    </div>
  );
};

export default ItemGrindControlBtn;
