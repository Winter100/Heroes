"use client";

import TanstackProvider from "../_provider/TanstackProvider";
import ToastProvider from "../_provider/ToastProvider";
import Header from "../_components/layout/Header";
import MainSection from "../_components/layout/Main";
import Footer from "../_components/layout/Footer";
import Aside from "../_components/layout/Aside";
import Column from "../_components/layout/Column";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1">
      <TanstackProvider>
        <ToastProvider>
          <Header />

          <MainSection className="flex h-full w-full flex-1 items-center justify-center">
            <Aside className="h-full flex-1"></Aside>
            <Column className="h-full w-full max-w-6xl gap-1">
              {children}
            </Column>
            <Aside className="h-full flex-1"></Aside>
          </MainSection>

          <Footer />
        </ToastProvider>
      </TanstackProvider>
    </div>
  );
};

export default Layout;
