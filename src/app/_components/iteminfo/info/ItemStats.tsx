import { Stat } from "@/app/_type/previewType";
import Item from "../../common/item/Item";

interface ItemStatsProps {
  mergedStats: Stat[];
}

const ItemStats = ({ mergedStats }: ItemStatsProps) => {
  return (
    <>
      {/* <Item.Border /> */}
      <Item.Description>
        <Item.Content className="flex flex-wrap gap-1 font-sans text-xs text-yellow-200/90">
          {mergedStats.map((stat) => (
            <div key={stat.stat_name} className="flex flex-row">
              <span>{stat.stat_name}</span>
              <span>
                {parseInt(stat.stat_value.toString()) < 0
                  ? stat.stat_value
                  : `+${stat.stat_value}`}
              </span>
            </div>
          ))}
        </Item.Content>
      </Item.Description>
    </>
  );
};

export default ItemStats;
