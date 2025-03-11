import Image from "next/image";
import Item from "../../common/item/Item";
import Star from "../../common/Star";

const ItemQuality = ({ quality }: { quality: number }) => {
  return (
    <Item.Description className="flex flex-row">
      <Item.Content className="flex h-6 flex-wrap justify-center gap-0.5 text-[rgb(189,164,123)]">
        <div className="w-6">
          <Image
            width={20}
            height={10}
            src="/images/icon/quality.png"
            alt="quality"
          />
        </div>
        <span className="flex items-center justify-center text-[11px]">
          품질
        </span>
      </Item.Content>
      <Item.Content className="flex flex-wrap items-center justify-center text-xs">
        {Array.from({ length: quality }, (_, i) => (
          <Star key={i + 1} />
        ))}
      </Item.Content>
    </Item.Description>
  );
};

export default ItemQuality;
