import React from 'react';
import Column from '../../layout/Column';
import ItemTitle from '../../common/ItemTitle';
import GrindingChangeList from '../../common/GrindingChangeList';
import BasicContainer from '../../layout/BasicContainer';
import IngredientList from '../../common/IngredientList';
import Ability from '../../preview/ability/Ability';
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
      <BasicContainer className="!my-6 !h-auto items-center justify-center">
        <IngredientList item={item} />
      </BasicContainer>
    </>
  );
};

export default OneGrindingContent;
// import React from "react";
// import Column from "../../layout/Column";
// import ItemTitle from "../../common/ItemTitle";
// import GrindingList from "../../common/GrindingList";
// import BasicContainer from "../../layout/BasicContainer";
// import IngredientList from "../../common/IngredientList";
// import Ability from "../../preview/ability/Ability";
// import { NewEquipmentType } from "@/app/_type/equipmentType";

// interface OneGrindingContentProps {
//   title: { level: string; name: string };
//   isAbility: boolean;
//   item: NewEquipmentType;
// }
// const OneGrindingContent = ({
//   isAbility,
//   title,
//   item,
// }: OneGrindingContentProps) => {
//   return (
//     <>
//       <Column className="items-center justify-center gap-2 rounded-lg bg-background py-2">
//         <ItemTitle
//           className="text-sm font-medium text-white"
//           level={title.level ?? ""}
//           name={title.name}
//         />
//         {isAbility && <Ability item={item} />}
//         <GrindingList className="p-3" item={item} />
//       </Column>
//       <BasicContainer className="!my-6 !h-auto items-center justify-center">
//         <IngredientList item={item} />
//       </BasicContainer>
//     </>
//   );
// };

// export default OneGrindingContent;
