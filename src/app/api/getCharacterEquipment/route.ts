// getEquipment;

import { NextResponse } from "next/server";

import { getSearchParamsValue } from "@/app/_utils/getSearchParamsValue";
import { SEARCH_PARAMS_KEY } from "@/app/_constant/searchParamsKey";
import { nexonInstance } from "@/app/_services/nexonInstance";
import { Basic } from "@/app/_type/characterType";

export async function GET(request: Request) {
  const ocid = getSearchParamsValue(request, SEARCH_PARAMS_KEY.ocid);

  if (!ocid) {
    return NextResponse.json({ error: "ocid가 없습니다." }, { status: 400 });
  }

  try {
    const response = await nexonInstance.get(
      `/character/item-equipment?ocid=${ocid}`,
    );

    const data = await response.data;

    return NextResponse.json(data);
  } catch (e) {}
}