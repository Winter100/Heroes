import { FormEvent, useEffect, useState } from 'react';
import { useCharacterStore } from '../store/characterStore';
import { useCharacter } from './useCharacter';
import { imageToName } from '@/app/_utils/imageToName';
import { toast } from 'react-toastify';

export const useImageSearch = () => {
  const characters = useCharacterStore((state) => state.characters);
  const clear = useCharacterStore((state) => state.clear);
  const [pastedImage, setPastedImage] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const { handleCharacterInfo, loading } = useCharacter();
  const characterLength = characters.length;

  const handlePasteImage = async () => {
    if (pastedImage) {
      URL.revokeObjectURL(pastedImage);
    }
    setPastedImage('');
    try {
      const clipboardItems = await navigator.clipboard.read();
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          if (type.startsWith('image/')) {
            const blob = await clipboardItem.getType(type);
            const imagefile = new File([blob], 'clipboard-image.png', {
              type: 'image/png',
            });

            if (imagefile.size >= 51200) {
              toast.error('50MB가 넘는 이미지는 사용할 수 없습니다.');
              return;
            }
            const imageUrl = URL.createObjectURL(imagefile);
            setPastedImage(imageUrl);
            const resultArray = await imageToName(imagefile); // 이름변환
            const newArr = resultArray?.slice(0, 8 - characterLength);
            const joinString = newArr?.join(' ') ?? '';
            setSearchValue(joinString);
            return;
          }
        }
      }
      toast.error('이미지가 없거나 이미지 형식이 아닙니다.');
    } catch (err) {
      console.error('이미지를 가져오는 데 실패했습니다:', err);
      toast.error('이미지를 가져오는 데 실패했습니다.');
    }
  };

  useEffect(() => {
    return () => {
      if (pastedImage) {
        URL.revokeObjectURL(pastedImage);
        setPastedImage('');
      }
    };
  }, [pastedImage]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    clear();

    if (!characters || characterLength >= 8) {
      toast.error('캐릭터는 최대 8명까지 등록 가능합니다.');
      return;
    }

    const strArr = searchValue
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .filter(Boolean)
      .slice(0, 8 - characterLength);

    if (strArr.length >= 1) {
      for (const item of strArr) {
        await handleCharacterInfo(item);
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return {
    onChange,
    submitHandler,
    handlePasteImage,
    loading,
    searchValue,
    pastedImage,
  };
};
