import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import GrindingPreviewStatContainer from './grinding-preview-stat-container';
import Ingredient from '../ingredient/ingredient';
import RaidSelectorAndPreviewStatsContainer from '@/app/_components/common/enchant/raid-selector-and-preview-stats-container';

interface Props {
  items: NewEquipmentType[];
  ocid: string;
}

const GrindingDialog = ({ items, ocid }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs" variant="outline">
          연마
        </Button>
      </DialogTrigger>
      <DialogContent className="dark max-h-96 max-w-3xl overflow-y-auto border-none bg-zinc-900 text-white sm:max-h-[950px]">
        <DialogHeader>
          <DialogTitle className="text-center">연마</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.item_name}
              className="dark rounded-lg bg-background p-2"
            >
              <div className="text-center text-sm">
                {item?.item_option?.enhancement_level} {item.item_name}
              </div>
              {item.item_option.tuning_stat?.map((stat) => (
                <GrindingPreviewStatContainer
                  key={stat.stat_name}
                  item={item}
                  {...stat}
                />
              ))}
            </div>
          ))}
        </div>

        <Ingredient items={items} />
        <RaidSelectorAndPreviewStatsContainer ocid={ocid} />
      </DialogContent>
    </Dialog>
  );
};

export default GrindingDialog;
