import { BasicItemInfoType } from "@/app/_type/infoInfoType";
import MaterialsInfo from "../iteminfo/MaterialsInfo";
import { materialsMap } from "@/app/_constant/items/item_map";
import InfoTooltip from "../common/tooltip/InfoTooltip";

interface MaterialTooltipProps {
  itemName: string;
}

const MaterialTooltip = ({ itemName }: MaterialTooltipProps) => {
  const itemInfo = materialsMap?.get(itemName);
  return (
    <InfoTooltip itemName={itemName}>
      <MaterialsInfo {...(itemInfo as BasicItemInfoType)} />
    </InfoTooltip>
  );
};

export default MaterialTooltip;
