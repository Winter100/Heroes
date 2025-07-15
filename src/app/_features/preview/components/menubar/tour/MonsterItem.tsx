import { MonsterItemProps } from '@/app/_features/preview/types';
import { getImageByName } from '@/app/_utils/getImageByName';
import BossStatsTable from './bossStatsTable';
import ImageIcon from '@/app/_components/common/Image-Icon';

const MonsterItem = ({ filter, name, raid }: MonsterItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg pt-2">
      <div className="flex flex-row items-center justify-center gap-2">
        <ImageIcon className="h-6 w-10" alt={name} src={getImageByName(name)} />
        <p className="text-xs">{name}</p>
      </div>
      <BossStatsTable boss={raid} filter={filter} />
    </div>
  );
};

export default MonsterItem;
