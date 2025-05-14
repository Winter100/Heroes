import { useEnchantFilterStore } from '../store/enchantFilterStore';

const Enchant404 = () => {
  const enchantFilterName = useEnchantFilterStore(
    (state) => state.enchantFilterName
  );
  return (
    <tr className="w-full text-base text-white">
      <td className="py-10" colSpan={4}>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-rose-200">{`"${enchantFilterName}"`}</span>
          <span>인챈트를 찾지 못했습니다</span>
        </div>
      </td>
    </tr>
  );
};

export default Enchant404;
