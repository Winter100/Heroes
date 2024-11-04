import Image from "next/image";

interface IngredientItemProps {
  name: string;
  src: string;
  value: number;
}
const IngredientItem = ({
  name = "",
  value = 0,
  src = "",
}: IngredientItemProps) => {
  const isZeroValue = value === 0;
  return (
    <div
      className={`${isZeroValue ? "opacity-40" : "text-white"} flex w-full flex-col items-center justify-center gap-2 text-sm hover:cursor-default`}
    >
      <div className="flex items-center justify-center text-xs">{name}</div>
      <div className="flex w-full flex-row gap-2 rounded-lg bg-background p-1">
        <div className="flex h-5 w-5 items-center justify-center">
          <Image
            className="h-auto w-auto rounded-sm object-cover"
            width={20}
            height={0}
            src={src}
            alt={name}
            title={name}
          />
        </div>

        <p className="w-full">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IngredientItem;
