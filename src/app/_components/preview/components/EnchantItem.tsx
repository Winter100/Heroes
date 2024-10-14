import Image from "next/image";
import Row from "../../layout/Row";
import Column from "../../layout/Column";
import { EnchantPrice } from "@/app/_type/enchantPriceType";
import { calculateAveragePrice } from "../utils/calculateAverage";
import { usePreviewStore } from "@/app/_store/previewStore";
import { EnchantItemProps } from "@/app/_type/previewType";

const EnchantItem = ({
  slot,
  enchantList,
  rank: enchantRank,
  stat_name,
  stat_value,
  previewName = "",
  selectedValue,
  setOpenModal,
}: EnchantItemProps) => {
  const rank = Number.isNaN(Number(enchantRank)) ? 7 : Number(enchantRank);
  const setTotalPrice = usePreviewStore((state) => state.setTotalPrice);

  const onClick = (price: number) => {
    const priceData = {
      previewName,
      slot,
      stat_name,
      price,
    };
    setTotalPrice(priceData);
  };

  const prefix6 = "/images/enchant/prefix6.png";
  const prefix7 = "/images/enchant/prefix7.png";
  const suffix6 = "/images/enchant/suffix6.png";
  const suffix7 = "/images/enchant/suffix7.png";

  const isPrefix = previewName === "prefix";

  const src = isPrefix
    ? rank <= 6
      ? prefix6
      : prefix7
    : rank <= 6
      ? suffix6
      : suffix7;

  let enchantAvgPrice = [] as EnchantPrice[];

  if (isPrefix) {
    const prefixEnchant = enchantList.filter(
      (i) => i.item_option.prefix_enchant_preset_1 === stat_name,
    );

    enchantAvgPrice = prefixEnchant;
  } else {
    const suffixEnchant = enchantList.filter(
      (i) => i.item_option.suffix_enchant_preset_1 === stat_name,
    );

    enchantAvgPrice = suffixEnchant;
  }

  const isSelected = selectedValue === stat_name;
  const avgPrice = calculateAveragePrice(enchantAvgPrice).average;

  return (
    <Column
      onClick={() => onClick(avgPrice)}
      onDoubleClick={() => setOpenModal(false)}
      className={`${isSelected ? "text-blue-300" : "text-zinc-400 hover:text-gray-200"} h-full w-full gap-2 rounded-lg bg-zinc-800 p-2 font-mono text-xs`}
      // className={`${isSelected ? "text-blue-300" : "text-zinc-400 hover:text-gray-200"} h-full w-full gap-2 rounded-lg bg-zinc-800 p-2 font-mono text-xs`}
    >
      <Row className="h-8 items-center gap-2">
        <div className="relative h-full w-8">
          <Image className="object-cover" src={src} fill alt="인챈트" />
        </div>
        <div className="h-full flex-1">
          <Row className="flex h-full gap-2">
            <p className="flex h-full w-4 items-center justify-center text-[11px]">
              ({rank})
            </p>
            <p className="flex items-center justify-center text-[11px]">
              {stat_name} 인챈트 스크롤
            </p>
          </Row>
        </div>
      </Row>
      <Column className="min-h-24 flex-1 rounded-md border border-zinc-400 p-1 text-[11px]">
        {stat_value.map((option) => (
          <div
            className="flex items-center px-1"
            key={option.stat_name + option.stat_value}
          >
            <p className="flex justify-start">{option.stat_name}</p>
            <p className="flex flex-1 items-center justify-end">
              {option.stat_value}
            </p>
          </div>
        ))}
      </Column>
      <Row className="flex h-5 items-center justify-center gap-1 text-[11px]">
        {avgPrice !== 0 ? (
          <>
            <Row className="items-center justify-center">평균 거래 가격:</Row>
            <Row className="items-center justify-center">
              {avgPrice?.toLocaleString()}
            </Row>
          </>
        ) : (
          <Row className="items-center justify-center">
            최근 거래가 없습니다
          </Row>
        )}
      </Row>
    </Column>
  );
};

export default EnchantItem;
