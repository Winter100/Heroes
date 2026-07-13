'use client';
import TanstackProvider from '@/app/_provider/TanstackProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ToastProvider } from '@radix-ui/react-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <TooltipProvider>
        <ToastProvider>
          <div className="flex flex-1 flex-col">{children}</div>
        </ToastProvider>
      </TooltipProvider>
    </TanstackProvider>
  );
};

export default Providers;
