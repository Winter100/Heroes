import EnchantTooltip from './EnchantTooltip';
import ItemTooltip from './ItemTooltip';
import MaterialTooltip from './MaterialTooltip';
import { memo } from 'react';

interface ItemTooltipByTypeProps {
  itemName: string;
  category: string;
}

const ItemTooltipByType = memo(
  ({ itemName, category, ...props }: ItemTooltipByTypeProps) => {
    let RenderComponent;

    switch (category) {
      case '장비':
        RenderComponent = ItemTooltip;
        break;

      case '재료':
        RenderComponent = MaterialTooltip;
        break;

      case '인챈트':
        RenderComponent = EnchantTooltip;
        break;

      default:
        RenderComponent = MaterialTooltip;
    }

    return <RenderComponent key={itemName} itemName={itemName} {...props} />;
  }
);

export default ItemTooltipByType;

ItemTooltipByType.displayName = 'ItemTooltipByType';
