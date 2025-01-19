import dynamic from "next/dynamic";
import LimitTableHead from "../limitTable/LimitTableHead";

const LimitTableBody = dynamic(() => import("../limitTable/LimitTableBody"), {
  ssr: false,
});

const RaidLimitUserTable = () => {
  return (
    <table className="flex h-full w-full flex-1 table-auto flex-col gap-1">
      <caption className="hidden">캐릭터 리스트</caption>
      <LimitTableHead />
      <LimitTableBody />
    </table>
  );
};

export default RaidLimitUserTable;
