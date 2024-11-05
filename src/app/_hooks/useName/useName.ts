import { FormEvent, useRef, useState } from "react";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usePreviewStore } from "@/app/_store/previewStore";

export const useName = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const previewReset = usePreviewStore((state) => state.reset);
  const router = useRouter();

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    previewReset();

    if (inputRef?.current) {
      const inputValue = inputRef.current.value;
      const resultArray = inputValue.trim().split(" ")[0];
      if (resultArray.length >= 1) {
        router.push(`/preview?name=${inputRef?.current?.value}`);
      } else {
        inputRef.current.focus();
        toast.error("캐릭터 이름을 입력해주세요.", {
          toastId: "name",
        });
        inputRef.current.focus();
        inputRef.current.value = "";
      }
    }
  };

  return { inputRef, isFocused, setIsFocused, onSubmitHandler };
};
