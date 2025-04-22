import { InfusionGridItemProps } from '@/app/_type/infusionType';
import Column from '../layout/Column';
import InfusionImageAndTitle from './InfusionImageAndTitle';
import InfusionValues from './InfusionValues';

const InfusionGridItem = ({
  infusion,
  isSelected,
  selectedHandler,
}: InfusionGridItemProps) => {
  return (
    <li
      className="flex w-full rounded-lg shadow-md transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
      key={infusion?.name + infusion.stat_value}
    >
      <button
        className="w-full"
        // onDoubleClick={() => setOpenModal(false)}
        onClick={() => {
          selectedHandler(infusion.name, infusion.stat_value);
        }}
      >
        <Column
          className={`${isSelected ? 'text-blue-300' : 'text-zinc-400 hover:text-gray-200'} h-full w-full gap-1 rounded-lg bg-zinc-800 p-2 text-xs`}
        >
          <InfusionImageAndTitle infusionName={infusion.name} />
          <InfusionValues infusionValue={infusion.stat_value} />
        </Column>
      </button>
    </li>
  );
};

export default InfusionGridItem;
