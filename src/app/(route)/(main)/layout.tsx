"use client";

import Aside from "@/app/_components/layout/Aside";
import Column from "@/app/_components/layout/Column";
import Footer from "@/app/_components/layout/Footer";
import Header from "@/app/_components/layout/Header";
import MainSection from "@/app/_components/layout/Main";
import TanstackProvider from "@/app/_provider/TanstackProvider";
import ToastProvider from "@/app/_provider/ToastProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <TanstackProvider>
        <ToastProvider>
          <Header />

          <MainSection className="flex h-full w-full flex-1 items-center justify-center bg-background">
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
