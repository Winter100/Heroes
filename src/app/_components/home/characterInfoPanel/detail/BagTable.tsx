import { EquipmentType } from "@/app/_type/equipmentType";

const BagTable = ({ item }: { item: EquipmentType }) => {
  return (
    <table className="h-full w-full">
      <caption>
        <div className="border-b border-gray-400 text-xl">
          {item?.item_option?.enhancement_level ?? ""} {item.item_name}
        </div>
      </caption>
      <thead className="h-16 rounded-lg border-b border-gray-400 text-sm text-blue-300">
        <tr>
          <th className="w-28"></th>
          <th className="min-w-40 border-l border-gray-400 text-center">
            1번 슬롯
          </th>
          <th className="min-w-40 border-l border-gray-400 text-center">
            2번 슬롯
          </th>
        </tr>
      </thead>

      <tbody className="text-center">
        <tr className="rounded-lg border-b border-gray-400">
          <td>정령석</td>
          <td className="border-l border-gray-400">
            <div className="flex items-center justify-center gap-1">
              <p>
                {item?.item_option?.power_infusion_preset_1?.stat_name ?? ""}
              </p>
              <p>
                {item?.item_option?.power_infusion_preset_1?.stat_value ?? ""}
              </p>
            </div>
          </td>
          <td className="border-l border-gray-400">
            <div className="flex items-center justify-center gap-1">
              <p>
                {item?.item_option?.power_infusion_preset_2?.stat_name ?? ""}
              </p>
              <p>
                {item?.item_option?.power_infusion_preset_2?.stat_value ?? ""}
              </p>
            </div>
          </td>
        </tr>

        <tr className="rounded-lg border-b border-gray-400">
          <td>접두</td>
          <td className="border-l border-gray-400">
            {item?.item_option?.prefix_enchant_preset_1 ?? ""}
          </td>
          <td className="border-l border-gray-400">
            {item?.item_option?.prefix_enchant_preset_2 ?? ""}
          </td>
        </tr>
        <tr className="rounded-lg border-b border-gray-400">
          <td>접미</td>
          <td className="border-l border-gray-400">
            {item?.item_option?.suffix_enchant_preset_1 ?? ""}
          </td>
          <td className="border-l border-gray-400">
            {item?.item_option?.suffix_enchant_preset_2 ?? ""}
          </td>
        </tr>

        <tr>
          <td>연마</td>
          <td colSpan={2} className="border-l border-gray-400">
            <div className="grid h-full grid-cols-2 items-center justify-items-center">
              {item?.item_option?.tuning_stat?.map((i) => (
                <div key={i?.stat_name}>
                  <p>
                    {i?.stat_name} {i?.stat_value}
                  </p>
                </div>
              ))}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BagTable;
