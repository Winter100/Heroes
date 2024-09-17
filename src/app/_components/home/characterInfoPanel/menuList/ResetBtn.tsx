"use client";
import { CiTrash } from "react-icons/ci";

import Button from "@/app/_components/common/Button";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useCheckStore } from "@/app/_store/checkStore";

const ResetBtn = () => {
  const reset = useCharacterStore((state) => state.reset);
  const checkedList = useCheckStore((state) => state.checkedList);
  const clearCheckList = useCheckStore((state) => state.clearCheckList);

  const onReset = () => {
    reset(checkedList, clearCheckList);
  };

  const disabled = checkedList.length < 1;

  return (
    <Button
      disabled={disabled}
      className={`${disabled ? "border-none bg-gray-200 transition-none" : "text-red-600"} flex h-full w-10 items-center justify-center`}
      onClick={onReset}
    >
      <CiTrash className="text-xl" />
    </Button>
  );
};

export default ResetBtn;
