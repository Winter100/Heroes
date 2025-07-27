'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import DialogTriggerBtn from './DialogTriggerBtn';
import RaidSelecter from '@/app/_components/selecter/RaidSelecter';
import RaidEntryFilterBtn from '@/app/_components/selecter/RaidEntryFilterBtn';
import { useState } from 'react';

const RaidSelecterDialog = ({ onlyLimit = false }: { onlyLimit?: boolean }) => {
  const [filter, setFilter] = useState<'빠른전투' | '상한'>(
    onlyLimit ? '상한' : '빠른전투'
  );

  const handleLimit = () => {
    setFilter('상한');
  };
  const handleQuick = () => {
    setFilter('빠른전투');
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DialogTriggerBtn />
      </DialogTrigger>
      <DialogContent className="max-h-96 max-w-5xl overflow-y-auto border-none text-white sm:max-h-[600px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <RaidEntryFilterBtn
          filter={filter}
          onlyLimit={onlyLimit}
          handleLimit={handleLimit}
          handleQuick={handleQuick}
        />
        <RaidSelecter filter={filter} />
      </DialogContent>
    </Dialog>
  );
};

export default RaidSelecterDialog;
