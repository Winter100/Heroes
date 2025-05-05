import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import RaidTourTable from './tour';

const TourSummaryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          순회
        </Button>
      </DialogTrigger>
      <DialogContent className="dark max-h-96 max-w-3xl overflow-y-auto bg-backgroundOne px-1 text-white sm:max-h-[950px] sm:px-6">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <RaidTourTable />
      </DialogContent>
    </Dialog>
  );
};

export default TourSummaryDialog;
