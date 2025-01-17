import BasicDialog from "@/app/_components/common/BasicDialog";
import PartholnContent from "./content/PartholnContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import Button from "../common/Button";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";

const PartholnSummaryDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();
  return (
    <>
      <Button className="flex-1 rounded-lg" onClick={onOpen}>
        파르홀른
      </Button>
      <BasicDialog isOpen={isOpen} onClose={onClose} size="530px">
        <PartholnContent />
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default PartholnSummaryDialog;
