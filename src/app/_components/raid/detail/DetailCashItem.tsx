import BeforeAndAfter from "@/app/_components/common/beforeAndAfter/BeforeAndAfter";
import Row from "@/app/_components/layout/Row";
import { EquipmentType } from "@/app/_type/equipmentType";

const DetailCashItem = ({ item }: { item: EquipmentType }) => {
  const item_name = item.item_name;
  const cash_item_color_1 = item.item_option.cash_item_color.color_1;
  const cash_item_color_2 = item.item_option.cash_item_color.color_3;
  const cash_item_color_3 = item.item_option.cash_item_color.color_1;

  return (
    <Row className="h-8 gap-2 p-2 font-normal">
      <BeforeAndAfter className="flex-1" title={item_name}>
        <BeforeAndAfter.Title>
          <div className="w-12 truncate sm:w-40">{item_name}</div>
        </BeforeAndAfter.Title>
      </BeforeAndAfter>

      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title className="flex flex-row gap-1">
          <p
            className="h-3 w-3"
            style={{
              backgroundColor: `rgb(${cash_item_color_1})`,
              borderRadius: "50%",
            }}
          ></p>
          <p> {cash_item_color_1 ?? ""}</p>
        </BeforeAndAfter.Title>
      </BeforeAndAfter>
      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title className="flex flex-row gap-1">
          <p
            className="h-3 w-3"
            style={{
              backgroundColor: `rgb(${cash_item_color_2})`,
              borderRadius: "50%",
            }}
          ></p>
          <p> {cash_item_color_2 ?? ""}</p>
        </BeforeAndAfter.Title>
      </BeforeAndAfter>
      <BeforeAndAfter className="flex-1">
        <BeforeAndAfter.Title className="flex flex-row gap-1">
          <p
            className="h-3 w-3"
            style={{
              backgroundColor: `rgb(${cash_item_color_3})`,
              borderRadius: "50%",
            }}
          ></p>
          <p> {cash_item_color_3 ?? ""}</p>
        </BeforeAndAfter.Title>
      </BeforeAndAfter>
    </Row>
  );
};

export default DetailCashItem;
