import { DialogClose } from '@/components/ui/dialog';
import ImageIcon from '../common/image/Image-Icon';
import { cn } from '@/lib/utils';
import { RaidType } from '@/app/_store/useRaidStore';
import { MonstersType, RaidListType } from '@/app/_type/raidType';

const RaidList = ({
  raid,
  raidType,
  selectRaid,
  onClick,
}: {
  raid: RaidListType[];
  raidType: RaidType;
  selectRaid: (MonstersType & { type: RaidType }) | null;
  onClick: (type: RaidType, battle: MonstersType) => void;
}) => {
  return (
    <div className="flex w-full flex-col gap-2 sm:grid sm:grid-cols-4">
      {raid
        ?.filter((r) => r.raid_name !== '미분류')
        .map((raid) => (
          <div
            className="flex flex-col gap-2 rounded-lg bg-black/50 p-2"
            key={raid?.raid_name}
          >
            <div className="flex w-full items-center justify-center text-sm text-white">
              <h2>{raid?.raid_name}</h2>
            </div>
            <div className="flex flex-col gap-4 sm:grid sm:grid-rows-5">
              {raid?.monsters?.map((boss) => (
                <DialogClose
                  onClick={() => onClick(raidType, boss)}
                  key={boss?.battle}
                  className={cn(
                    'flex w-full items-center justify-center gap-2 hover:text-blue-300',
                    selectRaid?.battle === boss?.battle &&
                      raidType === selectRaid?.type &&
                      'text-blue-300'
                  )}
                >
                  <ImageIcon
                    className="h-6 w-10"
                    src={boss.image ?? ''}
                    alt={boss.battle}
                  />
                  <div className="flex h-full flex-1 items-center text-xs">
                    {boss.battle}
                  </div>
                </DialogClose>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RaidList;
