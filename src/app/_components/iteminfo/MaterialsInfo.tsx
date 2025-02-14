import { BasicItemInfoType } from "@/app/_type/infoInfoType";
import Item from "../common/item/Item";
import Column from "../layout/Column";
import Row from "../layout/Row";
import { getImageByName } from "@/app/_utils/getImageByName";

const MaterialsInfo = ({
  item_crafting,
  item_description,
  item_name,
  item_rating,
}: BasicItemInfoType) => {
  return (
    <Item className="flex w-full flex-col gap-1 rounded-md border border-borderColor/30">
      <Row>
        <Item.Image src={getImageByName(item_name)} alt={item_name} />
        <Column className="w-full gap-0.5 text-gray-400">
          <Item.Title className="text-xs" type={item_rating}>
            {item_name}
          </Item.Title>
          <Item.SubDescription className="px-1">
            상점 매입가
          </Item.SubDescription>
          <Item.SubDescription className="flex items-center justify-between px-1">
            <Item.Content>물품거래소 매입가</Item.Content>
            <Item.Content></Item.Content>
          </Item.SubDescription>
          <Item.SubDescription className="px-1">
            <Item.Title className="text-[11px]" type={item_rating}>
              {item_rating} 아이템
            </Item.Title>
          </Item.SubDescription>
        </Column>
      </Row>

      <Item.Description className="flex flex-wrap text-[11px]">
        {item_crafting?.map((c, index) => (
          <Item.Content key={c} className="pl-1 text-xs text-gray-400">
            {c}
            {index < item_crafting.length - 1 && ", "}
          </Item.Content>
        ))}
      </Item.Description>

      <Item.Border />

      <Item.Content className="flex-wrap whitespace-pre-line p-1 text-xs text-[rgb(189,164,123)]">
        {item_description}
      </Item.Content>

      <Item.Border />
    </Item>
  );
};

export default MaterialsInfo;
