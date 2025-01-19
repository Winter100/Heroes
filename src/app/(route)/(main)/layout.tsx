"use client";

import TanstackProvider from "@/app/_provider/TanstackProvider";
import ToastProvider from "@/app/_provider/ToastProvider";
import Header from "@/app/_components/layout/Header";
import Aside from "@/app/_components/layout/Aside";
import MainSection from "@/app/_components/layout/Main";
import Footer from "@/app/_components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <ToastProvider>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Header />
          <MainSection className="flex h-full w-full flex-row items-center justify-center bg-background">
            {/* <Aside className="h-full flex-1"></Aside> */}
            <div className="h-full w-full max-w-6xl gap-1">{children}</div>
            {/* <Aside className="h-full flex-1"></Aside> */}
          </MainSection>
          <Footer />
        </div>
      </ToastProvider>
    </TanstackProvider>
  );
};

export default Layout;
// "use client";

// import Aside from "@/app/_components/layout/Aside";
// import Column from "@/app/_components/layout/Column";
// import Footer from "@/app/_components/layout/Footer";
// import Header from "@/app/_components/layout/Header";
// import MainSection from "@/app/_components/layout/Main";
// import TanstackProvider from "@/app/_provider/TanstackProvider";
// import ToastProvider from "@/app/_provider/ToastProvider";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex h-full w-full flex-col items-center justify-center">
//       <TanstackProvider>
//         <ToastProvider>
//           <Header />
//           <MainSection className="flex w-full flex-col items-center justify-center bg-background">
//             <Aside className="h-full flex-1"></Aside>
//             <Column className="h-full w-full max-w-6xl gap-1">
//               {children}
//             </Column>
//             <Aside className="h-full flex-1"></Aside>
//           </MainSection>
//           <Footer />
//         </ToastProvider>
//       </TanstackProvider>
//     </div>
//   );
// };

// export default Layout;
