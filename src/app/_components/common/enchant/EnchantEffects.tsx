import { Stat } from '@/app/_type/previewType';
import { cn } from '@/lib/utils';

const EnchantEffects = ({ effects }: { effects: Stat[] }) => {
  return (
    <>
      {effects.map((effect) => (
        <div key={effect.stat_name} className="flex items-center gap-1">
          <div className="text-gray-400">• {effect.stat_name}</div>
          <div
            className={cn(
              'text-blue-300',
              effect.stat_value.toString().includes('-') && 'text-red-300'
            )}
          >
            {effect.stat_value}
          </div>
        </div>
      ))}
    </>
  );
};

export default EnchantEffects;
