import EnchantBrin from '@/app/_components/common/enchant/EnchantBrin';
import EnchantImage from '@/app/_components/common/enchant/EnchantImage';
import EnchantIsDestruction from '@/app/_components/common/enchant/EnchantIsDestruction';
import Item from '@/app/_components/common/item/Item';
import { findEnchantNames } from '@/app/_components/enchant/utils/findEnchantNames';
import { getEnchantImage } from '@/app/_components/enchant/utils/getEnchantImage';
import { slotNames } from '@/app/_components/enchant/utils/getSlotName';
import Column from '@/app/_components/layout/Column';
import Row from '@/app/_components/layout/Row';
import { EnchantStoreType } from '@/app/_store/selectEnchantStore';
import { convertToKST } from '@/app/_utils/convertToKST';

import clsx from 'clsx';
import TabEnchantEffects from '../../preview/components/preview/enchant/TabEnchantEffects';

interface EnchantInfoType extends EnchantStoreType {
  className?: string;
}

const EnchantInfo = ({
  upgreadeType,
  name,
  average_price,
  rank,
  stat_value,
  date_update,
  className,
}: EnchantInfoType) => {
  const type = upgreadeType === 'prefix' ? '접두' : '접미';

  return (
    <Item className={clsx('flex flex-col gap-1', className)}>
      <Row>
        <EnchantImage
          alt={name}
          src={getEnchantImage(rank, upgreadeType)}
          size={35}
        />
        <Column className="w-full gap-0.5 pl-2">
          <Item.Title
            className="flex flex-row justify-between text-sm"
            type="초급"
          >
            <div>
              <Item.Content>{name}</Item.Content>
              <Item.Content className="pl-1">인챈트 스크롤</Item.Content>
            </div>
            <Item.Content>
              <div className="text-center text-[11px] text-gray-400">
                {convertToKST(date_update)}
              </div>
            </Item.Content>
          </Item.Title>

          <Item.SubDescription className="px-1">
            <Item.Content>
              {rank}랭크 {type} 인챈트
            </Item.Content>
          </Item.SubDescription>

          <Item.SubDescription className="flex items-center justify-between px-1">
            <Item.Content>물품거래소 매입가</Item.Content>
            <Item.Content>{average_price.toLocaleString()}</Item.Content>
          </Item.SubDescription>

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
        <TabEnchantEffects effects={{ stat_value }} />
      </div>
    </Item>
  );
};

export default EnchantInfo;
