const infusions = {
  none: {
    rank: "",
    stat_name: "없음",
    stat_value: [{ stat_name: "", stat_value: "" }],
  },
  critical_1: {
    rank: "",
    stat_name: "크리티컬 1",
    stat_value: [{ stat_name: "크리티컬", stat_value: "1" }],
  },
  critical_2: {
    rank: "",
    stat_name: "크리티컬 2",
    stat_value: [{ stat_name: "크리티컬", stat_value: "2" }],
  },
  critical_3: {
    rank: "",
    stat_name: "크리티컬 3",
    stat_value: [{ stat_name: "크리티컬", stat_value: "3" }],
  },
  balance_1: {
    rank: "",
    stat_name: "밸런스 1",
    stat_value: [{ stat_name: "밸런스", stat_value: "1" }],
  },
  balance_2: {
    rank: "",
    stat_name: "밸런스 2",
    stat_value: [{ stat_name: "밸런스", stat_value: "2" }],
  },
  balance_3: {
    rank: "",
    stat_name: "밸런스 3",
    stat_value: [{ stat_name: "밸런스", stat_value: "3" }],
  },
  incSpeed: {
    rank: "",
    stat_name: "공격속도 1",
    stat_value: [{ stat_name: "공격속도", stat_value: "1" }],
  },
  defense_1: {
    rank: "",
    stat_name: "방어력 101",
    stat_value: [{ stat_name: "방어력", stat_value: "101" }],
  },
  defense_2: {
    rank: "",
    stat_name: "방어력 102",
    stat_value: [{ stat_name: "방어력", stat_value: "102" }],
  },
  defense_3: {
    rank: "",
    stat_name: "방어력 103",
    stat_value: [{ stat_name: "방어력", stat_value: "103" }],
  },
  criticalResistance_1: {
    rank: "",
    stat_name: "크리티컬 저항 1",
    stat_value: [{ stat_name: "크리티컬 저항", stat_value: "1" }],
  },
  criticalResistance_2: {
    rank: "",
    stat_name: "크리티컬 저항 2",
    stat_value: [{ stat_name: "크리티컬 저항", stat_value: "2" }],
  },
};

export const preview_infusion = [
  { equipment: [""], value: [] },
  {
    equipment: ["Right Hand", "Left Hand"],
    value: [
      infusions.none,
      infusions.critical_1,
      infusions.critical_2,
      infusions.critical_3,
      infusions.balance_1,
      infusions.balance_2,
      infusions.balance_3,
      infusions.incSpeed,
    ],
  },
  {
    equipment: ["Head", "Upper", "Lower", "Hand", "Leg"],
    value: [
      infusions.none,
      infusions.criticalResistance_1,
      infusions.criticalResistance_2,
      infusions.defense_1,
      infusions.defense_2,
      infusions.defense_3,
    ],
  },
  {
    equipment: [
      "Right Finger",
      "Left Finger",
      "Earring",
      "Belt",
      "Charm",
      "Necklace",
    ],
    value: [
      infusions.none,
      infusions.critical_1,
      infusions.critical_2,
      infusions.critical_3,
      infusions.balance_1,
      infusions.balance_2,
      infusions.balance_3,
      infusions.incSpeed,
      infusions.criticalResistance_1,
      infusions.criticalResistance_2,
    ],
  },
];
