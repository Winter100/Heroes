import { NextResponse } from 'next/server';

import { nexonInstance } from '@/app/_services/nexonInstance';
import { Guild } from '@/app/_type/characterType';
import { SEARCH_PARAMS_KEY } from '@/app/_constant/keyword';
import { getSearchParamsValue } from '@/app/_utils/get';

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
