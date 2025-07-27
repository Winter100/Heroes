import { cn } from '@/lib/utils';
import GoogleAdSenseAuto from './GoogleAdSenseAuto';
import { ComponentProps } from 'react';

interface AutoAdProps extends ComponentProps<'div'> {
  dataSlot: string;
}

const AutoAd = ({ dataSlot, className }: AutoAdProps) => {
  return (
    <div
      className={cn(
        'mx-auto mb-2 flex items-center justify-center p-2 md:px-40',
        className
      )}
    >
      <GoogleAdSenseAuto
        pid={process.env.NEXT_PUBLIC_GOOGLE_CID || ''}
        dataSlot={dataSlot}
      />
    </div>
  );
};

export default AutoAd;
