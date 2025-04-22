import { NewEquipmentType } from '@/app/_type/equipmentType';
import GrindingList from '../../common/GrindingList';
import IngredientItem from '../../common/IngredientItem';
import Ability from '../ability/Ability';
import ItemTitle from '../../common/ItemTitle';

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
    <div className="flex flex-col gap-7 py-2">
      <div>
        <ul className="flex flex-col gap-4 md:grid md:grid-cols-2">
          {grindingItems?.map((item) => (
            <li className="rounded-lg bg-background p-2" key={item.item_name}>
              <div className="flex flex-col gap-1">
                <ItemTitle
                  className="text-sm font-medium text-white"
                  level={item?.item_option?.enhancement_level ?? ''}
                  name={item?.item_name}
                />
                <div className="flex h-8 items-center justify-center">
                  {!!item.item_option.ability_name && <Ability item={item} />}
                </div>
                <GrindingList item={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="flex items-center justify-center text-xs">
        * 해제는 13단계 이상 강화된 장비에 해제를 제외한 연마가 완료되어야
        가능합니다
      </div> */}

      <div className="grid w-full grid-cols-2 items-start justify-items-center gap-4 p-2 sm:grid-cols-4">
        {materialsArray.map((item) => (
          <IngredientItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GrindingResult;
