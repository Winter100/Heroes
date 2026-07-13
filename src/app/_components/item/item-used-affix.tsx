import Row from '../layout/Row';
import { cn } from '@/lib/utils';

interface Props {
  affix: string;
  firstValue: string;
  secondValue: string;
  usedNumber: number;
}

const ItemUsedAffix = ({
  affix = '',
  firstValue = '',
  secondValue = '',
  usedNumber = 0,
}: Props) => {
  return (
    <Row className="flex cursor-default items-center justify-between px-2">
      <div>{affix}</div>

      <div className={cn('', usedNumber === 1 ? '' : 'opacity-30')}>
        <div className="shape relative flex items-center justify-center gap-1 font-sans text-[9px]">
          <div className="absolute -left-3 w-4 rounded-full border border-borderColor bg-[rgb(71,85,105)] text-center text-[8px]">
            1
          </div>
          <div>
            <p>{firstValue}</p>
          </div>
        </div>
      </div>

      <div className={cn('', usedNumber === 2 ? '' : 'opacity-30')}>
        <div className="shape relative flex items-center justify-center gap-1 font-sans text-[9px]">
          <div className="absolute -left-3 w-4 rounded-full border border-borderColor bg-[rgb(71,85,105)] text-center text-[8px]">
            2
          </div>
          <div>
            <p>{secondValue}</p>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default ItemUsedAffix;
