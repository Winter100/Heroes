'use client';

import { NewEquipmentType } from '@/app/_type/equipmentType';
import GrindingPreviewStatContainer from '@/app/_features/preview/components/menubar/grinding/grinding-preview-stat-container';
import ItemUsedAffix from './item-used-affix';
import { getItemInfoOptions } from '@/app/_utils/get/getItemInfoOptions';
import EnchantEffects from '../common/enchant/EnchantEffects';
import EnchantSubTitle from '../common/enchant/EnchantSubTitle';
import Row from '../layout/Row';
import ImageIconUseBorder from '../common/image/ImageIconUseBorder';
import Column from '../layout/Column';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import { useEnchantStore } from '@/app/_store/useEnchantStore';
import ItemTitle from './item-title';
import Item from '../common/item/Item';
import { EnchantGroupByAffix } from '@/app/_type/enchantType';
import { GrindType, ItemSetType } from '@/app/_type/itemType';
import ItemSetOptionBox from './item-setoption-box';
import { useUserEquipment } from '@/app/_hooks';
import Loading from '../common/Loading';
import ErrorApi from '../common/error/ErrorApi';

type Props = {
  item: NewEquipmentType | null;
  ocid: string;
  grind: GrindType[];
  isViewBtn?: boolean;
  isIncreaseView?: boolean;
  enchantsBySlot: EnchantGroupByAffix;
  itemSetOption: ItemSetType[];
};

const ItemEquipmentContainer = ({
  item,
  isViewBtn = false,
  isIncreaseView = false,
  enchantsBySlot,
  itemSetOption,
  grind,
  ocid,
}: Props) => {
  const simulations = useEnchantStore((state) => state.simulations);
  const { isLoading, error, data } = useUserEquipment(ocid, grind);

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="flex h-full items-center justify-center">
        <ErrorApi />
      </div>
    );

  const bagItems =
    data?.item_equipment?.filter((i) => i.item_equipment_page === 'Bag') ?? [];
  if (!item) return <div>아이템 정보가 없습니다</div>;

  const {
    infusion_1,
    infusion_2,
    used_infusion_number,
    prefix_enchant_name_1,
    prefix_enchant_name_2,
    used_prefix_enchant_name,
    used_prefix_enchant_number,
    suffix_enchant_name_1,
    suffix_enchant_name_2,
    used_suffix_enchant_name,
    used_suffix_enchant_number,
    // grade,
  } = getItemInfoOptions(item);

  const beforePrefixEnchant = enchantsBySlot
    .get(item.item_equipment_slot_name)
    ?.prefix.find((e) => e.name === used_prefix_enchant_name);

  const beforeSuffixEnchant = enchantsBySlot
    .get(item.item_equipment_slot_name)
    ?.suffix.find((e) => e.name === used_suffix_enchant_name);

  const src =
    getImageByName(item?.item_name, item?.item_equipment_slot_name) || '';

  const simulationsPrefix = simulations?.[item.item_name]?.prefix?.after;
  const simulationsSuffix = simulations?.[item.item_name]?.suffix?.after;
  const simulationsInfusion = simulations?.[item.item_name]?.infusion?.after;

  const prefixEnchant = simulationsPrefix
    ? simulationsPrefix
    : beforePrefixEnchant;
  const suffixEnchant = simulationsSuffix
    ? simulationsSuffix
    : beforeSuffixEnchant;

  const infusion1Data = infusion_1?.stat_name + infusion_1?.stat_value || '';
  const infusion2Data = infusion_2?.stat_name + infusion_2?.stat_value || '';

  return (
    <div className="flex flex-col gap-2 p-2">
      <Row className="flex items-start gap-2 text-xs">
        <ImageIconUseBorder
          isRatingBorder={true}
          itemName={item?.item_name}
          src={src}
        />
        <Column className="w-full min-w-0 flex-1 gap-0.5 text-zinc-400">
          <ItemTitle
            className="flex items-center gap-1 rounded-sm border px-1 py-0.5"
            tier={'일반'}
            category={'장비'}
            name={item?.item_name}
          >
            {item?.item_option?.enhancement_level && (
              <span>{item?.item_option?.enhancement_level || ''}</span>
            )}
            {prefixEnchant?.name && <span>{prefixEnchant?.name}</span>}
            {suffixEnchant?.name && <span>{suffixEnchant?.name}</span>}
            {item?.item_name && (
              <span className="truncate">{item?.item_name}</span>
            )}
            <Item.SubDescription className="px-1"></Item.SubDescription>
          </ItemTitle>
        </Column>
      </Row>

      {item?.item_option?.tuning_stat?.length >= 1 && (
        <div className="flex flex-col gap-2 p-2">
          {item.item_option.tuning_stat?.map((stat) => (
            <GrindingPreviewStatContainer
              key={stat.stat_name}
              item={item}
              isViewBtn={isViewBtn}
              isIncreaseView={isIncreaseView}
              {...stat}
            />
          ))}
        </div>
      )}

      {(infusion_1?.stat_name ||
        infusion_2?.stat_name ||
        simulationsInfusion) && (
        <ItemUsedAffix
          affix="정령"
          firstValue={
            used_infusion_number === 1 && simulationsInfusion?.name
              ? simulationsInfusion?.name?.toString() || ''
              : infusion1Data
          }
          secondValue={
            used_infusion_number === 2 && simulationsInfusion?.name
              ? simulationsInfusion?.name?.toString() || ''
              : infusion2Data
          }
          usedNumber={used_infusion_number}
        />
      )}

      {(prefix_enchant_name_1 || prefix_enchant_name_2 || prefixEnchant) &&
        used_prefix_enchant_number && (
          <>
            <ItemUsedAffix
              affix="접두"
              firstValue={
                used_prefix_enchant_number === 1
                  ? prefixEnchant?.name?.toString() || ''
                  : prefix_enchant_name_1
              }
              secondValue={
                used_prefix_enchant_number === 2
                  ? prefixEnchant?.name?.toString() || ''
                  : prefix_enchant_name_2
              }
              usedNumber={used_prefix_enchant_number}
            />

            <EnchantSubTitle
              name={prefixEnchant?.name.toString() ?? ''}
              rank={prefixEnchant?.rank.toString() ?? ''}
              type="접두"
            />
            <div className="rounded-md border border-muted p-2">
              <EnchantEffects effects={prefixEnchant?.effects ?? []} />
            </div>
          </>
        )}

      {(suffix_enchant_name_1 || suffix_enchant_name_2 || suffixEnchant) &&
        used_suffix_enchant_number && (
          <>
            <ItemUsedAffix
              affix="접미"
              firstValue={
                used_suffix_enchant_number === 1
                  ? suffixEnchant?.name?.toString() || ''
                  : suffix_enchant_name_1
              }
              secondValue={
                used_suffix_enchant_number === 2
                  ? suffixEnchant?.name?.toString() || ''
                  : suffix_enchant_name_2
              }
              usedNumber={used_suffix_enchant_number}
            />
            <EnchantSubTitle
              name={suffixEnchant?.name.toString() ?? ''}
              rank={suffixEnchant?.rank.toString() ?? ''}
              type="접미"
            />
            <div className="rounded-md border border-muted p-2">
              <EnchantEffects effects={suffixEnchant?.effects ?? []} />
            </div>
          </>
        )}

      <div>
        <ItemSetOptionBox
          item={item}
          itemSetOption={itemSetOption}
          bagItems={bagItems}
        />
      </div>
    </div>
  );
};

export default ItemEquipmentContainer;
