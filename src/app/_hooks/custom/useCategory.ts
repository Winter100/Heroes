'use client';

import { useRouter, useSearchParams } from 'next/navigation';

// Todo 서치파람 push 빼고 네트워크 요청 안생기게 하기
export const useCategory = (pathName: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category');
  const currentSubCategory = searchParams.get('subCategory');
  const currentSortKey = searchParams.get('sortKey');
  const currentSortOrder = searchParams.get('sortOrder');

  const handleSelectItem = (itemName: string) => {
    const queryString = searchParams.toString();
    return `${pathName}/${encodeURIComponent(itemName)}${
      queryString ? `?${queryString}` : ''
    }`;
  };

  const handleSort = (sortKey: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('sortKey', sortKey);

    if (currentSortKey === sortKey) {
      params.set('sortOrder', currentSortOrder !== 'desc' ? 'desc' : 'asc');
    } else {
      params.set('sortOrder', 'desc');
    }

    window.history.pushState(null, '', `${pathName}?${params.toString()}`);
  };

  const handleSelectCategory = (categoryName: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('category', categoryName);
    params.delete('subCategory');

    window.history.pushState(null, '', `${pathName}?${params.toString()}`);
  };

  const handleSelectSubCategory = (subCategoryName: string) => {
    if (!currentCategory) return;

    const params = new URLSearchParams(searchParams.toString());

    params.set('category', currentCategory);
    params.set('subCategory', subCategoryName);

    window.history.pushState(null, '', `${pathName}?${params.toString()}`);
  };

  const handleClearAll = () => {
    window.history.pushState(null, '', `${pathName}`);
  };

  const handleBackToList = () => {
    router.back();
  };

  return {
    handleClearAll,
    handleBackToList,
    handleSelectItem,
    handleSelectCategory,
    handleSelectSubCategory,
    currentCategory,
    currentSubCategory,
    currentSortKey,
    currentSortOrder,
    handleSort,
  };
};
