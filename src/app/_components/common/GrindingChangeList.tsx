'use client';
import { useEffect } from 'react';
import GrindingItem from './GrindingItem';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import { usePreviewStore } from '@/app/_store/previewStore';
import clsx from 'clsx';

interface GrindingProps {
  item: NewEquipmentType;
  className?: string;
}

const GrindingChangeList = ({ item, className }: GrindingProps) => {
  const setIncreaseStat = usePreviewStore((state) => state.setIncreaseStat);
  const setDecreaseStat = usePreviewStore((state) => state.setDecreaseStat);
  const setMin = usePreviewStore((state) => state.setMin);
  const setMax = usePreviewStore((state) => state.setMax);

  const setLimit1Zero = usePreviewStore((state) => state.setLimit1Zero);
  const setLimit2Zero = usePreviewStore((state) => state.setLimit2Zero);

  const newTuning = item.item_option.tuning_stat?.map((stat, _, arr) => {
    if (stat.stat_name === '해제') {
      if (item.item_name.includes('와드네')) {
        return {
          ...stat,
          isView: true,
        };
      } else {
        const allOtherStatsMatch =
          arr
            .filter((s) => s.stat_name !== '해제' && s.stat_name !== '해제 2')
            .every((s) => s.stat_max_value === s.stat_value) &&
          Number(item.item_option.enhancement_level) >= 13;
        return {
          ...stat,
          isView: allOtherStatsMatch,
        };
      }
    } else if (stat.stat_name === '해제 2') {
      // const limit1 = arr.find((s) => s.stat_name === "해제");
      // const isLimitTrue = limit1?.stat_max_value === limit1?.stat_value;
      const isLimitTrue = arr
        .filter((s) => s.stat_name !== '해제 2')
        .every((s) => s.stat_max_value === s.stat_value);
      return {
        ...stat,
        isView: isLimitTrue,
      };
    } else {
      return { ...stat, isView: true };
    }
  });

  const isLimit1Every = newTuning
    ?.filter(
      (stat) => stat?.stat_name !== '해제' && stat?.stat_name !== '해제 2'
    )
    .every((s) => s?.stat_max_value === s?.stat_value);

  const isLimit2Every = item.item_option.tuning_stat
    ?.filter((stat) => stat.stat_name !== '해제 2')
    .every((s) => s.stat_max_value === s.stat_value);

  useEffect(() => {
    if (!item.item_name.includes('와드네') && !isLimit1Every) {
      setLimit1Zero(item.item_equipment_slot_name);
    }
  }, [
    item.item_equipment_slot_name,
    item.item_name,
    isLimit1Every,
    setLimit1Zero,
  ]);

  useEffect(() => {
    if (!isLimit2Every) {
      setLimit2Zero(item.item_equipment_slot_name);
    }
  }, [item.item_equipment_slot_name, isLimit2Every, setLimit2Zero]);

  return (
    <div
      className={clsx(
        'flex w-full cursor-default flex-col gap-2 p-1 md:gap-4',
        className
      )}
    >
      {/* <div className="flex w-full cursor-default flex-col gap-2 p-1 md:gap-4"> */}
      {newTuning?.map((stat) => (
        <GrindingItem
          key={stat.stat_name}
          slot={item.item_equipment_slot_name}
          onIncrease={() =>
            setIncreaseStat(item.item_equipment_slot_name, stat.stat_name)
          }
          onDecrease={() =>
            setDecreaseStat(item.item_equipment_slot_name, stat.stat_name)
          }
          onMin={() => setMin(item.item_equipment_slot_name, stat.stat_name)}
          onMax={() => setMax(item.item_equipment_slot_name, stat.stat_name)}
          {...stat}
        />
      ))}
    </div>
  );
};

export default GrindingChangeList;
// "use client";
// import { useEffect } from "react";
// import GrindingItem from "./GrindingItem";
// import { NewEquipmentType } from "@/app/_type/equipmentType";
// import { usePreviewStore } from "@/app/_store/previewStore";
// import clsx from "clsx";

