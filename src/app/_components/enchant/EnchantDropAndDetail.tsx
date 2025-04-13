'use client';
import {
  EnchantStoreType,
  useSelectEnchantStore,
} from '@/app/_store/selectEnchantStore';
import React from 'react';
import EnchantDropList from './EnchantDropList';
import EnchantInfo from '../iteminfo/enchant/EnchantInfo';

const EnchantDropAndDetail = () => {
  const enchant = useSelectEnchantStore((state) => state.enchant);

  return (
    <>
      {enchant && (
        <>
          <EnchantDropList enchantData={enchant as EnchantStoreType} />
          <div className="h-[470px] rounded-md border border-borderColor/50">
            <EnchantInfo {...(enchant as EnchantStoreType)} />
          </div>
        </>
      )}
    </>
  );
};

export default EnchantDropAndDetail;
