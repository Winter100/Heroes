import { keyword } from '@/app/_constant/keyword';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 캐릭터 조회`,
  description:
    '마비노기 영웅전 캐릭터를 검색하고 캐릭터 능력치와 장비의 연마 수치를 조회, 확인 할 수 있습니다.',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
