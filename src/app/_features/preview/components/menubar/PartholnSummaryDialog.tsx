import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PartholnContent from './partholn';
import RaidSelectorWithStats from '@/app/_components/preview/table/RaidSelectorWithStats';

const PartholnSummaryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          파르홀른
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-2xl overflow-y-auto border-none bg-background px-1 text-white sm:max-h-[950px] sm:px-6">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <PartholnContent />
        <RaidSelectorWithStats />
      </DialogContent>
    </Dialog>
  );
};

export default PartholnSummaryDialog;
