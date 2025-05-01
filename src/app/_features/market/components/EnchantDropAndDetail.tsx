'use client';
import EnchantInfo from '@/app/_components/iteminfo/enchant/EnchantInfo';
import {
  EnchantStoreType,
  useSelectEnchantStore,
} from '@/app/_store/selectEnchantStore';
import EnchantDropList from './EnchantDropList';
import Column from '@/app/_components/layout/Column';

const EnchantDropAndDetail = () => {
  const enchant = useSelectEnchantStore((state) => state.enchant);

  return (
    <Column className="w-full max-w-[400px] gap-2">
      {enchant && (
        <>
          <EnchantDropList enchantData={enchant as EnchantStoreType} />
          <div className="h-[470px] rounded-md border border-borderColor/50">
            <EnchantInfo {...(enchant as EnchantStoreType)} />
          </div>
        </>
      )}
    </Column>
  );
};

export default EnchantDropAndDetail;
