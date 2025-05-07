import { cn } from '@/lib/utils';
import Image from 'next/image';
import { InfusionTabsItemProps } from '../../../types';

const InfusionTabsItem = ({
  data,
  onClick,
  selectedValue,
}: InfusionTabsItemProps) => {
  return (
    <div className="mb-2 grid grid-cols-3 gap-2">
      {data?.map((item) =>
        item.stat_value.map((infusion) => (
          <div
            onClick={() =>
              onClick(item.name, [
                {
                  stat_name: infusion.stat_name,
                  stat_value: infusion.stat_value,
                },
              ])
            }
            key={infusion.stat_name}
            className={cn(
              'rounded-md border border-muted/10 bg-background p-2 hover:animate-boundUpDown hover:cursor-pointer',
              selectedValue === item.name && 'border-blue-300'
            )}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex w-10 items-start justify-center">
                  <Image
                    width={25}
                    height={25}
                    src="/images/enchant/infusion.png"
                    alt="I"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold">
                      {infusion.stat_name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="gap-1 text-xs">
                <div
                  key={infusion.stat_name}
                  className="flex items-center gap-1"
                >
                  <div className="text-gray-400">• {infusion.stat_name}</div>
                  <div
                    className={cn(
                      'text-blue-300',
                      infusion.stat_value.includes('-') && 'text-red-300'
                    )}
                  >
                    {infusion.stat_value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default InfusionTabsItem;
