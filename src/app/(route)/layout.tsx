"use client";

import TanstackProvider from "../_provider/TanstackProvider";
import ToastProvider from "../_provider/ToastProvider";
import Header from "../_components/layout/Header";
import MainSection from "../_components/layout/Main";
import Footer from "../_components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto flex h-full w-full max-w-[1800px] flex-col gap-1 p-2">
      <TanstackProvider>
        <ToastProvider>
          <Header />
          <MainSection className="flex flex-1 justify-center">
            {children}
          </MainSection>
          <Footer />
        </ToastProvider>
      </TanstackProvider>
    </div>
  );
};

export default Layout;
