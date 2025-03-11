import InfoGrindingItem from "./InfoGrindingItem";
import { NewTuning_stat } from "@/app/_type/equipmentType";

const convertSlot = (itemName: string) => {
  if (itemName === "+15 오르나 무기") return "Right Hand";
  if (itemName === "+15 오르나 헬름") return "Head";
  if (itemName === "+15 오르나 메일") return "Upper";
  if (itemName === "+15 오르나 그리브즈") return "Lower";
  if (itemName === "+15 오르나 건틀릿") return "Hand";
  if (itemName === "+15 오르나 부츠") return "Leg";
};

const InfoGrindingList = ({
  tuning_stat,
}: {
  itemName: string;
  setName: string;
  slot: string;
  tuning_stat: NewTuning_stat[];
}) => {
  const tuningView = tuning_stat.map((stat) => {
    return {
      ...stat,
      stat_name: stat.stat_name,
      stat_max_value: stat.stat_max_value,
      stat_value: stat.stat_value,
      percentage: Math.floor(
        (parseInt(stat.stat_value) / parseInt(stat.stat_max_value)) * 100,
      ),
    };
  });

  return (
    <ul className="flex flex-col gap-1 px-1">
      {tuningView?.map((stat) => (
        <li key={stat.stat_name}>
          <InfoGrindingItem {...stat} />
        </li>
      ))}
    </ul>
  );
};

export default InfoGrindingList;
// import { oneGrinding } from "@/app/_constant/grinding";
// import InfoGrindingItem from "./InfoGrindingItem";
// import { NewTuning_stat } from "@/app/_type/equipmentType";

// const convertSlot = (itemName: string) => {
//   if (itemName === "+15 오르나 무기") return "Right Hand";
//   if (itemName === "+15 오르나 헬름") return "Head";
//   if (itemName === "+15 오르나 메일") return "Upper";
//   if (itemName === "+15 오르나 그리브즈") return "Lower";
//   if (itemName === "+15 오르나 건틀릿") return "Hand";
//   if (itemName === "+15 오르나 부츠") return "Leg";
// };

// const InfoGrindingList = ({
//   itemName,
//   setName,
//   slot,
//   tuning_stat,
// }: {
//   itemName: string;
//   setName: string;
//   slot: string;
//   tuning_stat: NewTuning_stat[];
// }) => {
//   // const slot = convertSlot(itemName) || ""

//   console.log(tuning_stat);

//   const grindingValue = oneGrinding
//     .find((item) => item.title === setName)
//     ?.item.find((i) => i.item_slot.includes(slot))?.item_value;

//   // max분의 내 스탯까지만 채워지게 바꾸기

//   const maxGrindingValue = grindingValue?.map(
//     ({ stat_name, stat_max_value }) => ({
//       stat_name,
//       stat_max_value: Number(stat_max_value),
//     }),
//   );

//   return (
//     <ul className="flex flex-col gap-1">
//       <div className="flex w-full items-center gap-2">
//         <div className="h-2 w-full flex-1 bg-gray-600">
//           <div
//             ref={progressBarRef}
//             onClick={handleClick}
//             className={`${isView ? "cursor-pointer" : ""} h-2`}
//             style={{
//               width: "100%",
//               background: `linear-gradient(to right,
//           #047857 0%,
//           #047857 ${minPercentage}%,

//           #4ADE80 ${minPercentage}%,
//           #4ADE80 ${reMainPercentage}%,

//           transparent ${reMainPercentage}%,
//           transparent 100%
//         )`,
//             }}
//           ></div>
//         </div>

//         <p className="flex w-8 items-center justify-center">
//           {reMainPercentage}%
//         </p>
//       </div>
//       {/* {maxGrindingValue?.map((stat) => (
//         <li key={stat.stat_name}>
//           <InfoGrindingItem {...stat} />
//         </li>
//       ))} */}
//     </ul>
//   );
// };

// export default InfoGrindingList;
