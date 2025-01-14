import { InfusionsContentProps } from "@/app/_type/infusionType";
import InfusionGroup from "../../infusion/InfusionGroup";
import { groupByStatName } from "../../infusion/utils/groupByStatName";

const InfusionsContent = ({
  infusionList,
  selectedHandler,
  selectedValue,
}: InfusionsContentProps) => {
  const sortedGroupByStat = Object.keys(groupByStatName(infusionList)).sort(
    (a, b) => a.localeCompare(b),
  );
  return (
    <ul className="my-2 w-full">
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
