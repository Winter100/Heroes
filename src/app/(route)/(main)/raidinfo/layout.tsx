import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import { keyword } from '@/app/_constant/keyword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 레이드 정보`,
  description: '마영전의 레이드 정보를 제공 합니다.',
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
