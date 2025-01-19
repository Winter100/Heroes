import { useRef } from "react";

export const useRefFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focus = () => inputRef.current?.focus();

  return { inputRef, focus };
};
