import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import GoogleAnalytics from "./_lib/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "망디",
  title: {
    template: "%s - 망디",
    default: "망디",
  },
  keywords: [
    "마비노기 영웅전",
    "마영전",
    "마영전 장비 세팅",
    "마영전 세팅",
    "마영전 상한",
    "마영전 캐릭터",
  ],
  description:
    "마비노기 영웅전의 캐릭터를 조회하고 장비를 세팅해 볼 수 있습니다.",
  verification: {
    google: "NWuO_jx2ujHe0lQeiHDEolhbhews2UnrQccL0yPX4RY",
    other: {
      "naver-site-verification": "0414ca73ae92a7ac7f450520ab44cc825197f7d4",
    },
  },
  authors: [{ name: "망디" }, { name: "망디", url: "https://heroes-dev.com/" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: {
      template: "%s - 망디",
      default: "망디",
    },
    description:
      "마비노기 영웅전의 캐릭터를 조회하고 장비를 세팅해 볼 수 있습니다.",
    type: "website",
    images: [
      {
        url: "/meta2.png",
        width: 1200,
        height: 630,
        alt: "이미지",
      },
    ],
  },
  twitter: {
    title: {
      template: "%s - 망디",
      default: "망디",
    },
    description:
      "마비노기 영웅전의 캐릭터를 조회하고 장비를 세팅해 볼 수 있습니다.",
    images: [
      {
        url: "/meta2.png",
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
    <html lang="ko">
      <GoogleAnalytics />
      <body className={`${inter.className} bg-zinc-100`}>{children}</body>
    </html>
  );
}
