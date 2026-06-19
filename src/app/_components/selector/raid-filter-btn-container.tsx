import { RaidType } from '@/app/_store/useRaidStore';

const TYPE = ['빠른전투', '상한'] as const;

const RaidFilterBtnContainer = ({
  type,
  onClick,
}: {
  type: RaidType;
  onClick: (type: RaidType) => void;
}) => {
  return (
    <div className="flex h-8 items-center justify-center gap-4 text-xs">
      {TYPE.map((t) => (
        <button
          key={t}
          className={`inline-flex items-center overflow-hidden whitespace-nowrap rounded-full px-4 py-2 font-medium ring-1 ring-inset ${
            type === t
              ? 'text-blue-300 ring-[hsla(0,0%,100%,0.12)]'
              : 'text-zinc-400 ring-[hsla(0,0%,100%,0.06)]'
          }`}
          onClick={() => onClick(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default RaidFilterBtnContainer;
