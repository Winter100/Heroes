'use client';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { NewEquipmentType } from '@/app/_type/equipmentType';
import ErrorDisplay from '@/app/_components/common/error/ErrorDisplay';
import { useSearchParams } from 'next/navigation';
import { useOcid, usePreviewAllData } from '@/app/_hooks';
import { useEffect, useState } from 'react';
import Loading from '@/app/_components/common/Loading';
import CharacterStats from '../stats/CharacterStats';
import ItemEquipmentContainer from '@/app/_components/item/item-equipment-container';
import SkillAwakeningTable from '../skills/SkillAwakeningTable';
import CharacterBasicInfo from './CharacterBasicInfo';
import CharacterEquipment from '../equipment/CharacterEquipment';

const CharacterInformationContainer = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const { data: ocid, isLoading, error } = useOcid(name);
  const { enchantsBySlot } = usePreviewAllData();
  const [equipment, setEquipment] = useState<NewEquipmentType | null>(null);

  useEffect(() => {
    setEquipment(null);
  }, [name]);

  if (!name) return <ErrorDisplay content="캐릭터 이름을 입력해주세요." />;
  if (isLoading) return <Loading />;
  if (error || !ocid) {
    return (
      <ErrorDisplay
        content={
          <div className="text-center text-red-100">
            캐릭터 조회에 실패했습니다.
          </div>
        }
      />
    );
  }

  const handleClick = (item: NewEquipmentType) => {
    setEquipment((prev) =>
      prev?.item_equipment_slot_name === item.item_equipment_slot_name
        ? null
        : item
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex flex-1 flex-col gap-2 md:flex-row md:px-0">
        <div className="flex flex-1 flex-col gap-2 md:max-w-[370px]">
          {!equipment ? (
            <div className="flex h-full w-full flex-col gap-2">
              {/* 캐릭터 정보 */}
              <RoundedContainer className="flex min-h-40 flex-col gap-2 bg-muted/50">
                <CharacterBasicInfo ocid={ocid} />
              </RoundedContainer>
              <RoundedContainer className="flex max-h-[400px] min-h-[300px] flex-1 flex-col gap-2 bg-muted/50">
                <CharacterStats ocid={ocid} />
              </RoundedContainer>
            </div>
          ) : (
            <>
              {/* 선택한 아이템 정보 */}
              <RoundedContainer className="h-full bg-muted/50 text-xs">
                <ItemEquipmentContainer
                  item={equipment}
                  isIncreaseView={false}
                  isViewBtn={false}
                />
              </RoundedContainer>
            </>
          )}
        </div>
        <div className="flex-1">
          {/* 아이템 정보 리스트 */}
          <RoundedContainer className="h-full bg-muted/50 p-0">
            <CharacterEquipment
              ocid={ocid}
              enchants={enchantsBySlot}
              equipment={equipment}
              onClick={handleClick}
            />
          </RoundedContainer>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center rounded-md bg-muted/50 px-6 md:px-0">
        <SkillAwakeningTable ocid={ocid} />
      </div>
    </div>
  );
};

export default CharacterInformationContainer;
