'use client';
import { ItemRecipe } from '@/app/_type/itemType';
import ImageIconUseBorder from '../common/image/ImageIconUseBorder';
import Item from '../common/item/Item';
import Column from '../layout/Column';
import Row from '../layout/Row';
import ItemTitle from './item-title';
import ItemGrindHeader from '../common/item/item-grind-header';
import ItemGrindGraph from '../common/item/item-grind-graph';
import { useRef } from 'react';
import { getPercentageStat } from '@/app/_features/preview/components/menubar/grinding/grinding-preview-stat-container';

const ItemTooltipItem = ({ item }: { item: ItemRecipe }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-2 p-2 text-zinc-400">
      <Row className="flex items-start gap-2 text-xs">
        <ImageIconUseBorder
          isRatingBorder={true}
          itemName={item?.name}
          src={item?.image ?? ''}
        />
        <Column className="w-full min-w-0 flex-1 gap-0.5">
          <ItemTitle
            tier={item.tier}
            category={item.category}
            name={item?.name}
          >
            {item?.name}
          </ItemTitle>
          <Item.SubDescription className="px-1">
            <ItemTitle
              className="text-[11px]"
              tier={item.tier}
              category={item.category}
              name={item?.name}
            >
              {item.tier} 아이템
            </ItemTitle>
          </Item.SubDescription>
        </Column>
      </Row>

      {item?.description && (
        <div>
          <p className="py-1.5 text-[rgb(189,164,123)]">{item?.description}</p>
        </div>
      )}

      {item?.effects.length >= 1 && (
        <div className="flex flex-wrap items-center gap-x-1 text-yellow-200/90">
          {item?.effects.map((effect) => (
            <div key={effect.stat_name}>
              {effect.stat_name}+{effect.stat_value}
            </div>
          ))}
        </div>
      )}

      {item.grinds.item.map((grind) => {
        return grind.item_value.map((grindValue) => {
          const { increaseValue, minPercentage, reMainPercentage } =
            getPercentageStat(
              grindValue.stat_value.toString(),
              grindValue.stat_value.toString(),
              grindValue.stat_max_value.toString()
            );
          return (
            <div
              key={grindValue.stat_name}
              className={`flex w-full flex-col text-xs text-white opacity-80`}
            >
              {/* 그래프 수치 */}
              <ItemGrindHeader
                isIncreaseView={false}
                increaseValue={increaseValue}
                stat_name={grindValue.stat_name}
                stat_value={grindValue.stat_value.toString()}
                stat_max_value={grindValue.stat_max_value.toString()}
              />

              <div className="flex w-full flex-col items-center justify-center">
                {/* 그래프 부분 */}
                <div className="w-full">
                  <ItemGrindGraph
                    progressBarRef={progressBarRef}
                    handleGaugeClick={() => {}}
                    minPercentage={minPercentage}
                    reMainPercentage={reMainPercentage}
                    isActivateOption={false}
                  />
                </div>
              </div>
            </div>
          );
        });
      })}

      {item?.sets?.map((set) => (
        <div
          key={set.set_name}
          className="flex flex-col gap-1 rounded-md border border-border p-2 text-[11px]"
        >
          <div className="flex flex-col gap-1">
            {/* 세트명 */}
            <p className="border border-border pl-4">
              {set?.set_name ?? ''} 세트 0/{set?.set_title?.length ?? 0}
            </p>
            {/* 세트 필요 아이템 목록 */}
            <div className="grid grid-cols-2 items-center gap-0.5">
              {set?.set_title
                ?.sort((a, b) => getPriority(a) - getPriority(b))
                .map((item_title) => (
                  <div key={item_title}>• {item_title}</div>
                ))}
            </div>
          </div>
          {/* 세트 보너스 효과 */}
          <div className="flex flex-col gap-1">
            <p className="border border-border pl-4">세트 보너스</p>
            {set?.set_options?.map((bonus) => (
              <div key={bonus.level} className="flex">
                <div className="w-5">• {bonus.level}:</div>
                <div className="ml-1 flex flex-1 flex-wrap items-center gap-x-1">
                  {bonus?.effects?.map((effect) => (
                    <span key={effect.stat_name}>
                      {effect.stat_name}+{effect.stat_value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemTooltipItem;

const SLOT_ORDER = ['무기', '머리', '가슴', '다리', '손', '발'];

const getPriority = (item: string): number => {
  const index = SLOT_ORDER.findIndex((keyword) => item.includes(keyword));

  return index === -1 ? Infinity : index;
};
