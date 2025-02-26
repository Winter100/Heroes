import { item_set_bonus } from "@/app/_constant/items/item_set_bonus/item_set_bonus";
import EnchantEffects from "../common/enchant/EnchantEffects";
import Item from "../common/item/Item";

interface ItemSetProps {
  set: string;
  // setName: string;
  // setList: string[];
  // setBonus:
  //   | {
  //       level: number;
  //       stat_bonus: {
  //         stat_name: string;
  //         stat_value: number;
  //       }[];
  //     }[]
  //   | undefined;
}

const ItemSet = ({ set }: ItemSetProps) => {
  const name = item_set_bonus.find((item) => item.item_name === set)?.item_name;
  const list = item_set_bonus.find(
    (item) => item.item_name === set,
  )?.item_set_list;
  const bonus = item_set_bonus.find(
    (item) => item.item_name === set,
  )?.item_set_bonus;

  return (
    <div className="text-inherit text-zinc-400">
      <span className="mt-2 pl-3 text-xs">{name} 세트 0/6</span>
      <div className="rounded-md border border-gray-500/30">
        <EnchantEffects
          className="grid grid-cols-2 !border-none !text-[11px]"
          enchantEffects={
            list?.map((title) => {
              return { stat_name: title, stat_value: "" };
            }) || []
          }
        />
        <Item.SubDescription className="mx-2 pl-4">
          세트 보너스
        </Item.SubDescription>

        {bonus?.map((stat) => (
          <div key={stat.level} className="flex pl-2 text-[11px]">
            <div className="flex w-6">
              <span className="text-gray-600/50">•</span>
              <span>{stat.level} :</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {stat.stat_bonus.map((s) => (
                <span key={s.stat_name} className="flex flex-row">
                  <span>{s.stat_name}</span>
                  <span>+{s.stat_value}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSet;
