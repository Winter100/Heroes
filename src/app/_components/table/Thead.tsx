import { memo } from "react";
import Th from "./Th";
import Tr from "./Tr";

interface TheadProps {
  ranking: string;
  name: string;
  price: string;
  mPrice: string;
}

const Thead = memo(({ name, price, ranking, mPrice }: TheadProps) => {
  return (
    <thead className="sticky top-0 z-10 w-full">
      <Tr className="h-10 bg-backgroundOne text-xs text-white sm:text-sm">
        <Th className="w-1/4 font-medium sm:w-1/5">{ranking}</Th>
        <Th className="w-2/4 font-medium">{name}</Th>
        <Th className="w-2/5 font-medium">{mPrice}</Th>
        <Th className="w-2/4 font-medium">{price}</Th>
      </Tr>
    </thead>
  );
});

Thead.displayName = "Thead";

export default Thead;
