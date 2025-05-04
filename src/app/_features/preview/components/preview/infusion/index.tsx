import ItemTitle from '@/app/_components/common/ItemTitle';
import { InfusionsDialogProps } from '@/app/_type/infusionType';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ChevronDown } from 'lucide-react';
import InfusionsContent from './InfusionsContent';
import RaidSelectorWithStats from '@/app/_components/preview/table/RaidSelectorWithStats';
import { Button } from '@/components/ui/button';

const InfusionsDialog = ({
  selectedValue,
  items,
  infusionList,
  label,
  selectedHandler,
}: InfusionsDialogProps) => {
  const { level, name } = items;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-6 w-full border text-xs" variant="ghost">
          {label} {!label && <ChevronDown size={15} />}
        </Button>
      </DialogTrigger>
      <DialogContent className="dark max-w-2xl bg-backgroundOne text-white">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ItemTitle
          className="text-sm font-medium text-white"
          level={level}
          name={name}
        />
        <InfusionsContent
          infusionList={infusionList}
          selectedHandler={selectedHandler}
          selectedValue={selectedValue}
        />
        <RaidSelectorWithStats />
      </DialogContent>
    </Dialog>
  );
};

export default InfusionsDialog;
