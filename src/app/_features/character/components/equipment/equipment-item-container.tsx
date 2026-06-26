import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import { getItemInfoOptions } from '@/app/_utils/get/getItemInfoOptions';
import { EnchantGroupByAffix } from '@/app/_type/enchantType';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import EquipmentItemEnchant from './equipment-item-enchant';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import Item from '@/app/_components/common/item/Item';
import { cn } from '@/lib/utils';

const EquipmentItemContainer = ({
  item,
  enchants,
}: {
  item: NewEquipmentType;
  enchants: EnchantGroupByAffix;
}) => {
  const {
    used_infusion_name,
    used_prefix_enchant_name,
    used_suffix_enchant_name,
    level,
  } = getItemInfoOptions(item);

  const prefixEnchantRank = Number(
    enchants
      .get(item.item_equipment_slot_name)
      ?.prefix.find((e) => e.name === used_prefix_enchant_name)?.rank
  );

  const suffixEnchantRank = Number(
    enchants
      .get(item.item_equipment_slot_name)
      ?.suffix.find((e) => e.name === used_suffix_enchant_name)?.rank
  );

  const src = getImageByName(item.item_name, item.item_equipment_slot_name);
  return (
    <div className="flex h-full flex-row items-center justify-center">
      <div className="flex h-full w-full flex-col gap-1 text-xs">
        <div className="flex flex-row items-center justify-center">
          {/* 아이템 이미지 */}
          <div className="hidden h-full md:flex md:w-10">
            <ImageIconUseBorder
              isRatingBorder={true}
              itemName={item.item_name}
              src={src}
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1">
              {/* 아이템 접두 인챈트 */}
              {used_prefix_enchant_name && (
                <EquipmentItemEnchant
                  rank={prefixEnchantRank}
                  enchant={used_prefix_enchant_name}
                />
              )}
              {/* 아이템 접미 인챈트 */}
              {used_suffix_enchant_name && (
                <EquipmentItemEnchant
                  rank={suffixEnchantRank}
                  enchant={used_suffix_enchant_name}
                />
              )}
              {/* 정령석 수치 */}
              {used_infusion_name.trim().length > 0 && (
                <div className="text-center">{`(${used_infusion_name})`}</div>
              )}
            </div>
            {/* 강화 수치 + 아이템 이름 */}
            <div className="text-center">
              {level && level} {item.item_name}
            </div>
          </div>
        </div>
        <Item.Border />
        {/* 연마 수치 */}
        {item.item_option.tuning_stat.length > 0 && (
          <div className="flex flex-col text-[11px]">
            {item.item_option.tuning_stat.map((t) => (
              <div
                key={t.stat_name + t.stat_value}
                className={cn(
                  'flex w-full flex-col items-center justify-start md:flex-row',
                  Number(t?.stat_value) >= Number(t?.stat_max_value)
                    ? 'text-blue-300'
                    : 'text-red-300'
                )}
              >
                <div className="truncate">{t.stat_name}</div>
                <div className="md:ml-auto">
                  {t?.stat_value} / {t?.stat_max_value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentItemContainer;
