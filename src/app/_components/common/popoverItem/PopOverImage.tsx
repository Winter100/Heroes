import React, { memo, useMemo } from 'react';
import { getTooltipImageSrc } from '@/app/_utils/getTooltipImageSrc';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ItemTooltipByType from '@/app/_components/tooltip/ItemTooltipByType';
import ImageIconUseBorder from '@/app/_components/common/ImageIconUseBorder';
import { cn } from '@/lib/utils';

interface PopOverImageProps {
  item_name: string;
  category: string;
  isRatingBorder?: boolean;
  className?: string;
  imageClassName?: string;
}

const PopOverImage = memo(
  ({
    category,
    item_name,
    isRatingBorder = false,
    className,
    imageClassName,
  }: PopOverImageProps) => {
    const src = useMemo(() => getTooltipImageSrc(item_name), [item_name]);

    return (
      <Popover>
        <PopoverTrigger>
          <ImageIconUseBorder
            src={src}
            itemName={item_name}
            isRatingBorder={isRatingBorder}
            className={cn('h-9 w-9 flex-shrink-0', className)}
            imageClassName={imageClassName}
          />
        </PopoverTrigger>
        <PopoverContent className="dark w-[350px] p-1">
          <ItemTooltipByType itemName={item_name} category={category} />
        </PopoverContent>
      </Popover>
    );
  }
);

export default PopOverImage;

PopOverImage.displayName = 'PopOverImage';
