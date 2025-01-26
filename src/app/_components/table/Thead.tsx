import { memo } from "react";
import Th from "./Th";
import Tr from "./Tr";

interface TheadProps {
  ranking: string;
  rank: string;
  name: string;
  price: string;
}

const Thead = memo(({ rank, name, price, ranking }: TheadProps) => {
  return (
    <thead className="sticky top-0 z-10 w-full">
      <Tr className="h-10 bg-backgroundOne text-sm text-white">
        <Th className="w-1/5 font-medium">{ranking}</Th>
        <Th className="w-1/5 font-medium">{rank}</Th>
        <Th className="w-2/4 font-medium">{name}</Th>
        <Th className="w-2/4 font-medium">{price}</Th>
      </Tr>
    </thead>
  );
});

Thead.displayName = "Thead";

export default Thead;
