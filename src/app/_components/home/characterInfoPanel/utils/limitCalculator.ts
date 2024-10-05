import { MonstersType } from "@/app/_constant/raidList";

export const limitCalculator = (
  monsterInfo: MonstersType,
  user_stat_name: string,
  user_stat_value: string,
  user_limit_stat?: string | null,
) => {
  switch (user_stat_name) {
    case "공격력": {
      const Mstat = monsterInfo?.limit?.find((s) => s?.stat_name === "공격력");
      const limit = user_limit_stat !== null ? Number(user_limit_stat) : 0;
      return Number(user_stat_value) - (Number(Mstat?.stat_value) + limit);
    }

    case "크리티컬": {
      const Mstat = monsterInfo?.limit?.find(
        (s) => s?.stat_name === "크리티컬 저항",
      );
      return Number(user_stat_value) - (Number(Mstat?.stat_value) + 50);
    }
    case "밸런스": {
      const Mstat = monsterInfo?.limit?.find(
        (s) => s?.stat_name === "밸런스 저항",
      );
      return Number(user_stat_value) - (Number(Mstat?.stat_value) + 100);
    }
    case "대항력": {
      const Mstat = monsterInfo?.limit?.find(
        (s) => s?.stat_name === "대항력 저항",
      );
      return Number(user_stat_value) - (Number(Mstat?.stat_value) + 100);
    }
    case "크리티컬 저항": {
      const Mstat = monsterInfo?.limit?.find((s) => s.stat_name === "크리티컬");
      return Number(user_stat_value) - (Number(Mstat?.stat_value) - 3);
    }

    default:
      return null;
  }
};
