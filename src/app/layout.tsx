import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "망디",
  description: "마비노기 영웅전의 캐릭터를 조회할 수 있습니다.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "망디",
    description: "마비노기 영웅전의 캐릭터를 조회할 수 있습니다.",
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
    title: "망디",
    description: "마비노기 영웅전의 캐릭터를 조회할 수 있습니다.",
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
      <Head>
        <meta
          name="google-site-verification"
          content="XEKLkprFU_FjAz8RnHxU-q2pj8f_4TW7LqHk30hheRA"
        />
      </Head>
      <body className={`${inter.className} bg-zinc-100`}>{children}</body>
    </html>
  );
}
