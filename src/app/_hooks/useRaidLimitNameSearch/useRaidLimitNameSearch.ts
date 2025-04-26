import { FormEvent, useRef } from 'react';
import { useCharacter } from '../useCharacter/useCharacter';
import { useCharacterStore } from '@/app/_store/characterStore';
import { toast } from 'react-toastify';

export const useRaidLimitNameSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleCharacterInfo, loading } = useCharacter();
  const characters = useCharacterStore((state) => state.characters);

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const characterLength = characters.length;
    if (!characters || characterLength >= 8) {
      toast.error('캐릭터는 최대 8명까지 등록 가능합니다.');
      return;
    }
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      const resultArray = inputValue
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .slice(0, 8 - characterLength);
      if (resultArray.length >= 1) {
        for (const item of resultArray) {
          await handleCharacterInfo(item);
        }
      } else {
        inputRef.current.focus();
        toast.error('캐릭터 이름을 입력해주세요.', {
          toastId: 'characterName',
        });
      }
      inputRef.current.focus();
      inputRef.current.value = '';
    }
  };

  return { inputRef, loading, onSubmitHandler };
};
