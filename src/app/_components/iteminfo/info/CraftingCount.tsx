import React from 'react';
import { Button, Field, Input, Label } from '@headlessui/react';
import { useMaterialsStore } from '@/app/_store/materialsStore';

const CraftingCount = () => {
  const count = useMaterialsStore((state) => state.count);
  const setCount = useMaterialsStore((state) => state.setCount);

  return (
    <Field className="bottom-0 flex w-full flex-row items-center justify-center gap-1 text-xs sm:absolute">
      <Label htmlFor="search-m">수량 </Label>
      <Input
        id="search-m"
        className="w-16 appearance-none rounded-md border border-borderColor/50 bg-inherit p-1 outline-none"
        type="number"
        value={count}
        max={9999}
        onChange={(e) =>
          setCount(Math.max(1, Math.min(9999, Number(e.target.value))))
        }
      />
      <Button
        onClick={() => setCount(Math.max(1, Math.min(9999, Number(count) + 1)))}
        className="w-8 rounded-md border border-borderColor/50 p-1"
      >
        +
      </Button>
      <Button
        onClick={() => setCount(Math.max(1, Math.min(9999, Number(count) - 1)))}
        className="w-8 rounded-md border border-borderColor/50 p-1"
      >
        -
      </Button>
    </Field>
  );
};

export default CraftingCount;
