import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import { keyword } from '@/app/_constant/keyword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 아이템 정보`,
  description:
    '마비노기 영웅전 아이템의 승급, 제작 재료와 함께 능력치 정보를 확인하세요.',
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <div>{children}</div>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default layout;
