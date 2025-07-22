import { NextResponse } from 'next/server';

import { SEARCH_PARAMS_KEY } from '@/app/_constant/searchParamsKey';
import { nexonInstance } from '@/app/_services/nexonInstance';
import { Basic } from '@/app/_type/characterType';
import { getSearchParamsValue } from '@/app/_utils/get/getSearchParamsValue';

export const GET = async (request: Request) => {
  const type = getSearchParamsValue(request, SEARCH_PARAMS_KEY.type);

  try {
    const response = await nexonInstance.get(
      `/marketplace/gold-market-${type}-top-30`
    );

    const data: Basic = await response.data;

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        error: 'Error Market',
      },
      { status: 500 }
    );
  }
};
