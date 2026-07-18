import RoundedContainer from '@/app/_components/layout/RoundedContainer';
import ItemTag from '@/app/_components/common/item/item-tag';
import {
  EnchantFormatingType,
  EnchantOptionType,
} from '@/app/_type/enchantType';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getEnchantImage } from '@/app/_utils/enchant';
import Enchant from '@/app/_components/common/enchant/Enchant';
import { convertToKST } from '@/app/_utils/convert';
import Loading from '@/app/_components/common/Loading';

interface EnchantDetailProps {
  selectedItem: EnchantOptionType;
  enchantPriceData: Map<string, EnchantFormatingType>;
  isLoading: boolean;
}

const EnchantDetail = ({
  selectedItem,
  enchantPriceData,
  isLoading,
}: EnchantDetailProps) => {
  const mergedPriceEnchant = {
    ...selectedItem,
    average_price: enchantPriceData.get(selectedItem.name)?.average_price,
  };
  const date_update = enchantPriceData.get(selectedItem.name)?.date_update;

  return (
    <RoundedContainer className="flex h-full flex-col gap-4 p-4">
      {/* 상단 타이틀 */}
      <div className="flex items-center gap-2 rounded-md bg-background p-2">
        <ImageIcon
          className="h-4 w-4 md:h-6 md:w-6"
          imageClassName="rounded-sm"
          src={getEnchantImage(
            selectedItem?.rank.toString(),
            selectedItem?.affix.toLowerCase().toString()
          )}
          alt={selectedItem?.name.toString()}
        />
        <div className="flex w-full items-center justify-between gap-1">
          <div>{selectedItem?.name}</div>
          {isLoading ? (
            <div className="w-20">
              <Loading />
            </div>
          ) : (
            date_update && (
              <span className="text-xs">{convertToKST(date_update)}</span>
            )
          )}
        </div>
      </div>
      <hr className="border-zinc-700" />
      {/* 인챈트 상세 정보 */}
      <div className="flex h-full flex-1 flex-row gap-6">
        {/* 왼쪽 인챈트 UI */}
        <div className="flex flex-1 flex-col items-center gap-2">
          <h4 className="text-center text-sm font-semibold text-zinc-300">
            {`${selectedItem?.name} 상세 정보 `}
          </h4>

          <div className="w-80 rounded-md border-borderColor/50 bg-background p-2">
            <Enchant enchant={mergedPriceEnchant} />
          </div>
        </div>

        <div className="h-full w-0.5 bg-zinc-700 fill-zinc-900" />

        {/* 오른족 인챈트 얻는곳 */}
        <div className="flex flex-1 flex-col gap-2">
          <h4 className="text-center text-sm font-semibold text-zinc-300">
            얻는 곳
          </h4>
          <div className="flex flex-col gap-2">
            {selectedItem?.drop_list && selectedItem?.drop_list?.length > 0 ? (
              selectedItem?.drop_list?.map((drop, idx) => (
                <div
                  key={drop.name + idx}
                  className="flex items-center justify-between gap-2 rounded-md bg-background p-2"
                >
                  <div className="flex items-center gap-2">
                    <ImageIcon
                      className="h-4 w-4 md:h-8 md:w-8"
                      imageClassName="rounded-sm"
                      src={drop?.image ?? ''}
                      alt={drop?.name}
                    />
                    <span>{drop.name}</span>
                  </div>
                  <ItemTag>
                    {type[drop.type as keyof typeof type] ?? ''}
                  </ItemTag>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-between gap-2 rounded-md bg-background p-2">
                정보가 없습니다
              </div>
            )}
          </div>
        </div>
      </div>
    </RoundedContainer>
  );
};

export default EnchantDetail;

const type = {
  ['item']: '아이템',
  ['raid']: '레이드',
};
