import { InfusionGroupProps } from "@/app/_type/infusionType";
import InfusionGrid from "./InfusionGrid";

const InfusionGroup = ({
  title,
  infusionList,
  selectedHandler,
  selectedValue,
}: InfusionGroupProps) => {
  return (
    <li className="my-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <InfusionGrid
        infusionList={infusionList}
        selectedHandler={selectedHandler}
        selectedValue={selectedValue}
      />
    </li>
  );
};

export default InfusionGroup;
