import EnchantImage from '@/app/_components/common/enchant/EnchantImage';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
import { ENCHANT_DESTRUCTION_RANK } from '@/app/_constant/enchant';
import { cn } from '@/lib/utils';

const TabEnchantImage = ({
  rank,
  upgreadeType,
}: {
  rank: string;
  upgreadeType: string;
}) => {
  return (
    <div className="relative flex flex-col items-start justify-center">
      <EnchantImage
        size={45}
        src={getEnchantImage(rank, upgreadeType)}
        alt="E"
      />
      <div
        className={cn(
          'absolute -left-2 -top-2 h-3.5 w-3.5 rounded-full text-center text-[9px] text-gray-900',
          Number(rank) <= ENCHANT_DESTRUCTION_RANK
            ? 'bg-yellow-500'
            : 'bg-purple-500'
        )}
      >
        {rank}
      </div>
    </div>
  );
};

export default TabEnchantImage;
