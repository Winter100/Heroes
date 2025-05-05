'use client';

import { previewInitialTitleList } from '@/app/_constant/rankTitleList';
import { usePreviewStore } from '@/app/_store/previewStore';
import { MonstersType } from '@/app/_constant/raidList';
import { filterRaidList } from '@/app/_utils/filterRaidList';
import { limitCalculator } from '../../raid/utils/limitCalculator';
import { useRaidStore } from '@/app/_store/raidStore';
import RaidSelecterDialog from '@/app/_features/raid/components/limitTableMenuBar/raidSelecter';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import StatDifference from './Statdifference';
import { getImageByName } from '@/app/_utils/getImageByName';
import Image from 'next/image';

const RaidSelectorWithStats = () => {
  const previewAllStats = usePreviewStore((state) => state.previewAllStats);

  const filteredStats = previewAllStats
    .filter((stat) =>
      previewInitialTitleList.some((c) => c.stat_name === stat.stat_name)
    )
    .sort(
      (a, b) =>
        previewInitialTitleList.findIndex((c) => c.stat_name === a.stat_name) -
        previewInitialTitleList.findIndex((c) => c.stat_name === b.stat_name)
    );
  const bossSumUp = useRaidStore((state) => state.selectedSumUp);

  const limitValue = filteredStats.find(
    (i) => i.stat_name === '해제'
  )?.stat_value;

  const boss = filterRaidList(bossSumUp.entry || '빠른전투')
    .find((raid) => {
      return raid?.monsters.some(
        (monster) => monster.name === bossSumUp.monsterName
      );
    })
    ?.monsters.find(
      (monster) => monster.name === bossSumUp.monsterName
    ) as MonstersType;

  return (
    <div className="mt-2 w-full border-t border-borderColor pt-2 text-white">
      <div className="mx-auto w-44">
        <RaidSelecterDialog onlyLimit={false} />
      </div>

      <Table className="table-fixed caption-top">
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow className="text-xs">
            {previewInitialTitleList.map((title) => (
              <TableHead
                className="text-center text-white"
                key={title.stat_name}
              >
                <div className="hidden sm:block">{title.stat_name}</div>
                <div className="flex items-center justify-center sm:hidden">
                  <Image
                    width={15}
                    height={15}
                    src={getImageByName(title.stat_name)}
                    alt="s"
                  />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {filteredStats.map((item) => {
              const stat = limitCalculator(
                boss,
                bossSumUp.entry ?? '빠른전투',
                item?.stat_name,
                item?.stat_value.toString(),
                limitValue?.toString()
              );

              return (
                <TableCell
                  className="text-center text-xs"
                  key={item.stat_name + item.stat_value}
                >
                  {item.stat_value}
                  {boss && <StatDifference stat={stat} />}
                </TableCell>
              );
            })}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default RaidSelectorWithStats;
