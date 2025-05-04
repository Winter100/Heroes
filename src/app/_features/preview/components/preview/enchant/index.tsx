import { memo } from 'react';
import { EnchantChangeDialogProps } from '../../../types';
import { useFilteredEnchantPriceList } from '../../../hooks/useFilteredEnchantPriceList';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ItemTitle from '@/app/_components/common/ItemTitle';
import EnchantContent from './EnchantContent';
import RaidSelectorWithStats from '@/app/_components/preview/table/RaidSelectorWithStats';

const EnchantChangeDialog = memo(
  ({
    label,
    enchantList,
    selectedHandler,
    upgreadeType,
    slot,
    items,
    selectedValue,
  }: EnchantChangeDialogProps) => {
    const { enchantPriceList, enchantPriceLoading } =
      useFilteredEnchantPriceList(upgreadeType);

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-6 w-full border text-xs" variant="ghost">
            {label}
            {!label && <ChevronDown size={15} />}
          </Button>
        </DialogTrigger>
        <DialogContent className="dark max-w-2xl bg-backgroundOne text-white">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ItemTitle
            className="text-sm font-medium text-white"
            level={''}
            name={items.name}
          />
          <EnchantContent
            enchantList={enchantList}
            selectedHandler={selectedHandler}
            upgreadeType={upgreadeType}
            slot={slot}
            enchantPriceList={enchantPriceList || []}
            enchantPriceLoading={enchantPriceLoading || false}
            selectedValue={selectedValue || ''}
          />
          <RaidSelectorWithStats />
        </DialogContent>
      </Dialog>
    );
  }
);

export default EnchantChangeDialog;

EnchantChangeDialog.displayName = 'EnchantChangeDialog';
