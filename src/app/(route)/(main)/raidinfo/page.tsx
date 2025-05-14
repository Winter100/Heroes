import SideAd from '@/app/_components/adsense/SideAd';
import { RaidInfoTable } from '@/app/_features/raidinfo';

const Page = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div className="px-4">
        <RaidInfoTable />
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;
