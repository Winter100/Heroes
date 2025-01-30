import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import Th from "./Th";
import Tr from "./Tr";
import clsx from "clsx";

interface TheadProps {
  ranking: string;
  name: string;
  avgPrice: string;
  maxminPrice: string;
  sortKey: string;
  sortOrder: string;
  handleSort: (
    key: "rank" | "name" | "average_price" | "max_price" | "min_price",
  ) => void;
}

const Thead = ({
  name,
  avgPrice,
  ranking,
  maxminPrice,
  sortKey,
  sortOrder,
  handleSort,
}: TheadProps) => {
  return (
    <thead className="sticky top-0 z-10 w-full">
      <Tr className="h-10 cursor-pointer bg-backgroundOne text-xs text-white md:text-sm">
        <Th
          onClick={() => handleSort("rank")}
          className={clsx(
            "w-1/4 font-medium hover:animate-boundUpDown sm:w-1/4",
            sortKey === "rank" &&
              (sortOrder === "desc" ? "!text-blue-500" : "!text-red-500"),
          )}
        >
          <span className="flex items-center justify-center">
            {ranking}
            {sortKey === "rank" &&
              (sortOrder === "desc" ? <RxTriangleDown /> : <RxTriangleUp />)}
          </span>
        </Th>
        <Th
          onClick={() => handleSort("name")}
          className={clsx(
            "w-3/5 font-medium hover:animate-boundUpDown",
            sortKey === "name" &&
              (sortOrder === "desc" ? "!text-blue-500" : "!text-red-500"),
          )}
        >
          <span className="flex items-center justify-center">
            {name}
            {sortKey === "name" &&
              (sortOrder === "desc" ? <RxTriangleDown /> : <RxTriangleUp />)}
          </span>
        </Th>
        <Th
          onClick={() => handleSort("average_price")}
          className={clsx(
            "w-[45%] font-medium hover:animate-boundUpDown",
            sortKey === "average_price" &&
              (sortOrder === "desc" ? "!text-blue-500" : "!text-red-500"),
          )}
        >
          <span className="flex items-center justify-center">
            {avgPrice}
            {sortKey === "average_price" &&
              (sortOrder === "desc" ? <RxTriangleDown /> : <RxTriangleUp />)}
          </span>
        </Th>
        <Th
          onClick={() => handleSort("max_price")}
          className={clsx(
            "w-3/5 font-medium hover:animate-boundUpDown",
            sortKey === "max_price" &&
              (sortOrder === "desc" ? "!text-blue-500" : "!text-red-500"),
          )}
        >
          <span className="flex items-center justify-center">
            {maxminPrice}
            {sortKey === "max_price" &&
              (sortOrder === "desc" ? <RxTriangleDown /> : <RxTriangleUp />)}
          </span>
        </Th>
      </Tr>
    </thead>
  );
};
export default Thead;
