import { memo } from "react";
import TooltipImage from "../../common/tooltip/TooltipImage";

interface CratingSelectImageProps {
  isSelect: boolean;
  src: string;
  itemName: string;
}

const CratingSelectImage = memo(
  ({ isSelect, itemName, src }: CratingSelectImageProps) => {
    return (
      <>
        {isSelect ? (
          <div className="w-10">
            <TooltipImage
              src={src}
              size={35}
              itemName={itemName}
              isRatingBorder={true}
            />
          </div>
        ) : (
          <div className="w-10">
            <TooltipImage src={src} size={35} itemName={itemName} />
          </div>
        )}
      </>
    );
  },
);

export default CratingSelectImage;

CratingSelectImage.displayName = "CratingSelectImage";
