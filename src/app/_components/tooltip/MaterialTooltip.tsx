import { BasicItemInfoType } from '@/app/_type/infoInfoType';
import MaterialsInfo from '../iteminfo/MaterialsInfo';
import { materialsMap } from '@/app/_constant/items/item_map';

interface MaterialTooltipProps {
  itemName: string;
}

const MaterialTooltip = ({ itemName }: MaterialTooltipProps) => {
  const itemInfo = materialsMap?.get(itemName);
  return (
    <div>
      <MaterialsInfo {...(itemInfo as BasicItemInfoType)} />
    </div>
  );
};

export default MaterialTooltip;
