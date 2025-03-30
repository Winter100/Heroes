import Script from "next/script";
import React from "react";

type AdsenseTypes = {
  pid: string;
};

const GoogleAdsense = ({ pid }: AdsenseTypes) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdsense;
