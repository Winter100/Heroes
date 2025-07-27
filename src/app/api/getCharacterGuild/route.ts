import { NextResponse } from 'next/server';

import { SEARCH_PARAMS_KEY } from '@/app/_constant/searchParamsKey';
import { nexonInstance } from '@/app/_services/nexonInstance';
import { Guild } from '@/app/_type/characterType';
import { getSearchParamsValue } from '@/app/_utils/get/getSearchParamsValue';

export const GET = async (request: Request) => {
  const ocid = getSearchParamsValue(request, SEARCH_PARAMS_KEY.ocid);

  if (!ocid) {
    return NextResponse.json({ error: 'ocid가 없습니다.' }, { status: 400 });
  }

  try {
    const response = await nexonInstance.get(`/character/guild?ocid=${ocid}`);

    const data: Guild = await response.data;

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);

    return NextResponse.json({ error: 'Error Guild' }, { status: 500 });
  }
};
