import Loading from "@/app/_components/common/Loading";
import EnchantPriceRankingList from "@/app/_components/enchant/EnchantPriceRankingList";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <EnchantPriceRankingList />
    </Suspense>
  );
};

export default Page;
