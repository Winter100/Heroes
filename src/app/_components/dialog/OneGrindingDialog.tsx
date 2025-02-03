import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import BasicDialog from "../common/BasicDialog";
import ItemTitle from "../common/ItemTitle";
import BottomArrow from "../common/BottomArrow";
import { NewEquipmentType } from "@/app/_type/equipmentType";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import Button from "../common/Button";
import OneGrindingContent from "./content/OneGrindingContent";

interface OneGrindingDialogProps {
  item: NewEquipmentType;
}

const OneGrindingDialog = ({ item }: OneGrindingDialogProps) => {
  const { isOpen, onClose, onOpen } = useDialog();

  const title = {
    name: item?.item_name || "",
    level: item?.item_option?.enhancement_level || "",
  };

  const isAbility = !!item.item_option.ability_name;

  return (
    <>
      <Button className="border-none" onClick={onOpen}>
        <ItemTitle level={title.level} name={title.name} />
        <BottomArrow />
      </Button>
      <BasicDialog
        className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[550px] md:h-[800px] md:p-6 md:pb-4 lg:h-full"
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
