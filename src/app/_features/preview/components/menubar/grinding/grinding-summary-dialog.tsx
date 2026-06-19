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
import GrindingStatContainer from './grinding-stat-container';
import Ingredient from '../ingredient/ingredient';
import PreviewStatsContainer from '@/app/_components/stats/preview-stats-container';
import RaidSelectorContainer from '@/app/_components/selector/raid-selector-container';

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
      <DialogContent className="max-h-96 max-w-3xl overflow-y-auto border-none bg-background text-white sm:max-h-[950px]">
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
              {/* <div className="my-2 flex min-h-8 items-center">
                <div className="mx-auto">
                  {item.item_option.ability_name && <Ability item={item} />}
                  어빌 자리
                </div>
              </div> */}
              {item.item_option.tuning_stat?.map((stat) => (
                <GrindingStatContainer
                  key={stat.stat_name}
                  item={item}
                  {...stat}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="dark">
          <Ingredient items={items} />
          <div className="mx-auto my-2 w-full max-w-72">
            <RaidSelectorContainer />
          </div>
          <PreviewStatsContainer ocid={ocid} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GrindingDialog;
