'use client';
import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';

interface BasicDialogProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size: string;
  className?: string;
}

const BasicDialog = ({
  children,
  isOpen,
  onClose,
  size = '1000px',
  className,
}: BasicDialogProps) => {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:p-0 md:items-center">
            <DialogPanel
              transition
              style={{ maxWidth: size }}
              className={clsx(
                `relative mx-auto mb-6 w-full transform overflow-hidden rounded-lg bg-backgroundOne px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:mx-6 sm:my-8 sm:max-w-[1000px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:p-6 md:pb-4 md:max-w-[${size}]`,
                className
              )}
            >
              <div>
                {/* <div
                className={clsx(
                  "h-[500px] overflow-y-auto bg-backgroundOne px-4 pb-4 pt-5 sm:h-[550px] md:h-[700px] md:p-6 md:pb-4",
                  inDiaClassName,
                )}
              > */}
                <div className="flex w-full items-center justify-end">
                  <button onClick={onClose}>X</button>
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
