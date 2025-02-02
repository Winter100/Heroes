import { useSelectEnchantStore } from "@/app/_store/selectEnchantStore";
import React from "react";
import EnchantDropList from "./EnchantDropList";
import EnchantDetailItem from "./EnchantDetailItem";

const EnchantDropAndDetail = () => {
  const enchant = useSelectEnchantStore((state) => state.enchant);

  return (
    <>
      {enchant && (
        <>
          <EnchantDropList enchantData={enchant as any} />
          <EnchantDetailItem {...(enchant as any)} />
        </>
      )}
    </>
  );
};

export default EnchantDropAndDetail;
