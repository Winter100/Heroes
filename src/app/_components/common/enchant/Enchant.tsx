import Item from '../item/Item';
import Row from '../../layout/Row';
import Column from '../../layout/Column';
import EnchantIsDestruction from './EnchantIsDestruction';
import EnchantEffects from './EnchantEffects';
import ImageIcon from '../image/Image-Icon';
import EnchantSubTitle from './EnchantSubTitle';
import { getEnchantImage, getUniqueBaseStrings } from '@/app/_utils/enchant';
import { MergedEnchantType } from '@/app/_features/market/enchant-fiter-list';

const affix = {
  ['PREFIX']: '접두',
  ['SUFFIX']: '접미',
};

const Enchant = ({ enchant }: { enchant: MergedEnchantType }) => {
  const convertedAffix = affix[enchant?.affix as keyof typeof affix];

  return (
    <Item className="flex flex-col gap-2">
      <Row>
        <ImageIcon
          className="h-4 w-4 md:h-8 md:w-8"
          imageClassName="rounded-sm"
          src={getEnchantImage(
            enchant?.rank.toString(),
            enchant?.affix.toLowerCase().toString()
          )}
          alt={enchant?.name.toString()}
        />
        <Column className="w-full gap-1 pl-2">
          <Item.Title
            className="flex flex-row justify-between text-sm"
            type="초급"
          >
            <div>
              <Item.Content>{enchant?.name}</Item.Content>
              <Item.Content className="pl-1">인챈트 스크롤</Item.Content>
            </div>
          </Item.Title>

          <Item.SubDescription className="px-1">
            <Item.Content>
              {enchant?.rank}랭크 {convertedAffix} 인챈트
            </Item.Content>
          </Item.SubDescription>

          {enchant?.average_price && enchant?.average_price > 0 && (
            <Item.SubDescription className="flex items-center justify-between px-1">
              <Item.Content>물품거래소 매입가</Item.Content>
              <Item.Content>
                {enchant?.average_price.toLocaleString()}
              </Item.Content>
            </Item.SubDescription>
          )}

          <Item.SubDescription className="flex items-center justify-between px-1">
            <Item.Content className="min-w-7">부위</Item.Content>
            <Item.Content className="flex flex-row flex-wrap gap-1">
              {getUniqueBaseStrings(enchant.slot?.map((e) => e.name) ?? [])
                .sort((a, b) => a.localeCompare(b))
                .map((slot) => {
                  return <span key={slot}>{slot}</span>;
                })}
            </Item.Content>
          </Item.SubDescription>

          <Item.SubDescription className="flex items-center justify-between px-1">
            <Item.Title type="초급">
              <Item.Content>초급 아이템</Item.Content>
            </Item.Title>
          </Item.SubDescription>
        </Column>
      </Row>

      <EnchantIsDestruction rank={enchant?.rank?.toString()} />
      <Item.Border />

      {/* <EnchantBrin /> */}
      {/* <Item.Border /> */}

      <EnchantSubTitle
        name={enchant?.name?.toString()}
        type={convertedAffix as '접두' | '접미'}
        rank={enchant?.rank?.toString()}
      />

      <div className="flex-1 rounded-md border border-gray-500/30 px-1 py-2 text-xs">
        <EnchantEffects effects={enchant?.effects} />
      </div>
    </Item>
  );
};

export default Enchant;
