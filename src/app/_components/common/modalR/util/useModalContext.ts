import { useContext } from 'react';
import { ModalContext } from '../Modal';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('범위 내에서 사용해 주세요.');
  }

  return context;
};
