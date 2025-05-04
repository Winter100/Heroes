import { groupByStatName } from '@/app/_components/infusion/utils/groupByStatName';
import { InfusionsDialogProps } from '@/app/_type/infusionType';
import InfusionGroup from './InfusionGroup';

const InfusionsContent = ({
  infusionList,
  selectedHandler,
  selectedValue,
}: Omit<InfusionsDialogProps, 'label' | 'items'>) => {
  const sortedGroupByStat = Object.keys(groupByStatName(infusionList)).sort(
    (a, b) => a.localeCompare(b)
  );
  return (
    <ul className="my-2 w-full font-sans">
      {sortedGroupByStat.map((title) => (
        <InfusionGroup
          key={title}
          title={title}
          infusionList={groupByStatName(infusionList)[title]}
          selectedValue={selectedValue}
          selectedHandler={selectedHandler}
        />
      ))}
    </ul>
  );
};

export default InfusionsContent;
