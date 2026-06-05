'use client';

import { useEnchantStore } from '@/app/_store/useEnchantStore';
import PartholnDialog from './partholn-dialog';
import { usePartholn } from '@/app/_hooks/usePartholn';

// 에러핸들링
const PartholnContainer = () => {
  const { data: partholns } = usePartholn();
  const simulations = useEnchantStore((state) => state.simulations);
  const setSimulations = useEnchantStore((state) => state.setSimulations);

  const data = simulations?.['partholn']?.partholn.before;

  return (
    <PartholnDialog
      partholns={partholns ?? []}
      selectData={data}
      onClick={setSimulations}
    />
  );
};

export default PartholnContainer;
