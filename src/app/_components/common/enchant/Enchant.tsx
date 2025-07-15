import Item from '../item/Item';
import Row from '../../layout/Row';
import Column from '../../layout/Column';
import ImageIcon from '../Image-Icon';
import EnchantIsDestruction from './EnchantIsDestruction';
import EnchantBrin from './EnchantBrin';
import EnchantEffects from './EnchantEffects';
import { Stat } from '@/app/_type/previewType';
import { getEnchantImage } from '../../enchant/utils/getEnchantImage';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { convertToKST } from '@/app/_utils/convertToKST';
import { findEnchantNames } from '../../enchant/utils/findEnchantNames';
import { slotNames } from '../../enchant/utils/getSlotName';

interface EnchantProps extends ComponentProps<'div'> {
  name: string;
  upgreadeType: string;
  rank: string;
  stat_value: Stat[];
  date_update?: string;
  average_price?: number;
  className?: string;
}
const Enchant = ({
  upgreadeType,
  name,
  average_price,
  rank,
  stat_value,
  date_update,
  className,
}: EnchantProps) => {
  const type = upgreadeType === 'prefix' ? '접두' : '접미';
  const src = getEnchantImage(rank, upgreadeType);

  const update = date_update ? date_update : null;
  const avgPrice = average_price ? average_price : null;

  return (
    <Item className={cn('flex flex-col gap-1', className)}>
      <Row>
        <ImageIcon src={src} alt={name} />
        <Column className="w-full gap-0.5 pl-2">
          <Item.Title
            className="flex flex-row justify-between text-sm"
            type="초급"
          >
            <div>
              <Item.Content>{name}</Item.Content>
              <Item.Content className="pl-1">인챈트 스크롤</Item.Content>
            </div>
            {update && (
              <Item.Content>
                <div className="text-center text-[11px] text-gray-400">
                  {convertToKST(update)}
                </div>
              </Item.Content>
            )}
          </Item.Title>

          <Item.SubDescription className="px-1">
            <Item.Content>
              {rank}랭크 {type} 인챈트
            </Item.Content>
          </Item.SubDescription>

          {avgPrice && (
            <Item.SubDescription className="flex items-center justify-between px-1">
              <Item.Content>물품거래소 매입가</Item.Content>
              <Item.Content>{avgPrice.toLocaleString()}</Item.Content>
            </Item.SubDescription>
          )}

          <Item.SubDescription className="flex items-center justify-between px-1">
            <Item.Content className="min-w-7">부위</Item.Content>
            <Item.Content className="flex flex-row gap-1">
              {findEnchantNames(name)
                .map((name) => slotNames[name])
                .join(', ')}
            </Item.Content>
          </Item.SubDescription>

          <Item.SubDescription className="flex items-center justify-between px-1">
            <Item.Title type="초급">
              <Item.Content>초급 아이템</Item.Content>
            </Item.Title>
          </Item.SubDescription>
        </Column>
      </Row>

      <EnchantIsDestruction rank={rank} />
      <Item.Border />

      <EnchantBrin />
      <Item.Border />

      <Row className="justify-between px-2 text-sm">
        <Item.Content>{name}</Item.Content>
        <Item.Content className="flex">
          <span className="pr-1">{type}</span>
          <div className="text-orange-300">{rank}</div>
          <span>랭크</span>
        </Item.Content>
      </Row>

      <div className="flex-1 rounded-md border border-gray-500/30 px-1 py-2 text-xs">
        <EnchantEffects effects={stat_value} />
      </div>
    </Item>
  );
};

export default Enchant;
