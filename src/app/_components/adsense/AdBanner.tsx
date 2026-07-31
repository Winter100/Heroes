'use client';

import KakaoAdFit from './kakao/kakao-adfit';

export default function AdBanner() {
  return (
    <KakaoAdFit
      pcUnitId="DAN-WTC4qrdhsAWQ82EQ"
      mobileUnitId="DAN-cCxC3YK31QMc2jGY"
      pcWidth={728}
      pcHeight={90}
      mobileWidth={320}
      mobileHeight={100}
    />
  );
}
