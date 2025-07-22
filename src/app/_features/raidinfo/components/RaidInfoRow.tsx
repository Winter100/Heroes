import { TableCell, TableRow } from '@/components/ui/table';
import RaidTableDialog from './dialog/RaidTableDialog';
import { ZoomIn } from 'lucide-react';
import { RaidTableDialogProps } from '../types';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getImageByName } from '@/app/_utils/get/getImageByName';

interface RaidInfoRowProps {
  raid: RaidTableDialogProps;
}

const RaidInfoRow = (props: RaidInfoRowProps) => {
  const {
    boss_name: bossName,
    name: raidName,
    region,
    basic_reward: reward,
  } = props.raid;

  const goldValue = Number(
    reward?.find((reward) => reward.name === '골드')?.value
  );
  const rewardGold = isNaN(goldValue) ? '' : goldValue.toString();

  return (
    <TableRow className="rounded-md border-b hover:text-white">
      <TableCell>{region}</TableCell>
      <TableCell>{raidName}</TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <ImageIcon
            className="h-5 w-5"
            src={getImageByName(raidName)}
            alt="B"
          />
          <div className="hidden sm:block">{bossName}</div>
        </div>
      </TableCell>
      <TableCell className="text-center">{rewardGold}</TableCell>
      <TableCell className="text-center">
        <RaidTableDialog {...props.raid}>
          <ZoomIn className="mx-auto" size={20} />
        </RaidTableDialog>
      </TableCell>
    </TableRow>
  );
};

export default RaidInfoRow;
