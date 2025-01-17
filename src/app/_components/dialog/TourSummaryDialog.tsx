import BasicDialog from "@/app/_components/common/BasicDialog";
import TourContent from "./content/TourContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import Button from "../common/Button";

const TourSummaryDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();
  return (
    <>
      <Button className="flex-1 rounded-lg" onClick={onOpen}>
        순회
      </Button>
      <BasicDialog isOpen={isOpen} onClose={onClose} size="800px">
        <TourContent />
      </BasicDialog>
    </>
  );
};

export default TourSummaryDialog;
