import clsx from "clsx";
import Item from "../../common/item/Item";
import Row from "../../layout/Row";
import { getImageByName } from "@/app/_utils/getImageByName";
import Column from "../../layout/Column";
import { formatStringArray } from "@/app/_utils/formatStringArray";
import { Item_Rating } from "@/app/_type/infoInfoType";

interface ItemTopProps {
  name: string;
  convertItemName: string;
  itemName: string;
  itemRating: Item_Rating;
  level: string | null;
  prefixEnchantName: string;
  suffixEnchantName: string;
  category: string[];
}

const ItemTop = ({
  convertItemName,
  itemName,
  itemRating,
  level,
  name,
  prefixEnchantName,
  suffixEnchantName,
  category,
}: ItemTopProps) => {
  return (
    <Row className="text-xs">
      <Item.Image
        className={clsx(
          "object-scale-down",
          name?.includes("레어") && "rounded-sm border border-orange-300",
          name?.includes("전설") && "rounded-sm border border-pink-400",
        )}
        src={getImageByName(convertItemName)}
        alt={itemName}
      />

      <Column className="w-full gap-0.5 text-zinc-400">
        <Item.Title className="flex flex-row gap-1" type={itemRating}>
          <span>{level || ""}</span>
          <span>{prefixEnchantName}</span>
          <span>{suffixEnchantName}</span>
          <span>{itemName}</span>
        </Item.Title>
        <Item.SubDescription className="flex flex-row gap-1 px-1">
          {formatStringArray(category)}
        </Item.SubDescription>
        <Item.SubDescription className="flex items-center justify-between px-1">
          <Item.Content>물품거래소 매입가</Item.Content>
          <Item.Content>{""}</Item.Content>
        </Item.SubDescription>
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
