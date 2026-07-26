import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import HomeMainContent from '@/app/_features/home/components/HomeMainContent';

const Home = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div className="mx-auto w-full max-w-7xl gap-6 px-4 py-6 sm:px-6">
        <HomeMainContent />
        <AutoResponsiveAd />
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Home;
