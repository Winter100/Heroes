'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, RefObject } from 'react';
import { useEnchantStore } from '../../_store/useEnchantStore';
import { useGrindStore } from '../../_store/useGrindStore';

export const useSearchHandler = (
  inputRef: RefObject<HTMLInputElement>,
  focus: () => void,
  routeName?: string
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const resetEnchantSimulations = useEnchantStore(
    (state) => state.resetSimulations
  );
  const resetGrindSimulations = useGrindStore(
    (state) => state.resetSimulations
  );

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value = inputRef.current?.value;
    if (!value || value.length === 0 || name === value) return focus();

    const resultArray = value.trim().split(' ')[0];
    if (resultArray.length >= 1) {
      inputRef.current.value = resultArray;
      resetEnchantSimulations();
      resetGrindSimulations();

      if (routeName) {
        return router.push(`/${routeName}?name=${resultArray}`);
      }

      router.push(`/preview?name=${resultArray}`);
    }
  };

  return { handleSearchSubmit };
};
