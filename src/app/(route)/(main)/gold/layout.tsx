import { keyword } from '@/app/_constant/keyword';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `${keyword.project.name} - 골드 거래소 순위`,
  description:
    '최근 1주 동안 골드 거래소에서 골드 구매 또는 판매량이 가장 많은 상위 30명의 카르제를 조회합니다',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
