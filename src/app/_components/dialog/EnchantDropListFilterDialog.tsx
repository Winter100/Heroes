import Image from "next/image";
import BasicDialog from "../common/BasicDialog";
import Button from "../common/Button";
import EnchantDropListContent from "./content/EnchantDropListContent";
import { useDialog } from "@/app/_hooks/useDialog/useDialog";
import { CiFilter } from "react-icons/ci";
import { getImageByName } from "@/app/_utils/getImageByName";
import { useEnchantFilterStore } from "@/app/_store/enchantFilterStore";

const EnchantDropListFilterDialog = () => {
  const { isOpen, onClose, onOpen } = useDialog();

  const { dropRaidOrItemName } = useEnchantFilterStore((state) => ({
    dropRaidOrItemName: state.dropRaidOrItemName,
  }));
  const isImage = dropRaidOrItemName === "" || dropRaidOrItemName === "all";
  return (
    <>
      <Button className="rounded-md" onClick={onOpen}>
        {isImage ? (
          <CiFilter />
        ) : (
          <div className="flex h-5 items-center justify-center">
            <Image
              title="필터"
              className="object-scale-down"
              width={25}
              height={25}
              src={getImageByName(dropRaidOrItemName)}
              alt="필터"
            />
          </div>
        )}
      </Button>
      <BasicDialog isOpen={isOpen} onClose={onClose} size="1200px">
        <h2 className="m-auto my-2 text-center font-sans text-2xl text-white">
          인챈트 드롭 필터
        </h2>
        <EnchantDropListContent onClose={onClose} />
      </BasicDialog>
    </>
  );
};

export default EnchantDropListFilterDialog;
