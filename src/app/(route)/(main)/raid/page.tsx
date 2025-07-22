import AutoAd from '@/app/_components/adsense/AutoAd';
import SideAd from '@/app/_components/adsense/SideAd';
import BasicContainer from '@/app/_components/layout/BasicContainer';
import { LimitTable, LimitTableMenuBar } from '@/app/_features/raid';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <BasicContainer className="flex-1 gap-2">
        <AutoAd dataSlot="9712379035" className="h-40" />
        <LimitTableMenuBar />
        <LimitTable />
      </BasicContainer>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};
export default Page;
