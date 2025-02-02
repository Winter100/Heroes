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
        inDiaClassName="overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 md:h-[900px] xl:h-full md:p-6 md:pb-4"
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
