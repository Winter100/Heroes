import { usePreviewStore } from '@/app/_store/previewStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, RefObject } from 'react';

export const useSearchHandler = (
  inputRef: RefObject<HTMLInputElement>,
  focus: () => void,
  routeName?: string
) => {
  const router = useRouter();
  const previewReset = usePreviewStore((state) => state.reset);
  const searchParams = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value = inputRef.current?.value;
    if (!value || value.length === 0 || name === value) return focus();

    previewReset();
    const resultArray = value.trim().split(' ')[0];
    if (resultArray.length >= 1) {
      inputRef.current.value = resultArray;

      if (routeName) {
        return router.push(`/${routeName}?name=${resultArray}`);
      }

      router.push(`/preview?name=${resultArray}`);
    }
  };

  return { handleSearchSubmit };
};
