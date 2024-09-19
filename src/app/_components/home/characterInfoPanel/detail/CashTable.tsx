import { v4 as uuidv4 } from "uuid";

import { EquipmentType } from "@/app/_type/equipmentType";

const CashTable = ({ item }: { item: EquipmentType }) => {
  const avatar_color_preset = [
    item.item_option.avatar_color_preset_1,
    item.item_option.avatar_color_preset_2,
    item.item_option.avatar_color_preset_3,
    item.item_option.avatar_color_preset_4,
    item.item_option.avatar_color_preset_5,
  ];

  const avatar_inner_armor_color_preset = [
    item.item_option.avatar_inner_armor_color_preset_1,
    item.item_option.avatar_inner_armor_color_preset_2,
    item.item_option.avatar_inner_armor_color_preset_3,
    item.item_option.avatar_inner_armor_color_preset_4,
    item.item_option.avatar_inner_armor_color_preset_5,
  ];

  const cash_item_color = [item.item_option.cash_item_color];
  return (
    <table className="h-full w-full">
      <caption>
        <div className="flex items-center justify-center border-b border-gray-400 text-xl">
          <h2>{item?.item_name}</h2>
        </div>
      </caption>
      <thead className="h-16 rounded-lg border-b border-gray-400 text-sm text-blue-300">
        <tr>
          <th className="w-28"></th>
          <th className="border-l border-gray-400 text-center">1번</th>
          <th className="border-l border-gray-400 text-center">2번</th>
          <th className="border-l border-gray-400 text-center">3번</th>
          <th className="border-l border-gray-400 text-center">4번</th>
          <th className="border-l border-gray-400 text-center">5번</th>
        </tr>
      </thead>

      <tbody className="text-center">
        <tr className="rounded-lg border-b border-gray-400">
          <td>아바타 색상</td>
          {avatar_color_preset.map((item) => (
            <td key={uuidv4()} className="border-l border-gray-400">
              <div className="flex flex-col items-center justify-center gap-1">
                <p>{item.color_1 ?? ""}</p>
                <p>{item.color_2 ?? ""}</p>
                <p>{item.color_3 ?? ""}</p>
              </div>
            </td>
          ))}
        </tr>

        <tr className="rounded-lg border-b border-gray-400">
          <td>이너아머 컬러</td>
          {avatar_inner_armor_color_preset.map((item) => (
            <td key={uuidv4()} className="border-l border-gray-400">
              <div className="flex flex-col items-center justify-center gap-1">
                <p>{item.color_1 ?? ""}</p>
                <p>{item.color_2 ?? ""}</p>
                <p>{item.color_3 ?? ""}</p>
              </div>
            </td>
          ))}
        </tr>

        <tr className="rounded-lg">
          <td>캐시 및 이너색상</td>
          {cash_item_color.map((item) => (
            <td colSpan={5} key={uuidv4()} className="border-l border-gray-400">
              <div className="flex flex-col items-center justify-center gap-1">
                <p>{item.color_1 ?? ""}</p>
                <p>{item.color_2 ?? ""}</p>
                <p>{item.color_3 ?? ""}</p>
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default CashTable;
