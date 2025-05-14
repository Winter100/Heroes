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
import Manual from './Manual';
import Preview from './Preview';
import SearchForm from './SearchForm';
import { useImageSearch } from '../../../hooks/useImageSearch';

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
      <DialogContent className="border-none bg-backgroundOne text-white">
        <DialogHeader>
          <DialogTitle className="dark text-center">이미지 검색</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            이 기능은 Window 10 이상부터 사용 가능한 실험적인 기능입니다
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <Manual />
          {pastedImage && <Preview pastedImage={pastedImage} />}
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
