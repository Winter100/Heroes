import ImageIconUseBorder from '@/app/_components/common/image/ImageIconUseBorder';
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
    <Table className="w-full min-w-[720px] table-fixed border-collapse text-sm">
      <TableCaption></TableCaption>
      <TableHeader className="sticky top-0 z-10 bg-zinc-900">
        <TableRow>
          <TableHead className="w-[10%] text-center">번호</TableHead>
          <TableHead className="w-[35%]">아이템명</TableHead>
          <TableHead className="w-[10%] text-center">재료</TableHead>
          <TableHead className="w-[15%] text-center">카테고리</TableHead>
          <TableHead className="w-[15%] text-center">부위</TableHead>
          <TableHead className="w-[15%] text-center">등급</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs">
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
              <ItemTitle
                name={item?.name}
                category={item.category}
                tier={item?.tier}
              >
                <strong>{item.name}</strong>
              </ItemTitle>
            </TableCell>
            <TableCell className="text-center">
              <span className="shrink-0 rounded-sm bg-zinc-800/70 px-2 py-0.5">
                {item?.materials.length ?? ''}
              </span>
            </TableCell>
            <TableCell className="text-center">
              <span className="shrink-0 rounded-sm bg-zinc-800/70 px-2 py-0.5">
                {item?.category}
              </span>
            </TableCell>
            <TableCell className="text-center">
              {item?.slot?.name && (
                <span className="shrink-0 rounded-sm bg-zinc-800/70 px-2 py-0.5">
                  {item?.slot?.name}
                </span>
              )}
            </TableCell>

            <TableCell className="text-center">
              <span className="shrink-0 rounded-sm bg-zinc-800/70 px-2 py-0.5">
                {item?.tier}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemRecipeTable;
