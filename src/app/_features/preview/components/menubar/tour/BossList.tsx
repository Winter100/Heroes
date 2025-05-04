import { BossListProps } from '../../../types';
import MonsterItem from './MonsterItem';

const BossList = ({ raidList, filter }: BossListProps) => {
  return raidList.map((raids) => (
    <div key={raids?.raid_name} className="h-full w-full">
      {raids !== null && (
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-center text-base text-white">
            <h2>{raids?.raid_name}</h2>
          </div>
          <div className="flex flex-col gap-1">
            {raids?.monsters.map((raid) => (
              <MonsterItem
                key={raid.name}
                name={raid.name}
                raid={raid}
                filter={filter}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  ));
};

export default BossList;
