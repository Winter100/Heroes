import Image from "next/image";

interface IngredientItemProps {
  name: string;
  src: string;
  value: number;
}
const IngredientItem = ({ name, value, src }: IngredientItemProps) => {
  return (
    <div className="flex gap-2 text-sm">
      <div className="relative h-5 w-5">
        <Image className="rounded-sm object-cover" fill src={src} alt={name} />
      </div>
      <p>{value.toLocaleString()}</p>
    </div>
  );
};

export default IngredientItem;
