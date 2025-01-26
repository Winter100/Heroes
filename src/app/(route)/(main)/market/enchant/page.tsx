"use client";
import EnchantPriceRankingList from "@/app/_components/enchant/EnchantPriceRankingList";
import { useEnchantPriceList } from "@/app/_hooks/useEnchantPriceList/useEnchantPriceList";

const Page = () => {
  useEnchantPriceList();
  return <EnchantPriceRankingList />;
};

export default Page;
