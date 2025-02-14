import clsx from "clsx";
import Image from "next/image";

interface ItemImage {
  src: string;
  alt: string;
  className?: string;
}
const ItemImage = ({ alt, className, ...props }: ItemImage) => {
  return (
    <div className="p-1">
      <Image
        className={clsx("object-scale-down", className)}
        width={50}
        height={50}
        alt={alt}
        priority={true}
        {...props}
      />
    </div>
  );
};

export default ItemImage;
