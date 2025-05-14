'use client';

import { useCheckStore } from '@/app/_store/checkStore';
import { useDetailStore } from '@/app/_store/DetailStore';
import { useCharacterStore } from '../../store/characterStore';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResetBtn = () => {
  const reset = useCharacterStore((state) => state.reset);
  const checkedList = useCheckStore((state) => state.checkedList);
  const clearCheckList = useCheckStore((state) => state.clearCheckList);

  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);
  const detailReset = useDetailStore((state) => state.reset);

  const onReset = () => {
    const isCheckedListInSelectedCharacter = checkedList.some(
      (c) => c === selectedCharacter?.name
    );

    if (isCheckedListInSelectedCharacter) {
      selectedHandler(null);
      detailReset();
    }
    reset(checkedList, clearCheckList);
  };

  const disabled = checkedList.length < 1;

  return (
    <Button
      variant="outline"
      disabled={disabled}
      className={`${disabled ? 'transition-non border-none !text-inherit hover:bg-none hover:text-fontColor' : '!border text-red-600 hover:border-red-600 hover:text-red-600'} flex h-full !w-12 items-center justify-center !rounded-md`}
      onClick={onReset}
    >
      <Trash size={17} />
    </Button>
  );
};

export default ResetBtn;
