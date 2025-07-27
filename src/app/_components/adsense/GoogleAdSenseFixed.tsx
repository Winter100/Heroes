'use client';

import { useEffect } from 'react';

interface Props {
  pid: string;
  dataSlot: string;
  width: string;
  height: string;
}

const GoogleAdSenseFixed = ({ pid, dataSlot, width, height }: Props) => {
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
        display: 'block',
        maxWidth: '720px',
        margin: '0 auto',
        width,
        height,
      }}
      data-ad-client={`ca-pub-${pid}`}
      data-ad-slot={dataSlot}
    ></ins>
  );
};

export default GoogleAdSenseFixed;
