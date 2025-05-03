'use client';
import { MonstersOmitEntry, MonstersOmitLimit } from '@/app/_constant/raidList';
import { useRaidStore } from '@/app/_store/raidStore';
import { getImageByName } from '@/app/_utils/getImageByName';
import { DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface RaidSelecterBossListProps {
  raidList: (MonstersOmitEntry | MonstersOmitLimit | null)[];
  filter: '빠른전투' | '상한';
}
const RaidSelecterBossList = ({
  raidList,
  filter,
}: RaidSelecterBossListProps) => {
  const selectedBoss = useRaidStore((state) => state.setSelectBoss);
  const { monsterName, entry } = useRaidStore((state) => state.selectedSumUp);

  const onClick = (
    raid_name: string,
    monster_name: string,
    entry: '빠른전투' | '상한' = '상한'
  ) => {
    selectedBoss(raid_name, monster_name, entry);
  };

  return (
    <div className="flex w-full flex-col gap-2 sm:grid sm:grid-cols-4">
      {raidList?.map((raid) => (
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
                onClick={() => onClick(raid?.raid_name, boss.name, filter)}
                key={boss?.name}
                className={cn(
                  'flex w-full items-center justify-center gap-2 hover:text-blue-300',
                  monsterName === boss.name &&
                    entry === filter &&
                    'text-blue-300'
                )}
              >
                <Image
                  src={getImageByName(boss.name)}
                  width={40}
                  height={24}
                  alt={boss.name}
                  style={{ width: '40px', height: '24px' }}
                />

                <div className="flex h-full flex-1 items-center text-xs">
                  {boss.name}
                </div>
              </DialogClose>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RaidSelecterBossList;
