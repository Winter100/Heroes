import { InfusionsDialogProps } from '@/app/_type/infusionType';
import InfusionGridItem from './InfusionGridItem';

const InfusionGrid = ({
  infusionList,
  selectedValue,
  selectedHandler,
}: Omit<InfusionsDialogProps, 'label' | 'items'>) => {
  return (
    <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-auto-fill">
      {infusionList.map((infusion) => (
        <InfusionGridItem
          key={infusion.name + infusion.stat_value}
          infusion={infusion}
          isSelected={selectedValue === infusion.name}
          selectedHandler={selectedHandler}
        />
      ))}
    </ul>
  );
};

export default InfusionGrid;
