import { useRef } from "react";

interface InfoGrindingItemProps {
  stat_name: string;
  stat_max_value: string;
  percentage: number;
  stat_value: string;
  stat_min_value: string;
}
const InfoGrindingItem = ({
  percentage,
  stat_max_value,
  stat_value,
  stat_name,
  stat_min_value,
}: InfoGrindingItemProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const increaseValue = Math.ceil(Number(stat_value) - Number(stat_min_value));

  const minPercentage = Math.ceil(
    (Number(stat_min_value) / Number(stat_max_value)) * 100,
  );
  const reMainPercentage = Math.ceil(
    (Number(stat_value) / Number(stat_max_value)) * 100,
  );

  return (
    <div className="flex w-full flex-col text-[11px] text-gray-400">
      <div className="flex flex-row gap-2">
        <span>{stat_name}</span>
        <span>
          ( {stat_value} / {stat_max_value} )
        </span>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="h-1.5 w-full flex-1 bg-gray-600">
          <div
            ref={progressBarRef}
            className="h-1.5 cursor-pointer"
            style={{
              width: "100%",
              background: `linear-gradient(to right, 
            #047857 0%, 
            #047857 ${minPercentage}%, 
            
            #4ADE80 ${minPercentage}%,
            #4ADE80 ${reMainPercentage}%, 
            
            transparent ${reMainPercentage}%,
            transparent 100%
            )`,
            }}
          ></div>
        </div>

        <p className="flex w-10 items-center justify-center">
          {reMainPercentage} %
        </p>
      </div>
    </div>
  );
};

export default InfoGrindingItem;
// import clsx from "clsx";

// interface InfoGrindingItemProps {
//   stat_name: string;
//   stat_max_value: number;
// }
// const InfoGrindingItem = ({
//   stat_max_value,
//   stat_name,
// }: InfoGrindingItemProps) => {
//   return (
//     <div className="flex w-full flex-col gap-0.5 px-2">
//       <div className="flex flex-row text-[11px] text-zinc-400">
//         <span className="">{stat_name}</span>
//         <div className="flex items-center pl-1">
//           <span>
//             ( {stat_name === "해제" ? 0 : stat_max_value} / {stat_max_value} )
//           </span>
//         </div>
//       </div>
//       <div className="h-2 pr-4">
//         <div
//           className={clsx(
//             "h-full w-full",
//             stat_name === "해제" ? "bg-gray-600" : "bg-green-600",
//           )}
//         />
//       </div>
//     </div>
//   );
// };

// export default InfoGrindingItem;
