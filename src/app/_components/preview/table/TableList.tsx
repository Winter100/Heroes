"use client";
import { useState } from "react";

import Table from "./Table";
import Column from "../../layout/Column";
import { Button } from "@headlessui/react";
import { MonstersType } from "@/app/_constant/raidList";
import { filterRaidList } from "@/app/_utils/filterRaidList";
import Image from "next/image";

const TableList = () => {
  const [entry, setEntry] = useState<"빠른전투" | "상한">("빠른전투");

  const boss = filterRaidList(entry);

  return (
    <Column className="h-full w-full gap-4">
      <div className="flex items-center justify-center gap-4 text-xs">
        <div
          className={
            entry === "빠른전투"
              ? "rounded-lg border border-borderColor text-blue-300"
              : ""
          }
        >
          <Button className="h-8 w-20" onClick={() => setEntry("빠른전투")}>
            빠른전투
          </Button>
        </div>
        <div
          className={
            entry === "상한"
              ? "rounded-lg border border-borderColor text-blue-300"
              : ""
          }
        >
          <Button className="h-8 w-20" onClick={() => setEntry("상한")}>
            상한
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
        {boss.map((item) => (
          <div className="flex flex-col py-2" key={item.raid_name}>
            <div className="flex w-full items-center justify-center text-base text-white">
              <h2>{item.raid_name}</h2>
            </div>
            <div className="flex flex-col gap-1">
              {item.monsters.map((raid) => (
                <div
                  key={raid.name}
                  className="flex flex-col items-center justify-center rounded-lg bg-background py-2"
                >
                  <div className="flex w-40 flex-row items-center gap-2">
                    <Image
                      src={raid?.image ?? ""}
                      width={40}
                      height={24}
                      alt={raid.name}
                      style={{ width: "40px", height: "24px" }}
                    />
                    <p className="flex flex-1 justify-start text-xs text-fontColor text-white">
                      {raid.name}
                    </p>
                  </div>
                  <Table boss={raid as MonstersType} bossEntry={entry} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
};

export default TableList;
// "use client";
// import { useState } from "react";

// import Table from "./Table";
// import Column from "../../layout/Column";
// import { Button } from "@headlessui/react";
// import { MonstersType } from "@/app/_constant/raidList";
// import { filterRaidList } from "@/app/_utils/filterRaidList";

// const TableList = () => {
//   const [entry, setEntry] = useState<"빠른전투" | "상한">("빠른전투");

//   const boss = filterRaidList(entry);

//   return (
//     <Column className="h-full w-full gap-4">
//       <div className="flex items-center justify-center gap-4 text-xs">
//         <div
//           className={
//             entry === "빠른전투"
//               ? "rounded-lg border border-borderColor text-blue-300"
//               : ""
//           }
//         >
//           <Button className="h-8 w-20" onClick={() => setEntry("빠른전투")}>
//             빠른전투
//           </Button>
//         </div>
//         <div
//           className={
//             entry === "상한"
//               ? "rounded-lg border border-borderColor text-blue-300"
//               : ""
//           }
//         >
//           <Button className="h-8 w-20" onClick={() => setEntry("상한")}>
//             상한
//           </Button>
//         </div>
//       </div>

//       <div className="flex flex-col gap-1 lg:grid lg:grid-cols-2">
//         {boss.map((item) => (
//           <div className="flex flex-col" key={item.raid_name}>
//             <div className="flex w-full items-center justify-center text-white">
//               <h2>{item.raid_name}</h2>
//             </div>
//             <div className="flex flex-col gap-1">
//               {item.monsters.map((raid) => (
//                 <div
//                   key={raid.name}
//                   className="flex flex-col rounded-lg border border-borderColor py-2"
//                 >
//                   <p className="text-center text-xs text-fontColor">
//                     {raid.name}
//                   </p>
//                   <Table boss={raid as MonstersType} bossEntry={entry} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </Column>
//   );
// };

// export default TableList;
