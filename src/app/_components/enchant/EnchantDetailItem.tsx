import React, { memo } from "react";
import EnchantEffects from "../common/enchant/EnchantEffects";
import EnchantImage from "../common/enchant/EnchantImage";
import EnchantRank from "../common/enchant/EnchantRank";
import EnchantTitle from "../common/enchant/EnchantTitle";
import Column from "../layout/Column";
import Row from "../layout/Row";

import { findEnchantNames } from "./utils/findEnchantNames";
import { getEnchantImage } from "./utils/getEnchantImage";
import { slotNames } from "./utils/getSlotName";
import { convertToKST } from "@/app/_utils/convertToKST";
import { EnchantStoreType } from "@/app/_store/selectEnchantStore";

const EnchantDetailItem = ({
  upgreadeType,
  name,
  average_price,
  rank,
  stat_value,
  date_update,
}: EnchantStoreType) => {
  const type = upgreadeType === "prefix" ? "접두" : "접미";

  return (
    <div className="h-[530px] rounded-md border border-borderColor p-2 font-sans text-xs">
      <Row className="gap-2">
        <div className="h-10 w-10">
          <EnchantImage
            alt={name}
            src={getEnchantImage(rank, upgreadeType)}
            size={35}
          />
        </div>
        <Column className="w-full gap-1">
          <Row className="mb-2 items-center justify-between">
            <EnchantTitle
              className="text-sm text-green-300"
              enchantName={`${name}`}
            />
            <span className="right-0">{convertToKST(date_update)}</span>
          </Row>
          <div className="rounded-sm border border-borderColor px-1 py-0.5 text-xs">
            {rank}랭크 {type} 인챈트
          </div>
          <div className="flex items-center justify-between rounded-sm border border-borderColor px-1 py-0.5 text-xs">
            <span>물품거래소 매매가</span>

            <span>{average_price?.toLocaleString() || "0"}</span>
          </div>
          <div className="rounded-sm border border-borderColor px-1 py-0.5 text-xs text-green-300">
            초급 아이템
          </div>
        </Column>
      </Row>

      <Column className="p-2">
        <span>- 인챈트 가능 부위</span>
        <span className="flex flex-row flex-wrap gap-1 px-2">
          {findEnchantNames(name).map((name) => (
            <span key={name}>{slotNames[name] || ""}</span>
          ))}
        </span>
      </Column>

      <Column className="p-2">
        {Number(rank) <= 6 ? (
          <div className="text-red-700">
            - 인챈트 실패 시 장비가 파괴될 수 있습니다.
          </div>
        ) : (
          <div>- 인챈트에 실패해도 장비가 파괴되지 않습니다.</div>
        )}

        {!isNaN(Number(rank)) && (
          <div>- 인챈트 성공 시 장비가 캐릭터에 귀속됩니다.</div>
        )}
      </Column>

      <Column className="p-2 text-yellow-200/70">
        <div>장비에 마법적인 힘을 부여할 수 있는 인챈트 스크롤이다.</div>
        <div>이 스크롤을 갖고 브린을 찾아가 보자.</div>
      </Column>

      <Column className="gap-1 p-2 text-sm">
        <Row className="items-center justify-between">
          <EnchantTitle enchantName={name} isViewScrollTitle={false} />
          <Row className="gap-1">
            <span>{type}</span>
            <Row>
              <EnchantRank className="text-orange-300" enchantRank={rank} />
              <span>랭크</span>
            </Row>
          </Row>
        </Row>
        <EnchantEffects className="gap-1 p-2" enchantEffects={stat_value} />
      </Column>
    </div>
  );
};

const arePropsEqual = (
  prevProps: EnchantStoreType,
  nextProps: EnchantStoreType,
) => {
  return (
    prevProps.upgreadeType === nextProps.upgreadeType &&
    prevProps.name === nextProps.name &&
    prevProps.rank === nextProps.rank &&
    JSON.stringify(prevProps.average_price) ===
      JSON.stringify(nextProps.average_price) &&
    JSON.stringify(prevProps.stat_value) ===
      JSON.stringify(nextProps.stat_value)
  );
};

export default memo(EnchantDetailItem, arePropsEqual);
