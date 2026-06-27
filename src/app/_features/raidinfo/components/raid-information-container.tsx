'use client';

import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { useRaidList } from '@/app/_hooks';
import RaidInformationDialogContainer from './raid-information-dialog-container';

const RaidInformationContainer = () => {
  const { data: raidList } = useRaidList();

  return (
    <div className="grid grid-cols-4 gap-4">
      {raidList
        ?.filter((r) => r?.raid_name !== '미분류')
        .map((raid) => (
          <div key={raid?.raid_name} className="rounded-md bg-muted/50 p-2">
            <div className="text-center font-bold">{raid?.raid_name}</div>
            <div>
              {raid?.monsters?.map((monster) => (
                <RaidInformationDialogContainer
                  key={monster?.battle}
                  monster={monster}
                >
                  <div className="flex items-center justify-center gap-2 hover:text-blue-300">
                    <div>
                      <ImageIcon src={monster?.image ?? ''} alt="B" />
                    </div>
                    <div className="text-sm">{monster?.battle}</div>
                  </div>
                </RaidInformationDialogContainer>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RaidInformationContainer;
