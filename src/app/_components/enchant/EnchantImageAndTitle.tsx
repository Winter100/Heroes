import Image from "next/image";
import Row from "../layout/Row";

interface EnchantImageAndTitleProps {
  src: string;
  rank: number | string;
  enchantName: string;
  enchantDescription: string;
}

const EnchantImageAndTitle = ({
  enchantDescription,
  rank,
  src,
  enchantName,
}: EnchantImageAndTitleProps) => {
  return (
    <Row className="w-full items-center justify-center">
      <Image
        width={32}
        height={32}
        style={{ width: "32px", height: "32px" }}
        className="rounded-md object-cover"
        src={src}
        alt="인챈트"
      />

      <div className="flex h-full w-full flex-col">
        <Row className="flex h-full w-full items-center justify-center">
          <div className="flex h-full w-full flex-col items-center justify-center text-xs">
            <div className="flex h-full w-full flex-row items-center justify-center gap-1">
              <p className="hidden h-full items-center justify-center lg:flex">
                ({rank})
              </p>
              <p>{enchantName}</p>
              <p className="hidden lg:flex">인챈트 스크롤</p>
            </div>
            {enchantDescription && (
              <div className="text-[10px] opacity-80 sm:text-[11px]">
                {enchantDescription}
              </div>
            )}
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default EnchantImageAndTitle;
