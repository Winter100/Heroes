import ImageIcon from './image/Image-Icon';

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
      <div className="flex w-full flex-row items-center gap-2 rounded-lg border border-muted p-0.5">
        <ImageIcon className="h-4 w-4" src={src} alt={name} />
        <p className="w-full">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IngredientItem;
