import { NextResponse } from "next/server";

import { getSearchParamsValue } from "@/app/_utils/getSearchParamsValue";
import { SEARCH_PARAMS_KEY } from "@/app/_constant/searchParamsKey";
import { nexonInstance } from "@/app/_services/nexonInstance";
import { Basic } from "@/app/_type/characterType";

export async function GET(request: Request) {
  const type = getSearchParamsValue(request, SEARCH_PARAMS_KEY.type);

  try {
    const response = await nexonInstance.get(
      `/marketplace/gold-market-${type}-top-30`,
    );

    const data: Basic = await response.data;

    return NextResponse.json(data);
  } catch (e) {}
}
