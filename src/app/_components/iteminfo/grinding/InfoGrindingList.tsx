import { oneGrinding } from "@/app/_constant/grinding";
import InfoGrindingItem from "./InfoGrindingItem";

const convertSlot = (itemName: string) => {
  if (itemName === "+15 오르나 무기") return "Right Hand";
  if (itemName === "+15 오르나 헬름") return "Head";
  if (itemName === "+15 오르나 메일") return "Upper";
  if (itemName === "+15 오르나 그리브즈") return "Lower";
  if (itemName === "+15 오르나 건틀릿") return "Hand";
  if (itemName === "+15 오르나 부츠") return "Leg";
};

const InfoGrindingList = ({
  itemName,
  setName,
}: {
  itemName: string;
  setName: string;
}) => {
  const slot = convertSlot(itemName) || "";

  const grindingValue = oneGrinding
    .find((item) => item.title === setName)
    ?.item.find((i) => i.item_slot.includes(slot))?.item_value;

  const maxGrindingValue = grindingValue?.map(
    ({ stat_name, stat_max_value }) => ({
      stat_name,
      stat_max_value: Number(stat_max_value),
    }),
  );

  return (
    <ul className="flex flex-col gap-1">
      {maxGrindingValue?.map((stat) => (
        <li key={stat.stat_name}>
          <InfoGrindingItem {...stat} />
        </li>
      ))}
    </ul>
  );
};

export default InfoGrindingList;
