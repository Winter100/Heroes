import BasicDialog from "@/app/_components/common/BasicDialog";
import GrindingContent from "./content/GrindingContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
import Button from "../common/Button";

const GrindingSummaryDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();
  return (
    <>
      <Button className="rounded-lg p-1" onClick={onOpen}>
        연마
      </Button>
      <BasicDialog
        className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[550px] md:h-[750px] md:p-6 md:pb-4 lg:h-[1000px]"
        isOpen={isOpen}
        onClose={onClose}
        size="1000px"
      >
        <GrindingContent />
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default GrindingSummaryDialog;
