'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const useCategory = (pathName: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category');
  const currentSubCategory = searchParams.get('subCategory');
  const currentSortKey = searchParams.get('sortKey');
  const currentSortOrder = searchParams.get('sortOrder');

  const getSelectedValues = (key: string) => {
    const value = searchParams.get(key);
    return value ? value.split(',') : [];
  };

  const handleSelectItem = (itemName: string) => {
    const queryString = searchParams.toString();
    return `${pathName}/${encodeURIComponent(itemName)}${
      queryString ? `?${queryString}` : ''
    }`;
  };

  const categoryArray = getSelectedValues(currentCategory ?? '');
  const subCategoryArray = getSelectedValues(currentSubCategory ?? '');

  const handleSort = (sortKey: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('sortKey', sortKey);

    if (currentSortKey === sortKey) {
      params.set('sortOrder', currentSortOrder !== 'desc' ? 'desc' : 'asc');
    } else {
      params.set('sortOrder', 'desc');
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  const handleSelectCategory = (categoryName: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('category', categoryName);
    params.delete('subCategory');

    router.push(`${pathName}?${params.toString()}`);
  };

  const handleSelectSubCategory = (subCategoryName: string) => {
    if (!currentCategory) return;

    const params = new URLSearchParams(searchParams.toString());

    params.set('category', currentCategory);
    params.set('subCategory', subCategoryName);

    router.push(`${pathName}?${params.toString()}`);
  };

  const handleClearAll = () => {
    router.push(pathName);
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
    categoryArray,
    subCategoryArray,
    handleSort,
  };
};
