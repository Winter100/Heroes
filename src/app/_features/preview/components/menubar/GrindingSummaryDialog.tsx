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
import RaidSelectorWithStats from '@/app/_components/preview/table/RaidSelectorWithStats';

const GrindingSummaryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          연마
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-3xl overflow-y-auto border-none bg-background px-1 text-white sm:max-h-[650px] sm:px-6 md:max-h-[950px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <GrindingContent />
        <RaidSelectorWithStats />
      </DialogContent>
    </Dialog>
  );
};

export default GrindingSummaryDialog;
