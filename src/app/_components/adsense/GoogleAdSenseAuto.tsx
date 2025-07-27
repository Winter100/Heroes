'use client';
import { useEffect, useState } from 'react';

type GoogleAdSenseAutoTypes = {
  pid: string;
  dataSlot: string;
};

const GoogleAdSenseAuto = ({ dataSlot, pid }: GoogleAdSenseAutoTypes) => {
  const [canLoadAd, setCanLoadAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanLoadAd(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (canLoadAd) {
      try {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        if ((window as any).adsbygoogle) {
          ((window as any).adsbygoogle =
            (window as any).adsbygoogle || []).push({});
        } else {
          console.warn('adsbygoogle script not yet loaded.');
        }
      } catch (e: any) {
        console.error('adsbygoogle.push() error:', e.message);
      }
    }
  }, [canLoadAd]);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
      }}
      data-ad-client={`ca-pub-${pid}`}
      data-ad-slot={dataSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAdSenseAuto;
