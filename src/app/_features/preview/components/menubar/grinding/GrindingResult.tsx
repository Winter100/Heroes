import { NewEquipmentType } from '@/app/_type/equipmentType';
import IngredientItem from '@/app/_components/common/IngredientItem';
import GrindingChangeList from '@/app/_features/preview/components/menubar/grinding/GrindingChangeList';
import Ability from './Ability';

interface GrindingProps {
  grindingItems: NewEquipmentType[];
  materialsArray: {
    name: string;
    value: number;
    src: string;
  }[];
}

const GrindingResult = ({ grindingItems, materialsArray }: GrindingProps) => {
  return (
    <div className="dark flex flex-col gap-7 py-2">
      <div>
        <ul className="flex flex-col gap-4 md:grid md:grid-cols-2">
          {grindingItems?.map((item) => (
            <li className="rounded-lg bg-background p-2" key={item.item_name}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center text-sm font-medium text-white">
                  <p>{`${item?.item_option?.enhancement_level ?? ''} ${item?.item_name}`}</p>
                </div>
                <div className="flex h-8 items-center justify-center">
                  {!!item.item_option.ability_name && <Ability item={item} />}
                </div>
                <GrindingChangeList item={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid w-full grid-cols-2 items-start justify-items-center gap-2 rounded-md bg-background p-2 sm:grid-cols-3">
        {materialsArray.map((item) => (
          <IngredientItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GrindingResult;
