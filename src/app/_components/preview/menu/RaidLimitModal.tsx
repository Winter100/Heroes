"use client";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import TableList from "../table/TableList";
import Button from "../../common/Button";

const RaidLimitModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="w-12 text-xs" onClick={() => setOpen((pre) => !pre)}>
        종합
      </Button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          {/* <div className="fixed inset-0 z-10  w-screen overflow-y-auto"> */}
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
            <DialogPanel
              transition
              className="relative mx-2 mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne px-2 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-[1500px]"
            >
              <div className="w-full bg-backgroundOne pb-4 pt-5 md:p-2 md:pb-4">
                <div className="flex w-full items-center justify-start lg:justify-end">
                  <button onClick={() => setOpen(false)}>X</button>
                </div>
                <TableList />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default RaidLimitModal;

// <div className="flex h-full w-full flex-col">
//   {raidEntryList.map((r) => (
//     <div key={r.raid_name} className="relative">
//       <button
//         onClick={() => raidOnclick(r.raid_name)}
//         className={`h-8 w-full ${activeRaid === r.raid_name ? "text-blue-300" : ""} rounded-lg hover:bg-zinc-700`}
//       >
//         {r.raid_name}
//       </button>
//       {/* 하위 메뉴: 몬스터 이름 렌더링 */}
//       {activeRaid === r.raid_name && (
//         <div className="absolute left-32 top-0 z-20 w-28 rounded-lg bg-black">
//           {r.monsters.map((monster) => (
//             <button
//               onClick={() => setSelectBoss(r?.raid_name, monster?.name)}
//               key={monster.name}
//               className={`${selectedBoss?.name === monster?.name ? "text-blue-300" : "text-white"} h-8 w-full rounded-lg hover:bg-zinc-700`}
//             >
//               {monster.name}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   ))}
// </div>;
