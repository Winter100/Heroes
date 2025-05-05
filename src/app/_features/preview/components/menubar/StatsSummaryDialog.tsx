import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import StatsContent from './stats';
import { Button } from '@/components/ui/button';

const StatsSummaryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          스탯
        </Button>
      </DialogTrigger>
      <DialogContent className="dark max-h-96 overflow-y-auto bg-backgroundOne text-white sm:max-h-[950px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <StatsContent />
      </DialogContent>
    </Dialog>
  );
};
export default StatsSummaryDialog;
