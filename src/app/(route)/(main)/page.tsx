'use client';

import AdBanner from '@/app/_components/adsense/AdBanner';
import SideAd from '@/app/_components/adsense/SideAd';
import ClientErrorBoundary from '@/app/_components/common/error/ClientErrorBoundary';
import Loading from '@/app/_components/common/Loading';
import HomeMainContent from '@/app/_features/home/components/HomeMainContent';
import { Suspense } from 'react';

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
          <Suspense
            fallback={
              <div className="m-2 flex h-[480px] items-center justify-center bg-muted/50 p-2">
                <Loading />
              </div>
            }
          >
            <HomeMainContent />
          </Suspense>
        </ClientErrorBoundary>
        <AdBanner />
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Home;
