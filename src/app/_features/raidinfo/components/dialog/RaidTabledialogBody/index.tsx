import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatsTab from './StatsTab';
import ItemsTab from './ItemsTab';
import BonusTab from './BonusTab';
import { fixedLimitStatsName } from '../../../utils/fixedLimitStatsName';
import { filterOutNameAndLevel } from '../../../utils/filterOutNameAndLevel';
import { RaidTableDialogBodyProps } from '../../../types';

const RaidTableDialogBody = ({
  bonus,
  drop_items,
  entry,
  limit,
  name,
}: RaidTableDialogBodyProps) => {
  const fixedLimitStats = fixedLimitStatsName({
    name,
    entry,
    limit,
    drop_items,
    bonus,
  });

  const entryFilteredStats = filterOutNameAndLevel(entry);
  const limitFilteredStats = filterOutNameAndLevel(fixedLimitStats);

  return (
    <Tabs defaultValue="entry" className="dark w-full">
      <TabsList className="grid grid-cols-4">
        {entry.length > 1 && <TabsTrigger value="entry">빠른 전투</TabsTrigger>}
        {limit.length > 1 && <TabsTrigger value="limit">상한</TabsTrigger>}
        {drop_items.length > 1 && <TabsTrigger value="items">보상</TabsTrigger>}
        {bonus.length > 1 && <TabsTrigger value="bonus">보너스</TabsTrigger>}
      </TabsList>
      <TabsContent value="entry">
        <StatsTab stats={entryFilteredStats} title="빠른 전투" />
      </TabsContent>
      <TabsContent value="limit">
        <StatsTab stats={limitFilteredStats} title="상한" />
      </TabsContent>
      <TabsContent value="items">
        <ItemsTab items={drop_items} />
      </TabsContent>
      <TabsContent value="bonus">
        <BonusTab bonus={bonus} />
      </TabsContent>
    </Tabs>
  );
};

export default RaidTableDialogBody;
