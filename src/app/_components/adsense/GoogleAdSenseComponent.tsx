"use client";
import React, { useEffect } from "react";

type GoogleAdSenseComponentTypes = {
  pid: string;
  dataSlot: String;
};

const GoogleAdSenseComponent = ({
  dataSlot,
  pid,
}: GoogleAdSenseComponentTypes) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
    } catch (e: any) {
      console.log(e.message);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={`ca-pub-${pid}`}
      data-ad-slot={dataSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAdSenseComponent;
