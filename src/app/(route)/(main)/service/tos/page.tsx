import TermsGuide from '@/app/_components/service/TermsGuide';
import { TermsData } from '@/app/_constant/service/terms';
import React from 'react';

const Page = () => {
  return <TermsGuide title="이용약관" data={TermsData} />;
};

export default Page;
