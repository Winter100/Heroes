import { getItemInfoOptions } from '@/app/_features/preview/utils/getItemInfoOptions';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import { cn } from '@/lib/utils';

const ItemPreivewInfo = ({ ...item }: NewEquipmentType) => {
  const { level, existingPrefixEnchant, existingSuffixEnchant } =
    getItemInfoOptions(item);

  const usedEnchantNames = [
    existingPrefixEnchant,
    existingSuffixEnchant,
  ].filter(Boolean);

  return (
    <div className="flex h-full w-full flex-col gap-0.5 p-1">
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row">
        {usedEnchantNames?.map((enchant) => (
          <div
            className={cn(
              '',
              Number(enchant.rank) <= 6
                ? 'text-amber-300/90'
                : 'text-purple-400/90'
            )}
            key={enchant.upgreadeType}
          >
            {enchant.name}
          </div>
        ))}
      </div>

      <div className="mx-auto flex items-start">
        {level && <div className="pr-1">{level}</div>}
        <div>{item.item_name}</div>
      </div>
    </div>
  );
};

export default ItemPreivewInfo;
