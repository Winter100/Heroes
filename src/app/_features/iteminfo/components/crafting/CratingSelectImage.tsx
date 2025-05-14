import { memo } from 'react';
import { CratingSelectImageProps } from '../../types';
import TooltipImage from '@/app/_components/common/tooltip/TooltipImage';

const CratingSelectImage = memo(
  ({ isSelect, itemName, src }: CratingSelectImageProps) => {
    return (
      <>
        {isSelect ? (
          <div className="w-10">
            <TooltipImage
              src={src}
              size={35}
              itemName={itemName}
              isRatingBorder={true}
            />
          </div>
        ) : (
          <div className="w-10">
            <TooltipImage src={src} size={35} itemName={itemName} />
          </div>
        )}
      </>
    );
  }
);

export default CratingSelectImage;

CratingSelectImage.displayName = 'CratingSelectImage';
