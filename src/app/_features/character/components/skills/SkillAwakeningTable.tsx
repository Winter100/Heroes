'use client';

import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import SkillAwakening from './SkillAwakening';
import { filterByStoneName } from '@/app/_utils/convert';
import { useBasic } from '@/app/_hooks';

const SkillAwakeningTable = ({ ocid }: { ocid: string }) => {
  const { basic, isLoading, error } = useBasic(ocid || '');

  if (isLoading) return <Loading />;
  if (error) return <ErrorApi />;

  const awakening = basic?.skill_awakening || [];

  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-auto-fill gap-2">
        <div>
          <SkillAwakening
            itemName="각성의 돌: 대미지 증가"
            title="대미지 증가"
            skillData={filterByStoneName(
              awakening,
              ['대미지 증가'],
              ['부분 파괴 대미지 증가']
            )}
          />
        </div>
        <div>
          <SkillAwakening
            itemName="각성의 돌: SP소모 감소"
            title="SP소모 감소"
            skillData={filterByStoneName(awakening, ['SP소모 감소'])}
          />
        </div>
        <div>
          <SkillAwakening
            itemName="각성의 돌: 재사용시간 감소"
            title="재사용시간(대) 감소"
            skillData={filterByStoneName(awakening, ['재사용시간'])}
          />
        </div>
        <div>
          <SkillAwakening
            itemName="각성의 돌: 스태미나 소모 감소"
            title="스태미나 소모 감소"
            skillData={filterByStoneName(awakening, ['스태미나 소모'])}
          />
        </div>
        <div>
          <SkillAwakening
            itemName="각성의 돌: 부분 파괴 대미지"
            title="부분 파괴 대미지"
            skillData={filterByStoneName(awakening, ['부분 파괴 대미지'])}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillAwakeningTable;
