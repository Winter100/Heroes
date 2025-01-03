import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { itemAbility } from "@/app/_constant/itemAbility";
import { NewEquipmentType } from "@/app/_type/equipmentType";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick/useOutsideClick";
import { getSpecificTitle } from "../utils/getSpecificTitle";

interface AbilityProps {
  item: NewEquipmentType;
}
const Ability = ({ item }: AbilityProps) => {
  const [selectedValue, setSelectedValue] = useState(
    item?.item_option?.ability_name,
  );
  const [isOpen, setIsOpen] = useState(false);
  const outRef = useOutsideClick(() => setIsOpen(false));

  const slot = item.item_equipment_slot_name;
  const itemTitle = getSpecificTitle(item.item_name);

  const sameTitleAbility = itemAbility
    .filter((ability) => ability.title === itemTitle)
    .map((a) => a.item)
    .flat();

  const sameSlotAbility = sameTitleAbility
    .filter((ability) => ability.item_slot.includes(slot))
    .map((a) => a.ability_list)
    .flat();

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    console.log(value);
  };

  return (
    <div className="relative w-52" ref={outRef}>
      <button
        className="w-full bg-backgroundOne px-4 py-2 text-center text-xs"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue}
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-1 w-full bg-backgroundOne text-xs">
          {sameSlotAbility.map((ability) => (
            <li
              key={ability.ability_name}
              className="relative flex h-8 w-full cursor-pointer items-center justify-center border border-zinc-700 bg-backgroundOne text-center hover:bg-zinc-700"
              onClick={() => handleSelect(ability.ability_name)}
            >
              <a
                className={`flex h-full w-full items-center justify-center`}
                // className={`flex h-full w-full items-center justify-center ${item.item_option.ability_name.includes(ability?.ability_name) ? "text-white" : ""}`}
                data-tooltip-id={`tooltip-${ability.ability_name}`}
                // data-tooltip-float={true}
                data-tooltip-place="right"
              >
                {/* {ability.ability_name} */}
                {item.item_option.ability_name.includes(ability?.ability_name)
                  ? `${ability.ability_name} (기존)`
                  : ability.ability_name}
              </a>
              <Tooltip
                opacity={1}
                className="z-50"
                id={`tooltip-${ability.ability_name}`}
              >
                <p className="w-48 text-wrap text-xs text-green-300">
                  {ability.description}
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
