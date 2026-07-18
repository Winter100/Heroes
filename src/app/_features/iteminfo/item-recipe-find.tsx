'use client';
import { ItemRecipe } from '@/app/_type/itemType';
import ItemRecipeDetail from './components/item-recipe-detail';
import { useCategory } from '@/app/_hooks/custom/useCategory';
import CheckError from '@/app/_components/common/check-error';

type Props = {
  recipes: ItemRecipe[];
  findItemName: string;
};

const ItemRecipeFind = ({ recipes, findItemName }: Props) => {
  const { handleSelectItem } = useCategory('/iteminfo');

  const findRecipe = recipes.find((recipe) => recipe.name === findItemName);

  if (!findRecipe)
    return <CheckError text={`${findItemName}을 찾을 수 없습니다.`} />;

  const isMaterial = (itemName: string) => {
    const isMaterial = recipes.some((recipe) => recipe.name === itemName);
    if (!isMaterial || !itemName) return false;
    return true;
  };

  return (
    <ItemRecipeDetail
      selectedItem={findRecipe}
      isMaterial={isMaterial}
      handleSelectItem={handleSelectItem}
    />
  );
};

export default ItemRecipeFind;
