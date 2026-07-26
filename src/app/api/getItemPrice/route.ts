import { SEARCH_PARAMS_KEY } from '@/app/_constant/keyword';
import { nexonInstance } from '@/app/_services/nexonInstance';
import { ItemPriceApiType } from '@/app/_type/enchantType';
import { getSearchParamsValue } from '@/app/_utils/get';
import { NextResponse } from 'next/server';

export const revalidate = 60;

export const GET = async (request: Request) => {
  const itemName =
    getSearchParamsValue(request, SEARCH_PARAMS_KEY.item_name) ??
    '인챈트 스크롤';

  if (!itemName) {
    return NextResponse.json(
      { error: '아이템 이름을 입력해주세요' },
      { status: 400 }
    );
  }

  const allData: ItemPriceApiType[] = [];
  let nextCursor: string | null = null;
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  try {
    do {
      const url = nextCursor
        ? `/marketplace/market-history?item_name=${encodeURIComponent(itemName)}&cursor=${nextCursor}`
        : `/marketplace/market-history?item_name=${encodeURIComponent(itemName)}`;

      const response = await nexonInstance.get(url);
      const data: ItemPriceApiType = response.data;

      allData.push(data);
      nextCursor = data.next_cursor;

      if (nextCursor) {
        await delay(150);
      }
    } while (nextCursor);

    return NextResponse.json(allData);
  } catch (e) {
    console.error(e);
    return NextResponse.json([]);
  }
};
