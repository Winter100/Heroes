"use client";
import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
import TourContent from "../content/TourContent";

const TourSummaryDialog = () => {
  return (
    <>
      <BasicDialog label="순회" size="800px">
        <TourContent />
      </BasicDialog>
    </>
  );
};

export default TourSummaryDialog;
// "use client";

// // import { useDialog } from "@/app/_hooks/useDialog/useDialog";
// // import Button from "@/app/_components/common/Button";
// import BasicDialog from "@/app/_components/common/Dialog/BasicDialog";
// import TourContent from "../content/TourContent";

// const TourSummaryDialog = () => {
//   // const { isOpen, setIsOpen, onOpen } = useDialog();
//   return (
//     <>
//       {/* <Button onClick={onOpen}>순회</Button> */}
//       <BasicDialog label="순회">
//         <TourContent />
//       </BasicDialog>
//     </>
//   );
// };

// export default TourSummaryDialog;
