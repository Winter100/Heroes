import { InfusionValuesProps } from "@/app/_type/infusionType";
import Column from "../layout/Column";

const InfusionValues = ({ infusionValue }: InfusionValuesProps) => {
  return (
    <Column className="min-h-24 flex-1 rounded-md border border-borderColor p-1 text-[11px]">
      {infusionValue.map((infusion) => (
        <div
          className="flex items-center px-1"
          key={infusion.stat_name + infusion.stat_value}
        >
          <p className="flex justify-start">{infusion.stat_name}</p>
          <p className="flex flex-1 items-center justify-end">
            {infusion.stat_value}
          </p>
        </div>
      ))}
    </Column>
  );
};

export default InfusionValues;
