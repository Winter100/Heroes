import { InfusionsDialogProps } from '@/app/_type/infusionType';
import BasicDialog from '../common/BasicDialog';
import BottomArrow from '../common/BottomArrow';
import ItemTitle from '../common/ItemTitle';
import InfusionsContent from './content/InfusionsContent';
import RaidSelectorWithStats from '../preview/table/RaidSelectorWithStats';
import { useDialog } from '@/app/_hooks/useDialog/useDialog';
import { Button } from '@headlessui/react';

const InfusionsDialog = ({
  selectedValue,
  items,
  infusionList,
  label,
  selectedHandler,
}: InfusionsDialogProps) => {
  const { isOpen, onClose, onOpen } = useDialog();
  const { level, name } = items;
  return (
    <>
      <Button
        className="flex w-full flex-row items-center justify-center border border-borderColor/50 p-0.5 text-[11px] text-white hover:border-blue-300 sm:text-xs"
        onClick={onOpen}
      >
        {label}
        <BottomArrow />
        {/* {label ? label : <BottomArrow />} */}
      </Button>
      <BasicDialog
        className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[450px] md:h-full md:p-6 md:pb-4"
        isOpen={isOpen}
        onClose={onClose}
        size="750px"
      >
        <ItemTitle
          className="text-sm font-medium text-white"
          level={level}
          name={name}
        />
        <InfusionsContent
          infusionList={infusionList}
          selectedHandler={selectedHandler}
          selectedValue={selectedValue}
        />
        <RaidSelectorWithStats />
      </BasicDialog>
    </>
  );
};

export default InfusionsDialog;

// import { InfusionsDialogProps } from "@/app/_type/infusionType";
// import BasicDialog from "../common/BasicDialog";
// import BottomArrow from "../common/BottomArrow";
// import ItemTitle from "../common/ItemTitle";
// import InfusionsContent from "./content/InfusionsContent";
// import RaidSelectorWithStats from "../preview/table/RaidSelectorWithStats";
// import { useDialog } from "@/app/_hooks/useDialog/useDialog";
// import Button from "../common/Button";

// const InfusionsDialog = ({
//   selectedValue,
//   items,
//   infusionList,
//   label,
//   selectedHandler,
// }: InfusionsDialogProps) => {
//   const { isOpen, onClose, onOpen } = useDialog();
//   const { level, name } = items;
//   return (
//     <>
//       <Button className="text-white" onClick={onOpen}>
//         {label}
//         <BottomArrow />
//       </Button>
//       <BasicDialog
//         className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[450px] md:h-full md:p-6 md:pb-4"
//         isOpen={isOpen}
//         onClose={onClose}
//         size="750px"
//       >
//         <ItemTitle
//           className="text-sm font-medium text-white"
//           level={level}
//           name={name}
//         />
//         <InfusionsContent
//           infusionList={infusionList}
//           selectedHandler={selectedHandler}
//           selectedValue={selectedValue}
//         />
//         <RaidSelectorWithStats />
//       </BasicDialog>
//     </>
//   );
// };

// export default InfusionsDialog;
