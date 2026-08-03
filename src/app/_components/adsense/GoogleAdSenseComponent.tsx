'use client';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef<string | null>(null);

  useEffect(() => {
    if (pushed.current === pathname) return;

    if (
      insRef.current &&
      !insRef.current.hasAttribute('data-adsbygoogle-status')
    ) {
      try {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
        pushed.current = pathname;
      } catch (e: any) {
        console.error('AdSense Error:', e.message);
      }
    }
  }, [pathname]);

  return (
    <ins
      key={pathname}
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
