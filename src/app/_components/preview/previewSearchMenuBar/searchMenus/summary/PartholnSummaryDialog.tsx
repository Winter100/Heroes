import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
import PartholnContent from "../content/PartholnContent";

const PartholnSummaryDialog = () => {
  return (
    <>
      <BasicDialog label="파르홀른" size="600px">
        <PartholnContent />
      </BasicDialog>
    </>
  );
};

export default PartholnSummaryDialog;
// "use client";

// import { useDialog } from "@/app/_hooks/useDialog/useDialog";
// import Button from "@/app/_components/common/Button";
// import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
// import PartholnContent from "../content/PartholnContent";

// const PartholnSummaryDialog = () => {
//   const { isOpen, setIsOpen, onOpen } = useDialog();

//   return (
//     <>
//       <Button onClick={onOpen}>파르홀른</Button>
//       <BasicDialog isOpen={isOpen} setIsOpen={setIsOpen}>
//         <PartholnContent />
//       </BasicDialog>
//     </>
//   );
// };

// export default PartholnSummaryDialog;
