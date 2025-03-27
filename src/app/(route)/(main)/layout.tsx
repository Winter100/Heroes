"use client";

import TanstackProvider from "@/app/_provider/TanstackProvider";
import ToastProvider from "@/app/_provider/ToastProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <ToastProvider>
        <div className="flex flex-1 flex-col">{children}</div>
      </ToastProvider>
    </TanstackProvider>
  );
};

export default Layout;
