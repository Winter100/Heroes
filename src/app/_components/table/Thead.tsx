import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import Th from "./Th";
import Tr from "./Tr";
import clsx from "clsx";
import { memo } from "react";

interface TheadProps {
  rank: React.ReactNode;
  name: React.ReactNode;
  avgPrice: React.ReactNode;
  maxminPrice: React.ReactNode;
  sortKey: string;
  sortOrder: string;
  handleSort: (
    key: "rank" | "name" | "average_price" | "max_price" | "min_price",
  ) => void;
}

const Thead = memo(
  ({
    name,
    avgPrice,
    rank,
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
              "w-1/4 !px-0 font-medium hover:animate-boundUpDown sm:w-1/4 sm:p-2",
              sortKey === "rank" &&
                (sortOrder === "desc" ? "!text-blue-500" : "!text-red-500"),
            )}
          >
            <span className="flex items-center justify-center">
              {rank}
              {sortKey === "rank" &&
                (sortOrder === "desc" ? <RxTriangleDown /> : <RxTriangleUp />)}
            </span>
          </Th>
          <Th
            onClick={() => handleSort("name")}
            className={clsx(
              "w-[62%] !px-0 font-medium hover:animate-boundUpDown sm:w-3/5 sm:p-2",
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
              "w-[50%] !px-0 font-medium hover:animate-boundUpDown sm:p-2",
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
              "w-[65%] !px-0 font-medium hover:animate-boundUpDown sm:w-3/5 sm:p-2",
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
  },
);

Thead.displayName = "Thead";
export default Thead;
