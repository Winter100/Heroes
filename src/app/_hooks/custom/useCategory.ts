'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const useCategory = (pathName: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category');
  const currentSubCategory = searchParams.get('subCategory');

  const handleSelectItem = (itemName: string) => {
    const queryString = searchParams.toString();
    return `${pathName}/${encodeURIComponent(itemName)}${
      queryString ? `?${queryString}` : ''
    }`;
  };

  const handleSelectCategory = (categoryName: string) => {
    router.push(`${pathName}/?category=${encodeURIComponent(categoryName)}`);
  };

  const handleSelectSubCategory = (subCategoryName: string) => {
    if (!currentCategory) return;
    router.push(
      `${pathName}/?category=${encodeURIComponent(currentCategory)}&subCategory=${encodeURIComponent(subCategoryName)}`
    );
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
  };
};
