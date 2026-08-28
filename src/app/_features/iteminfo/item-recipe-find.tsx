import { ItemRecipes } from '@/app/_type/itemType';
import ItemRecipeDetail from './components/item-recipe-detail';
import CheckError from '@/app/_components/common/check-error';

type Props = {
  recipe: ItemRecipes;
  findItemName: string;
};

// 삭제 예정
const ItemRecipeFind = ({ recipe, findItemName }: Props) => {
  if (!recipe) {
    return <CheckError text={`${findItemName}을 찾을 수 없습니다.`} />;
  }

  return <ItemRecipeDetail selectedItem={recipe} />;
};

export default ItemRecipeFind;
