import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useModalContext } from "./util/useModalContext";

const ModalBody = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = useModalContext();
  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className="relative z-10 h-full w-full"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto px-4 md:px-0">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
          <DialogPanel
            transition
            className="relative mx-auto mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:min-h-[460px] sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="h-96 overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-full md:p-6 md:pb-4">
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalBody;
