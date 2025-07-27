import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CraftingCountProps {
  count: number;
  setCount: (count: number) => void;
}

const CraftingCount = ({ count, setCount }: CraftingCountProps) => {
  return (
    <div className="bottom-0 flex w-full flex-row items-center justify-center gap-1 text-xs sm:absolute">
      <Label htmlFor="quantity">수량</Label>
      <Input
        id="quantity"
        className="w-16 appearance-none rounded-md border border-borderColor/50 bg-inherit p-1 outline-none"
        type="number"
        value={count}
        max={9999}
        onChange={(e) =>
          setCount(Math.max(1, Math.min(9999, Number(e.target.value))))
        }
      />
      <Button
        variant="outline"
        onClick={() => setCount(Math.max(1, Math.min(9999, Number(count) + 1)))}
        className="w-8 rounded-md"
      >
        +
      </Button>
      <Button
        variant="outline"
        onClick={() => setCount(Math.max(1, Math.min(9999, Number(count) - 1)))}
        className="w-8 rounded-md"
      >
        -
      </Button>
    </div>
  );
};

export default CraftingCount;
