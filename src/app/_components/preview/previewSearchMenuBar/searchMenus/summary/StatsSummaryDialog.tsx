import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
import StatsContent from "../content/StatsContent";

const StatsSummaryDialog = () => {
  return (
    <>
      <BasicDialog label="스텟" size="400px">
        <StatsContent />
      </BasicDialog>
    </>
  );
};
export default StatsSummaryDialog;

// "use client";

// import { useDialog } from "@/app/_hooks/useDialog/useDialog";
// import Button from "@/app/_components/common/Button";
// import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
// import StatsContent from "../content/StatsContent";

// const StatsSummaryDialog = () => {
//   const { isOpen, setIsOpen, onOpen } = useDialog();
//   return (
//     <>
//       <Button onClick={onOpen}>스텟</Button>
//       <BasicDialog isOpen={isOpen} setIsOpen={setIsOpen}>
//         <StatsContent />
//       </BasicDialog>
//     </>
//   );
// };
// export default StatsSummaryDialog;
