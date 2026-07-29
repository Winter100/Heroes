'use client';

import { useEffect, useRef } from 'react';

interface Props {
  pid: string;
  dataSlot: string;
  width: string;
  height: string;
}

const GoogleAdSenseFixed = ({ pid, dataSlot, width, height }: Props) => {
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (
      insRef.current &&
      !insRef.current.hasAttribute('data-adsbygoogle-status')
    ) {
      try {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      } catch (e: any) {
        console.error('AdSense Error:', e.message);
      }
    }
  }, []);

  return (
    <ins
      ref={insRef}
      className="adsbygoogle"
      style={{
        display: 'inline-block',
        width,
        height,
      }}
      data-ad-client={`ca-pub-${pid}`}
      data-ad-slot={dataSlot}
    ></ins>
  );
};

export default GoogleAdSenseFixed;
