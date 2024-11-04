import { Metadata } from "next";

export const metadata: Metadata = {
  title: "망디 - 장비 세팅",
  description:
    "마영전 캐릭터를 조회하고 연마, 정령 합성, 접두, 접미 인챈트를 바꿔볼 수 있으며 그에 따른 빠른 전투 및 상한 컷을 조회할 수 있는 장비 시뮬레이션을 제공합니다.",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
