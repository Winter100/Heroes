"use client";

import { useEffect, useRef } from "react";

const LeftAd = () => {
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    if (adRef.current) {
      return;
    }

    const ins = document.createElement("ins");
    const script = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style.display = "none;";

    const winodwSize = window.innerWidth;
    // if (winodwSize < 1024) {
    ins.setAttribute("data-ad-width", "160");
    ins.setAttribute("data-ad-height", "600");
    ins.setAttribute("data-ad-unit", "DAN-cAE621qotadSFfrA");
    // }

    script.async = true;
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";

    document.querySelector(".aside__kakaoAdFit")?.appendChild(ins);
    document.querySelector(".aside__kakaoAdFit")?.appendChild(script);

    adRef.current = true;
  }, []);
  return (
    <div className="m-auto flex h-[600px] w-[160px] items-center justify-center">
      <aside className="aside__kakaoAdFit"></aside>
    </div>
  );
};

export default LeftAd;
