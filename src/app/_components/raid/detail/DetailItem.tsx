import BeforeAndAfter from "@/app/_components/common/beforeAndAfter/BeforeAndAfter";
import Row from "@/app/_components/layout/Row";
import { EquipmentType } from "@/app/_type/equipmentType";

const DetailItem = ({ item }: { item: EquipmentType }) => {
  const item_name = item?.item_name;
  const item_level = item?.item_option.enhancement_level;
  const item_prefix =
    item?.item_option.prefix_enchant_use_preset_no === 1
      ? item.item_option.prefix_enchant_preset_1
      : item.item_option.prefix_enchant_preset_2;
  const item_suffix =
    item?.item_option.suffix_enchant_use_preset_no === 1
      ? item.item_option.suffix_enchant_preset_1
      : item.item_option.suffix_enchant_preset_2;
  // const item_infusion =
  //   item?.item_option.power_infusion_use_preset_no === 1
  //     ? item.item_option.power_infusion_preset_1
  //     : item.item_option.power_infusion_preset_2;

  return (
    <Row className="h-8 gap-2 p-2 font-normal">
      <BeforeAndAfter className="flex-1 items-center justify-center">
        <BeforeAndAfter.Title className="w-full gap-1">
          <p>{item_level ?? ""}</p>
          <p>{item_prefix ?? ""}</p>
          <p>{item_suffix ?? ""}</p>
          <p>{item_name ?? ""}</p>
        </BeforeAndAfter.Title>
      </BeforeAndAfter>
    </Row>
  );
};

export default DetailItem;
