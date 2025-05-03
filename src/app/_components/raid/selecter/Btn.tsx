import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface BtnProps {
  entry: string;
  title: string;
}
const Btn = ({ entry, title, ...props }: BtnProps) => {
  return (
    <Button
      className={cn(
        'w-20 p-2',
        entry === title &&
          'rounded-lg border border-blue-300 bg-background text-blue-300'
      )}
      {...props}
    >
      {title}
    </Button>
  );
};

export default Btn;
