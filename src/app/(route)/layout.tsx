"use client";

import TanstackProvider from "../_provider/TanstackProvider";
import ToastProvider from "../_provider/ToastProvider";
import Header from "../_components/layout/Header";
import MainSection from "../_components/layout/Main";
import Footer from "../_components/layout/Footer";
import LeftAd from "../_components/ad/LeftAd";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-1 p-2">
      <TanstackProvider>
        <ToastProvider>
          <Header />
          <div className="flex h-full w-full max-w-[1600px] justify-center">
            {/* <LeftAd /> */}
            <MainSection className="flex flex-1 items-center justify-center">
              {children}
            </MainSection>
          </div>
          <Footer />
        </ToastProvider>
      </TanstackProvider>
    </div>
  );
};

export default Layout;
