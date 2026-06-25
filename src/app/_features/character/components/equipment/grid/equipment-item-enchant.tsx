import { cn } from '@/lib/utils';

const EquipmentItemEnchant = ({
  rank,
  enchant,
}: {
  rank: number;
  enchant: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:flex-row">
      <div
        className={cn(
          '',
          rank <= 6 ? 'text-amber-300/90' : 'text-purple-400/90'
        )}
      >
        {enchant}
      </div>
    </div>
  );
};

export default EquipmentItemEnchant;
