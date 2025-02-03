import clsx from "clsx";
import { memo, useRef, useEffect } from "react";
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";

import { getEnchantImage } from "./utils/getEnchantImage";
import Tr from "../table/Tr";
import Td from "../table/Td";
import Row from "../layout/Row";
import EnchantImage from "../common/enchant/EnchantImage";
import EnchantTitle from "../common/enchant/EnchantTitle";
import Loading from "../common/Loading";
import Column from "../layout/Column";
import { EnchantStoreType } from "@/app/_store/selectEnchantStore";

interface TrItemProps {
  enchant: EnchantStoreType;
  isSelected: boolean;
  setEnchant: (enchant: EnchantStoreType | null) => void;
  isLoading: boolean;
  length: number;
  resetSelectEnchant: () => void;
}

const TrItem = memo(
  ({
    enchant,
    isSelected,
    setEnchant,
    isLoading,
    resetSelectEnchant,
    length,
  }: TrItemProps) => {
    const selectedRef = useRef<HTMLTableRowElement>(null);

    const onClick = (enchant: EnchantStoreType) => {
      if (isSelected) return resetSelectEnchant();
      setEnchant(enchant);
    };

    useEffect(() => {
      if (selectedRef.current) {
        selectedRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, [length]);

    return (
      <Tr
        ref={isSelected ? selectedRef : null}
        onClick={() => onClick(enchant)}
        className={clsx(
          "transform cursor-pointer border-t border-borderColor text-center transition-all duration-300 ease-in-out hover:bg-backgroundOne",
          isSelected ? "animate-boundUpDown text-blue-300" : "",
        )}
      >
        <Td className="px-0">{enchant?.rank || ""}</Td>
        <Td className="px-0">
          <Row className="h-full items-center gap-0.5 px-0 sm:gap-2 sm:px-2">
            <EnchantImage
              size={35}
              alt={enchant?.name}
              src={getEnchantImage(enchant?.rank, enchant?.upgreadeType)}
            />
            <EnchantTitle
              enchantName={enchant?.name}
              isViewScrollTitle={false}
            />
          </Row>
        </Td>
        <Td className="px-0">
          {isLoading ? (
            <Loading />
          ) : enchant?.average_price !== 0 ? (
            <Column>
              <span
                title={enchant?.average_price?.toLocaleString()}
                className="block overflow-hidden truncate whitespace-nowrap"
              >
                {enchant?.average_price?.toLocaleString()}
              </span>
            </Column>
          ) : (
            <span className="text-xs">-</span>
          )}
        </Td>
        <Td className="px-0">
          {isLoading ? (
            <Loading />
          ) : enchant?.average_price !== 0 ? (
            <Column>
              <span className="flex flex-row items-center justify-center gap-1 text-xs text-red-500 opacity-80">
                <RxTriangleUp />
                {enchant?.max_price?.toLocaleString()}
              </span>
              <span className="flex flex-row items-center justify-center gap-1 text-xs text-blue-500 opacity-80">
                <RxTriangleDown />
                {enchant?.min_price?.toLocaleString()}
              </span>
            </Column>
          ) : (
            <span className="text-xs">-</span>
          )}
        </Td>
      </Tr>
    );
  },
);
TrItem.displayName = "TrItem";

export default TrItem;
