'use client';
import { useEffect } from 'react';

type GoogleAdSenseAutoTypes = {
  pid: string;
  dataSlot: string;
};

const GoogleAdSenseAuto = ({ dataSlot, pid }: GoogleAdSenseAutoTypes) => {
  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (e: any) {
      console.error(e.message);
    }
  }, []);

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
