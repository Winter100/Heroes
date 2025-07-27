import { Stat } from '@/app/_type/previewType';
import { cn } from '@/lib/utils';

const EnchantEffects = ({
  effects,
  className,
}: {
  effects: Stat[];
  className?: string;
}) => {
  return (
    <>
      {effects.map((effect) => (
        <div
          key={effect.stat_name}
          className={cn('flex items-center gap-1', className)}
        >
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
