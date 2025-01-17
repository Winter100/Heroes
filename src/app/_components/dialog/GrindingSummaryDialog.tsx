import BasicDialog from "@/app/_components/common/BasicDialog";
import GrindingContent from "./content/GrindingContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import Button from "../common/Button";

const GrindingSummaryDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();
  return (
    <>
      <Button className="flex-1 rounded-lg" onClick={onOpen}>
        연마
      </Button>
      <BasicDialog isOpen={isOpen} onClose={onClose} size="1000px">
        <GrindingContent />
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default GrindingSummaryDialog;
