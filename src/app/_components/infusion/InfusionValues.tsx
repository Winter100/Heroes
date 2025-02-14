import { InfusionValuesProps } from "@/app/_type/infusionType";
import Column from "../layout/Column";

const InfusionValues = ({ infusionValue }: InfusionValuesProps) => {
  return (
    <Column className="min-h-24 flex-1 rounded-md border border-borderColor bg-black/20 p-1 font-sans text-xs">
      {infusionValue.map((infusion) => (
        <div
          className="flex items-center gap-1 px-1"
          key={infusion.stat_name + infusion.stat_value}
        >
          <p className="flex justify-start">• {infusion.stat_name}</p>
          <p className="flex flex-1 items-center">{infusion.stat_value}</p>
        </div>
      ))}
    </Column>
  );
};

export default InfusionValues;
