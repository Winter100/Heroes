'use client';

import { previewInitialTitleList } from '@/app/_constant/rankTitleList';
import { usePreviewStore } from '@/app/_store/previewStore';
import { MonstersType } from '@/app/_constant/raidList';
import { filterRaidList } from '@/app/_utils/filterRaidList';
import { limitCalculator } from '../../raid/utils/limitCalculator';
import { useRaidStore } from '@/app/_store/raidStore';
import RaidSelecterDialog from '@/app/_features/raid/components/limitTableMenuBar/raidSelecter';

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

      <table className="flex h-full w-full table-fixed flex-col gap-1 text-[9px] md:text-xs">
        <caption className="hidden">미리보기</caption>
        <thead>
          <tr className="flex w-full items-center justify-center">
            {previewInitialTitleList.map((item) => (
              <th
                className="flex flex-1 items-center justify-center text-[10px] md:text-xs"
                key={item.stat_name}
              >
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-light">
                  {item.stat_name}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="flex items-center justify-center pt-1 text-xs font-normal">
          <tr className="flex h-full w-full items-center justify-center">
            {filteredStats.map((item) => {
              const stat = limitCalculator(
                boss,
                bossSumUp.entry ?? '빠른전투',
                item?.stat_name,
                item?.stat_value.toString(),
                limitValue?.toString()
              );
              return (
                <td
                  className="flex w-full flex-1 flex-col items-center justify-center text-[9px] md:text-xs"
                  key={item.stat_name + item.stat_value}
                >
                  <p className="flex items-center justify-center">
                    {item.stat_value}
                  </p>
                  {boss && (
                    <p
                      className={`flex items-center justify-center text-[8px] md:text-xs ${
                        stat !== null
                          ? stat! > 0
                            ? 'text-green-300'
                            : stat! < 0
                              ? 'text-red-300'
                              : ''
                          : ''
                      }`}
                    >
                      {stat ? stat : ''}
                    </p>
                  )}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RaidSelectorWithStats;
