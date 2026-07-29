'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { RaidType, useRaidStore } from '@/app/_store/useRaidStore';
import RaidList from './raid-list';
import RaidFilterBtnContainer from './raid-filter-btn-container';
import RaidDialogTrigger from './raid-dialog-trigger';
import { RaidListType } from '@/app/_type/raidType';
import { filterRaidList } from '@/app/_utils/convert';

const RaidSelector = ({
  raid,
  initType = '상한',
}: {
  raid: RaidListType[];
  initType: RaidType;
}) => {
  const [type, setType] = useState<RaidType>(initType);
  const setRaid = useRaidStore((state) => state.setRaid);
  const selectRaid = useRaidStore((state) => state.raid);
  const raidList = filterRaidList(raid ?? [], type);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* 레이드 선택창 트리거 */}
        <RaidDialogTrigger raid={selectRaid} />
      </DialogTrigger>
      <DialogContent className="dark max-h-96 max-w-5xl overflow-y-auto border-none bg-zinc-900 text-white sm:max-h-[600px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        {/* 빠른전투 및 상한 선택 버튼 */}
        <RaidFilterBtnContainer type={type} onClick={setType} />

        {/* 타입에 따른 선택 가능한 레이드 리스트 */}
        <RaidList
          raid={raidList || []}
          raidType={type}
          selectRaid={selectRaid}
          onClick={setRaid}
        />
      </DialogContent>
    </Dialog>
  );
};

export default RaidSelector;
