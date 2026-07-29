'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatsTab from './StatsTab';
import ItemsTab from './ItemsTab';
import BonusTab from './BonusTab';
import { MonstersType } from '@/app/_type/raidType';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { Clover, DollarSign, Sword } from 'lucide-react';

const RaidInformationDialogContainer = ({
  children,
  monster,
}: {
  children: React.ReactNode;
  monster: MonstersType;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-h-[600px] max-w-2xl overflow-y-auto border-none bg-zinc-900 text-sm sm:max-h-full sm:overflow-auto">
        {/* 몬스터 간략 정보 */}
        <div className="flex items-center gap-2 pt-2">
          <ImageIcon className="h-20 w-32" src={monster?.image ?? ''} alt="B" />
          <div>
            <div>
              <div>{monster?.boss}</div>
              <div>
                {monster?.boss} Lv. {monster?.level}
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-400/70">
              {monster.clear?.map((reward) => (
                <div className="mt-1 flex items-center pr-2" key={reward?.name}>
                  {reward?.name === '골드' && (
                    <DollarSign size={15} color="gray" />
                  )}
                  {reward?.name === '경험치' && (
                    <Sword size={15} color="gray" />
                  )}
                  {reward?.name === 'AP' && <Clover size={15} color="gray" />}
                  {Number(reward?.value).toLocaleString()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 몬스터 상세 정보 */}
        <Tabs defaultValue="entry" className="dark w-full">
          <TabsList className="grid grid-cols-4">
            {monster?.entry?.length > 1 && (
              <TabsTrigger value="entry">빠른 전투</TabsTrigger>
            )}
            {monster?.limit?.length > 1 && (
              <TabsTrigger value="limit">상한</TabsTrigger>
            )}
            {monster?.items?.length > 1 && (
              <TabsTrigger value="items">보상</TabsTrigger>
            )}
            {monster?.bonus?.length > 1 && (
              <TabsTrigger value="bonus">보너스</TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="entry">
            <StatsTab stats={monster?.entry} title="빠른 전투" />
          </TabsContent>
          <TabsContent value="limit">
            <StatsTab stats={monster?.limit} title="상한" />
          </TabsContent>
          <TabsContent value="items">
            <ItemsTab items={monster?.items} />
          </TabsContent>
          <TabsContent value="bonus">
            <BonusTab bonus={monster?.bonus} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default RaidInformationDialogContainer;
