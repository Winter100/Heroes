import AdBanner from '@/app/_components/adsense/AdBanner';
import SideAd from '@/app/_components/adsense/SideAd';
import { API_PATH } from '@/app/_constant/keyword';
import HomeMainContent from '@/app/_features/home/components/HomeMainContent';
import {
  NoticeDataType,
  NoticeEventDataType,
  NoticePatchDataType,
} from '@/app/_type/homeType';
import { getNotice } from '@/app/api/getNotice';

export const revalidate = 600;

const Home = async () => {
  let notice = null;
  try {
    notice = await getNotice<{
      notice: NoticeDataType;
      patchNotice: NoticePatchDataType;
      eventNotice: NoticeEventDataType;
    }>(API_PATH.notice);
  } catch {
    notice = null;
  }
  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div className="mx-auto w-full max-w-7xl gap-6 px-4 py-6 sm:px-6">
        <HomeMainContent
          notice={notice?.notice ?? { notice: [] }}
          eventNotice={notice?.eventNotice ?? { event_notice: [] }}
          patchNotice={notice?.patchNotice ?? { patch_notice: [] }}
        />
        <AdBanner />
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Home;
