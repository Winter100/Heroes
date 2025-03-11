import ItemTooltip from "./ItemTooltip";
import MaterialTooltip from "./MaterialTooltip";
import { memo } from "react";

interface ItemTooltipByTypeProps {
  itemName: string;
  category: string;
}

const ItemTooltipByType = memo(
  ({ itemName, category, ...props }: ItemTooltipByTypeProps) => {
    const RenderComponent = category === "장비" ? ItemTooltip : MaterialTooltip;

    return <RenderComponent key={itemName} itemName={itemName} {...props} />;
  },
);

export default ItemTooltipByType;

ItemTooltipByType.displayName = "ItemTooltipByType";
