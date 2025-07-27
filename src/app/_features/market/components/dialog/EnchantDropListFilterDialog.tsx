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
import { useEnchantFilterStore } from '../../store/enchantFilterStore';
import { getDropList } from '../../utils/getDropList';
import { useSelectEnchantStore } from '@/app/_store/selectEnchantStore';

const EnchantDropListFilterDialog = () => {
  const { dropRaidOrItemName, setDropRaidOrItemName } = useEnchantFilterStore();
  const { resetSelectEnchant } = useSelectEnchantStore((state) => ({
    resetSelectEnchant: state.resetSelectEnchant,
  }));

  const handleSearchParams = (name: string) => {
    setDropRaidOrItemName(name);
    resetSelectEnchant();
  };

  const dropList = getDropList();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <EnchantDialogTriggerBtn raidName={dropRaidOrItemName} />
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-5xl overflow-y-auto border-none text-white sm:max-h-[650px]">
        <DialogHeader>
          <DialogTitle className="text-center">인챈트 드롭 필터</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <EnchantDropListContent
          dropList={dropList}
          dropRaidOrItemName={dropRaidOrItemName}
          handleSearchParams={handleSearchParams}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EnchantDropListFilterDialog;
