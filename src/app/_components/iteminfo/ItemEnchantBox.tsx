import { Stat } from '@/app/_type/previewType';
import EnchantEffects from '../common/enchant/EnchantEffects';
import Item from '../common/item/Item';
import Row from '../layout/Row';

interface ItemEnchantBoxProps {
  title: string;
  useText1: string;
  useText2: string;
  useNumber: number;
  usedEnchantName: string;
  existingEnchantRank: string;
  existingEnchantValue: Stat[] | null;
}

const ItemEnchantBox = ({
  title,
  useNumber,
  useText1,
  useText2,
  existingEnchantRank,
  existingEnchantValue,
  usedEnchantName,
}: ItemEnchantBoxProps) => {
  return (
    <Item.Description className="text-sm">
      <Item.Selector
        useText1={useText1}
        useText2={useText2}
        usedNumber={useNumber === 0 ? 2 : useNumber}
      >
        <span className="text-[11px] text-gray-400">{title}</span>
      </Item.Selector>
      <Row className="mb-1 mt-3 justify-between px-2">
        <Item.Content>{usedEnchantName}</Item.Content>
        <Item.Content className="flex">
          <span className="pr-1">{title}</span>
          <span>{existingEnchantRank} 랭크</span>
        </Item.Content>
      </Row>
      <div className="rounded-md border border-muted p-1">
        {existingEnchantValue && (
          <EnchantEffects effects={existingEnchantValue} />
        )}
      </div>
    </Item.Description>
  );
};

export default ItemEnchantBox;
