import BasicDialog from "@/app/_components/common/BasicDialog";
import TourContent from "./content/TourContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import Button from "../common/Button";

const TourSummaryDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();
  return (
    <>
      <Button className="rounded-lg p-1" onClick={onOpen}>
        순회
      </Button>
      <BasicDialog
        inDiaClassName="!h-[700px]"
        isOpen={isOpen}
        onClose={onClose}
        size="800px"
      >
        <TourContent />
      </BasicDialog>
    </>
  );
};

export default TourSummaryDialog;
