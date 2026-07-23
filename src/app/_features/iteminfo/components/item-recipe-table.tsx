import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
import ItemTag from '@/app/_components/common/item/item-tag';
import ItemTitle from '@/app/_components/item/item-title';
import ItemTooltipItem from '@/app/_components/item/item-tooltip-item';
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
import SuspenseContainer from './suspense-container';

type Props = {
  recipes: ItemRecipe[];
};
const ItemRecipeTable = ({ recipes }: Props) => {
  return (
    <Table className="relative w-full table-fixed border-collapse">
      <TableCaption></TableCaption>
      <TableHeader className="sticky top-0 z-10 bg-zinc-950">
        <TableRow className="bg-muted-foreground/10">
          <TableHead className="w-[10%] text-center">번호</TableHead>
          <TableHead className="w-[45%]">아이템명</TableHead>
          <TableHead className="w-[15%] text-center">카테고리</TableHead>
          <TableHead className="w-[15%] text-center">부위</TableHead>
          <TableHead className="w-[15%] text-center">등급</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recipes?.map((item, i) => (
          <TableRow
            key={item.name}
            className="relative cursor-pointer border-b border-zinc-600 transition hover:bg-zinc-800/50"
          >
            <TableCell className="text-center font-medium">
              <SuspenseContainer
                className="absolute inset-0"
                link={item.name}
                path={`/iteminfo`}
              >
                {null}
              </SuspenseContainer>
              {i + 1}
            </TableCell>
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
              <strong className="flex flex-col gap-1">
                <ItemTitle
                  name={item?.name}
                  category={item.category}
                  tier={item?.tier}
                >
                  {item.name}
                </ItemTitle>
              </strong>
            </TableCell>
            <TableCell className="text-center">
              <ItemTag>{item?.category}</ItemTag>
            </TableCell>
            <TableCell className="text-center">
              {item?.slot?.name && <ItemTag>{item?.slot?.name}</ItemTag>}
            </TableCell>

            <TableCell className="text-center">{item?.tier}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemRecipeTable;
