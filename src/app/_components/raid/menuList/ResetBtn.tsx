"use client";
import { CiTrash } from "react-icons/ci";

import Button from "@/app/_components/common/Button";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useCheckStore } from "@/app/_store/checkStore";
import { useDetailStore } from "@/app/_store/DetailStore";

const ResetBtn = () => {
  const reset = useCharacterStore((state) => state.reset);
  const checkedList = useCheckStore((state) => state.checkedList);
  const clearCheckList = useCheckStore((state) => state.clearCheckList);

  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter,
  );
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);
  const detailReset = useDetailStore((state) => state.reset);

  const onReset = () => {
    const isCheckedListInSelectedCharacter = checkedList.some(
      (c) => c === selectedCharacter?.name,
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
      disabled={disabled}
      className={`${disabled ? "hover:text-fontColor border-none transition-none hover:border-none hover:bg-none" : "text-red-600 hover:border-red-600 hover:text-red-600"} flex h-full w-10 items-center justify-center`}
      onClick={onReset}
    >
      <CiTrash className="text-xl" />
    </Button>
  );
};

export default ResetBtn;
