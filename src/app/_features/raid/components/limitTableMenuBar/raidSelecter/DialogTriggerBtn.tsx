import { forwardRef } from 'react';
import Image from 'next/image';
import BottomArrow from '@/app/_components/common/BottomArrow';
import { useRaidStore } from '@/app/_store/raidStore';
import { getImageByName } from '@/app/_utils/getImageByName';
import { Button } from '@/components/ui/button';

const DialogTriggerBtn = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>((props, ref) => {
  const selectedSumUp = useRaidStore((state) => state.selectedSumUp);
  const { monsterName } = selectedSumUp;

  return (
    <Button
      ref={ref}
      variant="outline"
      className="flex h-8 w-full items-center justify-center text-xs hover:text-white"
      {...props}
    >
      <div className="flex w-full flex-col items-center justify-center">
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
