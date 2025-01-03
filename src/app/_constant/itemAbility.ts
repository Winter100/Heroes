const abilityList = [
  {
    item_slot: ["Right Hand"],
    ability_list: [
      {
        ability_name: "흔들림 LV5",
        description:
          "공격 시 35% 확률로 주변의 적에게 대미지를 입히고, 띄우기 효과가 발생합니다. (재발동시간 35초)",
      },
      {
        ability_name: "석화 저주 LV5",
        description:
          "공격 시 15% 확률로 주변의 적 최대 3개체를 5초동안 돌로 만듭니다. (재발동시간 30초)",
      },
      {
        ability_name: "고통 저주 LV5",
        description:
          "공격 시 9% 확률로 주변의 적 최대 4개체에게 3초간 매초 4700의 대미지를 줍니다. (재발동시간 3분)",
      },
      {
        ability_name: "마사카 스매시 LV5",
        description:
          "발차기 시 대지를 가르는듯한 충격파가 발생합니다. (재발동시간 8분)",
      },
      {
        ability_name: "SP 흡수 LV5",
        description: "공격 시 10의 SP를 추가로 획득합니다. (재발동시간 15초)",
      },
      {
        ability_name: "가벼운 무기 LV5",
        description:
          "공격 시 5% 확률로 공격속도가 1분간 11 상승합니다. (재발동시간 2분)",
      },
      {
        ability_name: "날카로운 무기 LV5",
        description:
          "공격 시 5% 확률로 크리티컬이 1분간 7 상승합니다. (재발동시간 2분)",
      },
      {
        ability_name: "치명적인 무기 LV5",
        description:
          "공격 시 6% 확률로 크리티컬 대미지가 1분간 7% 상승합니다. (재발동시간 2분)",
      },
      {
        ability_name: "전투의 깨달음 LV5",
        description:
          "공격 시 8% 확률로 스태미나 소모량이 1분간 2 감소합니다. (재발동시간 2분)",
      },
      {
        ability_name: "흔들림 없는 무기 LV5",
        description:
          "공격 시 5% 확률로 밸런스가 1분간 9 상승합니다. (재발동시간 2분)",
      },
      {
        ability_name: "지그린트의 번개 LV5",
        description:
          "공격 시 30% 확률로 번개가 일어나 주변의 적 1개체가 감전됩니다. (재발동시간 1분)",
      },
    ],
  },
  {
    item_slot: ["Upper"],
    ability_list: [
      {
        ability_name: "순간 보호 LV5",
        description:
          "피격 시 20% 확률로 24초간 최대 4000 대미지를 흡수하는 보호막이 발생합니다. (재발동시간 5분)",
      },
      {
        ability_name: "지속 회복 LV5",
        description:
          "다운되었을 때 20% 확률로 10초간 생명력을 매초 180씩 회복합니다. (재발동시간 5분)",
      },
      {
        ability_name: "현실 왜곡 LV2",
        description:
          "[/좌절] 행동을 취하면 3초간 모든 공격에 피해를 입지 않습니다. (재발동시간 1시간)",
      },
      {
        ability_name: "순간 회복 LV5",
        description:
          "행동불능 버티기 발동 시 1500의 생명력을 즉시 회복합니다. (재발동시간 3분 20초)",
      },
      {
        ability_name: "생명력 강화 LV5",
        description:
          "서서 버티기 발동 시 30초간 최대 생명력이 1000만큼 상승합니다. (재발동시간 3분)",
      },
    ],
  },
  {
    item_slot: ["Lower"],
    ability_list: [
      {
        ability_name: "승리의 발걸음 LV5",
        description:
          "적 처치 시 6초간 이동속도가 250% 상승합니다. (재발동시간 5초)",
      },
      {
        ability_name: "응원의 발걸음 LV5",
        description:
          "[/따라와] 행동을 취하면 파티 멤버 최대 4인의 이동속도가 7초간 250% 상승합니다. (재발동시간 5분) (재발동시간 5초)",
      },
      {
        ability_name: "부수는 발걸음 LV5",
        description:
          "물건을 파괴하면 이동속도가 5초간 250% 상승합니다. (재발동시간 3초)",
      },
      {
        ability_name: "뉴에라 오브 씨앗 LV5",
        description:
          "[뉴에라 오브] 채집 시도 시 17% 확률로 [뉴에라 오브]를 추가 획득합니다.",
      },
      {
        ability_name: "뉴에라 광석 씨앗 LV5",
        description:
          "[뉴에라 광석] 채광 시도 시 17% 확률로 [뉴에라 광석]을 추가 획득합니다.",
      },
      {
        ability_name: "마법 가루 씨앗 LV5",
        description:
          "에르그 항아리에서 아이템 획득 시 25% 확률로 [마법 가루]를 추가 획득합니다.",
      },
      {
        ability_name: "축복받은 마법 가루 씨앗 LV5",
        description:
          "에르그 항아리에서 아이템 획득 시 25% 확률로 [축복받은 마법 가루]를 추가 획득합니다.",
      },
      {
        ability_name: "뉴에라의 흔적 씨앗 LV5",
        description:
          "에르그 항아리에서 아이템 획득 시 25% 확률로 [뉴에라의 흔적]을 추가 획득합니다.",
      },
      {
        ability_name: "생명의 에르그 결정 씨앗 LV5",
        description:
          "에르그 항아리에서 아이템 획득 시 25% 확률로 [생명의 에르그 결정]을 추가 획득합니다.",
      },
      {
        ability_name: "고급 생명력 포션 축복 LV5",
        description:
          "고급 생명력 포션과 최고급 생명력 포션 사용 시 400의 생명력을 추가 회복합니다.",
      },
      {
        ability_name: "고급 활력포션 축복 LV5",
        description:
          "고급 활력포션 사용 시 60초간 최대 스태미나가 30만큼 증가합니다.",
      },
      {
        ability_name: "공격력 포션 축복 LV5",
        description: "공격력 포션 사용 시 생명력을 550만큼 즉시 회복합니다.",
      },
    ],
  },
];

