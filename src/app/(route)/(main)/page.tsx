import SideAd from '@/app/_components/adsense/SideAd';
import { HomeMainContent } from '@/app/_features/home';

const Home = () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <HomeMainContent />
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Home;
