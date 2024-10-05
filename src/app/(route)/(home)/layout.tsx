import Column from "@/app/_components/layout/Column";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Column className="h-full w-full max-w-6xl gap-1">{children}</Column>;
};

export default Layout;
