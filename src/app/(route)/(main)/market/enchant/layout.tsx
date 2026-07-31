import SideAd from '@/app/_components/adsense/SideAd';
import { keyword } from '@/app/_constant/keyword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 인챈트 정보`,
  description: '마비노기 영웅전의 인챈트 효과 및 거래가를 제공합니다.',
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>{children}</div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Layout;
