import Column from "../layout/Column";


interface EnchantDescriptionProps {
  enchantEffects: {
    stat_name: string;
    stat_value: string;
  }[];
}
const EnchantDescription = ({ enchantEffects }: EnchantDescriptionProps) => {
  return (
    <Column className="min-h-24 flex-1 rounded-md border border-borderColor p-1 text-xs">
      {enchantEffects?.map((option) => (
        <div
          className="flex items-center px-1"
          key={option.stat_name + option.stat_value}
        >
          <p className="flex justify-start">{option.stat_name}</p>
          <p className="flex flex-1 items-center justify-end">
            {option.stat_value}
          </p>
        </div>
      ))}
    </Column>
  );
};

export default EnchantDescription;
