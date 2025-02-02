import BasicDialog from "@/app/_components/common/BasicDialog";
import PartholnContent from "./content/PartholnContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import Button from "../common/Button";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";

const PartholnSummaryDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();
  return (
    <>
      <Button className="rounded-lg p-1" onClick={onOpen}>
        파르홀른
      </Button>
      <BasicDialog isOpen={isOpen} onClose={onClose} size="600px">
        <PartholnContent />
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default PartholnSummaryDialog;
