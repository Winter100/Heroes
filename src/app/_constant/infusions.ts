const infusions = {
  critical_1: {
    rank: "",
    stat_name: "크리티컬 1",
    stat_value: [{ stat_name: "크리티컬", stat_value: "1" }],
    description: "",
  },
  critical_2: {
    rank: "",
    stat_name: "크리티컬 2",
    stat_value: [{ stat_name: "크리티컬", stat_value: "2" }],
    description: "",
  },
  critical_3: {
    rank: "",
    stat_name: "크리티컬 3",
    stat_value: [{ stat_name: "크리티컬", stat_value: "3" }],
    description: "",
  },
  balance_1: {
    rank: "",
    stat_name: "밸런스 1",
    stat_value: [{ stat_name: "밸런스", stat_value: "1" }],
    description: "",
  },
  balance_2: {
    rank: "",
    stat_name: "밸런스 2",
    stat_value: [{ stat_name: "밸런스", stat_value: "2" }],
    description: "",
  },
  balance_3: {
    rank: "",
    stat_name: "밸런스 3",
    stat_value: [{ stat_name: "밸런스", stat_value: "3" }],
    description: "",
  },
  incSpeed: {
    rank: "",
    stat_name: "공격속도 1",
    stat_value: [{ stat_name: "공격속도", stat_value: "1" }],
    description: "",
  },
  defense_1: {
    rank: "",
    stat_name: "방어력 101",
    stat_value: [{ stat_name: "방어력", stat_value: "101" }],
    description: "",
  },
  defense_2: {
    rank: "",
    stat_name: "방어력 102",
    stat_value: [{ stat_name: "방어력", stat_value: "102" }],
    description: "",
  },
  defense_3: {
    rank: "",
    stat_name: "방어력 103",
    stat_value: [{ stat_name: "방어력", stat_value: "103" }],
    description: "",
  },
  criticalResistance_1: {
    rank: "",
    stat_name: "크리티컬 저항 1",
    stat_value: [{ stat_name: "크리티컬 저항", stat_value: "1" }],
    description: "",
  },
  criticalResistance_2: {
    rank: "",
    stat_name: "크리티컬 저항 2",
    stat_value: [{ stat_name: "크리티컬 저항", stat_value: "2" }],
    description: "",
  },
};

export const preview_infusion = [
  { equipment: [""], value: [] },
  {
    equipment: ["Right Hand", "Left Hand"],
    value: [
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
