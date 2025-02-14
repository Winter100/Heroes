import { keyword } from "@/app/_constant/keyword";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${keyword.project.name} - 아이템 제작`,
  description: "마비노기 영웅전의 아이템 제작 정보를 제공 합니다.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
