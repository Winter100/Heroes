import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface RaidEntryFilterBtnProps {
  onlyLimit: boolean;
  handleLimit: () => void;
  handleQuick: () => void;
  filter?: string;
}
const RaidEntryFilterBtn = ({
  handleLimit,
  handleQuick,
  onlyLimit,
  filter,
}: RaidEntryFilterBtnProps) => {
  const content = onlyLimit ? (
    <Button
      className={cn('', filter === '상한' && 'bg-blue-300')}
      disabled={filter === '상한'}
      variant="outline"
      onClick={handleLimit}
    >
      상한
    </Button>
  ) : (
    <>
      <Button
        className={cn(
          '',
          filter === '빠른전투' && 'border-blue-300 text-blue-300'
        )}
        disabled={filter === '빠른전투'}
        variant="outline"
        onClick={handleQuick}
      >
        빠른전투
      </Button>
      <Button
        className={cn('', filter === '상한' && 'border-blue-300 text-blue-300')}
        variant="outline"
        disabled={filter === '상한'}
        onClick={handleLimit}
      >
        상한
      </Button>
    </>
  );

  return (
    <div className={cn('flex h-8 items-center justify-center gap-4 text-xs')}>
      {content}
    </div>
  );
};

export default RaidEntryFilterBtn;
