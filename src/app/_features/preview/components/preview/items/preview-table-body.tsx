import { NewEquipmentType } from '@/app/_type/equipmentType';
import PreviewItem from './preview-table-item';
import { EnchantOptionType } from '@/app/_type/enchantType';

interface PreviewListProps {
  items: NewEquipmentType[];
  enchantsBySlot: Map<
    string,
    {
      prefix: EnchantOptionType[];
      suffix: EnchantOptionType[];
      infusion: EnchantOptionType[];
    }
  >;
}

const PreviewTableBody = ({ items, enchantsBySlot }: PreviewListProps) => {
  return (
    <ul className="grid grid-rows-17 gap-y-3 rounded-md bg-background px-2 pt-1 sm:gap-y-5">
      {/* 슬롯별로 사용 가능한 인챈트 필터링 */}
      {items?.map((item) => {
        const slot = item.item_equipment_slot_name;
        const {
          prefix = [],
          suffix = [],
          infusion = [],
        } = enchantsBySlot.get(slot) || {};

        return (
          <li key={slot}>
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
