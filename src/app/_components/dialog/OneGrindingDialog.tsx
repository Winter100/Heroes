import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import BasicDialog from "../common/BasicDialog";
import ItemTitle from "../common/ItemTitle";
import BottomArrow from "../common/BottomArrow";
import { NewEquipmentType } from "@/app/_type/equipmentType";
import Ability from "../preview/ability/Ability";
import Column from "../layout/Column";
import GrindingList from "../common/GrindingList";
import BasicContainer from "../layout/BasicContainer";
import IngredientList from "../common/IngredientList";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import Button from "../common/Button";

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
      <BasicDialog isOpen={isOpen} onClose={onClose} size="700px">
        <Column className="items-center justify-center gap-2 rounded-lg bg-background py-2">
          <ItemTitle
            className="text-sm font-medium text-white"
            level={title.level ?? ""}
            name={title.name}
          />
          {isAbility && <Ability item={item} />}
          <GrindingList className="p-3" item={item} />
        </Column>
        <BasicContainer className="!my-6 !h-auto items-center justify-center">
          <IngredientList item={item} />
        </BasicContainer>
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default OneGrindingDialog;
