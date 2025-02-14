import ItemInfo from "../iteminfo/ItemInfo";
import { ItemType } from "@/app/_constant/items/item_info";
import { itemInfoMap } from "@/app/_constant/items/item_map";
import InfoTooltip from "../common/tooltip/InfoTooltip";

const ItemTooltip = ({ itemName }: { itemName: string }) => {
  const itemInfo = itemInfoMap?.get(itemName);

  return (
    <InfoTooltip itemName={itemName}>
      <ItemInfo {...(itemInfo as ItemType)} />
    </InfoTooltip>
  );
};

export default ItemTooltip;
