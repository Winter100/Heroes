'use client';
import { insertUpgradeType } from '@/app/_utils/enchant/utils/insertUpgradeType';
import {
  prefix_enchant_options,
  suffix_enchant_options,
} from '@/app/_constant/enchant';
import { keyword } from '@/app/_constant/keyword';
import EnchantRankTable from './EnchantRankTable';
import EnchantDropList from './EnchantDropList';
import { useSelectEnchantStore } from '@/app/_store/selectEnchantStore';
import { useEnchantFilterStore } from '../store/enchantFilterStore';
import Enchant from '@/app/_components/common/enchant/Enchant';
import EnchantTableInputFilter from './EnchantTableInputFilter';
import { useEnchantTableInputFilter } from '../hooks/useEnchantTableInputFilter';

const EnchantInformation = () => {
  const allEnchantList = [
    ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
    ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
  ];

  const { inputRef, onSearch, onReset } = useEnchantTableInputFilter();

  const selectEnchant = useSelectEnchantStore((state) => state.enchant);
  const { dropRaidOrItemName, setDropRaidOrItemName } = useEnchantFilterStore();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-2 lg:flex-row">
      <div className="w-full lg:max-w-lg">
        <EnchantRankTable
          className="fixed-scrollbar h-96 overflow-x-hidden overflow-y-scroll md:h-[750px]"
          enchantData={allEnchantList}
        />
        <EnchantTableInputFilter
          inputRef={inputRef}
          onReset={onReset}
          onSearch={onSearch}
        />
      </div>
      <div className="w-full">
        {selectEnchant && (
          <div className="flex h-full flex-col gap-2">
            <EnchantDropList
              dropList={selectEnchant.drop_item_list}
              dropRaidOrItemName={dropRaidOrItemName}
              setDropRaidOrItemName={setDropRaidOrItemName}
            />
            <Enchant
              name={selectEnchant.name}
              average_price={selectEnchant.average_price}
              date_update={selectEnchant.date_update}
              rank={selectEnchant.rank}
              upgreadeType={selectEnchant.upgreadeType}
              stat_value={selectEnchant.stat_value}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EnchantInformation;
