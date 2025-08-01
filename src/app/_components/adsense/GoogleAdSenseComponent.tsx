'use client';
import React, { useEffect } from 'react';

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
