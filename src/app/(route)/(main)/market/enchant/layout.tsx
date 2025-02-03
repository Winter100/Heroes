import { keyword } from "@/app/_constant/keyword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${keyword.project.name} - 인챈트 정보`,
  description: "마비노기 영웅전(마영전)의 인챈트 정보 및 거래가를 제공합니다.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
