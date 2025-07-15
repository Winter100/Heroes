import { memo, useRef, useEffect } from 'react';
import { RxTriangleUp, RxTriangleDown } from 'react-icons/rx';
import Tr from '../table/Tr';
import Td from '../table/Td';
import Row from '../layout/Row';
import Loading from '../common/Loading';
import Column from '../layout/Column';
import { EnchantStoreType } from '@/app/_type/enchantStoreType';
import ImageIcon from '../common/Image-Icon';
import { cn } from '@/lib/utils';

interface TrItemProps {
  enchant: EnchantStoreType;
  isSelected: boolean;
  isLoading: boolean;
  length: number;
  src: string;
  onClick: () => void;
}

const TrItem = memo(
  ({ enchant, isSelected, isLoading, length, src, onClick }: TrItemProps) => {
    const selectedRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
      if (selectedRef.current) {
        selectedRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, [length]);

    const enchantAvgPrice = enchant?.average_price;
    const enchantMaxPrice = enchant?.max_price;
    const enchantMinPrice = enchant?.min_price;

    return (
      <Tr
        ref={isSelected ? selectedRef : null}
        onClick={onClick}
        className={cn(
          'transform cursor-pointer border-t border-borderColor text-center transition-all duration-300 ease-in-out hover:bg-backgroundOne',
          isSelected ? 'animate-boundUpDown text-blue-300' : ''
        )}
      >
        <Td className="px-0">{enchant?.rank || ''}</Td>
        <Td className="px-0">
          <Row className="h-full items-center gap-0.5 px-0 sm:gap-2 sm:px-2">
            <ImageIcon
              className="h-8 w-8"
              imageClassName="rounded-sm"
              src={src}
              alt={enchant?.name}
            />
            <span>{enchant?.name}</span>
          </Row>
        </Td>
        <Td className="px-0">
          {isLoading ? (
            <Loading />
          ) : enchantAvgPrice !== 0 ? (
            <Column>
              <span
                title={enchantAvgPrice.toLocaleString()}
                className="block overflow-hidden truncate whitespace-nowrap"
              >
                {enchantAvgPrice.toLocaleString()}
              </span>
            </Column>
          ) : (
            <span className="text-xs">-</span>
          )}
        </Td>
        <Td className="px-0">
          {isLoading ? (
            <Loading />
          ) : enchantAvgPrice !== 0 ? (
            <Column>
              <span className="flex flex-row items-center justify-center gap-1 text-xs text-red-500 opacity-80">
                <RxTriangleUp />
                {enchantMaxPrice.toLocaleString()}
              </span>
              <span className="flex flex-row items-center justify-center gap-1 text-xs text-blue-500 opacity-80">
                <RxTriangleDown />
                {enchantMinPrice.toLocaleString()}
              </span>
            </Column>
          ) : (
            <span className="text-xs">-</span>
          )}
        </Td>
      </Tr>
    );
  }
);
TrItem.displayName = 'TrItem';

export default TrItem;
