import ItemTitle from '@/app/_components/item/item-title';
import ItemTag from '@/app/_components/common/item/item-tag';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LiaQuestionCircle } from 'react-icons/lia';
import { ItemRecipes } from '@/app/_type/itemType';
import ItemTooltipItem from '@/app/_components/item/item-tooltip-item';
import { IoMdArrowForward } from 'react-icons/io';
import SuspenseContainer from './suspense-container';

interface ItemRecipeDetailProps {
  selectedItem: ItemRecipes;
}
const ItemRecipeDetail = ({ selectedItem }: ItemRecipeDetailProps) => {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-4 rounded-md bg-muted/50 p-2">
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
      <div className="flex flex-col justify-center gap-2 overflow-y-auto lg:flex-row">
        <div className="flex-1 bg-muted/50">
          <div className="mx-auto max-w-96 rounded-md p-4">
            <h4 className="p-2 text-center text-sm font-semibold text-zinc-300">
              제작 재료
            </h4>
            <div className="flex flex-col gap-1">
              {selectedItem?.materials?.map((material, idx) => (
                <div
                  key={material.name + idx}
                  className="flex w-full items-center gap-2 rounded-lg border bg-background p-2 transition-colors hover:border-slate-700/60"
                >
                  <div className="flex w-8 items-center justify-center rounded border border-slate-700 bg-slate-800 text-xl">
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger className="text-base text-gray-400">
                        <ImageIconUseBorder
                          className="h-8 w-8"
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
                      className="flex items-center truncate text-xs font-medium"
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
                      {material.hasRecipe && (
                        <SuspenseContainer
                          link={`${material.materialId}-${material.name}`}
                          path="/iteminfo"
                        >
                          <ItemTag>제작 정보</ItemTag>
                        </SuspenseContainer>
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

        <div className="mx-auto flex items-center">
          <IoMdArrowForward />
        </div>

        <div className="flex-1 bg-muted/50">
          <div className="mx-auto max-w-96 rounded-md p-4">
            <h4 className="p-2 text-center text-sm font-semibold text-zinc-300">
              아이템
            </h4>
            <div className="w-full rounded-md bg-background text-xs">
              <ItemTooltipItem item={selectedItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemRecipeDetail;
