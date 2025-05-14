import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { RaidTableDialogProps } from '../../types';
import RaidTableDialogHeader from './RaidTableDialogHeader';
import RaidTableDialogBody from './RaidTabledialogBody';

const RaidTableDialog = ({
  boss_level,
  boss_name,
  drop_items,
  entry,
  limit,
  name,
  bonus,
  children,
  basic_reward,
}: RaidTableDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-h-[550px] max-w-xl overflow-y-auto border-none text-white/70 sm:max-h-full sm:overflow-auto">
        <RaidTableDialogHeader
          name={name}
          boss_name={boss_name}
          boss_level={boss_level}
          basic_reward={basic_reward}
        />
        <RaidTableDialogBody
          name={name}
          entry={entry}
          limit={limit}
          drop_items={drop_items}
          bonus={bonus}
        />
      </DialogContent>
    </Dialog>
  );
};

export default RaidTableDialog;
