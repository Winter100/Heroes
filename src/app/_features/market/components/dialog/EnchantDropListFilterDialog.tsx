import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import EnchantDialogTriggerBtn from './EnchantDialogTriggerBtn';
import EnchantDropListContent from './EnchantDropListContent';

const EnchantDropListFilterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <EnchantDialogTriggerBtn />
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-5xl overflow-y-auto border-none text-white sm:max-h-[650px]">
        <DialogHeader>
          <DialogTitle className="text-center">인챈트 드롭 필터</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <EnchantDropListContent />
      </DialogContent>
    </Dialog>
  );
};

export default EnchantDropListFilterDialog;
