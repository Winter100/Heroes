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
    <div className="flex flex-col gap-2 p-2">
      <Row className="flex items-start gap-2 text-xs">
        <ImageIconUseBorder
          isRatingBorder={true}
          itemName={item?.name}
          src={item?.image ?? ''}
        />
        <Column className="w-full min-w-0 flex-1 gap-0.5 text-zinc-400">
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
    </div>
  );
};

export default ItemTooltipItem;
