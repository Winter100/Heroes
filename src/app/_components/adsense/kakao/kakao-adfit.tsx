'use client';

import { useIsMobile } from '@/app/_hooks/custom/useIsMobile';
import { useEffect, useRef } from 'react';

interface KakaoAdFitProps {
  pcUnitId: string;
  mobileUnitId: string;
  pcWidth?: number;
  pcHeight?: number;
  mobileWidth?: number;
  mobileHeight?: number;
}

export default function KakaoAdFit({
  pcUnitId,
  mobileUnitId,
  pcWidth = 728,
  pcHeight = 90,
  mobileWidth = 320,
  mobileHeight = 100,
}: KakaoAdFitProps) {
  const isMobile = useIsMobile();
  const scriptContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile === null) return;

    const script = document.createElement('script');
    script.src = '//t1.kakaocdn.net/kas/static/ba.min.js';
    script.async = true;

    const currentRef = scriptContainerRef.current;
    if (currentRef) {
      currentRef.appendChild(script);
    }

    return () => {
      if (currentRef && script.parentNode === currentRef) {
        currentRef.removeChild(script);
      }
    };
  }, [isMobile]);

  if (isMobile === null) {
    return <div className="my-4 min-h-[100px] w-full" aria-hidden="true" />;
  }

  const unitId = isMobile ? mobileUnitId : pcUnitId;
  const width = isMobile ? mobileWidth : pcWidth;
  const height = isMobile ? mobileHeight : pcHeight;

  return (
    <div
      ref={scriptContainerRef}
      className="my-4 flex min-h-[90px] w-full items-center justify-center"
    >
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unitId}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  );
}
