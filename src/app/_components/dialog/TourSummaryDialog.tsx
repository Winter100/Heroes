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
        className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[450px] md:h-[650px] md:p-6 md:pb-4"
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
