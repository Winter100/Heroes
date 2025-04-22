import { useDialog } from '@/app/_hooks/useDialog/useDialog';
import BasicDialog from '../common/BasicDialog';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import RaidSelectorWithStats from '../preview/table/RaidSelectorWithStats';
import OneGrindingContent from './content/OneGrindingContent';
import { Button } from '@headlessui/react';
import Item from '../common/item/Item';

interface OneGrindingDialogProps {
  item: NewEquipmentType;
}

const OneGrindingDialog = ({ item }: OneGrindingDialogProps) => {
  const { isOpen, onClose, onOpen } = useDialog();

  const title = {
    name: item?.item_name || '',
    level: item?.item_option?.enhancement_level || '',
  };

  const isAbility = !!item.item_option.ability_name;
  const src = '/images/icon/quality.png';

  return (
    <>
      <Button className="" onClick={onOpen}>
        <Item.Image src={src} alt={'연마'} />
      </Button>
      <BasicDialog
        className="max-h-[500px] overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 text-white md:max-h-[1000px] md:p-6 md:pb-4"
        // className="max-h-[500px] overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[550px] md:h-[800px] md:p-6 md:pb-4 lg:h-full"
        isOpen={isOpen}
        onClose={onClose}
        size="700px"
      >
        <OneGrindingContent isAbility={isAbility} title={title} item={item} />
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default OneGrindingDialog;
