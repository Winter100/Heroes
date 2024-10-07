import Column from "../../layout/Column";
import { useDetailStore } from "@/app/_store/DetailStore";
import ItemEquipment from "../characterInfoPanel/detail/ItemEquipment";
import Skill from "../characterInfoPanel/detail/Skill";
import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";
import DetailMenu from "../characterInfoPanel/menuList/DetailMenu";
import UserDetailInfo from "@/app/_components/home/userDetailInfo/CharacterDetailItem";
import { useCharacterStore } from "@/app/_store/characterStore";
import CashTable from "../characterInfoPanel/detail/CashTable";

const CharacterSkillAndEquipment = () => {
  const stats = useDetailStore((state) => state.stats);
  const item = useDetailStore((state) => state.item);

  const name =
    useCharacterStore((state) => state.selectedCharacter?.name) ?? "";

  const { bag, cash, isLoading } = useEquipment(name ?? "");

  return (
    <Column className="h-full w-full gap-1 p-1 text-xs">
      <DetailMenu />
      <div className="flex h-full w-full flex-row">
        <>{stats && <UserDetailInfo />}</>

        <>
          <div className="h-full flex-1">
            {item === "skill" && <Skill />}
            {item === "item" && (
              <ul className="grid h-full grid-cols-2 flex-col gap-1 p-2 text-[9px] text-white sm:text-xs">
                {bag.map((item) => (
                  <li
                    key={item.item_equipment_slot_name}
                    className="flex-1 gap-1 truncate rounded-lg border border-gray-600 md:flex-1"
                  >
                    <ItemEquipment item={item} />
                  </li>
                ))}
              </ul>
            )}
            {item === "cash" && (
              <ul className="grid h-full grid-cols-2 flex-col gap-1 p-2 text-[9px] text-white sm:text-xs">
                {cash.map((item) => (
                  <li
                    key={item.item_equipment_slot_name}
                    className="flex-1 gap-1 truncate rounded-lg border border-gray-600 md:flex-1"
                  >
                    <CashTable item={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      </div>
    </Column>
  );
};

export default CharacterSkillAndEquipment;
