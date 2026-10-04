'use client';

import { useEnchantStore } from '@/app/_store/useEnchantStore';
import PartholnDialog from './partholn-dialog';
import { EnchantOptionType } from '@/app/_type/enchantType';

const PartholnContainer = ({ partholn }: { partholn: EnchantOptionType[] }) => {
  const simulations = useEnchantStore((state) => state.simulations);
  const setSimulations = useEnchantStore((state) => state.setSimulations);

  const selectData = simulations?.['partholn']?.partholn.before;

  return (
    <PartholnDialog
      partholns={partholn}
      selectData={selectData}
      onClick={setSimulations}
    />
  );
};

export default PartholnContainer;
