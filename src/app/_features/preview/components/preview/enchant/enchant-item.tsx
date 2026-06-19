import { cn } from '@/lib/utils';
import EnchantEffects from '@/app/_components/common/enchant/EnchantEffects';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getEnchantImage } from '@/app/_utils/enchant/utils/getEnchantImage';
import {
  ENCHANT_DESTRUCTION_RANK,
  EnchantOptionType,
} from '@/app/_type/enchantType';

const EnchantItem = ({ enchant }: { enchant: EnchantOptionType }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative">
          <ImageIcon
            className="h-8 w-8"
            src={getEnchantImage(
              enchant?.rank.toString(),
              enchant?.affix.toString().toLocaleLowerCase()
            )}
            alt="e"
          />
          <div
            className={cn(
              'absolute -left-2 -top-2 h-3.5 w-3.5 rounded-full text-center text-[9px] text-gray-900',
              Number(enchant?.rank) <= ENCHANT_DESTRUCTION_RANK
                ? 'bg-yellow-500'
                : 'bg-purple-500'
            )}
          >
            {enchant?.rank}
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="text-left text-xs font-bold">{enchant.name}</div>
          {enchant.description && (
            <div className="flex items-center gap-1 text-[10px]">
              <div className="text-gray-400">{enchant.description}</div>
            </div>
          )}
        </div>
      </div>

      <div className="gap-1 p-1 text-xs">
        <EnchantEffects effects={enchant.effects} />
      </div>
    </div>
  );
};

export default EnchantItem;
