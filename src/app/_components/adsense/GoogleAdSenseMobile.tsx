'use client';

import { useEffect } from 'react';

interface Props {
  dataSlot: string;
}

const GoogleAdSenseMobile = ({ dataSlot }: Props) => {
  useEffect(() => {
    try {
      /* eslint-disable @typescript-eslint/no-explicit-any */
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
        display: 'inline-block',
        width: '320px',
        height: '100px',
      }}
      data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_CID}`}
      data-ad-slot={dataSlot}
    ></ins>
  );
};

export default GoogleAdSenseMobile;
