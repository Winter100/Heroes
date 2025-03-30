import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import GoogleAnalytics from "./_lib/GoogleAnalytics";
import { keyword } from "./_constant/keyword";
import Footer from "./_components/layout/Footer";
import ScreenContainer from "./_components/layout/ScreenContainer";
import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import HomeBreadcrumb from "./_components/home/HomeBreadcrumb";
import GoogleAdsense from "./_components/adsense/GoogleAdsense";
import GoogleAdSenseComponent from "./_components/adsense/GoogleAdSenseComponent";

export const metadata: Metadata = {
  applicationName: keyword.project.name,
  metadataBase: new URL(keyword.project.url),
  title: keyword.project.name,
  keywords: [
    "마비노기 영웅전",
    "마영전",
    "마영전 장비 세팅",
    "마영전 세팅",
    "마영전 상한",
    "마영전 캐릭터",
    "마영전 인챈트",
  ],
  description:
    "마비노기 영웅전(마영전) 캐릭터를 조회하고 빠른 전투 및 상한 컷을 확인할 수 있으며, 장비의 연마, 정령 합성, 접두, 접미 인챈트 시뮬레이션을 제공합니다.",
  verification: {
    google: "NWuO_jx2ujHe0lQeiHDEolhbhews2UnrQccL0yPX4RY",
    other: {
      "naver-site-verification": "0414ca73ae92a7ac7f450520ab44cc825197f7d4",
    },
  },
  authors: [
    { name: keyword.project.name },
    { name: keyword.project.name, url: keyword.project.url },
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: keyword.project.name,
    siteName: keyword.project.name,
    description:
      "마비노기 영웅전(마영전)의 캐릭터를 조회하고 빠른 전투 및 상한 컷을 확인할 수 있으며, 장비의 연마, 정령 합성, 접두, 접미 인챈트 시뮬레이션을 제공합니다.",
    type: "website",
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "이미지",
      },
    ],
  },
  twitter: {
    title: keyword.project.name,
    description:
      "마비노기 영웅전(마영전)의 캐릭터를 조회하고 빠른 전투 및 상한 컷을 확인할 수 있으며, 장비의 연마, 정령 합성, 접두, 접미 인챈트 시뮬레이션을 제공합니다.",
    images: [
      {
        url: "/bg.jpg",
        width: 1200,
        height: 630,
        alt: "이미지",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark-1">
      <GoogleAnalytics />
      <GoogleAdsense pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ""} />
      <body className="flex min-h-dvh flex-col">
        <div className="relative flex flex-1 flex-col font-sans text-fontColor">
          <div className="left-ad side-ad absolute left-0 top-0 h-full w-[calc((100vw-1280px)/2)]">
            <GoogleAdSenseComponent
              dataSlot={"2056348937"}
              pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ""}
            />
          </div>
          <ScreenContainer className="dark flex h-full flex-1 flex-col">
            <SidebarProvider>
              <AppSidebar className="sticky" />
              <SidebarInset>
                <HomeBreadcrumb />
                <main className="flex flex-1 flex-col">{children}</main>
                <Footer />
              </SidebarInset>
            </SidebarProvider>
          </ScreenContainer>
          <div className="right-ad side-ad absolute right-0 top-0 h-full w-[calc((100vw-1280px)/2)]">
            <GoogleAdSenseComponent
              dataSlot={"1601053361"}
              pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ""}
            />
          </div>
        </div>
      </body>
    </html>
  );
}
