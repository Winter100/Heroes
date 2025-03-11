import { Stat } from "@/app/_type/previewType";
import Item from "../../common/item/Item";

interface ItemInfusionProps {
  infusion1: Stat;
  infusion2: Stat;
  usedNumber: number;
}

const formatValue = (name: string, value: number | string) => {
  if (value === undefined || value === null) return "";

  const numValue = parseInt(value.toString(), 10);
  if (isNaN(numValue)) return "";

  return numValue > 0 ? `${name}+${numValue}` : `${name}${numValue}`;
};

const ItemInfusion = ({
  infusion1,
  infusion2,
  usedNumber,
}: ItemInfusionProps) => {
  const { stat_name: name1, stat_value: value1 } = infusion1 ?? {
    stat_name: "",
    stat_value: "",
  };
  const { stat_name: name2, stat_value: value2 } = infusion2 ?? {
    stat_name: "",
    stat_value: "",
  };

  return (
    <Item.Description>
      <Item.Selector
        useText1={`${formatValue(name1, parseInt(value1.toString()))}`}
        useText2={`${formatValue(name2, parseInt(value2.toString()))}`}
        usedNumber={usedNumber === 0 ? 2 : usedNumber}
      >
        <span className="text-[11px] text-gray-400">정령</span>
      </Item.Selector>
    </Item.Description>
  );
};

export default ItemInfusion;
