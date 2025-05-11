import { memo, useState } from 'react';
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
import RaidSelectorWithStats from '@/app/_components/preview/table/RaidSelectorWithStats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { groupByRank } from '../../../utils/groupByRank';
import TabItems from './TabItems';
import SearchInput from '@/app/_components/common/SearchInput';
import { getSerachEnchant } from '../../../utils/getSerachEnchant';

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
    const [selectRank, setSelectRank] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const enchantGroup = groupByRank(enchantList);

    const enchants = getSerachEnchant(enchantGroup, searchQuery);

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="h-6 w-full border p-0 text-[10px] sm:text-xs"
            // className="h-6 w-full border p-0 text-[10px] sm:text-xs"
            variant="ghost"
          >
            {label}
            {!label && <ChevronDown className="text-fontColor" size={15} />}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-full max-w-2xl border-none text-white sm:max-h-[840px]">
          <DialogHeader>
            <DialogTitle>
              <ItemTitle
                className="text-sm font-medium text-white"
                level={''}
                name={items.name}
              />
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <SearchInput
            className="dark pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="인챈트 이름 또는 효과로 검색..."
            maxLength={10}
          />
          <Tabs
            defaultValue="all"
            className="dark w-full"
            onValueChange={setSelectRank}
            value={selectRank}
          >
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="all">
                전체
              </TabsTrigger>
              {enchantGroup?.map((enchant) => (
                <TabsTrigger
                  className="w-full"
                  key={enchant.rank}
                  value={enchant.rank}
                >
                  {enchant.rank}
                  <div className="hidden sm:block">랭크</div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="h-96 overflow-y-auto pr-2 sm:h-[480px]">
              <TabsContent value="all">
                <TabItems
                  selectedHandler={selectedHandler}
                  slot={slot}
                  rank="all"
                  data={enchants}
                  upgreadeType={upgreadeType}
                  enchantPriceList={enchantPriceList || []}
                  enchantPriceLoading={enchantPriceLoading || false}
                  selectedValue={selectedValue}
                />
              </TabsContent>
              {enchantGroup?.map((item) => (
                <TabsContent value={item.rank} key={item.rank}>
                  <TabItems
                    selectedHandler={selectedHandler}
                    slot={slot}
                    rank={item.rank}
                    data={enchants?.filter(
                      (enchant) => enchant?.rank === selectRank
                    )}
                    upgreadeType={upgreadeType}
                    enchantPriceList={enchantPriceList || []}
                    enchantPriceLoading={enchantPriceLoading || false}
                    selectedValue={selectedValue}
                  />
                </TabsContent>
              ))}
            </div>
            <RaidSelectorWithStats />
          </Tabs>
        </DialogContent>
      </Dialog>
    );
  }
);

export default EnchantChangeDialog;

EnchantChangeDialog.displayName = 'EnchantChangeDialog';
