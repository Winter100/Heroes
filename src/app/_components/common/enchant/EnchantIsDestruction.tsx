import { ENCHANT_DESTRUCTION_RANK } from '@/app/_constant/enchant';
import Column from '../../layout/Column';

const EnchantIsDestruction = ({ rank }: { rank: string }) => {
  return (
    <Column className="p-2 text-xs">
      {Number(rank) <= ENCHANT_DESTRUCTION_RANK ? (
        <div className="text-red-500/80">
          - 인챈트 실패 시 장비가 파괴될 수 있습니다.
        </div>
      ) : (
        <div className="text-[rgb(87,148,161)]">
          - 인챈트에 실패해도 장비가 파괴되지 않습니다.
        </div>
      )}

      {!isNaN(Number(rank)) && (
        <div className="text-[rgb(87,148,161)]">
          - 인챈트 성공 시 장비가 캐릭터에 귀속됩니다.
        </div>
      )}
    </Column>
  );
};

export default EnchantIsDestruction;
