import { memo } from 'react';
import { ItemType } from '@/app/_type/infoInfoType';
import { formatStringArray } from '@/app/_utils/formatStringArray';
import { getImageByName } from '@/app/_utils/getImageByName';
import { getGradeValue } from '@/app/_utils/getStatsByLevel';
import { oneGrinding } from '@/app/_constant/grinding';
import Item from '../../common/item/Item';
import Row from '../../layout/Row';
import Column from '../../layout/Column';
import ItemStats from './ItemStats';
import Itemrestrictions from './Itemrestrictions';
import ItemQuality from './ItemQuality';
import InfoGrindingList from '../grinding/InfoGrindingList';
import ItemSet from './ItemSet';
import ImageIconUseBorder from '../../common/ImageIconUseBorder';
import { craftingStatsMerge } from '../util/craftingStatsMerge';

const ItemCreaftingInfo = memo(
  ({
    category,
    name,
    rating,
    description,
    grinding,
    restrictions,
    set = '',
    enhancement_options,
    quality,
    slot = '',
  }: ItemType) => {
    const item_stage = getGradeValue(name);
    const mergedStats = enhancement_options?.[item_stage];
    const grindingItem = oneGrinding
      .find((item) => item.title === set)
      ?.item.find((i) => i.item_slot.includes(slot));

    const newTuningStats = grindingItem?.item_value.map((stat) => {
      if (stat.stat_name === '해제') {
        return {
          ...stat,
          stat_name: stat.stat_name,
          stat_min_value: '0',
          stat_value: '0',
        };
      }

      return {
        ...stat,
        stat_name: stat.stat_name,
        stat_min_value: stat.stat_max_value,
        stat_value: stat.stat_max_value,
      };
    });

    const newMergedStats = craftingStatsMerge(
      mergedStats || [],
      newTuningStats || []
    ).filter((stat) => stat.stat_value);

    return (
      <Item className="flex w-full flex-col gap-1">
        <Row className="flex flex-row gap-2 text-xs">
          <ImageIconUseBorder
            className="w-12"
            isRatingBorder={true}
            itemName={name}
            src={getImageByName(name)}
          />
          <Column className="w-full gap-0.5 text-zinc-400">
            <Item.Title className="flex flex-row gap-1" type={rating}>
              <span>{name}</span>
            </Item.Title>
            <Item.SubDescription className="flex flex-row gap-1 px-1">
              {formatStringArray(category)}
            </Item.SubDescription>
            <Item.SubDescription className="px-1">
              <Item.Title className="text-[11px]" type={rating}>
                {rating} 아이템
              </Item.Title>
            </Item.SubDescription>
          </Column>
        </Row>

        {newMergedStats && <ItemStats mergedStats={newMergedStats} />}

        {restrictions && <Itemrestrictions restrictions={restrictions} />}

        {quality && <ItemQuality quality={quality} />}

        {description && (
          <>
            <Item.Border />
            <Item.Description>
              <Item.Content className="text-[rgb(189,164,123)]">
                {description}
              </Item.Content>
            </Item.Description>
          </>
        )}

        {grinding && (
          <>
            <Item.Border />
            <InfoGrindingList
              itemName={name || ''}
              slot={slot || ''}
              setName={set || ''}
              tuning_stat={newTuningStats || []}
            />
          </>
        )}

        {set && <ItemSet set={set} />}
      </Item>
    );
  }
);

export default ItemCreaftingInfo;

ItemCreaftingInfo.displayName = 'ItemCreaftingInfo';
