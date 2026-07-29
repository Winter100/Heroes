'use client';
import React, { useEffect, useRef } from 'react';

type GoogleAdSenseComponentTypes = {
  pid: string;
  dataSlot: string;
  width?: string;
  height?: string;
};

const GoogleAdSenseComponent = ({
  dataSlot,
  pid,
  width = '160px',
  height = '600px',
}: GoogleAdSenseComponentTypes) => {
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
        display: 'block',
        width,
        height,
      }}
      data-ad-client={`ca-pub-${pid}`}
      data-ad-slot={dataSlot}
      data-ad-format="vertical"
      data-full-width-responsive="false"
    ></ins>
  );
};

export default GoogleAdSenseComponent;
