import React from 'react';
import Row from '../../layout/Row';
import Item from '../item/Item';
import { cn } from '@/lib/utils';

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
  return (
    <Row className={cn('justify-between px-2 text-sm', className)}>
      <Item.Content>{name}</Item.Content>
      <Item.Content className="flex">
        <span className="pr-1">{type}</span>
        <div className="text-orange-300">{rank}</div>
        <span>랭크</span>
      </Item.Content>
    </Row>
  );
};

export default EnchantSubTitle;
