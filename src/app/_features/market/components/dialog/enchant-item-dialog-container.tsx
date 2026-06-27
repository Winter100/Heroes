import Enchant from '@/app/_components/common/enchant/Enchant';
import { EnchantMergePriceType } from '@/app/_type/enchantType';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const EnchantItemDialogContainer = ({
  children,
  enchant,
}: {
  children: React.ReactNode;
  enchant: EnchantMergePriceType;
}) => {
  // Todo 아이템 드랍 추가하기
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="dark max-h-96 max-w-md overflow-y-auto border-none bg-muted bg-zinc-900 text-white sm:max-h-[950px]">
        <DialogHeader>
          <DialogTitle className="text-center"></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="rounded-md border border-muted bg-background p-2">
          <Enchant enchant={enchant} />
        </div>

        <div>{enchant.drop_item_list?.length}</div>
      </DialogContent>
    </Dialog>
  );
};

export default EnchantItemDialogContainer;
