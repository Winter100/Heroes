import { cn } from '@/lib/utils';

const TabEnchantEffects = ({
  effects,
}: {
  effects: { stat_value: { stat_name: string; stat_value: string }[] };
}) => {
  return (
    <>
      {effects.stat_value.map((effect) => (
        <div key={effect.stat_name} className="flex items-center gap-1">
          <div className="text-gray-400">• {effect.stat_name}</div>
          <div
            className={cn(
              'text-blue-300',
              effect.stat_value.includes('-') && 'text-red-300'
            )}
          >
            {effect.stat_value}
          </div>
        </div>
      ))}
    </>
  );
};

export default TabEnchantEffects;
