import Image from "next/image";
import clsx from "clsx";
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from "@/app/_constant/enchant";
import { insertUpgradeType } from "../../enchant/utils/insertUpgradeType";
import { keyword } from "@/app/_constant/keyword";
import { getImageByName } from "@/app/_utils/getImageByName";
import { useSelectEnchantStore } from "@/app/_store/selectEnchantStore";
import { useEnchantFilterStore } from "@/app/_store/enchantFilterStore";

interface EnchantDropListContentProps {
  onClose: () => void;
}

const EnchantDropListContent = ({ onClose }: EnchantDropListContentProps) => {
  const { dropRaidOrItemName, setDropRaidOrItemName } = useEnchantFilterStore(
    (state) => ({
      dropRaidOrItemName: state.dropRaidOrItemName,
      setDropRaidOrItemName: state.setDropRaidOrItemName,
    }),
  );
  const { resetSelectEnchant } = useSelectEnchantStore((state) => ({
    resetSelectEnchant: state.resetSelectEnchant,
  }));

  const allEnchantList = [
    ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
    ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
  ];

  const setDropList = allEnchantList.reduce((acc, cur) => {
    cur.drop_item_list.forEach((item) => acc.add(item));
    return acc;
  }, new Set<string>());

  const dropList = Array.from(setDropList).sort();

  const handleSearchParams = (name: string) => {
    setDropRaidOrItemName(name);
    resetSelectEnchant();
    onClose();
  };

  return (
    <ul className="sm:grid-cols-auto-150-fill grid grid-cols-2 gap-2 p-2">
      {dropList?.map((name) => (
        <li
          key={name}
          className={clsx(
            "rounded-md bg-background opacity-70 hover:animate-boundUpDown hover:text-white hover:opacity-100",
            dropRaidOrItemName === name
              ? "border border-blue-300 text-blue-300 !opacity-100"
              : "hover:outline hover:outline-1 hover:outline-rose-300",
          )}
        >
          <button
            onClick={() => handleSearchParams(name)}
            className="flex w-full flex-col items-center justify-center p-1"
          >
            <div className="flex h-20 items-center justify-center">
              <Image
                title={name}
                width={80}
                height={80}
                className="object-scale-down"
                src={getImageByName(name)}
                alt={name}
              />
            </div>
            <span className="flex h-10 w-full items-center justify-center text-sm">
              {name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EnchantDropListContent;
