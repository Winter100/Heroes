import { Metadata } from "next";

export const metadata: Metadata = {
  title: "망디 - 상한 조회",
  description:
    "마영전 캐릭터들을 조회하고 레이드에 따른 상한을 조회할 수 있는 기능을 제공합니다.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
