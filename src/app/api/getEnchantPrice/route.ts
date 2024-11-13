import { nexonInstance } from "@/app/_services/nexonInstance";
import { EnchantPriceType } from "@/app/_type/enchantPriceType";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  let allData: EnchantPriceType[] = [];
  let nextCursor: string | null = null;

  try {
    do {
      const url = nextCursor
        ? `/marketplace/market-history?item_name=${encodeURIComponent("인챈트 스크롤")}&cursor=${nextCursor}`
        : `/marketplace/market-history?item_name=${encodeURIComponent("인챈트 스크롤")}`;

      const response = await nexonInstance.get(url);
      const data: EnchantPriceType = response.data;

      allData.push(data);
      nextCursor = data.next_cursor;
    } while (nextCursor);

    return NextResponse.json(allData, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      {
        status: 500,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      },
    );
  }
}
