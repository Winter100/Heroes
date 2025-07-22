import Item from '../../common/item/Item';
import Row from '../../layout/Row';
import Column from '../../layout/Column';
import { formatStringArray } from '@/app/_utils/formatStringArray';
import { Item_Rating } from '@/app/_type/infoInfoType';
import ImageIconUseBorder from '../../common/image/ImageIconUseBorder';
import { getTooltipImageSrc } from '@/app/_utils/get/getTooltipImageSrc';

interface ItemTopProps {
  name: string;
  itemName: string;
  itemRating: Item_Rating;
  level: string | null;
  prefixEnchantName: string;
  suffixEnchantName: string;
  category: string[];
  slot: string;
}

const ItemTop = ({
  itemName,
  itemRating,
  level,
  name,
  prefixEnchantName,
  suffixEnchantName,
  category,
  slot,
}: ItemTopProps) => {
  const src = getTooltipImageSrc(itemName, slot);

  return (
    <Row className="flex items-start gap-2 text-xs">
      <ImageIconUseBorder isRatingBorder={true} itemName={name} src={src} />
      <Column className="w-full min-w-0 flex-1 gap-0.5 text-zinc-400">
        <Item.Title
          className="flex flex-row flex-wrap gap-1 overflow-hidden text-ellipsis whitespace-pre-line"
          type={itemRating}
        >
          {level && <span>{level || ''}</span>}
          {prefixEnchantName && <span>{prefixEnchantName}</span>}
          {suffixEnchantName && <span>{suffixEnchantName}</span>}
          {itemName && <span className="truncate">{itemName}</span>}
        </Item.Title>
        {category && (
          <Item.SubDescription className="flex flex-row gap-1 px-1">
            {formatStringArray(category)}
          </Item.SubDescription>
        )}

        <Item.SubDescription className="px-1">
          <Item.Title className="text-[11px]" type={itemRating}>
            {itemRating} 아이템
          </Item.Title>
        </Item.SubDescription>
      </Column>
    </Row>
  );
};

export default ItemTop;
