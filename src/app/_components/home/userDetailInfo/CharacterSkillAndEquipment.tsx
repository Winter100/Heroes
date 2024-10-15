"use client";

import { useDetailStore } from "@/app/_store/DetailStore";
import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";
import DetailMenu from "../characterInfoPanel/menuList/DetailMenu";
import UserDetailInfo from "@/app/_components/home/userDetailInfo/CharacterDetailItem";
import { useCharacterStore } from "@/app/_store/characterStore";
import Loading from "../../common/Loading";
import DetailHeader from "../characterInfoPanel/detail/DetailHeader";
import DetailItem from "../characterInfoPanel/detail/DetailItem";
import DetailCashHeader from "../characterInfoPanel/detail/DetailCashHeader";
import DetailCashItem from "../characterInfoPanel/detail/DetailCashItem";
import DetailSkillHeader from "../characterInfoPanel/detail/DetailSkillHeader";
import DetailSkillItem from "../characterInfoPanel/detail/DetailSkillItem";

const CharacterSkillAndEquipment = () => {
  const stats = useDetailStore((state) => state.stats);
  const item = useDetailStore((state) => state.item);

  const name =
    useCharacterStore((state) => state.selectedCharacter?.name) ?? "";

  const { bag, cash, isLoading } = useEquipment(name ?? "");
  const skill = useCharacterStore((state) => state.selectedCharacter?.skill);

  if (isLoading) {
    return <Loading width="10" height="10" />;
  }

  return (
    <>
      <div className="flex h-full w-full flex-row gap-1 p-1 text-xs">
        {name && (
          <div className="flex h-full w-full flex-col sm:items-start">
            <div className="flex w-full items-center justify-center sm:justify-start">
              <DetailMenu />
            </div>
            <div className="flex h-full w-full flex-col sm:flex-row">
              {stats && (
                <div className="h-full px-6 sm:w-[300px] sm:p-0">
                  <UserDetailInfo />
                </div>
              )}

              <div className="h-full flex-1">
                {item === "skill" && (
                  <>
                    <DetailSkillHeader />
                    <ul className="flex h-full flex-col gap-1 sm:text-xs md:grid md:grid-cols-2">
                      {/* <ul className="flex h-full flex-col gap-1  sm:text-xs"> */}
                      {skill?.map((s) => (
                        <li
                          className="flex-1 gap-1 truncate text-gray-300"
                          key={s.skill_name}
                        >
                          <DetailSkillItem skill={s} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item === "item" && (
                  <>
                    <DetailHeader />
                    <ul className="flex h-full flex-col gap-1 text-xs sm:grid sm:grid-cols-2">
                      {/* <ul className="flex h-full flex-col gap-1  sm:text-xs"> */}
                      {bag.map((item) => (
                        <li
                          key={item.item_equipment_slot_name}
                          className="flex-1 gap-1 truncate text-gray-300"
                        >
                          <DetailItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item === "cash" && (
                  <>
                    <DetailCashHeader />
                    <ul className="flex h-full flex-col gap-1 sm:text-xs">
                      {cash.map((item) => (
                        <li
                          key={item.item_equipment_slot_name}
                          className="flex-1 gap-1 truncate text-gray-300"
                        >
                          <DetailCashItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CharacterSkillAndEquipment;
