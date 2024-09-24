import Column from "@/app/_components/layout/Column";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Column className="h-full w-full max-w-screen-lg gap-1">{children}</Column>
  );
};

export default Layout;
