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
        <Button className="w-8" variant="outline">
          <Hammer size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark max-w-2xl bg-backgroundOne text-white">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <OneGrindingContent isAbility={isAbility} title={title} item={item} />
        <RaidSelectorWithStats />
      </DialogContent>
    </Dialog>

    // <>
    //   <Button className="" onClick={onOpen}>
    //     <Image src={src} width={17} height={17} alt="연마" />
    //   </Button>
    //   <BasicDialog
    //     className="max-h-[500px] overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 text-white md:max-h-[1000px] md:p-6 md:pb-4"
    //     // className="max-h-[500px] overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[550px] md:h-[800px] md:p-6 md:pb-4 lg:h-full"
    //     isOpen={isOpen}
    //     onClose={onClose}
    //     size="700px"
    //   >
    //     <OneGrindingContent isAbility={isAbility} title={title} item={item} />
    //     <RaidSelectorWithStats />
    //   </BasicDialog>
    // </>
  );
};

export default OneGrindingDialog;
