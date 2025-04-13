import { NextResponse } from 'next/server';

import { getSearchParamsValue } from '@/app/_utils/getSearchParamsValue';
import { SEARCH_PARAMS_KEY } from '@/app/_constant/searchParamsKey';
import { nexonInstanceV1 } from '@/app/_services/nexonInstance';

export const GET = async (request: Request) => {
  const type = getSearchParamsValue(request, SEARCH_PARAMS_KEY.type);

  try {
    const response = await nexonInstanceV1.get(`/${type}`);

    const data = await response.data;

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);

    return NextResponse.json({ error: 'Error Notice' }, { status: 500 });
  }
};
