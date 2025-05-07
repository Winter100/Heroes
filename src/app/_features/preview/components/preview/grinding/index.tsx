import { NewEquipmentType } from '@/app/_type/equipmentType';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Hammer } from 'lucide-react';
import OneGrindingContent from './OneGrindingContent';
import RaidSelectorWithStats from '@/app/_components/preview/table/RaidSelectorWithStats';

const OneGrindingDialog = ({ item }: { item: NewEquipmentType }) => {
  const title = {
    name: item?.item_name || '',
    level: item?.item_option?.enhancement_level || '',
  };
  const isAbility = !!item.item_option.ability_name;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-5 p-0 sm:w-7" variant="outline">
          <Hammer size={10} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-2xl overflow-y-auto border-none bg-background px-1 text-white sm:max-h-[950px] sm:px-6">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <OneGrindingContent isAbility={isAbility} title={title} item={item} />
        <RaidSelectorWithStats />
      </DialogContent>
    </Dialog>
  );
};

export default OneGrindingDialog;
