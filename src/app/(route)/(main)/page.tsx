import { Suspense } from 'react';
import Loading from '@/app/_components/common/Loading';
import HomeEventNotice from '@/app/_components/home/HomeEventNotice';
import HomeNotice from '@/app/_components/home/HomeNotice';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import EventCalendar from '@/app/_components/home/EventCalendar';
import GoogleAdSenseComponent from '@/app/_components/adsense/GoogleAdSenseComponent';

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="left-ad side-ad fixed left-0 top-1/2 flex w-[calc((100vw-1280px)/2)] -translate-y-1/2 items-center justify-end pr-4">
        <GoogleAdSenseComponent
          dataSlot={'2056348937'}
          pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ''}
        />
      </div>
      <div className="dark flex flex-1 flex-col gap-2 p-2">
        <div
          className="relative h-60 w-full rounded-md bg-cover"
          style={{
            backgroundImage: 'url(/art.jpg)',
            backgroundPosition: 'center 12%',
          }}
        />
        <HomeNotice />
        <div className="flex flex-1">
          <div className="flex h-full w-full flex-col gap-2 lg:flex-row">
            <div className="flex flex-1 flex-col bg-muted/50">
              <HomeEventNotice />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <RoundedContainer className="flex flex-1 bg-muted/50">
                <EventCalendar />
              </RoundedContainer>
              {/* <div className="flex flex-1"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="right-ad side-ad fixed right-0 top-1/2 z-0 flex w-[calc((100vw-1280px)/2)] -translate-y-1/2 items-center justify-start pl-4">
        <GoogleAdSenseComponent
          dataSlot={'1601053361'}
          pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ''}
        />
      </div>
    </Suspense>
  );
};

export default Home;
