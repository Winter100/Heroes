import { NewEquipmentType } from '@/app/_type/equipmentType';
import { ItemSetType } from '@/app/_type/itemType';
import { getPriority } from './item-tooltip-item';
import { cn } from '@/lib/utils';

type Props = {
  item: NewEquipmentType;
  itemSetOption: ItemSetType[];
  bagItems: NewEquipmentType[];
};
const ItemSetOptionBox = ({ item, itemSetOption, bagItems }: Props) => {
  const currentSetOption = getMatchingItemSets(item, itemSetOption);
  if (!currentSetOption) return null;

  const myOnSetList = bagItems.filter((item) => {
    const hasMatchingSlot = testSlots.some(
      (slotObj) => slotObj.item_slot === item.item_equipment_slot_name
    );
    if (hasMatchingSlot) {
      return item.item_name.includes(currentSetOption.item_set_name);
    } else {
      return currentSetOption.item_set_list.some((listName) =>
        item.item_name.includes(listName)
      );
    }
  });

  const newCurrentSetData = enhanceItemSetData(currentSetOption);
  return (
    <>
      {
        <div
          key={newCurrentSetData.item_set_name}
          className="flex flex-col gap-1 rounded-md border border-border p-2 text-[11px]"
        >
          <div className="flex flex-col gap-1">
            {/* 세트명 */}
            <div className="flex items-center gap-0.5 border border-border pl-4">
              <span>{newCurrentSetData?.item_set_name ?? ''} 세트</span>
              <span className="text-blue-300">{myOnSetList.length}</span>
              <span>/ {newCurrentSetData?.item_set_slot.length ?? 0}</span>
            </div>
            {/* 세트 필요 아이템 목록 */}
            <div className="grid grid-cols-2 items-center gap-0.5">
              {newCurrentSetData.item_set_slot
                ?.sort((a, b) => getPriority(a.title) - getPriority(b.title))
                .map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      myOnSetList.some((set) => {
                        if (set.item_equipment_slot_name.includes('Finger')) {
                          return set.item_name.includes(item.title);
                        } else {
                          return (
                            item.item_slot === set.item_equipment_slot_name
                          );
                        }
                      }) && 'text-blue-300'
                    )}
                  >
                    • {item.title}
                  </div>
                ))}
            </div>
          </div>
          {/* 세트 보너스 효과 */}
          <div className="flex flex-col gap-1">
            <p className="border border-border pl-4">세트 보너스</p>
            {currentSetOption?.item_set_bonus?.map((bonus) => (
              <div
                key={bonus.level}
                className={cn(
                  'flex',
                  cn(bonus.level === myOnSetList.length && 'text-blue-300')
                )}
              >
                <div className="w-5">• {bonus.level}:</div>
                <div className="ml-1 flex flex-1 flex-wrap items-center gap-x-1">
                  {bonus?.stat_bonus?.map((effect) => (
                    <span key={effect.stat_name}>
                      {effect.stat_name}+{effect.stat_value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default ItemSetOptionBox;

/**
 * 아이템 정보와 세트 목록을 받아 조건에 맞는 세트 옵션을 필터링하는 함수
 */
function getMatchingItemSets(
  item: NewEquipmentType,
  itemSets: ItemSetType[]
): ItemSetType | undefined {
  return itemSets.find((set) => {
    const hasMatchingSlot = testSlots.some(
      (slotObj) => slotObj.item_slot === item.item_equipment_slot_name
    );

    if (hasMatchingSlot) {
      return item.item_name.includes(set.item_set_name);
    } else {
      return set.item_set_list.some((listName) =>
        item.item_name.includes(listName)
      );
    }
  });
}

const testSlots = [
  {
    item_name: '주무기',
    item_slot: 'Right Hand',
  },
  {
    item_name: '머리',
    item_slot: 'Head',
  },
  {
    item_name: '상의',
    item_slot: 'Upper',
  },
  {
    item_name: '하의',
    item_slot: 'Lower',
  },
  {
    item_name: '손',
    item_slot: 'Hand',
  },
  {
    item_name: '발',
    item_slot: 'Leg',
  },
];

/**
 * item_set_slot을 순회하면서 슬롯 조건에 맞는 title 속성을 추가하는 함수
 */
function enhanceItemSetData(data: ItemSetType) {
  const slotKeywordMap: Record<string, string> = {
    'Right Hand': '무기',
    Head: '머리',
    Upper: '가슴',
    Lower: '다리',
    Hand: '손',
    Leg: '발',
  };

  const updatedSetSlot = data.item_set_slot.map((slotItem, i) => {
    const keyword = slotKeywordMap[slotItem.item_slot];

    const matchedTitle =
      data.item_set_list.find((title) =>
        keyword ? title.includes(keyword) : false
      ) || data.item_set_list[i];

    return {
      ...slotItem,
      title: matchedTitle,
    };
  });

  return {
    ...data,
    item_set_slot: updatedSetSlot,
  };
}
