import { getImageByName } from '@/app/_utils/getImageByName';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { limitCalculator } from '../raid/utils/limitCalculator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ItemTooltipByType from '../tooltip/ItemTooltipByType';
import { getEnchantImage } from '../enchant/utils/getEnchantImage';
import { insertUpgradeType } from '../enchant/utils/insertUpgradeType';
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from '@/app/_constant/enchant';
import { keyword } from '@/app/_constant/keyword';
import { RaidTableDialogProps } from '@/app/_type/raidType';
import { Clover, DollarSign, Sword } from 'lucide-react';

const fixed_stats = [
  { user_stat_name: '공격력', user_stat_value: '0' },
  { user_stat_name: '크리티컬', user_stat_value: '0' },
  { user_stat_name: '밸런스', user_stat_value: '0' },
  { user_stat_name: '크리티컬 저항', user_stat_value: '0' },
  { user_stat_name: '대항력', user_stat_value: '0' },
];

const getEnchantItemByName = (enchant: string) => {
  const enchantName = enchant.split(' ')[0];
  const allEnchantList = [
    ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
    ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
  ];

  return allEnchantList?.find((enchant) => enchant.name === enchantName);
};

const RaidTableDialog = ({
  boss_level,
  boss_name,
  drop_items,
  entry,
  limit,
  name,
  bonus,
  children,
  basic_reward,
}: RaidTableDialogProps) => {
  const convertLimitValues = fixed_stats.map((d) => {
    return {
      stat_name: d.user_stat_name,
      stat_value: Math.abs(
        Number(
          limitCalculator(
            { name, entry, limit, drop_items, bonus },
            '상한',
            d.user_stat_name,
            d.user_stat_value,
            '0'
          )
        )
      ),
    };
  });

  const addRewardIcon = basic_reward?.map((reward) => {
    const { name } = reward;
    if (name === '경험치') return { ...reward, icon: Sword };
    if (name === '골드') return { ...reward, icon: DollarSign };
    if (name === 'AP') return { ...reward, icon: Clover };
  });

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-h-[550px] max-w-xl overflow-y-auto border-none text-white/70 sm:max-h-full sm:overflow-auto">
        <div className="flex items-center gap-2 pt-14">
          <div>
            <Image
              src={getImageByName(name)}
              width={130}
              height={130}
              alt={boss_name}
            />
          </div>
          <div>
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              <DialogDescription>
                {boss_name} Lv. {boss_level}
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center text-xs text-gray-400/70">
              {addRewardIcon?.map((reward) => (
                <div className="mt-1 flex items-center pr-2" key={reward?.name}>
                  {reward?.icon && <reward.icon size={15} color="gray" />}
                  {Number(reward?.value).toLocaleString()}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dark">
          <Tabs defaultValue="entry" className="w-full">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="entry">빠른 전투</TabsTrigger>
              <TabsTrigger value="limit">상한</TabsTrigger>
              <TabsTrigger value="items">보상</TabsTrigger>
              {bonus.length > 1 && (
                <TabsTrigger value="bonus">보너스</TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="entry">
              {entry.length >= 1 ? (
                <Table className="caption-top">
                  <TableCaption></TableCaption>
                  <TableHeader>
                    <TableRow className="text-xs sm:text-sm">
                      {entry
                        .filter(
                          (f) =>
                            f.stat_name !== '이름' && f.stat_name !== '레벨'
                        )
                        .map((e) => (
                          <TableHead className="text-center" key={e.stat_name}>
                            {e.stat_name}
                          </TableHead>
                        ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="text-xs hover:text-white sm:text-sm">
                      {entry
                        .filter(
                          (f) =>
                            f.stat_name !== '이름' && f.stat_name !== '레벨'
                        )
                        .map((e) => (
                          <TableCell className="text-center" key={e.stat_name}>
                            {Number(e.stat_value).toLocaleString()}
                          </TableCell>
                        ))}
                    </TableRow>
                  </TableBody>
                </Table>
              ) : (
                <div className="pt-6 text-center text-sm">
                  <p>빠른 전투 능력치 제한이 없는 전투입니다.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="limit">
              <Table className="caption-top">
                <TableCaption></TableCaption>
                <TableHeader>
                  <TableRow className="w-full text-xs sm:text-sm">
                    {convertLimitValues
                      .filter(
                        (f) => f.stat_name !== '이름' && f.stat_name !== '레벨'
                      )
                      .map((l) => (
                        <TableHead className="text-center" key={l.stat_name}>
                          {l.stat_name}
                        </TableHead>
                      ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="w-full text-xs hover:text-white sm:text-sm">
                    {convertLimitValues
                      .filter(
                        (f) => f.stat_name !== '이름' && f.stat_name !== '레벨'
                      )
                      .map((l) => (
                        <TableCell className="text-center" key={l.stat_name}>
                          {Number(l.stat_value).toLocaleString()}
                        </TableCell>
                      ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="items">
              <Table className="caption-top">
                <TableCaption></TableCaption>
                <TableHeader>
                  <TableRow className="text-xs sm:text-sm">
                    <TableHead className="text-center">아이템명</TableHead>
                    <TableHead className="text-center">부스트 적용</TableHead>
                    <TableHead className="text-center">부스트 한정</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {drop_items.map((drop) => (
                    <TableRow
                      className="text-xs hover:text-white sm:text-sm"
                      key={drop.item_name}
                    >
                      <TableCell>
                        <Popover>
                          <PopoverTrigger className="flex w-full items-center gap-2">
                            <Image
                              title={drop.item_name}
                              alt="item"
                              src={
                                drop.item_filter !== '인챈트'
                                  ? getImageByName(drop.item_name)
                                  : getEnchantImage(
                                      getEnchantItemByName(drop.item_name)
                                        ?.rank || '',
                                      getEnchantItemByName(drop.item_name)
                                        ?.upgreadeType || ''
                                    )
                              }
                              width={20}
                              height={20}
                            />

                            <div className="flex flex-col">
                              <div className="text-start">{drop.item_name}</div>
                              {drop.item_description && (
                                <div className="flex flex-col items-center text-[11px]">
                                  {drop.item_description?.map((item) => (
                                    <div
                                      className="w-full text-start"
                                      key={item}
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="dark w-[370px] p-1">
                            <ItemTooltipByType
                              itemName={drop.item_name}
                              category={drop.item_filter}
                            />
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                      <TableCell className="text-center">
                        {drop.core_boost_apply && `O`}
                      </TableCell>
                      <TableCell className="text-center">
                        {drop.core_boost_drop && `O`}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="bonus">
              <Table className="caption-top">
                <TableCaption></TableCaption>
                <TableHeader>
                  <TableRow className="text-xs sm:text-sm">
                    <TableHead className="text-center">목표</TableHead>
                    <TableHead className="text-center">보상</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bonus.map((b) => (
                    <TableRow
                      className="text-xs hover:text-white sm:text-sm"
                      key={b.bonus_description}
                    >
                      <TableCell className="">{b.bonus_description}</TableCell>
                      <TableCell className="text-center">
                        {b.bonus_value} Gold
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RaidTableDialog;
