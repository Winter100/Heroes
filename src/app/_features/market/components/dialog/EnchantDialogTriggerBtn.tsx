import Image from 'next/image';
import { getImageByName } from '@/app/_utils/getImageByName';
import { Button } from '@/components/ui/button';
import { CiFilter } from 'react-icons/ci';
import { useEnchantFilterStore } from '../../store/enchantFilterStore';

const EnchantDialogTriggerBtn = ({ ...props }) => {
  const { dropRaidOrItemName: raidName } = useEnchantFilterStore((state) => ({
    dropRaidOrItemName: state.dropRaidOrItemName,
  }));

  const isSelectedFilterValue = raidName === '' || raidName === 'all';

  const content = isSelectedFilterValue ? (
    <CiFilter />
  ) : (
    <div className="flex items-center justify-center">
      <Image
        title="필터"
        className="object-scale-down"
        width={25}
        height={25}
        src={getImageByName(raidName)}
        alt="필터"
      />
    </div>
  );
  return (
    <Button className="w-12 sm:w-20" variant="outline" {...props}>
      {content}
    </Button>
  );
};

export default EnchantDialogTriggerBtn;
