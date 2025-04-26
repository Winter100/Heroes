import clsx from 'clsx';
import Row from '../../layout/Row';
import Item from './Item';

interface ItemSelectorPrps {
  children: React.ReactNode;
  useText1: React.ReactNode;
  useText2: React.ReactNode;
  usedNumber: number;
}

const ItemSelector = ({
  children,
  useText1,
  useText2,
  usedNumber,
}: ItemSelectorPrps) => {
  return (
    <Row className="flex items-center justify-between px-2">
      <Item.Content>{children}</Item.Content>

      <Item.Shape
        useNumber={1}
        className={clsx(
          'w-24 cursor-default',
          usedNumber === 1 ? '' : 'opacity-30'
        )}
      >
        {useText1 || ''}
      </Item.Shape>

      <Item.Shape
        useNumber={2}
        className={clsx(
          'w-24 cursor-default',
          usedNumber === 2 ? '' : 'opacity-30'
        )}
      >
        {useText2 || ''}
      </Item.Shape>
    </Row>
  );
};

export default ItemSelector;
