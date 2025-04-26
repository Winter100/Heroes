import { useRef } from 'react';

export const useRefFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focus = () => inputRef.current?.focus();

  const resetRef = () => {
    if (inputRef.current) {
      return (inputRef.current.value = '');
    }
  };

  return { inputRef, focus, resetRef };
};
