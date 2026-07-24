'use client';

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
import SearchForm from './SearchForm';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import Image from 'next/image';
import { useImageSearch } from '@/app/_hooks';

const ImageSearch = () => {
  const {
    handlePasteImage,
    loading,
    onChange,
    submitHandler,
    pastedImage,
    searchValue,
  } = useImageSearch();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ImagePlus size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle className="dark text-center">이미지 검색</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            이 기능은 Window 10 이상부터 사용 가능한 실험적인 기능입니다
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <div className="text-gray-400">
            <h3 className="text-center text-white">사용 방법</h3>
            <ol className="flex flex-col items-start justify-start text-sm">
              <li>1. shift + window + s를 눌러 캡처모드로 진입합니다.</li>
              <li>
                2. 이름만 나오도록 범위를 지정한 후 추출하기 버튼을 클릭합니다.
              </li>
              <li>3. 틀린 이름을 수정하고 검색합니다.</li>
            </ol>

            <div className="flex w-full flex-col items-center justify-center gap-2 text-2xl">
              <div className="flex flex-row gap-2">
                <Image
                  src={'/images/ex1.png'}
                  width={180}
                  height={100}
                  alt="범위 예제1"
                />
                <Image
                  src={'/images/ex2.png'}
                  width={180}
                  height={100}
                  alt="범위 예제2"
                />
              </div>
            </div>
          </div>
          {pastedImage && (
            <div className="relative mt-2 h-40 w-full">
              {pastedImage && (
                <Image
                  className="object-contain"
                  src={pastedImage || getImageByName('')}
                  fill
                  alt="캡처 이미지"
                />
              )}
            </div>
          )}
          <div className="my-1 flex items-center justify-center p-1">
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
