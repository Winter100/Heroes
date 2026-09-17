'use client';

import { useEnchantStore } from '@/app/_store/useEnchantStore';
import PartholnDialog from './partholn-dialog';
import { usePreviewAllData } from '@/app/_hooks';

const PartholnContainer = () => {
  const { partholn } = usePreviewAllData();
  const simulations = useEnchantStore((state) => state.simulations);
  const setSimulations = useEnchantStore((state) => state.setSimulations);

  const data = simulations?.['partholn']?.partholn.before;

  return (
    <PartholnDialog
      partholns={partholn.data ?? []}
      selectData={data}
      onClick={setSimulations}
    />
  );
};

export default PartholnContainer;
