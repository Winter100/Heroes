import ItemTag from '@/app/_components/common/item/item-tag';
import ImageIcon from '@/app/_components/common/image/Image-Icon';
import { getEnchantImage } from '@/app/_utils/enchant';
import Enchant from '@/app/_components/common/enchant/Enchant';
import { convertToKST } from '@/app/_utils/convert';
import { IoMdArrowForward } from 'react-icons/io';
import { MergedEnchantType } from '../enchant-fiter-list';

interface EnchantDetailProps {
  selectedItem: MergedEnchantType;
}

const EnchantDetail = ({ selectedItem }: EnchantDetailProps) => {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-4 rounded-md bg-muted/50 p-2">
        <ImageIcon
          className="h-4 w-4 md:h-6 md:w-6"
          imageClassName="rounded-sm"
          src={getEnchantImage(
            selectedItem?.rank.toString(),
            selectedItem?.affix.toLowerCase().toString()
          )}
          alt={selectedItem?.name.toString()}
        />
        <div>{selectedItem?.name}</div>
        <span className="text-xs" aria-label="갱신 시간">
          {convertToKST(selectedItem?.date_update ?? '')}
        </span>
      </div>

      <div className="flex flex-col justify-center gap-2 overflow-y-auto lg:flex-row">
        <div className="flex-1 bg-muted/50">
          <div className="mx-auto max-w-96 rounded-md p-4">
            <h4 className="p-2 text-center text-sm font-semibold text-zinc-300">
              얻는 곳
            </h4>
            <div className="flex flex-col gap-2">
              {selectedItem?.drop_list &&
              selectedItem?.drop_list?.length > 0 ? (
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

        <div className="mx-auto flex items-center">
          <IoMdArrowForward />
        </div>

        <div className="flex-1 bg-muted/50">
          <div className="mx-auto max-w-96 rounded-md p-4">
            <h4 className="p-2 text-center text-sm font-semibold text-zinc-300">
              상세 정보
            </h4>

            <div className="w-full rounded-md bg-background text-xs">
              <Enchant enchant={selectedItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnchantDetail;

const type = {
  ['item']: '아이템',
  ['raid']: '레이드',
};
