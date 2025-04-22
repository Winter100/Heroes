import clsx from 'clsx';
import Image from 'next/image';
import { memo } from 'react';

interface TooltipImageProps {
  itemName: string;
  src: string;
  size?: number;
  isRatingBorder?: boolean;
}

const TooltipImage = memo(
  ({ size = 35, src, isRatingBorder = false, itemName }: TooltipImageProps) => {
    return (
      <a
        className="flex items-center justify-center"
        data-tooltip-id={itemName}
      >
        <Image
          className={clsx(
            'rounded-md object-scale-down',
            isRatingBorder &&
              itemName.includes('레어') &&
              'rounded-sm border border-orange-300',
            isRatingBorder &&
              itemName.includes('전설') &&
              'rounded-sm border border-pink-400'
          )}
          width={size}
          height={size}
          src={src}
          alt={itemName || ''}
          priority={true}
        />
      </a>
    );
  }
);

export default TooltipImage;

TooltipImage.displayName = 'TooltipImage';
