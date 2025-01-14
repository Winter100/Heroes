import { InfusionGridItemProps } from "@/app/_type/infusionType";
import Column from "../layout/Column";
import InfusionImageAndTitle from "./InfusionImageAndTitle";
import InfusionValues from "./InfusionValues";

const InfusionGridItem = ({
  infusion,
  isSelected,
  selectedHandler,
}: InfusionGridItemProps) => {
  return (
    <li
      onClick={() => {
        selectedHandler(infusion.stat_name, infusion.stat_value);
      }}
      // onDoubleClick={() => setOpenModal(false)}
      className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
      key={infusion?.stat_name + infusion.stat_value}
    >
      <Column
        className={`${isSelected ? "text-blue-300" : "text-zinc-400 hover:text-gray-200"} h-full w-full gap-2 rounded-lg bg-zinc-800 p-2 font-mono text-xs`}
      >
        <InfusionImageAndTitle infusionName={infusion.stat_name} />
        <InfusionValues infusionValue={infusion.stat_value} />
      </Column>
    </li>
  );
};

export default InfusionGridItem;
