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

const PartholnSummaryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          파르홀른
        </Button>
      </DialogTrigger>
      <DialogContent className="dark text-white">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <PartholnContent />
        {/* <RaidSelectorWithStats /> */}
      </DialogContent>
    </Dialog>
  );
};

export default PartholnSummaryDialog;
