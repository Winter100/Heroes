import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getImageByName } from '@/app/_utils/get/getImageByName';
import { Button } from '@/components/ui/button';
import { CiFilter } from 'react-icons/ci';

const EnchantDialogTriggerBtn = ({
  raidName,
  ...props
}: {
  raidName: string;
}) => {
  const isSelectedFilterValue = raidName === '' || raidName === 'all';

  const content = isSelectedFilterValue ? (
    <CiFilter />
  ) : (
    <div className="flex items-center justify-center" title="필터">
      <ImageIcon
        className="h-5 w-5"
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
