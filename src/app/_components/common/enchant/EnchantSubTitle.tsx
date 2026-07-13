import React from 'react';
import Row from '../../layout/Row';
import Item from '../item/Item';
import { cn } from '@/lib/utils';
import { ENCHANT_DESTRUCTION_RANK } from '@/app/_type/enchantType';

interface EnchantSubTitleProps {
  name: string;
  type: '접두' | '접미';
  rank: string;
  className?: string;
}

const EnchantSubTitle = ({
  name,
  rank,
  type,
  className,
}: EnchantSubTitleProps) => {
  const color =
    Number(rank) <= ENCHANT_DESTRUCTION_RANK
      ? 'text-amber-300/90'
      : 'text-purple-400/90';
  return (
    <Row className={cn('justify-between px-2 text-xs', className)}>
      <Item.Content className={color}>{name}</Item.Content>
      <Item.Content className="flex">
        <span className="pr-1">{type}</span>
        <div className={color}>{rank}</div>
        <span>랭크</span>
      </Item.Content>
    </Row>
  );
};

export default EnchantSubTitle;
