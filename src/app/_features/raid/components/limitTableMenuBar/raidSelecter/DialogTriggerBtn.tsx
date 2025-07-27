import { forwardRef } from 'react';
import Image from 'next/image';
import BottomArrow from '@/app/_components/common/BottomArrow';
import { useRaidStore } from '@/app/_store/raidStore';
import { Button } from '@/components/ui/button';
import { getImageByName } from '@/app/_utils/get/getImageByName';

const DialogTriggerBtn = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>((props, ref) => {
  const selectedSumUp = useRaidStore((state) => state.selectedSumUp);
  const { monsterName, entry } = selectedSumUp;
  const entryText = entry !== null ? entry : null;
  return (
    <Button
      ref={ref}
      variant="ghost"
      className="flex h-8 w-full items-center justify-center rounded-md text-xs"
      {...props}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-[10px] text-gray-300">{entryText}</div>
        <div className="flex flex-row items-center justify-center gap-1">
          <Image
            src={getImageByName(monsterName)}
            width={16}
            height={13}
            alt={monsterName}
            style={{ width: '16px', height: '13px' }}
          />
          <div className="flex w-full items-center justify-center">
            {monsterName ? monsterName : '레이드를 선택해주세요'}
            <BottomArrow />
          </div>
        </div>
      </div>
    </Button>
  );
});

DialogTriggerBtn.displayName = 'DialogTriggerBtn';

export default DialogTriggerBtn;