// interface GrindingProps {
//   item: NewEquipmentType;
//   className?: string;
// }

// const GrindingList = ({ item, className }: GrindingProps) => {
//   const setIncreaseStat = usePreviewStore((state) => state.setIncreaseStat);
//   const setDecreaseStat = usePreviewStore((state) => state.setDecreaseStat);
//   const setMin = usePreviewStore((state) => state.setMin);
//   const setMax = usePreviewStore((state) => state.setMax);

//   const setLimit1Zero = usePreviewStore((state) => state.setLimit1Zero);
//   const setLimit2Zero = usePreviewStore((state) => state.setLimit2Zero);

//   const newTuning = item.item_option.tuning_stat?.map((stat, _, arr) => {
//     if (stat.stat_name === "해제") {
//       if (item.item_name.includes("와드네")) {
//         return {
//           ...stat,
//           isView: true,
//         };
//       } else {
//         const allOtherStatsMatch =
//           arr
//             .filter((s) => s.stat_name !== "해제" && s.stat_name !== "해제 2")
//             .every((s) => s.stat_max_value === s.stat_value) &&
//           Number(item.item_option.enhancement_level) >= 13;
//         return {
//           ...stat,
//           isView: allOtherStatsMatch,
//         };
//       }
//     } else if (stat.stat_name === "해제 2") {
//       // const limit1 = arr.find((s) => s.stat_name === "해제");
//       // const isLimitTrue = limit1?.stat_max_value === limit1?.stat_value;
//       const isLimitTrue = arr
//         .filter((s) => s.stat_name !== "해제 2")
//         .every((s) => s.stat_max_value === s.stat_value);
//       return {
//         ...stat,
//         isView: isLimitTrue,
//       };
//     } else {
//       return { ...stat, isView: true };
//     }
//   });

//   const isLimit1Every = newTuning
//     ?.filter(
//       (stat) => stat?.stat_name !== "해제" && stat?.stat_name !== "해제 2",
//     )
//     .every((s) => s?.stat_max_value === s?.stat_value);

//   const isLimit2Every = item.item_option.tuning_stat
//     ?.filter((stat) => stat.stat_name !== "해제 2")
//     .every((s) => s.stat_max_value === s.stat_value);

//   useEffect(() => {
//     if (!item.item_name.includes("와드네") && !isLimit1Every) {
//       setLimit1Zero(item.item_equipment_slot_name);
//     }
//   }, [
//     item.item_equipment_slot_name,
//     item.item_name,
//     isLimit1Every,
//     setLimit1Zero,
//   ]);

//   useEffect(() => {
//     if (!isLimit2Every) {
//       setLimit2Zero(item.item_equipment_slot_name);
//     }
//   }, [item.item_equipment_slot_name, isLimit2Every, setLimit2Zero]);

//   return (
//     <div
//       className={clsx(
//         "flex w-full cursor-default flex-col gap-2 p-1 md:gap-4",
//         className,
//       )}
//     >
//       {/* <div className="flex w-full cursor-default flex-col gap-2 p-1 md:gap-4"> */}
//       {newTuning?.map((stat) => (
//         <GrindingItem
//           key={stat.stat_name}
//           slot={item.item_equipment_slot_name}
//           onIncrease={() =>
//             setIncreaseStat(item.item_equipment_slot_name, stat.stat_name)
//           }
//           onDecrease={() =>
//             setDecreaseStat(item.item_equipment_slot_name, stat.stat_name)
//           }
//           onMin={() => setMin(item.item_equipment_slot_name, stat.stat_name)}
//           onMax={() => setMax(item.item_equipment_slot_name, stat.stat_name)}
//           {...stat}
//         />
//       ))}
//     </div>
//   );
// };

// export default GrindingList;
