import Image from "next/image";

interface IngredientItemProps {
  name: string;
  src: string;
  value: number;
}
const IngredientItem = ({ name, value, src }: IngredientItemProps) => {
  const isZeroValue = value === 0;
  return (
    <div
      className={`${isZeroValue ? "opacity-40" : ""} flex w-full flex-col items-center justify-center gap-2 text-sm hover:cursor-default`}
    >
      <div className="flex h-2 items-center justify-center text-xs">{name}</div>
      <div className="flex w-full flex-row gap-2 rounded-lg bg-background p-1">
        <div className="relative h-5 w-5" title={name}>
          <Image
            className="rounded-sm object-cover"
            fill
            src={src}
            alt={name}
          />
        </div>
        <p className="w-full">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IngredientItem;
