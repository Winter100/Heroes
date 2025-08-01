import { InfusionsDialogProps } from '@/app/_type/infusionType';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ChevronDown } from 'lucide-react';
import RaidSelectorWithStats from '@/app/_components/selecter/RaidSelectorWithStats';
import { Button } from '@/components/ui/button';
import InfusionTabsItem from './InfusionTabsItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { groupInfuison } from '../../../utils/groupInfusion';
import SearchInput from '@/app/_components/common/SearchInput';
import { getSerachInfusion } from '../../../utils/getSerachInfusion';

const InfusionsDialog = ({
  selectedValue,
  items,
  infusionList,
  label,
  selectedHandler,
}: InfusionsDialogProps) => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { level, name } = items;
  const groupInfusionData = groupInfuison(infusionList);
  const searchedInfusion = getSerachInfusion(groupInfusionData, searchQuery);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="h-6 w-full border p-0 text-[10px] sm:text-xs"
          variant="ghost"
        >
          {label}
          {!label && <ChevronDown className="text-fontColor" size={15} />}
        </Button>
      </DialogTrigger>
      <DialogContent
        autoFocus={false}
        className="max-h-96 max-w-2xl overflow-y-auto border-none bg-background px-1 text-white sm:max-h-[700px] sm:px-6"
      >
        <DialogHeader>
          <DialogTitle>
            <div className="text-sm font-medium text-white">
              <p>{`${level} ${name}`}</p>
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <SearchInput
          autoFocus={false}
          className="dark pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="정령석 효과로 검색..."
          maxLength={10}
        />

        <Tabs
          defaultValue="all"
          className="dark w-full"
          onValueChange={setFilter}
          value={filter}
        >
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="all">
              전체
            </TabsTrigger>
            {groupInfusionData.map((infusion) => (
              <TabsTrigger
                key={infusion.name}
                className="w-full"
                value={infusion.name}
              >
                {infusion.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="h-48 overflow-y-auto pr-2 sm:h-72">
            <TabsContent value="all">
              {searchedInfusion.map((infusion, i) => (
                <InfusionTabsItem
                  key={infusion.name + i}
                  data={infusion.items}
                  onClick={selectedHandler}
                  selectedValue={selectedValue}
                />
              ))}
            </TabsContent>
            {searchedInfusion.map((infusion) => (
              <TabsContent key={infusion.name} value={infusion.name}>
                {searchedInfusion
                  .filter((infusion) => infusion.name === filter)
                  .map((infusion, i) => (
                    <InfusionTabsItem
                      key={infusion.name + i}
                      data={infusion.items}
                      onClick={selectedHandler}
                      selectedValue={selectedValue}
                    />
                  ))}
              </TabsContent>
            ))}
          </div>
        </Tabs>
        <RaidSelectorWithStats />
      </DialogContent>
    </Dialog>
  );
};

export default InfusionsDialog;
