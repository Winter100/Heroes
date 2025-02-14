import Item from "../common/item/Item";
import Column from "../layout/Column";
import Row from "../layout/Row";
import EnchantEffects from "../common/enchant/EnchantEffects";
import Star from "../common/Star";
import Image from "next/image";
import clsx from "clsx";
import { getImageByName } from "@/app/_utils/getImageByName";
import { item_set_bonus, ItemType } from "@/app/_constant/items/item_info";
import ItemColorPart from "./ItemColorPart";
import { formatStringArray } from "@/app/_utils/formatStringArray";
import InfoGrindingList from "./grinding/InfoGrindingList";

const ItemInfo = ({
  item_name,
  item_rating,
  item_stats,
  item_restrictions,
  item_category,
  item_color,
  item_set,
  item_grinding,
}: ItemType) => {
  const item = item_name?.replace(
    /(와드네) .*? (무기|그리브즈|헬름|메일|)/,
    "$1 $2",
  );

  const set_name = item_set_bonus.find(
    (item) => item.item_name === item_set,
  )?.item_name;
  const set_list = item_set_bonus.find(
    (item) => item.item_name === item_set,
  )?.item_set_list;
  const set_bonus = item_set_bonus.find(
    (item) => item.item_name === item_set,
  )?.item_set_bonus;

  return (
    <Item className="flex w-full flex-col gap-1 rounded-md border border-borderColor/30">
      {/* <Item className="flex flex-col gap-1"> */}
      <Row className="text-xs">
        <Item.Image
          className={clsx(
            "object-scale-down",
            item_name?.includes("레어") &&
              "rounded-sm border border-orange-300",
            item_name?.includes("전설") && "rounded-sm border border-pink-400",
          )}
          src={getImageByName(item)}
          alt={item_name}
        />

        <Column className="w-full gap-0.5 text-zinc-400">
          <Item.Title type={item_rating}>{item_name}</Item.Title>
          <Item.SubDescription className="flex flex-row gap-1 px-1">
            {formatStringArray(item_category)}
          </Item.SubDescription>
          <Item.SubDescription className="flex items-center justify-between px-1">
            <Item.Content>물품거래소 매입가</Item.Content>
            <Item.Content>{""}</Item.Content>
          </Item.SubDescription>
          <Item.SubDescription className="px-1">
            <Item.Title className="text-[11px]" type={item_rating}>
              {item_rating} 아이템
            </Item.Title>
          </Item.SubDescription>
        </Column>
      </Row>

      <Item.Border />

      <Item.Description>
        <Item.Content className="flex flex-wrap gap-1 font-sans text-xs text-yellow-200/90">
          {item_stats?.map((stat) => (
            <div key={stat.stat_name} className="flex flex-row">
              <span>{stat.stat_name}</span>
              <span>+{stat.stat_value}</span>
            </div>
          ))}
        </Item.Content>
      </Item.Description>

      {/* <Item.Border /> */}
      {/* <Item.Selector
        useText1="크리티컬+1"
        useText2="마법공격력-61"
        usedNumber={1}
      >
        이미지
      </Item.Selector> */}

      <Item.Border />
      <Item.Description className="flex flex-row">
        <Item.Content className="flex h-6 justify-center gap-0.5 text-xs text-[rgb(189,164,123)]">
          <div className="flex w-6 items-center justify-center">
            <Image
              width={20}
              height={10}
              src="/images/icon/Restriction.png"
              alt="restriction"
            />
          </div>
        </Item.Content>
        <Item.Content className="flex items-center justify-center text-[11px] text-[rgb(145,175,212)]">
          {formatStringArray(item_restrictions)}
        </Item.Content>
      </Item.Description>

      <Item.Description className="flex flex-row">
        <Item.Content className="flex h-6 flex-wrap justify-center gap-0.5 text-[rgb(189,164,123)]">
          <div className="w-6">
            <Image
              width={20}
              height={10}
              src="/images/icon/quality.png"
              alt="quality"
            />
          </div>
          <span className="flex items-center justify-center text-[11px]">
            품질
          </span>
        </Item.Content>
        <Item.Content className="flex flex-wrap items-center justify-center text-xs">
          <Star />
          <Star />
        </Item.Content>
      </Item.Description>

      {!item_color && (
        <>
          <Item.Border />
          <ItemColorPart />
        </>
      )}

      {item_grinding && (
        <>
          <Item.Border />
          <InfoGrindingList
            itemName={item_name || ""}
            setName={set_name || ""}
          />
        </>
      )}
      <Item.Border />

      {/* <Item.Description className="text-sm">
        <Item.Selector useText1="대적자의" useText2="신비" usedNumber={2}>
          <span>접두</span>
        </Item.Selector>
        <Row className="mt-1 justify-between px-2">
          <Item.Content>불의의</Item.Content>
          <Item.Content className="flex">
            <span className="pr-1">접두</span>
            <EnchantRank className="text-orange-300" enchantRank={"6"} />
            <span>랭크</span>
          </Item.Content>
        </Row>
        <EnchantEffects
          effectColor="text-yellow-200/70"
          enchantEffects={[
            { stat_name: "생명력", stat_value: "22" },
            { stat_name: "밸런스", stat_value: "55" },
            { stat_name: "크리티컬", stat_value: "88" },
          ]}
        />
      </Item.Description> */}

      {/* <Item.Description className="text-sm">
        <Item.Selector useText1="대적자의" useText2="신비" usedNumber={2}>
          <span>접미</span>
        </Item.Selector>
        <Row className="mt-1 justify-between px-2">
          <Item.Content>신비</Item.Content>
          <Item.Content className="flex">
            <span className="pr-1">접미</span>
            <EnchantRank className="text-orange-300" enchantRank={"6"} />
            <span>랭크</span>
          </Item.Content>
        </Row>
        <EnchantEffects
          effectColor="text-yellow-200/70"
          enchantEffects={[
            { stat_name: "생명력", stat_value: "22" },
            { stat_name: "밸런스", stat_value: "55" },
            { stat_name: "크리티컬", stat_value: "88" },
          ]}
        />
      </Item.Description> */}

      {/* <Item.Border /> */}

      {item_set && (
        <div className="text-inherit text-zinc-400">
          <span className="pl-3 text-xs">{set_name} 세트 0/6</span>
          <div className="rounded-md border border-gray-500/30">
            <EnchantEffects
              className="grid grid-cols-2 !border-none !text-[11px]"
              enchantEffects={
                set_list?.map((title) => {
                  return { stat_name: title, stat_value: "" };
                }) || []
              }
            />
            <Item.SubDescription className="mx-2 pl-4">
              세트 보너스
            </Item.SubDescription>

            {set_bonus?.map((stat) => (
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
      )}
    </Item>
  );
};

export default ItemInfo;
