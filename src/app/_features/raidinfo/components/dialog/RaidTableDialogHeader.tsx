import { addRewardIcon } from '../../utils/addRewardIcon';
import { RaidTableDialogHeaderProps } from '../../types';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getImageByName } from '@/app/_utils/get/getImageByName';

const RaidTableDialogHeader = ({
  basic_reward,
  boss_level,
  boss_name,
  name,
}: RaidTableDialogHeaderProps) => {
  const rewardIcons = addRewardIcon(basic_reward);
  return (
    <div className="flex items-center gap-2 pt-2">
      <ImageIcon
        className="h-20 w-32"
        src={getImageByName(name)}
        alt={boss_name}
      />
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
