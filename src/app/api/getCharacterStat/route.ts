import { NextResponse } from 'next/server';

import { SEARCH_PARAMS_KEY } from '@/app/_constant/searchParamsKey';
import { nexonInstance } from '@/app/_services/nexonInstance';
import { Stat } from '@/app/_type/previewType';
import { getSearchParamsValue } from '@/app/_utils/get/getSearchParamsValue';

export const GET = async (request: Request) => {
  const ocid = getSearchParamsValue(request, SEARCH_PARAMS_KEY.ocid);

  if (!ocid) {
    return NextResponse.json({ error: 'ocid가 없습니다.' }, { status: 400 });
  }

  try {
    const response = await nexonInstance.get(`/character/stat?ocid=${ocid}`);

    const data: { stat: Stat[] } = response.data;

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Error Stat' }, { status: 500 });
  }
};
