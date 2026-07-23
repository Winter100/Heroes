'use client';
import { ItemRecipe } from '@/app/_type/itemType';
import ItemRecipeTable from './components/item-recipe-table';
import { recipeFilter } from '@/app/_utils/convert';
import { useCategory } from '@/app/_hooks/custom/useCategory';
import { useMemo } from 'react';

type Props = {
  recipes: ItemRecipe[];
};

const ItemFilteredList = ({ recipes }: Props) => {
  const { currentCategory, currentSubCategory } = useCategory('/iteminfo');

  const filtered = useMemo(() => {
    const isFilterValue = !!currentCategory || !!currentSubCategory;
    return isFilterValue
      ? recipeFilter(recipes, currentCategory, currentSubCategory)
      : recipes;
  }, [recipes, currentCategory, currentSubCategory]);

  return <ItemRecipeTable recipes={filtered} />;
};

export default ItemFilteredList;
