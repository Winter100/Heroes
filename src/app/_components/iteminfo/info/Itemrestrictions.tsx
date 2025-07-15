import Item from '../../common/item/Item';
import { formatStringArray } from '@/app/_utils/formatStringArray';
import ImageIcon from '../../common/Image-Icon';

const Itemrestrictions = ({ restrictions }: { restrictions: string[] }) => {
  return (
    <>
      <Item.Description className="flex flex-row">
        <Item.Content className="flex h-6 justify-center gap-0.5 text-xs text-[rgb(189,164,123)]">
          <div className="flex items-center justify-center">
            <ImageIcon
              className="h-5 w-5"
              alt="restriction"
              src="/images/icon/Restriction.png"
            />
          </div>
        </Item.Content>
        <Item.Content className="flex items-center justify-center text-[11px] text-[rgb(145,175,212)]">
          {formatStringArray(restrictions)}
        </Item.Content>
      </Item.Description>
    </>
  );
};

export default Itemrestrictions;
