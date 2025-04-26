import Item from './item/Item';

interface IngredientItemProps {
  name: string;
  src: string;
  value: number;
}
const IngredientItem = ({
  name = '',
  value = 0,
  src = '',
}: IngredientItemProps) => {
  const isZeroValue = value === 0;
  return (
    <div
      className={`${isZeroValue ? 'opacity-40' : 'text-white'} flex w-full flex-col items-center justify-center gap-2 text-sm hover:cursor-default`}
    >
      <div className="flex items-center justify-center text-xs">{name}</div>
      <div className="flex w-full flex-row items-center gap-2 rounded-lg bg-background p-0.5">
        <div className="flex items-center justify-center">
          <Item.Image
            className="rounded-sm object-cover"
            src={src}
            alt={name}
            size={20}
            {...{ title: name }}
          />
        </div>

        <p className="w-full">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IngredientItem;
