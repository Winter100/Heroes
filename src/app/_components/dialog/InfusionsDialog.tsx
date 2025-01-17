import { InfusionsDialogProps } from "@/app/_type/infusionType";
import BasicDialog from "../common/BasicDialog";
import BottomArrow from "../common/BottomArrow";
import ItemTitle from "../common/ItemTitle";
import InfusionsContent from "./content/InfusionsContent";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import Button from "../common/Button";

const InfusionsDialog = ({
  selectedValue,
  items,
  infusionList,
  label,
  selectedHandler,
}: InfusionsDialogProps) => {
  const { isOpen, onClose, onOpen } = useDialog();
  const { level, name } = items;
  return (
    <>
      <Button className="text-white" onClick={onOpen}>
        {label}
        <BottomArrow />
      </Button>
      <BasicDialog isOpen={isOpen} onClose={onClose} size="750px">
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
      </BasicDialog>
    </>
  );
};

export default InfusionsDialog;
