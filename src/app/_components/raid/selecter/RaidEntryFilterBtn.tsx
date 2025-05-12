import { cn } from '@/lib/utils';

interface RaidEntryFilterBtnProps {
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
    <button
      className={`inline-flex items-center overflow-hidden whitespace-nowrap rounded-full px-4 py-2 font-medium ring-1 ring-inset ${
        filter === '상한'
          ? 'text-blue-300 ring-[hsla(0,0%,100%,0.12)]'
          : 'text-zinc-400 ring-[hsla(0,0%,100%,0.06)]'
      }`}
      disabled={filter === '상한'}
      onClick={handleLimit}
    >
      상한
    </button>
  ) : (
    <>
      <button
        className={`inline-flex items-center overflow-hidden whitespace-nowrap rounded-full px-4 py-2 font-medium ring-1 ring-inset ${
          filter === '빠른전투'
            ? 'text-blue-300 ring-[hsla(0,0%,100%,0.12)]'
            : 'text-zinc-400 ring-[hsla(0,0%,100%,0.06)]'
        }`}
        onClick={handleQuick}
      >
        빠른전투
      </button>
      <button
        className={`inline-flex items-center overflow-hidden whitespace-nowrap rounded-full px-4 py-2 font-medium ring-1 ring-inset ${
          filter === '상한'
            ? 'text-blue-300 ring-[hsla(0,0%,100%,0.12)]'
            : 'text-zinc-400 ring-[hsla(0,0%,100%,0.06)]'
        }`}
        onClick={handleLimit}
      >
        상한
      </button>
    </>
  );

  return (
    <div className={cn('flex h-8 items-center justify-center gap-4 text-xs')}>
      {content}
    </div>
  );
};

export default RaidEntryFilterBtn;
