import AutoResponsiveAd from '@/app/_components/adsense/AutoResponsiveAd';
import SideAd from '@/app/_components/adsense/SideAd';
import { GoldMarket } from '@/app/_features/gold';
import { MarketRankList } from '@/app/_features/gold/types';
import { nexonInstance } from '@/app/_services/nexonInstance';

export const revalidate = 36000;

const Page = async () => {
  const [buyMarket, sellMarket] = await Promise.all([
    getData<MarketRankList<'buy'>>('buy', { buy_gold: [] }),
    getData<MarketRankList<'sell'>>('sell', { sell_gold: [] }),
  ]);

  return (
    <>
      <SideAd dataSlot="2056348937" position="left" />
      <div>
        <div className="py-2">
          <AutoResponsiveAd />
        </div>
        <div className="mx-auto max-w-7xl gap-6 px-4 py-6 sm:px-6">
          <GoldMarket buyMarket={buyMarket} sellMarket={sellMarket} />
        </div>
      </div>
      <SideAd dataSlot="1601053361" position="right" />
    </>
  );
};

export default Page;

const getData = async <T,>(type: string, fallback: T): Promise<T> => {
  try {
    const response = await nexonInstance.get(
      `/marketplace/gold-market-${type}-top-30`
    );

    return response.data;
  } catch (e) {
    console.error(e);
    return fallback;
  }
};
