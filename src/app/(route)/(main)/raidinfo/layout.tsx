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
      <div>{children}</div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default layout;
