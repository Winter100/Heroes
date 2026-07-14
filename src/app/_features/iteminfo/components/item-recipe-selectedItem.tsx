import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemTitle from '@/app/_components/item/item-title';
import ItemTag from '@/app/_components/common/item/item-tag';
import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { LiaQuestionCircle } from 'react-icons/lia';
import ItemTooltipContainer from '@/app/_components/item/item-tooltip-container';
import { ItemRecipe } from '@/app/_type/itemType';

interface ItemRecipeSelectedItemProps {
  selectedItem: ItemRecipe;
}

const ItemRecipeSelectedItem = ({
  selectedItem,
}: ItemRecipeSelectedItemProps) => {
  return (
    <RoundedContainer className="flex h-full flex-col gap-4 bg-muted/70 p-4">
      <div className="flex items-center gap-4">
        <ItemTooltipContainer itemRecipe={selectedItem}>
          <ImageIconUseBorder
            src={selectedItem?.image ?? ''}
            itemName={selectedItem?.name ?? ''}
            isRatingBorder={true}
          />
        </ItemTooltipContainer>
        <div>
          <ItemTitle
            name={selectedItem.name}
            category={selectedItem.category}
            tier={selectedItem.tier}
          >
            <h3>{selectedItem.name}</h3>
          </ItemTitle>
          <ItemTag>{selectedItem.category}</ItemTag>
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
                key={idx}
                className="flex items-center gap-3 rounded-lg border bg-background p-3 transition-colors hover:border-slate-700/60"
              >
                <div className="flex w-10 items-center justify-center rounded border border-slate-700 bg-slate-800 text-xl">
                  <ItemTooltipContainer itemRecipe={material}>
                    <ImageIconUseBorder
                      src={material?.image ?? ''}
                      itemName={material?.name ?? ''}
                      isRatingBorder={true}
                    />
                  </ItemTooltipContainer>
                </div>
                <div className="min-w-0 flex-1">
                  <ItemTitle
                    tier={material?.tier ?? ''}
                    category={material?.category}
                    name={material?.name}
                    className="flex items-center truncate text-sm font-medium"
                  >
                    <span>{material?.name}</span>
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
                    {material?.category && (
                      <ItemTag>{material?.category}</ItemTag>
                    )}
                  </div>
                </div>
                <div className="rounded border px-2 py-0.5 text-right text-sm text-white">
                  x {material.quantity?.toLocaleString() || 0}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RoundedContainer>
  );
};

export default ItemRecipeSelectedItem;
