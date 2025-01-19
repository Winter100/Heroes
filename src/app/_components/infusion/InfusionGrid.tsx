import { InfusionGridProps } from "@/app/_type/infusionType";
import InfusionGridItem from "./InfusionGridItem";

const InfusionGrid = ({
  infusionList,
  selectedValue,
  selectedHandler,
}: InfusionGridProps) => {
  return (
    <ul className="grid w-full grid-cols-3 gap-3 sm:grid-cols-3">
      {infusionList.map((infusion) => (
        <InfusionGridItem
          key={infusion.stat_name + infusion.stat_value}
          infusion={infusion}
          isSelected={selectedValue === infusion.stat_name}
          selectedHandler={selectedHandler}
        />
      ))}
    </ul>
  );
};

export default InfusionGrid;
