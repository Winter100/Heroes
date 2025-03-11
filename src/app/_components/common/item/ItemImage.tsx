import clsx from "clsx";
import Image from "next/image";

interface ItemImage {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}
const ItemImage = ({ alt, className, size = 50, ...props }: ItemImage) => {
  return (
    <div className="p-1">
      <Image
        className={clsx("object-scale-down", className)}
        width={size}
        height={size}
        alt={alt}
        priority={true}
        {...props}
      />
    </div>
  );
};

export default ItemImage;
