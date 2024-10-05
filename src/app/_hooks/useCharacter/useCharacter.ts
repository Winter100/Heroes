import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { mergeAtk } from "./utils/mergeAtk";
import { translateAndUnifyStats } from "./utils/translateAndUnifyStats";
import { mergeCharacterData } from "./utils/mergeCharacterData";
import { useCharacterStore } from "@/app/_store/characterStore";
import { getOcid } from "@/app/_services/getOcid";
import { getBasic } from "@/app/_services/getBasic";
import { getStats } from "@/app/_services/getStats";
import { getGuild } from "@/app/_services/getGuild";
import { addWaitingRoomCharacterInfo } from "@/app/_utils/localStorage";
import { useRankStore } from "@/app/_store/rankStore";

export const useCharacter = () => {
  const [loading, setLoading] = useState(false);
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);
  const selectedRankTitle = useRankStore((state) => state.selectedRankTitle);

  const handleCharacterInfo = useCallback(
    async (characterName: string) => {
      setLoading(true);

      try {
        // 탄스택 쿼리로 바꾸기?
        const ocid = await getOcid(characterName);
        const [basic, stat, guild] = await Promise.all([
          getBasic(ocid),
          getStats(ocid),
          getGuild(ocid),
        ]);

        const mergedAtkStats = mergeAtk(stat);
        const translatedStats = translateAndUnifyStats(mergedAtkStats);
        const mergedChrarcterData = mergeCharacterData(
          basic,
          translatedStats,
          guild,
        );

        addWaitingRoomCharacterInfo(mergedChrarcterData);
        addCharacter(mergedChrarcterData, selectedRankTitle);

        selectedHandler(characterName);
      } catch (e) {
        toast.error("생성된 캐릭터가 없습니다.");
        if (e instanceof Error) {
          console.error("e", e);
        } else {
          console.error("e", e);
        }
      } finally {
        setLoading(false);
      }
    },
    [addCharacter, selectedHandler, selectedRankTitle],
  );

  return { loading, handleCharacterInfo };
};
