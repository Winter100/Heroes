import { PrivacyData } from '@/app/_constant/service/terms';
import { TermsGuide } from '@/app/_features/service';

const Page = () => {
  return <TermsGuide title="개인정보처리방침" data={PrivacyData} />;
};

export default Page;
