import Image from 'next/image';
import { getImageByName } from '@/app/_utils/getImageByName';
import { addRewardIcon } from '../../utils/addRewardIcon';
import { RaidTableDialogHeaderProps } from '../../types';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const RaidTableDialogHeader = ({
  basic_reward,
  boss_level,
  boss_name,
  name,
}: RaidTableDialogHeaderProps) => {
  const rewardIcons = addRewardIcon(basic_reward);
  return (
    <div className="flex items-center gap-2 pt-2">
      <div className="h-auto w-32">
        <Image
          className="h-auto w-full object-cover"
          src={getImageByName(name)}
          width={130}
          height={130}
          alt={boss_name}
        />
      </div>
      <div>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            {boss_name} Lv. {boss_level}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center text-xs text-gray-400/70">
          {rewardIcons?.map((reward) => (
            <div className="mt-1 flex items-center pr-2" key={reward?.name}>
              {reward?.icon && <reward.icon size={15} color="gray" />}
              {Number(reward?.value).toLocaleString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RaidTableDialogHeader;
