import Item from "../../common/item/Item";

interface StatTooltipItemProps {
  stat_name: string;
  stat_descripiton: string;
}
const StatTooltipItem = ({
  stat_descripiton,
  stat_name,
}: StatTooltipItemProps) => {
  return (
    <Item className="flex w-full flex-col gap-1 rounded-md border border-borderColor/30">
      <Item.Description className="mb-2 text-sm">
        <Item.Content>{stat_name}</Item.Content>
      </Item.Description>
      <Item.Description>
        <Item.Content className="flex-wrap whitespace-pre-line text-xs text-[rgb(189,164,123)]">
          {stat_descripiton}
        </Item.Content>
      </Item.Description>
    </Item>
  );
};

export default StatTooltipItem;
