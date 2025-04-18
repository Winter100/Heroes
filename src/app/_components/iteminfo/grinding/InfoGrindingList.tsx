import InfoGrindingItem from './InfoGrindingItem';
import { NewTuning_stat } from '@/app/_type/equipmentType';

const InfoGrindingList = ({
  tuning_stat,
}: {
  itemName: string;
  setName: string;
  slot: string;
  tuning_stat: NewTuning_stat[];
}) => {
  const tuningView = tuning_stat.map((stat) => {
    return {
      ...stat,
      stat_name: stat.stat_name,
      stat_max_value: stat.stat_max_value,
      stat_value: stat.stat_value,
      percentage: Math.floor(
        (parseInt(stat.stat_value) / parseInt(stat.stat_max_value)) * 100
      ),
    };
  });

  return (
    <ul className="flex flex-col gap-1 px-1">
      {tuningView?.map((stat) => (
        <li key={stat.stat_name}>
          <InfoGrindingItem {...stat} />
        </li>
      ))}
    </ul>
  );
};

export default InfoGrindingList;
