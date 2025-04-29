import GoogleAdSenseComponent from '@/app/_components/adsense/GoogleAdSenseComponent';

const SideAd = ({
  position,
  dataSlot,
}: {
  position: 'left' | 'right';
  dataSlot: string;
}) => {
  const isLeft = position === 'left';
  return (
    <div
      className={`side-ad fixed top-1/2 z-0 flex w-[calc((100vw-1280px)/2)] -translate-y-1/2 items-center ${
        isLeft ? 'left-0 justify-end pr-4' : 'right-0 justify-start pl-4'
      }`}
    >
      <GoogleAdSenseComponent
        dataSlot={dataSlot}
        pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ''}
      />
    </div>
  );
};

export default SideAd;
