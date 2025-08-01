import { useRefFocus } from '@/app/_hooks/useRefFocus';
import { useSelectEnchantStore } from '@/app/_store/selectEnchantStore';
import { FormEvent } from 'react';
import { useEnchantFilterStore } from '../store/enchantFilterStore';

export const useEnchantTableInputFilter = () => {
  const { inputRef, resetRef } = useRefFocus();
  const resetSelectEnchant = useSelectEnchantStore(
    (state) => state.resetSelectEnchant
  );

  const { setEnchantFilterName, resetEnchantFilter } = useEnchantFilterStore(
    (state) => ({
      setEnchantFilterName: state.setEnchantFilterName,
      resetEnchantFilter: state.resetEnchantFilter,
    })
  );

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const searchValue = inputRef.current?.value;
    if (searchValue) {
      resetSelectEnchant();
      setEnchantFilterName(searchValue);
    }
  };

  const onReset = () => {
    // 선택 인챈트 아이템 초기화
    resetSelectEnchant();
    // input Ref값 초기화
    resetRef();
    // Zustand에 설정된 인챈트 필터값 초기화
    resetEnchantFilter();
  };

  return { onSearch, onReset, inputRef };
};
