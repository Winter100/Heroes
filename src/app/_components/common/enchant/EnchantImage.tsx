import Image from "next/image";

interface EnchantImageProps {
  alt: string;
  src: string;
  size?: number;
}

const EnchantImage = ({ src, alt, size = 32 }: EnchantImageProps) => {
  return (
    <Image
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `auto`, objectFit: "contain" }}
      className="rounded-md"
      src={src}
      alt={alt}
    />
  );
};

export default EnchantImage;
