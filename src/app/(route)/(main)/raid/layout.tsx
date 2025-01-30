import { keyword } from "@/app/_constant/keyword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${keyword.project.name} - 상한 조회`,
  description:
    "마비노기 영웅전(마영전) 캐릭터를 조회하고 레이드에 따른 상한을 조회할 수 있는 기능을 제공합니다.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
