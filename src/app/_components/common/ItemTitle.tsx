import { ItemTitleType } from "@/app/_type/itemTitleType";

const ItemTitle = ({ level, name }: ItemTitleType) => {
  return (
    <div className="flex h-6 items-center justify-center text-sm font-semibold text-white">
      <h2>{`${level} ${name}`}</h2>
    </div>
  );
};

export default ItemTitle;
