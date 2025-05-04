import Image from 'next/image';
import { MonsterItemProps } from '@/app/_features/preview/types';
import { getImageByName } from '@/app/_utils/getImageByName';
import BossStatsTable from './bossStatsTable';

const MonsterItem = ({ filter, name, raid }: MonsterItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg pt-2">
      <div className="flex w-40 flex-row items-center gap-2">
        <Image
          src={getImageByName(name)}
          width={40}
          height={24}
          alt={name}
          style={{ width: '40px', height: '24px' }}
        />
        <p className="flex flex-1 justify-start text-xs">{name}</p>
      </div>
      <BossStatsTable boss={raid} filter={filter} />
    </div>
  );
};

export default MonsterItem;
