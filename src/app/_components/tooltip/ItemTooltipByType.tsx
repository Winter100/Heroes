import ItemTooltip from "./ItemTooltip";
import MaterialTooltip from "./MaterialTooltip";
import { memo } from "react";

interface ItemTooltipByTypeProps {
  category: string;
  itemName: string;
}

const ItemTooltipByType = memo(
  ({ itemName, category }: ItemTooltipByTypeProps) => {
    const RenderComponent = category === "장비" ? ItemTooltip : MaterialTooltip;

    return <RenderComponent key={itemName} itemName={itemName} />;
  },
);

export default ItemTooltipByType;

ItemTooltipByType.displayName = "ItemTooltipByType";
