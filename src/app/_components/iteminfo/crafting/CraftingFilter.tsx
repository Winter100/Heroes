import React from "react";
import { useMaterialsStore } from "@/app/_store/materialsStore";
import clsx from "clsx";

const filterArray = [{ value: "장비" }, { value: "소모품" }, { value: "재료" }];

const CraftingFilter = () => {
  const filterValue = useMaterialsStore((state) => state.filter);
  const setFilter = useMaterialsStore((state) => state.setFilter);
  return (
    <ul className="flex w-full gap-1 text-xs">
      {filterArray.map((filter) => (
        <li key={filter.value}>
          <button
            onClick={() => setFilter(filter.value)}
            className={clsx(
              "rounded-sm border border-borderColor/50 p-1",
              filterValue === filter.value && "text-blue-300",
            )}
          >
            {filter.value}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CraftingFilter;
