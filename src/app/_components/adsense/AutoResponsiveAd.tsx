'use client';
import GoogleAdSenseFixed from './GoogleAdSenseFixed';

const AutoResponsiveAd = () => {
  return (
    <div className="flex justify-center">
      <div className="block md:hidden">
        <GoogleAdSenseFixed
          pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ''}
          dataSlot="MOBILE_SLOT_ID"
          width="320px"
          height="50px"
        />
      </div>
      <div className="hidden md:block">
        <GoogleAdSenseFixed
          pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ''}
          dataSlot="DESKTOP_SLOT_ID"
          width="728px"
          height="90px"
        />
      </div>
    </div>
  );
};

export default AutoResponsiveAd;
