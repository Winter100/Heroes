import { Stat } from '@/app/_type/previewType';
import Item from '../../common/item/Item';
import EnchantEffects from '../../common/enchant/EnchantEffects';
import EnchantSubTitle from '../../common/enchant/EnchantSubTitle';

interface ItemEnchantBoxProps {
  type: '접두' | '접미';
  useText1: string;
  useText2: string;
  useNumber: number;
  usedEnchantName: string;
  existingEnchantRank: string;
  existingEnchantValue: Stat[] | null;
}

const ItemEnchantBox = ({
  type,
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
        <span className="text-[11px] text-gray-400">{type}</span>
      </Item.Selector>
      <EnchantSubTitle
        className="mb-1 mt-3 justify-between px-2 text-[11px]"
        name={usedEnchantName}
        rank={existingEnchantRank}
        type={type}
      />
      <div className="rounded-md border border-muted p-1">
        {existingEnchantValue && (
          <EnchantEffects effects={existingEnchantValue} />
        )}
      </div>
    </Item.Description>
  );
};

export default ItemEnchantBox;
