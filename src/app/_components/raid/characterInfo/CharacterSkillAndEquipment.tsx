"use client";

import { useDetailStore } from "@/app/_store/DetailStore";
import { useEquipment } from "@/app/_hooks/useEquipment/useEquipment";
import UserDetailInfo from "@/app/_components/raid/userDetailInfo/CharacterDetailItem";
import { useCharacterStore } from "@/app/_store/characterStore";

import { useOcid } from "@/app/_hooks/useOcid/useOcid";
import Loading from "@/app/_components/common/Loading";
import DetailMenu from "../menuList/DetailMenu";
import DetailSkillHeader from "../detail/DetailSkillHeader";
import DetailSkillItem from "../detail/DetailSkillItem";
import DetailHeader from "../detail/DetailHeader";
import DetailItem from "../detail/DetailItem";
import DetailCashHeader from "../detail/DetailCashHeader";
import DetailCashItem from "../detail/DetailCashItem";
import ErrorDisplay from "../../common/error/ErrorDisplay";

const CharacterSkillAndEquipment = () => {
  const stats = useDetailStore((state) => state.stats);
  const item = useDetailStore((state) => state.item);

  const name =
    useCharacterStore((state) => state.selectedCharacter?.name) ?? "";

  const { data: ocid, isLoading: ocidLoading, error } = useOcid(name);
  const {
    bag,
    cash,
    isLoading,
    error: equipmentError,
  } = useEquipment(ocid ?? "");
  const skill = useCharacterStore((state) => state.selectedCharacter?.skill);

  if (ocidLoading || isLoading) return <Loading size="10" />;
  if (error || equipmentError)
    return <ErrorDisplay content={`${name || ""} 조회에 실패했습니다.`} />;

  return (
    <>
      <div className="flex h-full w-full flex-row gap-1 p-1 text-xs">
        {name && (
          <div className="flex h-full w-full flex-col sm:items-start">
            <div className="flex w-full items-center justify-center px-1 sm:justify-start">
              <DetailMenu />
            </div>
            <div className="flex h-full w-full flex-col sm:flex-row">
              {stats && (
                <div className="!sm:w-[300px] h-full px-6 sm:p-0">
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
