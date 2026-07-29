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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchInput from '@/app/_components/common/SearchInput';
import EnchantItem from './enchant-item';
import { useState } from 'react';
import { useEnchantStore } from '@/app/_store/useEnchantStore';
import { EnchantOptionType } from '@/app/_type/enchantType';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import PreviewStatsContainer from '@/app/_components/stats/preview-stats-container';
import { getSerachEnchant } from '@/app/_utils/get';
import { groupByRank } from '@/app/_utils/convert';

const ITEM_ANIMATION = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const PreviewEnchantModal = ({
  itemName,
  enchants,
  affix,
  existing,
  existingName,
  ocid,
}: {
  itemName: string;
  enchants: EnchantOptionType[];
  affix: 'prefix' | 'suffix' | 'infusion';
  existing: EnchantOptionType | null;
  existingName: string;
  ocid: string;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const enchantRankGroup = groupByRank(enchants, affix);
  const enchantList = getSerachEnchant(enchantRankGroup, searchQuery);

  const simulations = useEnchantStore((state) => state.simulations);
  const setSimulations = useEnchantStore((state) => state.setSimulations);

  const selectedData = simulations[itemName]?.[affix]?.['after'] || null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="h-6 w-full border p-0 text-[10px] sm:text-xs"
          variant="ghost"
        >
          {selectedData?.name || ''}
          <ChevronDown className="text-fontColor" size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent
        autoFocus={false}
        className="max-h-full max-w-3xl border-none bg-neutral-900 text-white sm:max-h-[840px]"
      >
        <DialogHeader>
          <DialogTitle>
            <div className="text-center text-sm font-medium text-white">
              {itemName}
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <SearchInput
          autoFocus={false}
          className="dark pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="인챈트 이름 또는 효과로 검색..."
          maxLength={10}
        />

        <Tabs defaultValue="all" className="dark w-full">
          <TabsList className="w-full">
            {enchantRankGroup?.map((enchant) => (
              <TabsTrigger
                className="w-full"
                key={enchant.rank}
                value={enchant.rank}
              >
                {enchant.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="h-96 overflow-y-auto pr-2 sm:h-[480px]">
            {enchantList?.map((enchant) => (
              <TabsContent key={enchant?.rank} value={enchant?.rank || 'all'}>
                <div className="grid grid-cols-3 gap-2">
                  {enchant?.enchants.map((enchantItem, i) => (
                    <button
                      key={enchantItem.name + itemName + i}
                      onClick={() =>
                        setSimulations(
                          itemName,
                          affix,
                          existing,
                          enchantItem,
                          existingName === enchantItem.name
                        )
                      }
                    >
                      <div className="h-full">
                        <AnimatePresence>
                          <motion.div
                            className={cn(
                              'h-full rounded-md border border-muted/10 bg-background p-2 hover:animate-boundUpDown hover:cursor-pointer',
                              selectedData?.name.toString() === enchantItem.name
                                ? 'border-blue-300'
                                : existing?.name && !selectedData?.name
                                  ? existing.name === enchantItem.name
                                    ? 'border-blue-300'
                                    : ''
                                  : ''
                            )}
                            key={enchantItem.name}
                            variants={ITEM_ANIMATION}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                          >
                            <EnchantItem enchant={enchantItem} />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </button>
                  ))}
                  {enchant?.enchants.length === 0 && (
                    <div className="col-span-3 py-10 text-center text-xs text-white">
                      검색 결과가 없습니다.
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {ocid && <PreviewStatsContainer ocid={ocid ?? ''} />}
      </DialogContent>
    </Dialog>
  );
};

export default PreviewEnchantModal;
