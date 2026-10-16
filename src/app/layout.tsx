import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from './_lib/GoogleAnalytics';
import { metadataOption } from './_constant/keyword';
import Footer from './_components/layout/Footer';
import ScreenContainer from './_components/layout/ScreenContainer';
import GoogleAdsense from './_components/adsense/GoogleAdsense';
import NavBar from './_components/layout/nav-bar';

export const metadata: Metadata = metadataOption;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <GoogleAnalytics />
      <GoogleAdsense pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ''} />
      <body className="flex min-h-dvh flex-col bg-background text-slate-400">
        <div className="relative flex flex-1 flex-col">
          <ScreenContainer className="flex h-full flex-1 flex-col">
            <NavBar />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </ScreenContainer>
        </div>
      </body>
    </html>
  );
}
