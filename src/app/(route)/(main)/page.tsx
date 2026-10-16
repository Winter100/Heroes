'use client';

import AdBanner from '@/app/_components/adsense/AdBanner';
import SideAd from '@/app/_components/adsense/SideAd';
import ClientErrorBoundary from '@/app/_components/common/error/ClientErrorBoundary';
import HomeNoticeLoading from '@/app/_features/home/components/HomeNoticeLoading';
import dynamic from 'next/dynamic';

const HomeMainContent = dynamic(
  () => import('@/app/_features/home/components/HomeMainContent'),
  { ssr: false, loading: HomeNoticeLoading }
);

const Home = () => {
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
        <ClientErrorBoundary>
          <HomeMainContent />
        </ClientErrorBoundary>
        <AdBanner />
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Home;
