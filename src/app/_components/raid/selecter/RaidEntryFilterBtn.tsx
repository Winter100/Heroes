import { Button } from '@/components/ui/button';

export interface RaidEntryFilterBtnProps {
  onlyLimit: boolean;
  handleLimit: () => void;
  handleQuick: () => void;
}
const RaidEntryFilterBtn = ({
  handleLimit,
  handleQuick,
  onlyLimit,
}: RaidEntryFilterBtnProps) => {
  const content = onlyLimit ? (
    <Button onClick={handleLimit}>상한</Button>
  ) : (
    <>
      <Button onClick={handleQuick}>빠른전투</Button>
      <Button onClick={handleLimit}>상한</Button>
    </>
  );

  return (
    <div className="flex h-8 items-center justify-center gap-4 text-xs">
      {content}
    </div>
  );
};

export default RaidEntryFilterBtn;
