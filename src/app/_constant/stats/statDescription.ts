export const statDescripiton = [
  {
    stat_name: "힘",
    stat_descripiton:
      "힘이 오르면 공격력이 증가합니다. 공격이 크리티컬로 적중했을 때 크리티컬 피해량이 증가합니다. 공격력을 사용하는 캐릭터의 경우 힘이 높아짐에 따라 보다 무거운 물체를 들 수 있게 됩니다.",
  },
  {
    stat_name: "민첩",
    stat_descripiton:
      "민첩이 오르면 방어력과 스태미나 재생 속도가 증가합니다. 민첩이 높으면 다운 되었을 때 좀 더 빨리 일어날 수 있게됩니다.",
  },
  {
    stat_name: "지능",
    stat_descripiton:
      "지능이 오르면 마법 공격력이 증가합니다. 마법 공격력 기반 공격이 크리티컬로 적중했을 때 크리티컬 피해량이 증가 합니다. 마법 공격력을 사용하는 캐릭터의 경우 지능이 높아짐에 따라 보다 무거운 물체를 들 수 있게 됩니다.",
  },
  {
    stat_name: "의지",
    stat_descripiton:
      "의지가 높으면 추가 생명력 보너스를 받게 됩니다. 행동 불능에 빠지거나 다운이 될 상황에 서서 버틸 확률도 증가합니다. 물리 공격과 마법 공격 모두 크리티컬로 적중할 확률이 높아집니다.",
  },
  {
    stat_name: "행운",
    stat_descripiton: `행운 수치에 따라서 전투 중 '이블 코어'를 추가로 획득할 확률이 적용됩니다.
    ■ 일반 몬스터 대상 추가 확률
    - 100을 초과하는 행운 1당 1.5%의 출현 확률 적용(최대75%)
    ■ 보스 몬스터 대상 추가 확률
    - 기본 코어 및 부분 파괴 코어를 대상으로 정해진 확률에 따라 각각 적용
    - 행운 수치가 100보다 높을 경우, 기본 코어에서 1개의 행운 코어 추가 확정 획득
    - 1개의 확정 출현 외에 2개째부터 100을 초과하는 행운 1당 1.5%의 출현 확률이 적용 (최대75%)
    
    [주의 사항]
    - 이벤트, 보스에게 입힌 피해 등 기타 다른 코어에는 적용되지 않습니다.
    - 축복석 효과는 마을 안에서는 표시되지 않으며, 전투 내에서만 표시됩니다.
    - 이블코어가 출현하지 않는 전투에는 추가 획득이 적용되지 않습니다.`,
  },
  {
    stat_name: "최대 생명력",
    stat_descripiton:
      "플레이어가 가질 수 있는 최대 생명력입니다. 최대 생명력이 높으면 더 높은 대미지를 견딜 수 있게 됩니다.",
  },
  {
    stat_name: "최대 스태미나",
    stat_descripiton:
      "플레이어가 가질 수 있는 최대 스태미나입니다. 특수한 공격을 사용할 때 마다 스태미나를 소모하게 되며, 스태미나가 모두 소진되면 스태미나를 필요로 하는 액션을 할 수 없게 됩니다.",
  },
  {
    stat_name: "밸런스",
    stat_descripiton:
      "캐릭터의 대미지 하한선입니다. 수치가 높을수록 공격에 성공했을 때 최소 공격력과 최대 공격력간의 차이가 줄어들어 안정적인 대미지를 유지합니다. 적의 밸런스 저항 능력에 따라 달라지며, 이 수치는 최대 100까지 적용 됩니다.",
  },
  {
    stat_name: "공격속도",
    stat_descripiton:
      "캐릭터의 공격 속도를 나타냅니다. 이 수치가 높아질수록 보다 빠드레 공격할 수 있습니다.",
  },
  {
    stat_name: "공격력 제한 해제",
    stat_descripiton:
      "대다수의 전투에는 적용될 수 있는 최대 공격력이 제한되며, 공격력 제한 해제 수치만큼 제한된 최대 공격력을 초과하여 전투에 적용됩니다. 적용 가능한 공격력 제한 해제 최대 수치가 전투별로 다르게 설정됩니다.",
  },
  {
    stat_name: "공격력",
    stat_descripiton:
      "플레이어의 공격력(마법 공격력)입니다. 무기(마법)을/를 이용하여 적을 공격할 때 적에게 입히는 대미지와 관련이 있습니다. 힘(지능)을 올리거나 공격력(마법 공격력)이 높은 무기를 사용하면 공격력(마법 공격력)을 향상시킬 수 있습니다.",
  },
  {
    stat_name: "방어력",
    stat_descripiton:
      "플레이어의 일반 방어력입니다. 일반 공격을 받았을 때 대미지가 경감되는 정도와 관계가 있습니다. 민첩을 올리거나 방어력이 높은 방어구를 착용하면 방어력을 향상시킬 수 있습니다. 방어력이 높아도 모든 종류의 공격을 막아내지는 못합니다. 상태 효과 공격들은 대게 방어력을 무시하고 적용됩니다.",
  },
  {
    stat_name: "크리티컬",
    stat_descripiton:
      "크리티컬 수치가 높을수록 공격이 크리티컬로 적중할 확률이 높아집니다. 적이 강할수록 크리티컬 저항 능력치가 높아져 크리티컬로 적중 될 확률이 낮아집니다. 적의 크리티컬 저항 능력에 따라 달라지며, 이 수치는 최대 50%가지만 적용 됩니다.",
  },
  {
    stat_name: "크리티컬 피해량",
    stat_descripiton:
      "공격이 크리티컬로 적중했을 때, 공격력이 증가하는 비율입니다. 일반 공격력을 사용하는 캐릭터는 힘에 의해 증가하며, 마법 공격력을 사용하는 캐릭터는 지능에 의해 증가합니다.",
  },
  {
    stat_name: "크리티컬 저항",
    stat_descripiton:
      "크리티컬 저항 수치가 높을수록 적의 공격을 크리티컬로 적중당할 확률이 낮아집니다. 적의 공격이 크리티컬로 적중되면, 일반 대미지보다 더 큰 대미지를 입게 됩니다.",
  },

  {
    stat_name: "추가피해",
    stat_descripiton:
      "공격 시 추가피해를 입힙니다. 추가피해가 높을수록 더 많은 대미지를 주며, 기본 대미지가 높을수록 더 많은 추가피해를 줄 수 있습니다. 110레벨 이상 무기와 방어구의 추가피해는 전투별로 최대 제한 수치에 영향을 받습니다.",
  },
  {
    stat_name: "대항력",
    stat_descripiton:
      "캐릭터의 대항력 수치를 나타냅니다. 이 수치가 높을수록 적에게 확실한 대미지를 줄 수 있습니다. 적이 강한 경우 대항력 저항 능력치가 높아져 적에게 줄 수 있는 대미지가 줄어듭니다. 적의 대항력 저항 능력에 따라 달라지며, 이 수치는 최대 100까지만 적용됩니다. 대항력은 아스테라 지역부터 적용됩니다.",
  },
  { stat_name: "", stat_descripiton: "" },
];
