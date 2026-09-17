import AdBanner from '@/app/_components/adsense/AdBanner';
import SideAd from '@/app/_components/adsense/SideAd';
import HomeMainContent from '@/app/_features/home/components/HomeMainContent';

const Home = async () => {
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div className="mx-auto w-full max-w-7xl gap-6 px-4 py-6 sm:px-6">
        <div className="p-2 pb-0">
          <div
            className="relative h-60 w-full rounded-md bg-cover"
            style={{
              backgroundImage: 'url(/art.jpg)',
              backgroundPosition: 'center 12%',
            }}
          />
        </div>
        <HomeMainContent />
        <AdBanner />
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Home;
