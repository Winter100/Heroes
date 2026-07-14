'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useCategory = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const currentSubCategory = searchParams.get('subCategory');
  const selectedItemId = searchParams.get('name');

  const handleSelectCategory = (categoryName: string) => {
    router.push(`${pathname}?category=${encodeURIComponent(categoryName)}`);
  };

  const handleSelectSubCategory = (subCategoryName: string) => {
    if (!currentCategory) return;
    router.push(
      `${pathname}?category=${encodeURIComponent(currentCategory)}&subCategory=${encodeURIComponent(subCategoryName)}`
    );
  };

  const handleClearAll = () => {
    router.push(pathname);
  };

  const handleBackToList = () => {
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (currentSubCategory) params.set('subCategory', currentSubCategory);

    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const handleSelectItem = (itemName: string) => {
    const params = new URLSearchParams();
    if (currentCategory) params.set('category', currentCategory);
    if (currentSubCategory) params.set('subCategory', currentSubCategory);
    params.set('name', itemName);

    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    currentCategory,
    currentSubCategory,
    selectedItemId,
    handleSelectCategory,
    handleSelectSubCategory,
    handleClearAll,
    handleBackToList,
    handleSelectItem,
  };
};
