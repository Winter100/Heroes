import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import ItemTag from '@/app/_components/common/item/item-tag';
import ItemTitle from '@/app/_components/item/item-title';
import ItemTooltipItem from '@/app/_components/item/item-tooltip-item';
import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import { ItemRecipe } from '@/app/_type/itemType';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ItemRecipeTableProps {
  itemRecipe: ItemRecipe[];
  handleSelectItem: (item: string) => void;
}

const ItemRecipeTable = ({
  itemRecipe,
  handleSelectItem,
}: ItemRecipeTableProps) => {
  return (
    <RoundedContainer className="flex flex-col gap-4 p-0">
      <Table className="relative w-full table-fixed border-collapse">
        <TableCaption></TableCaption>
        <TableHeader className="sticky top-0 z-10 bg-zinc-950">
          <TableRow className="bg-muted-foreground/10">
            <TableHead className="w-[10%] text-center">번호</TableHead>
            <TableHead className="w-[50%]">아이템명</TableHead>
            <TableHead className="w-[20%] text-center">카테고리</TableHead>
            <TableHead className="w-[20%] text-center">등급</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemRecipe.map((item, i) => (
            <TableRow
              key={item.name}
              className="cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
              onClick={() => handleSelectItem(item.name)}
            >
              <TableCell className="text-center font-medium">{i + 1}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Tooltip delayDuration={100}>
                  <TooltipTrigger className="text-base text-gray-400">
                    <ImageIconUseBorder
                      src={item?.image ?? ''}
                      itemName={item?.name ?? ''}
                      isRatingBorder={true}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="w-80 border bg-background">
                    <ItemTooltipItem item={item} />
                  </TooltipContent>
                </Tooltip>
                <div className="flex flex-col gap-1">
                  <ItemTitle
                    name={item?.name}
                    category={item.category}
                    tier={item?.tier}
                  >
                    {item.name}
                  </ItemTitle>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <ItemTag>{item?.category}</ItemTag>
              </TableCell>
              <TableCell className="text-center">{item?.tier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RoundedContainer>
  );
};

export default ItemRecipeTable;
