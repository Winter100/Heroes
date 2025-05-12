'use client';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { itemAbility } from '@/app/_constant/itemAbility';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import { useOutsideClick } from '@/app/_hooks/useOutsideClick/useOutsideClick';
import { getSpecificTitle } from '../utils/getSpecificTitle';
import { useAbilityStore } from '@/app/_store/abilityStore';

interface AbilityProps {
  item: NewEquipmentType;
}
const Ability = ({ item }: AbilityProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const outRef = useOutsideClick(() => setIsOpen(false));
  const setAbility = useAbilityStore((state) => state.setAbility);
  const ability = useAbilityStore((state) => state.ability);
  const setResetAbility = useAbilityStore((state) => state.setResetAbility);

  const slot = item.item_equipment_slot_name;
  const itemTitle = getSpecificTitle(item.item_name);

  const selectedAbility =
    ability.find((ab) => ab.slot === slot)?.name ??
    item.item_option.ability_name;

  const sameTitleAbility = itemAbility
    .filter((ability) => ability.title === itemTitle)
    .map((a) => a.item)
    .flat();

  const ingredient = sameTitleAbility
    .filter((ability) => ability.item_slot.includes(slot))
    .map((sameItem) => sameItem.one_ingredient)
    .flat();

  const sameSlotAbility = sameTitleAbility
    .filter((ability) => ability.item_slot.includes(slot))
    .map((a) => a.ability_list)
    .flat();

  const handleSelect = (value: string) => {
    setIsOpen(false);

    const ability = {
      name: value,
      slot: slot,
      ingredient,
    };

    setAbility(slot, ability);
  };

  const resetAbility = () => {
    setIsOpen(false);
    setResetAbility(slot);
  };

  return (
    <div className="relative w-56" ref={outRef}>
      <button
        className="w-full bg-backgroundOne px-4 py-2 text-center text-xs"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedAbility}
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-1 w-full bg-backgroundOne text-xs">
          <li
            key={item.item_name}
            className="relative flex h-8 w-full cursor-pointer items-center justify-center border border-zinc-700 bg-backgroundOne text-center text-gray-500 hover:bg-zinc-700"
            onClick={resetAbility}
          >
            {'(기존) '}
            {item?.item_option?.ability_name}
          </li>
          {sameSlotAbility.map((ability) => (
            <li
              key={ability.ability_name}
              className="relative flex h-8 w-full cursor-pointer items-center justify-center border border-zinc-700 bg-backgroundOne text-center hover:bg-zinc-700"
              onClick={() => handleSelect(ability.ability_name)}
            >
              <a
                className={`flex h-full w-full items-center justify-center ${selectedAbility === ability.ability_name ? 'text-blue-300' : ''}`}
                data-tooltip-id={`tooltip-${ability.ability_name}`}
                data-tooltip-place="right"
              >
                {ability.ability_name}
              </a>
              <Tooltip
                opacity={1}
                className="z-50"
                id={`tooltip-${ability?.ability_name}`}
              >
                <p className="w-48 text-wrap text-xs text-green-300">
                  {ability?.description}
                </p>
              </Tooltip>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ability;
