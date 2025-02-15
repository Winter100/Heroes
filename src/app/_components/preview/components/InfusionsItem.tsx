import Image from "next/image";
import Column from "../../layout/Column";
import Row from "../../layout/Row";
import { InfusionsItemProps } from "@/app/_type/previewType";

const InfusionsItem = ({
  selectedValue,
  stat_name,
  stat_value,
  setOpenModal,
}: InfusionsItemProps) => {
  const src = "/images/enchant/infusion.png";
  return (
    <Column
      onDoubleClick={() => setOpenModal(false)}
      className={`${selectedValue === stat_name ? "text-blue-300" : "text-zinc-400 hover:text-gray-200"} h-full w-full gap-2 rounded-lg bg-zinc-800 p-2 font-mono text-xs`}
    >
      <Row className="h-8 items-center gap-2">
        <Image
          width={32}
          height={32}
          style={{ width: "32px", height: "32px" }}
          className="rounded-md object-cover"
          src={src}
          alt="정령석"
        />

        <div className="h-full flex-1">
          <Row className="flex h-full gap-2">
            <p className="flex items-center justify-center text-[11px]">
              {stat_name.split(" ").slice(0, -1).join(" ")}
            </p>
          </Row>
        </div>
      </Row>
      <Column className="min-h-24 flex-1 rounded-md border border-borderColor p-1 text-[11px]">
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
    </Column>
  );
};

export default InfusionsItem;
