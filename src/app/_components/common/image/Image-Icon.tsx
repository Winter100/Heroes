import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ComponentProps } from 'react';

interface ImageIconProps extends ComponentProps<'image'> {
  alt: string;
  src: string;
  className?: string;
  imageClassName?: string;
}
const ImageIcon = ({ src, alt, className, imageClassName }: ImageIconProps) => {
  const isValidSrc =
    src &&
    src?.toLowerCase() !== 'null' &&
    src?.toLowerCase() !== 'undefined' &&
    src.trim() !== '';

  const finalSrc = isValidSrc ? src : '/images/hereta.png';
  return (
    <div className={cn('relative h-10 w-10', className)}>
      <Image
        unoptimized={true}
        src={finalSrc}
        alt={alt}
        fill
        className={cn('object-contain', imageClassName)}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageIcon;
