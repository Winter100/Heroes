import { nexonInstance } from '@/app/_services/nexonInstance';
import { EnchantPriceType } from '@/app/_type/enchantType';
import { NextResponse } from 'next/server';

// export const dynamic = "force-dynamic";
export const revalidate = 60;

export const GET = async () => {
  const allData: EnchantPriceType[] = [];
  let nextCursor: string | null = null;
  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));

  try {
    do {
      const url = nextCursor
        ? `/marketplace/market-history?item_name=${encodeURIComponent('인챈트 스크롤')}&cursor=${nextCursor}`
        : `/marketplace/market-history?item_name=${encodeURIComponent('인챈트 스크롤')}`;

      const response = await nexonInstance.get(url);
      const data: EnchantPriceType = response.data;

      allData.push(data);
      nextCursor = data.next_cursor;

      // if (nextCursor) {
      //   await delay(200);
      // }
    } while (nextCursor);

    return NextResponse.json(allData);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        error: 'Failed to fetch data',
      },
      { status: 500 }
    );
  }
};
