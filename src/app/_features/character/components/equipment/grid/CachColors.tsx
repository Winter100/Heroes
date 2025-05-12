import { memo } from 'react';

const basicColor = {
  color_1: '0,0,0',
  color_2: '0,0,0',
  color_3: '0,0,0',
  color_4: '0,0,0',
  color_5: '0,0,0',
};
const CachColors = memo(
  ({
    isWearing,
    colors = basicColor,
  }: {
    isWearing: boolean;
    colors: {
      color_1: string;
      color_2: string;
      color_3: string;
      color_4: string;
      color_5: string;
    };
  }) => {
    const colorArray = Object.values(colors).map((color) =>
      color?.split(',').map(String)
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
                <div className="flex flex-col items-center gap-2 truncate lg:flex-row">
                  <span className="hidden xl:block">{`색상파트 ${i + 1}:`}</span>
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
  }
);

export default CachColors;

CachColors.displayName = 'CachColors';
