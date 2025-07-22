import { memo } from 'react';
import { cn } from '@/lib/utils';
import ImageIcon from './Image-Icon';

interface ImageIconUseBorderProps {
  itemName: string;
  src: string;
  isRatingBorder: boolean;
  className?: string;
  imageClassName?: string;
}

const ImageIconUseBorder = memo(
  ({
    src,
    isRatingBorder = false,
    itemName,
    className,
    imageClassName,
  }: ImageIconUseBorderProps) => {
    const rare = itemName.includes('레어');
    const legend = itemName.includes('전설');
    return (
      <ImageIcon
        className={className}
        imageClassName={cn(
          'rounded-md object-scale-down',
          imageClassName,
          isRatingBorder && rare && 'border border-orange-300',
          isRatingBorder && legend && 'border border-pink-400'
        )}
        src={src}
        alt={itemName}
      />
    );
  }
);

export default ImageIconUseBorder;

ImageIconUseBorder.displayName = 'ImageIconUseBorder';
