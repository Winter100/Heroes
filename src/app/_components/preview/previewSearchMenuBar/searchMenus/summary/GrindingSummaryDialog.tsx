import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
import GrindingContent from "../content/GrindingContent";

const GrindingSummaryDialog = () => {
  return (
    <>
      <BasicDialog label="연마" size="1000px">
        <GrindingContent />
      </BasicDialog>
    </>
  );
};

export default GrindingSummaryDialog;
// "use client";

// import { useDialog } from "@/app/_hooks/useDialog/useDialog";
// import Button from "@/app/_components/common/Button";
// import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
// import GrindingContent from "../content/GrindingContent";

// const GrindingSummaryDialog = () => {
//   const { isOpen, setIsOpen, onOpen } = useDialog();

//   return (
//     <>
//       <Button onClick={onOpen}>연마</Button>
//       <BasicDialog isOpen={isOpen} setIsOpen={setIsOpen}>
//         <GrindingContent />
//       </BasicDialog>
//     </>
//   );
// };

// export default GrindingSummaryDialog;
