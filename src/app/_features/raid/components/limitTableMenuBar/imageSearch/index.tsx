'use client';

import { FormEvent, useEffect, useState } from 'react';
import { imageToName } from '@/app/_utils/imageToName';
import { toast } from 'react-toastify';
import { useCharacterStore } from '../../../store/characterStore';
import { useCharacter } from '../../../hooks/useCharacter';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ImagePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Manual from './Manual';
import Preview from './Preview';
import SearchForm from './SearchForm';

const ImageSearch = () => {
  const characters = useCharacterStore((state) => state.characters);
  const characterLength = characters.length;
  const clear = useCharacterStore((state) => state.clear);
  const [pastedImage, setPastedImage] = useState<string | null>(null);
  const { handleCharacterInfo, loading } = useCharacter();
  const [searchValue, setSearchValue] = useState<string>('');

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
              alert('50MB가 넘는 이미지는 사용할 수 없습니다.');
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
      alert('이미지가 없거나 이미지 형식이 아닙니다.');
    } catch (err) {
      console.error('이미지를 가져오는 데 실패했습니다:', err);
      alert('이미지를 가져오는 데 실패했습니다.');
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ImagePlus size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark">
        <DialogHeader>
          <DialogTitle className="text-center text-white">
            이미지 검색
          </DialogTitle>
          <DialogDescription className="text-center">
            이 기능은 Window 10 이상부터 사용 가능한 실험적인 기능입니다
          </DialogDescription>
        </DialogHeader>
        <div className="w-full text-white">
          <Manual />
          {pastedImage && <Preview pastedImage={pastedImage} />}
          <div className="flex items-center justify-center p-1">
            <Button variant="outline" onClick={handlePasteImage}>
              추출하기
            </Button>
          </div>
          <SearchForm
            onChange={onChange}
            submitHandler={submitHandler}
            loading={loading}
            searchValue={searchValue}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageSearch;
