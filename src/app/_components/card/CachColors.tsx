const CachColors = ({
  isWearing,
  colors,
}: {
  isWearing: boolean;
  colors: {
    color_1: string;
    color_2: string;
    color_3: string;
  };
}) => {
  const colorArray = Object.values(colors).map((color) =>
    color?.split(",").map(String),
  );

  return (
    <ul className="flex w-full flex-col gap-2">
      {colorArray.map((col, i) => (
        <li key={i} className="flex items-center gap-2 pl-2 text-xs">
          {isWearing ? (
            <>
              <div
                title={col?.toString()}
                className={`h-4 w-4 rounded-full`}
                style={{
                  backgroundColor: `rgb(${col?.toString()})`,
                }}
              />
              <div className="flex items-center gap-2">
                <span>{`색상파트 ${i + 1}:`}</span>
                <span>{col?.toString()}</span>
              </div>
            </>
          ) : (
            <div className="h-4" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CachColors;
