import GrindingChangeList from '@/app/_components/common/GrindingChangeList';
import IngredientList from '@/app/_components/common/IngredientList';
import ItemTitle from '@/app/_components/common/ItemTitle';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import Column from '@/app/_components/layout/Column';
import Ability from '@/app/_components/preview/ability/Ability';
import { NewEquipmentType } from '@/app/_type/equipmentType';

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
      <Column className="items-center justify-center gap-2 rounded-lg bg-background py-2">
        <ItemTitle
          className="text-sm font-medium text-white"
          level={title.level ?? ''}
          name={title.name}
        />
        {isAbility && <Ability item={item} />}
        <GrindingChangeList className="p-3" item={item} />
      </Column>
      <BasicContainer className="items-center justify-center bg-background">
        <IngredientList item={item} />
      </BasicContainer>
    </>
  );
};

export default OneGrindingContent;
