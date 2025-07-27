import GrindingChangeList from '@/app/_features/preview/components/menubar/grinding/GrindingChangeList';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import Column from '@/app/_components/layout/Column';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import IngredientList from './IngredientList';
import Ability from '../../menubar/grinding/Ability';

interface OneGrindingContentProps {
  title: { level: string; name: string };
  isAbility: boolean;
  item: NewEquipmentType;
}
const OneGrindingContent = ({
  isAbility,
  title,
  item,
}: OneGrindingContentProps) => {
  return (
    <>
      <Column className="dark items-center justify-center gap-2 rounded-lg bg-background py-2">
        <div className="flex items-center justify-center text-sm font-medium text-white">
          <p>{`${title?.level} ${title?.name}`}</p>
        </div>
        {isAbility && <Ability item={item} />}
        <GrindingChangeList className="p-2" item={item} />
      </Column>
      <BasicContainer className="dark items-center justify-center bg-background">
        <IngredientList item={item} />
      </BasicContainer>
    </>
  );
};

export default OneGrindingContent;
