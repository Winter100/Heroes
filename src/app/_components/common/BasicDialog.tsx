"use client";

import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import React from "react";
import Button from "./Button";

interface BasicDialogProps {
  children: React.ReactNode;
  label: React.ReactNode;
  size: string;
}

const BasicDialog = ({
  children,
  label = "",
  size = "1000px",
}: BasicDialogProps) => {
  const { isOpen, setIsOpen, onOpen } = useDialog();

  const panelClassName = `relative mx-auto mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:mx-6 sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-[${size}]`;

  return (
    <>
      <Button
        className="h-full w-full flex-1 rounded-none border-none"
        onClick={onOpen}
      >
        {label}
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
            <DialogPanel
              transition
              style={{ maxWidth: size }}
              className={panelClassName}
            >
              <div className="bg-backgroundOne px-4 pb-4 pt-5 md:p-6 md:pb-4">
                <div className="flex w-full items-center justify-end">
                  <button onClick={() => setIsOpen(false)}>X</button>
                </div>
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default BasicDialog;
// "use client";

// import { useDialog } from "@/app/_hooks/useDialog/useDialog";
// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
// import Button from "../Button";

// interface BasicDialogProps {
//   children: React.ReactNode;
//   label: string;
//   // isOpen: boolean;
//   // setIsOpen: (value: boolean) => void;
// }

// const BasicDialog = ({ children, label }: BasicDialogProps) => {
//   const { isOpen, setIsOpen, onOpen } = useDialog();
//   return (
//     <>
//       <Button onClick={onOpen}>{label}</Button>
//       <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
//         />

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
//             <DialogPanel
//               transition
//               className="relative mx-auto mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:mx-6 sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-[800px]"
//             >
//               <div className="bg-backgroundOne px-4 pb-4 pt-5 md:p-6 md:pb-4">
//                 <div className="flex w-full items-center justify-start lg:justify-end">
//                   <button onClick={() => setIsOpen(false)}>X</button>
//                 </div>
//                 {children}
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default BasicDialog;
