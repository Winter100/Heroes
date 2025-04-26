import { createContext, Dispatch, SetStateAction } from 'react';
import ModalOpenBtn from './ModalOpenBtn';
import ModalBody from './ModalBody';
import ModalCloseBtn from './ModalCloseBtn';

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

interface ContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as ContextType);

const Modal = ({ children, open, setOpen }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default Modal;

Modal.Open = ModalOpenBtn;
Modal.Close = ModalCloseBtn;
Modal.Body = ModalBody;
