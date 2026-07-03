'use client';
import TanstackProvider from '@/app/_provider/TanstackProvider';
import { ToastProvider } from '@radix-ui/react-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <ToastProvider>
        <div className="flex flex-1 flex-col">{children}</div>
      </ToastProvider>
    </TanstackProvider>
  );
};

export default Providers;