export const getAbilityList = (
  raidTitle: "ardri" | "orna" | "uaithne",
  slot: "Right Hand" | "Upper" | "Lower",
) => {
  const ability = abilityList
    .filter((a) => a.item_slot.includes(slot))
    .map((a) => a.ability_list)
    .flat();

  return ability.map((a) => {
    const condition = `(시즌 4 전투 한정, [${getAbilityConditionTitle[raidTitle]} 오십 번 쓰러뜨린] 타이틀 보유 시 발동)`;
    return { ...a, description: `${a.description} ${condition}` };
  });
};

const getAbilityIngredIent = {
  ardri: [
    { name: "골드", quantity: "5000000" },
    { name: "뉴에라의 옷감", quantity: "20" },
    { name: "뉴에라의 가죽", quantity: "20" },
    { name: "뉴에라의 광석", quantity: "20" },
    { name: "뉴에라의 오브", quantity: "20" },
    { name: "봉인의 힘 파편", quantity: "450" },
  ],
  orna: [
    { name: "골드", quantity: "5000000" },
    { name: "뉴에라의 옷감", quantity: "20" },
    { name: "뉴에라의 가죽", quantity: "20" },
    { name: "뉴에라의 광석", quantity: "20" },
    { name: "뉴에라의 오브", quantity: "20" },
    { name: "봉인의 힘 파편", quantity: "450" },
  ],
  uaithne: [
    { name: "골드", quantity: "5000000" },
    { name: "힘이 주입된 뉴에라의 옷감", quantity: "20" },
    { name: "힘이 주입된 뉴에라의 가죽", quantity: "20" },
    { name: "힘이 주입된 뉴에라의 광석", quantity: "20" },
    { name: "힘이 주입된 뉴에라의 오브", quantity: "20" },
    { name: "전승의 힘 파편", quantity: "200" },
  ],
};

const getAbilityConditionTitle = {
  ardri: "로메르를",
  orna: "이루산을",
  uaithne: "스렝을",
};

export const itemAbility = [
  {
    title: "아르드리",
    item: [
      {
        item_slot: ["Right Hand"],
        ability_list: getAbilityList("ardri", "Right Hand"),
        one_ingredient: getAbilityIngredIent.ardri,
      },
      {
        item_slot: ["Upper"],
        ability_list: getAbilityList("ardri", "Upper"),
        one_ingredient: getAbilityIngredIent.ardri,
      },
      {
        item_slot: ["Lower"],
        ability_list: getAbilityList("ardri", "Lower"),
        one_ingredient: getAbilityIngredIent.ardri,
      },
    ],
  },
  {
    title: "오르나",
    item: [
      {
        item_slot: ["Right Hand"],
        ability_list: getAbilityList("orna", "Right Hand"),
        one_ingredient: getAbilityIngredIent.orna,
      },
      {
        item_slot: ["Upper"],
        ability_list: getAbilityList("orna", "Upper"),
        one_ingredient: getAbilityIngredIent.orna,
      },
      {
        item_slot: ["Lower"],
        ability_list: getAbilityList("orna", "Lower"),
        one_ingredient: getAbilityIngredIent.orna,
      },
    ],
  },
  {
    title: "와드네",
    item: [
      {
        item_slot: ["Right Hand"],
        ability_list: getAbilityList("uaithne", "Right Hand"),
        one_ingredient: getAbilityIngredIent.uaithne,
      },
      {
        item_slot: ["Upper"],
        ability_list: getAbilityList("uaithne", "Upper"),
        one_ingredient: getAbilityIngredIent.uaithne,
      },
      {
        item_slot: ["Lower"],
        ability_list: getAbilityList("uaithne", "Lower"),
        one_ingredient: getAbilityIngredIent.uaithne,
      },
    ],
  },
];
