import BasicDialog from "@/app/_components/common/BasicDialog";
import StatsContent from "./content/StatsContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import Button from "../common/Button";

const StatsSummaryDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();
  return (
    <>
      <Button className="flex-1 rounded-lg" onClick={onOpen}>
        스탯
      </Button>
      <BasicDialog isOpen={isOpen} onClose={onClose} size="400px">
        <StatsContent />
      </BasicDialog>
    </>
  );
};
export default StatsSummaryDialog;
