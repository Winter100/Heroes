import { useMemo } from 'react';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import PreviewItem from './preview-table-item';
import { enchantsByGroupSlot } from '@/app/_utils/enchant/utils/enchantsByGroupSlot';
import { EnchantOptionType } from '@/app/_type/enchantType';

interface PreviewListProps {
  items: NewEquipmentType[];
  enchantOptions: EnchantOptionType[];
  infusions: EnchantOptionType[];
}

const PreviewTableBody = ({
  items,
  enchantOptions,
  infusions,
}: PreviewListProps) => {
  const enchantsBySlot = useMemo(() => {
    return enchantsByGroupSlot({ enchantOptions, infusions });
  }, [enchantOptions, infusions]);

  return (
    <ul className="grid grid-rows-17 gap-y-3 pt-1 sm:gap-y-5">
      {items?.map((item) => {
        const slotName = item.item_equipment_slot_name;
        const {
          prefix = [],
          suffix = [],
          infusion = [],
        } = enchantsBySlot.get(slotName) || {};

        return (
          <li key={slotName}>
            <PreviewItem
              item={item}
              prefix={prefix}
              suffix={suffix}
              infusion={infusion}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PreviewTableBody;
