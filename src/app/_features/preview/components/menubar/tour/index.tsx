'use client';
import { useState } from 'react';
import { filterRaidList } from '@/app/_utils/filterRaidList';
import Column from '@/app/_components/layout/Column';
import RaidEntryFilterBtn from '@/app/_components/raid/selecter/RaidEntryFilterBtn';
import BossList from './BossList';

const RaidTourTable = () => {
  const [filter, setFilter] = useState<'빠른전투' | '상한'>('빠른전투');
  const raidList = filterRaidList(filter);

  const handleLimit = () => {
    setFilter('상한');
  };
  const handleQuick = () => {
    setFilter('빠른전투');
  };

  return (
    <Column className="dark h-full w-full gap-4">
      <RaidEntryFilterBtn
        onlyLimit={false}
        handleLimit={handleLimit}
        handleQuick={handleQuick}
        filter={filter}
      />
      <div className="flex flex-col gap-2">
        <BossList raidList={raidList} filter={filter} />
      </div>
    </Column>
  );
};

export default RaidTourTable;
