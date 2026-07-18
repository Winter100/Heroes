import ItemTitle from '@/app/_components/item/item-title';
import ItemTag from '@/app/_components/common/item/item-tag';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LiaQuestionCircle } from 'react-icons/lia';
import { ItemRecipe } from '@/app/_type/itemType';
import ItemTooltipItem from '@/app/_components/item/item-tooltip-item';
import Link from 'next/link';

interface ItemRecipeDetailProps {
  selectedItem: ItemRecipe;
  isMaterial: (item: string) => boolean;
  handleSelectItem: (item: string) => string;
}
// Todo 2칸으로 나누도 아이템정보 와 재료 2개로 나눠서 보여주기
const ItemRecipeDetail = ({
  selectedItem,
  isMaterial,
  handleSelectItem,
}: ItemRecipeDetailProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 rounded-md bg-background p-2">
        <Tooltip delayDuration={100}>
          <TooltipTrigger className="text-base text-gray-400">
            <ImageIconUseBorder
              src={selectedItem?.image ?? ''}
              itemName={selectedItem?.name ?? ''}
              isRatingBorder={true}
            />
          </TooltipTrigger>
          <TooltipContent className="w-80 border bg-background">
            <ItemTooltipItem item={selectedItem} />
          </TooltipContent>
        </Tooltip>
        <div>
          <ItemTitle
            name={selectedItem.name}
            category={selectedItem.category}
            tier={selectedItem.tier}
          >
            <h3>{selectedItem.name}</h3>
          </ItemTitle>
        </div>
      </div>
      <hr className="border-zinc-700" />
      <div className="flex flex-col gap-2">
        {selectedItem?.description && (
          <>
            <h4 className="text-sm font-semibold text-zinc-300">설명</h4>
            <p className="mt-1 max-h-96 overflow-y-auto whitespace-pre-wrap rounded-md bg-background p-2 text-sm">
              {selectedItem?.description}
            </p>
          </>
        )}

        <div>
          <h4 className="text-sm font-semibold text-zinc-300">제작 재료</h4>
          <div className="mt-1 grid grid-cols-2 gap-3">
            {selectedItem?.materials?.map((material, idx) => (
              <div
                key={material.name + idx}
                className="flex items-center gap-3 rounded-lg border bg-background p-2 transition-colors hover:border-slate-700/60"
              >
                <div className="flex w-10 items-center justify-center rounded border border-slate-700 bg-slate-800 text-xl">
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="text-base text-gray-400">
                      <ImageIconUseBorder
                        src={material?.image ?? ''}
                        itemName={material?.name ?? ''}
                        isRatingBorder={true}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="w-80 border bg-background">
                      <ItemTooltipItem item={material} />
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="min-w-0 flex-1">
                  <ItemTitle
                    tier={material?.tier ?? ''}
                    category={material?.category}
                    name={material?.name}
                    className="flex items-center truncate text-sm font-medium"
                  >
                    <strong aria-label="아이템명">{material?.name}</strong>
                    {material?.option && (
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger className="ml-1 text-base text-gray-400">
                          <LiaQuestionCircle />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{material?.option}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </ItemTitle>
                  <div>
                    {isMaterial(material.name) && (
                      <Link href={handleSelectItem(material.name)}>
                        <ItemTag>제작 정보</ItemTag>
                      </Link>
                    )}
                  </div>
                </div>
                <div>
                  <span>x</span>
                  <strong
                    aria-label="수량"
                    className="px-2 py-0.5 text-sm text-white"
                  >
                    {material.quantity?.toLocaleString() || 0}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemRecipeDetail;
