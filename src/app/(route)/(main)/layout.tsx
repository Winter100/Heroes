import Providers from './providers';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <Providers>{children}</Providers>;
};

export default Layout;
