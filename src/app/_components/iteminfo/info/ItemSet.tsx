import { usePreviewStore } from '@/app/_store/previewStore';
import { getItemSetOptions } from '../util/getItemSetOptions';
import Item from '../../common/item/Item';
import { useQuery } from '@tanstack/react-query';
import { getEquipment } from '@/app/_services/getEquipment';
import { useOcid } from '@/app/_hooks/useOcid/useOcid';
import { Item_equipment } from '@/app/_type/equipmentType';
import Loading from '../../common/Loading';
import { cn } from '@/lib/utils';

interface ItemSetProps {
  set: string;
}

const ItemSet = ({ set }: ItemSetProps) => {
  const { data: ocid } = useOcid();
  const { data, isLoading } = useQuery<Item_equipment>({
    enabled: !!ocid,
    queryKey: [ocid, '장비'],
    queryFn: () => getEquipment(ocid ?? ''),
  });

  const info = usePreviewStore((state) => state?.info);

  if (isLoading) {
    return <Loading />;
  }

  const items = info.length >= 1 ? info : data?.item_equipment;

  const { bonus, haveSetList, setName, usedSetLength, totalSetLength, list } =
    getItemSetOptions(items || [], set);

  return (
    <div className="text-inherit text-zinc-400">
      <span className="mt-2 pl-3 text-xs">
        {setName} 세트 {usedSetLength}/{totalSetLength}
      </span>
      <div className="rounded-md border border-gray-500/30">
        <div className="grid grid-cols-2 items-center p-2 text-[11px]">
          {list?.map((title) => (
            <div
              className={cn(
                '',
                haveSetList?.includes(title?.name || '') && 'text-blue-300'
              )}
              key={title?.name}
            >
              • {title?.name}
            </div>
          ))}
        </div>
        <Item.SubDescription className="mx-2 pl-4">
          세트 보너스
        </Item.SubDescription>

        {bonus?.map((stat) => (
          <div
            key={stat.level}
            className={cn(
              'flex pl-2 text-[11px]',
              stat.level === usedSetLength && 'text-[rgb(145,175,212)]'
            )}
          >
            <div className="flex w-6">
              <span className="text-gray-600/50">•</span>
              <span>{stat.level} :</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {stat.stat_bonus.map((s) => (
                <span key={s.stat_name} className="flex flex-row">
                  <span>{s.stat_name}</span>
                  <span>+{s.stat_value}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSet;
