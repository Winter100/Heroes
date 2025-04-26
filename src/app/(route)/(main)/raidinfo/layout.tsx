import { keyword } from '@/app/_constant/keyword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 레이드 정보`,
  description: `마비노기 영웅전(마영전) 레이드 정보를 제공합니다.`,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
