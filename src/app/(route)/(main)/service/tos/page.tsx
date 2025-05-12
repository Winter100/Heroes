import { TermsData } from '@/app/_constant/service/terms';
import { TermsGuide } from '@/app/_features/service';

const Page = () => {
  return <TermsGuide title="이용약관" data={TermsData} />;
};

export default Page;
