import { memo } from 'react';
import { Item_Rating } from '@/app/_type/infoInfoType';
import Item from '../../common/item/Item';
import Itemrestrictions from './Itemrestrictions';
import InfoGrindingList from '../grinding/InfoGrindingList';
import ItemInfusion from './ItemInfusion';
import ItemEnchantBox from '../ItemEnchantBox';
import ItemSet from './ItemSet';
import { NewTuning_stat } from '@/app/_type/equipmentType';
import Row from '../../layout/Row';
import ImageIconUseBorder from '../../common/ImageIconUseBorder';
import { getTooltipImageSrc } from '@/app/_utils/getTooltipImageSrc';
import Column from '../../layout/Column';
import { formatStringArray } from '@/app/_utils/formatStringArray';
import { Stat } from '@/app/_type/previewType';
import ItemStats from './ItemStats';

interface ItemInfoProps {
  itemName: string;
  slot: string;
  level?: string;
  prefixEnchantName?: string;
  suffixEnchantName?: string;
  category?: string[];
  restrictions?: string[];
  description?: string;
  setName?: string;
  tuning_stat?: NewTuning_stat[];
  isInfusions?: boolean;
  infustionName?: string;
  usableInfusionListLength?: number;
  infusion1?: Stat;
  infusion2?: Stat;
  used_infusion_number?: number;
  itemRating?: Item_Rating;
  used_prefix_enchant_number?: number;
  used_suffix_enchant_number?: number;
  prefix_enchant_name_1: string;
  prefix_enchant_name_2: string;
  prefixRank?: string;
  prefixValue: Stat[];
  suffixRank?: string;
  suffixValue?: Stat[];
  suffix_enchant_name_1?: string;
  suffix_enchant_name_2?: string;
  set?: string;
  newTuningStats?: NewTuning_stat[] | null;
  newMergedStats?: Stat[] | null;
}

const ItemInfo = memo(
  ({
    itemName,
    slot,
    category,
    level,
    prefixEnchantName,
    suffixEnchantName,
    description,
    restrictions,
    setName,
    tuning_stat,
    isInfusions,
    infustionName,
    usableInfusionListLength = 0,
    infusion1,
    infusion2,
    used_infusion_number,
    prefixRank,
    prefixValue,
    suffixRank,
    suffixValue,
    prefix_enchant_name_1,
    prefix_enchant_name_2,
    used_prefix_enchant_number,
    itemRating = '일반',
    suffix_enchant_name_1,
    suffix_enchant_name_2,
    used_suffix_enchant_number,
    set,
    newTuningStats,
    newMergedStats,
  }: ItemInfoProps) => {
    const src = getTooltipImageSrc(itemName, slot);

    return (
      <Item className="flex w-full flex-col gap-1">
        <Row className="flex items-start gap-2 text-xs">
          <ImageIconUseBorder
            isRatingBorder={true}
            itemName={itemName}
            src={src}
          />
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

        {newMergedStats && <ItemStats mergedStats={newMergedStats} />}

        {restrictions && (
          <>
            <Itemrestrictions restrictions={restrictions} />
            <Item.Border />
          </>
        )}

        {description && (
          <>
            <Item.Description>
              <Item.Content className="text-[rgb(189,164,123)]">
                {description}
              </Item.Content>
            </Item.Description>
            <Item.Border />
          </>
        )}

        {tuning_stat && (
          <>
            <InfoGrindingList
              itemName={itemName || ''}
              slot={slot || ''}
              setName={setName || ''}
              tuning_stat={tuning_stat}
            />
            <Item.Border />
          </>
        )}

        {newTuningStats && (
          <>
            <InfoGrindingList
              itemName={itemName || ''}
              slot={slot || ''}
              setName={set || ''}
              tuning_stat={newTuningStats || []}
            />
            <Item.Border />
          </>
        )}

        {infustionName && isInfusions && usableInfusionListLength > 1 && (
          <ItemInfusion
            infusion1={infusion1}
            infusion2={infusion2}
            usedNumber={used_infusion_number}
          />
        )}

        {prefixEnchantName && (
          <ItemEnchantBox
            title="접두"
            useText1={prefix_enchant_name_1 ?? ''}
            useText2={prefix_enchant_name_2 ?? ''}
            useNumber={used_prefix_enchant_number ?? 0}
            usedEnchantName={prefixEnchantName ?? ''}
            existingEnchantRank={prefixRank ?? ''}
            existingEnchantValue={prefixValue ?? null}
          />
        )}

        {suffixEnchantName && (
          <ItemEnchantBox
            title="접미"
            useText1={suffix_enchant_name_1 ?? ''}
            useText2={suffix_enchant_name_2 ?? ''}
            useNumber={used_suffix_enchant_number ?? 0}
            usedEnchantName={suffixEnchantName}
            existingEnchantRank={suffixRank ?? ''}
            existingEnchantValue={suffixValue ?? null}
          />
        )}
        {set && <ItemSet set={set} />}
      </Item>
    );
  }
);

export default ItemInfo;

ItemInfo.displayName = 'ItemInfo';
