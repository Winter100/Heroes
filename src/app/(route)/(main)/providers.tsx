'use client';
import TanstackProvider from '@/app/_provider/TanstackProvider';
import { TooltipProvider } from '@/components/ui/tooltip';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <TooltipProvider>
        <div className="flex flex-1 flex-col">{children}</div>
      </TooltipProvider>
    </TanstackProvider>
  );
};

export default Providers;
