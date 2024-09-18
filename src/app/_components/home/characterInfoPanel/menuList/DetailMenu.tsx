import Button from "@/app/_components/common/Button";
import { useDetailStore } from "@/app/_store/DetailStore";

type BtnValue = "skill" | "item" | "cash";

const BtnData = [
  { name: "각성", value: "skill" },
  { name: "장비", value: "item" },
  { name: "캐쉬", value: "cash" },
];

const DetailMenu = () => {
  const item = useDetailStore((state) => state.item);
  const stats = useDetailStore((state) => state.stats);

  const setStats = useDetailStore((state) => state.setStats);
  const setItem = useDetailStore((state) => state.setItem);
  return (
    <div className="flex gap-1 text-xs">
      <Button
        onClick={() => setStats("능력치")}
        className={`${stats ? "text-blue-300" : "text-white"} h-5 w-14 border border-gray-600 hover:border-gray-600 hover:bg-inherit hover:text-blue-300`}
        key={stats}
      >
        능력치
      </Button>
      {BtnData.map((btn) => (
        <Button
          onClick={() => setItem(btn.value as BtnValue)}
          className={`${item === btn.value ? "text-blue-300" : "text-white"} h-5 w-14 border border-gray-600 hover:border-gray-600 hover:bg-inherit hover:text-blue-300`}
          key={btn.value}
        >
          {btn.name}
        </Button>
      ))}
    </div>
  );
};

export default DetailMenu;
