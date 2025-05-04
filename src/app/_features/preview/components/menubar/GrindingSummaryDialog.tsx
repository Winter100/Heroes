import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import GrindingContent from './grinding';

const GrindingSummaryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          연마
        </Button>
      </DialogTrigger>
      <DialogContent className="dark max-h-96 max-w-3xl overflow-y-auto text-white sm:max-h-[750px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <GrindingContent />
        {/* <RaidSelectorWithStats /> */}
      </DialogContent>
    </Dialog>
  );
};

export default GrindingSummaryDialog;
// import BasicDialog from '@/app/_components/common/BasicDialog';
// import { useDialog } from '@/app/_hooks/useDialog/useDialog';
// import { Button } from '@headlessui/react';

// const GrindingSummaryDialog = () => {
//   const { isOpen, onClose, onOpen } = useDialog();
//   return (
//     <>
//       <Button className="rounded-lg p-1" onClick={onOpen}>
//         연마
//       </Button>
//       <BasicDialog
//         className="max-h-[500px] overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 text-white md:max-h-[1000px] md:p-6 md:pb-4"
//         isOpen={isOpen}
//         onClose={onClose}
//         size="1000px"
//       >
//         <GrindingContent />
//         <RaidSelectorWithStats />
//       </BasicDialog>
//     </>
//   );
// };

// export default GrindingSummaryDialog;
