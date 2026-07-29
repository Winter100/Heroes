interface Props {
  increaseValue: number;
  stat_name: string;
  stat_value: string;
  stat_max_value: string;
  isIncreaseView: boolean;
}

const ItemGrindHeader = ({
  increaseValue,
  stat_max_value,
  stat_name,
  stat_value,
  isIncreaseView,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-row gap-2">
        <p>{stat_name}</p>
        {isIncreaseView && (
          <div className="flex items-center justify-center text-[10px] text-green-300">
            {`( +${increaseValue} )`}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-1 text-xs text-fontColor">
        <p className="flex-1 text-center">{stat_value}</p>
        <p className="flex-1 text-center">{`/`}</p>
        <p className="flex-1 text-center">{stat_max_value}</p>
      </div>
    </div>
  );
};

export default ItemGrindHeader;
