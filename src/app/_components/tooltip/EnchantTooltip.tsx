import {
  prefix_enchant_options,
  suffix_enchant_options,
} from '@/app/_constant/enchant';
import { insertUpgradeType } from '../../_utils/enchant/utils/insertUpgradeType';
import { keyword } from '@/app/_constant/keyword';
import Enchant from '../common/enchant/Enchant';

const allEnchantList = [
  ...insertUpgradeType(prefix_enchant_options, keyword.upgreadeType.prefix),
  ...insertUpgradeType(suffix_enchant_options, keyword.upgreadeType.suffix),
];

interface EnchantTooltipProps {
  itemName: string;
}

const EnchantTooltip = ({ itemName }: EnchantTooltipProps) => {
  const enchantName = itemName.split(' ')[0];
  const findEnchant = allEnchantList.find(
    (enchant) => enchant.name === enchantName
  ) as {
    upgreadeType: string;
    rank: string;
    name: string;
    description: string;
    drop_item_list: string[];
    stat_value: {
      stat_name: string;
      stat_value: string;
    }[];
  };

  return <Enchant {...findEnchant} />;
};

export default EnchantTooltip;
