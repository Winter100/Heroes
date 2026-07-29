import { RaidType } from '@/app/_store/useRaidStore';
import { Button } from '@/components/ui/button';
import { forwardRef } from 'react';
import BottomArrow from '../common/BottomArrow';
import Image from 'next/image';
import { MonstersType } from '@/app/_type/raidType';

const RaidDialogTrigger = forwardRef<
  HTMLButtonElement,
  { raid: (MonstersType & { type: RaidType }) | null }
>((props, ref) => {
  const isImageView = !!props.raid?.image;
  return (
    <Button
      ref={ref}
      variant="ghost"
      className="flex h-full w-full items-center justify-center rounded-md text-xs"
      {...props}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-[10px] text-gray-300">
          {props.raid?.type ?? ''}
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          {isImageView && (
            <Image
              unoptimized={true}
              src={props.raid?.image ?? ''}
              width={15}
              height={15}
              alt={props.raid?.battle ?? 'R'}
            />
          )}
          <div className="flex w-full items-center justify-center">
            {props.raid?.battle ? props.raid?.battle : '레이드를 선택해주세요'}
            <BottomArrow />
          </div>
        </div>
      </div>
    </Button>
  );
});

export default RaidDialogTrigger;

RaidDialogTrigger.displayName = 'RaidDialogTrigger';
//
