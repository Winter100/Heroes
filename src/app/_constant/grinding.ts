export interface oneGrindingType {
  title: string;
  item: {
    item_slot: string[];
    item_value: {
      stat_name: string;
      stat_value: string;
      stat_max_value: string;
      one_ingredient: {
        stat_name: string;
        stat_value: string;
      }[];
    }[];
  }[];
}
[];
export const oneGrinding = [
  {
    title: "아르드리",
    item: [
      {
        item_slot: ["Right Hand"],
        item_value: [
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "72",
            stat_max_value: "4032",
            one_ingredient: [
              { stat_name: "골드", stat_value: "1000000" },
              { stat_name: "뉴에라 광석", stat_value: "20" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
              { stat_name: "미지의 조각 3단계", stat_value: "3" },
            ],
          },
        ],
      },
      {
        item_slot: ["Head", "Hand", "Leg"],
        item_value: [
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "20",
            stat_max_value: "480",
            one_ingredient: [
              { stat_name: "골드", stat_value: "400000" },
              { stat_name: "뉴에라 옷감", stat_value: "12" },
              { stat_name: "뉴에라 가죽", stat_value: "12" },
              { stat_name: "투쟁의 조각 3단계", stat_value: "1" },
            ],
          },
        ],
      },
      {
        item_slot: ["Upper", "Lower"],
        item_value: [
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "20",
            stat_max_value: "680",
            one_ingredient: [
              { stat_name: "골드", stat_value: "400000" },
              { stat_name: "뉴에라 옷감", stat_value: "12" },
              { stat_name: "뉴에라 가죽", stat_value: "12" },
              { stat_name: "투쟁의 조각 3단계", stat_value: "1" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "오르나",
    item: [
      {
        item_slot: ["Right Hand"],
        item_value: [
          {
            stat_name: "공격력",
            stat_one_value: "14",
            stat_max_value: "2156",
            one_ingredient: [
              { stat_name: "골드", stat_value: "150000" },
              { stat_name: "뉴에라 옷감", stat_value: "2" },
              { stat_name: "뉴에라 가죽", stat_value: "2" },
              { stat_name: "뉴에라 광석", stat_value: "2" },
              { stat_name: "오브", stat_value: "3" },
            ],
          },
          {
            stat_name: "공격속도",
            stat_one_value: "1",
            stat_max_value: "2",
            one_ingredient: [
              { stat_name: "골드", stat_value: "3000000" },
              { stat_name: "뉴에라 옷감", stat_value: "20" },
              { stat_name: "뉴에라 가죽", stat_value: "20" },
              { stat_name: "뉴에라 광석", stat_value: "20" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
            ],
          },
          {
            stat_name: "밸런스",
            stat_one_value: "1",
            stat_max_value: "7",
            one_ingredient: [
              { stat_name: "골드", stat_value: "3000000" },
              { stat_name: "뉴에라 옷감", stat_value: "20" },
              { stat_name: "뉴에라 가죽", stat_value: "20" },
              { stat_name: "뉴에라 광석", stat_value: "20" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
            ],
          },
          {
            stat_name: "크리티컬",
            stat_one_value: "1",
            stat_max_value: "15",
            one_ingredient: [
              { stat_name: "골드", stat_value: "3000000" },
              { stat_name: "뉴에라 옷감", stat_value: "20" },
              { stat_name: "뉴에라 가죽", stat_value: "20" },
              { stat_name: "뉴에라 광석", stat_value: "20" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "50",
            stat_max_value: "5400",
            one_ingredient: [
              { stat_name: "골드", stat_value: "1000000" },
              { stat_name: "뉴에라 광석", stat_value: "25" },
              { stat_name: "뉴에라 오브", stat_value: "25" },
              { stat_name: "미지의 조각 3단계", stat_value: "3" },
            ],
          },
        ],
      },
      {
        item_slot: ["Head", "Hand", "Leg"],
        item_value: [
          {
            stat_name: "방어력",
            stat_one_value: "10",
            stat_max_value: "505",
            one_ingredient: [
              { stat_name: "골드", stat_value: "150000" },
              { stat_name: "뉴에라 옷감", stat_value: "2" },
              { stat_name: "뉴에라 가죽", stat_value: "2" },
              { stat_name: "뉴에라 광석", stat_value: "2" },
              { stat_name: "오브", stat_value: "3" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "6",
            one_ingredient: [
              { stat_name: "골드", stat_value: "3000000" },
              { stat_name: "뉴에라 옷감", stat_value: "20" },
              { stat_name: "뉴에라 가죽", stat_value: "20" },
              { stat_name: "뉴에라 광석", stat_value: "20" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "14",
            stat_max_value: "700",
            one_ingredient: [
              { stat_name: "골드", stat_value: "400000" },
              { stat_name: "뉴에라 옷감", stat_value: "12" },
              { stat_name: "뉴에라 가죽", stat_value: "12" },
              { stat_name: "투쟁의 조각 3단계", stat_value: "1" },
            ],
          },
        ],
      },
      {
        item_slot: ["Upper"],
        item_value: [
          {
            stat_name: "방어력",
            stat_one_value: "10",
            stat_max_value: "491",
            one_ingredient: [
              { stat_name: "골드", stat_value: "150000" },
              { stat_name: "뉴에라 옷감", stat_value: "2" },
              { stat_name: "뉴에라 가죽", stat_value: "2" },
              { stat_name: "뉴에라 광석", stat_value: "2" },
              { stat_name: "오브", stat_value: "3" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "10",
            one_ingredient: [
              { stat_name: "골드", stat_value: "3000000" },
              { stat_name: "뉴에라 옷감", stat_value: "20" },
              { stat_name: "뉴에라 가죽", stat_value: "20" },
              { stat_name: "뉴에라 광석", stat_value: "20" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "14",
            stat_max_value: "1050",
            one_ingredient: [
              { stat_name: "골드", stat_value: "400000" },
              { stat_name: "뉴에라 옷감", stat_value: "12" },
              { stat_name: "뉴에라 가죽", stat_value: "12" },
              { stat_name: "투쟁의 조각 3단계", stat_value: "1" },
            ],
          },
        ],
      },
      {
        item_slot: ["Lower"],
        item_value: [
          {
            stat_name: "방어력",
            stat_one_value: "10",
            stat_max_value: "467",
            one_ingredient: [
              { stat_name: "골드", stat_value: "150000" },
              { stat_name: "뉴에라 옷감", stat_value: "2" },
              { stat_name: "뉴에라 가죽", stat_value: "2" },
              { stat_name: "뉴에라 광석", stat_value: "2" },
              { stat_name: "오브", stat_value: "3" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "13",
            one_ingredient: [
              { stat_name: "골드", stat_value: "3000000" },
              { stat_name: "뉴에라 옷감", stat_value: "20" },
              { stat_name: "뉴에라 가죽", stat_value: "20" },
              { stat_name: "뉴에라 광석", stat_value: "20" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "14",
            stat_max_value: "1050",
            one_ingredient: [
              { stat_name: "골드", stat_value: "400000" },
              { stat_name: "뉴에라 옷감", stat_value: "12" },
              { stat_name: "뉴에라 가죽", stat_value: "12" },
              { stat_name: "투쟁의 조각 3단계", stat_value: "1" },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "와드네",
    item: [
      {
        item_slot: ["Right Hand"],
        item_value: [
          {
            stat_name: "공격력",
            stat_one_value: "10",
            stat_max_value: "2000",
            one_ingredient: [
              { stat_name: "골드", stat_value: "500000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "5" },
              { stat_name: "봉인의 힘: 파편", stat_value: "25" },
            ],
          },
          {
            stat_name: "밸런스",
            stat_one_value: "1",
            stat_max_value: "4",
            one_ingredient: [
              { stat_name: "골드", stat_value: "5000000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "20" },
              { stat_name: "전승의 힘: 파편", stat_value: "200" },
            ],
          },
          {
            stat_name: "크리티컬",
            stat_one_value: "1",
            stat_max_value: "4",
            one_ingredient: [
              { stat_name: "골드", stat_value: "5000000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "20" },
              { stat_name: "전승의 힘: 파편", stat_value: "200" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "50",
            stat_max_value: "5400",
            one_ingredient: [
              { stat_name: "골드", stat_value: "1000000" },
              { stat_name: "뉴에라 광석", stat_value: "25" },
              { stat_name: "뉴에라 오브", stat_value: "20" },
              { stat_name: "미지의 조각 3단계", stat_value: "3" },
            ],
          },
          {
            stat_name: "공격력 제한 해제 2",
            stat_one_value: "15",
            stat_max_value: "1500",
            one_ingredient: [
              { stat_name: "골드", stat_value: "3000000" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "50" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "50" },
              { stat_name: "미지의 결정", stat_value: "3" },
            ],
          },
        ],
      },
      {
        item_slot: ["Head"],
        item_value: [
          {
            stat_name: "방어력",
            stat_one_value: "10",
            stat_max_value: "479",
            one_ingredient: [
              { stat_name: "골드", stat_value: "500000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "5" },
              { stat_name: "봉인의 힘: 파편", stat_value: "25" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "3",
            one_ingredient: [
              { stat_name: "골드", stat_value: "5000000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "20" },
              { stat_name: "전승의 힘: 파편", stat_value: "200" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "14",
            stat_max_value: "700",
            one_ingredient: [
              { stat_name: "골드", stat_value: "400000" },
              { stat_name: "뉴에라 옷감", stat_value: "12" },
              { stat_name: "뉴에라 가죽", stat_value: "12" },
              { stat_name: "투쟁의 조각 3단계", stat_value: "1" },
            ],
          },
          {
            stat_name: "공격력 제한 해제 2",
            stat_one_value: "5",
            stat_max_value: "440",
            one_ingredient: [
              { stat_name: "골드", stat_value: "1000000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "25" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "25" },
              { stat_name: "투쟁의 결정", stat_value: "1" },
            ],
          },
        ],
      },
      {
        item_slot: ["Lower"],
        item_value: [
          {
            stat_name: "방어력",
            stat_one_value: "10",
            stat_max_value: "567",
            one_ingredient: [
              { stat_name: "골드", stat_value: "500000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "5" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "5" },
              { stat_name: "봉인의 힘: 파편", stat_value: "25" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "6",
            one_ingredient: [
              { stat_name: "골드", stat_value: "5000000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "20" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "20" },
              { stat_name: "전승의 힘: 파편", stat_value: "200" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "14",
            stat_max_value: "1050",
            one_ingredient: [
              { stat_name: "골드", stat_value: "400000" },
              { stat_name: "뉴에라 옷감", stat_value: "12" },
              { stat_name: "뉴에라 가죽", stat_value: "12" },
              { stat_name: "투쟁의 조각 3단계", stat_value: "1" },
            ],
          },
          {
            stat_name: "공격력 제한 해제 2",
            stat_one_value: "5",
            stat_max_value: "440",
            one_ingredient: [
              { stat_name: "골드", stat_value: "1000000" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "25" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "25" },
              { stat_name: "투쟁의 결정", stat_value: "1" },
            ],
          },
        ],
      },

      {
        item_slot: ["Upper", "Hand", "Leg"],
        item_value: [
          {
            stat_name: "방어력",
            stat_one_value: "0",
            stat_max_value: "0",
            one_ingredient: [
              { stat_name: "골드", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "0" },
              { stat_name: "오브", stat_value: "0" },
              { stat_name: "미지의 조각", stat_value: "0" },
              { stat_name: "투쟁의 조각", stat_value: "0" },
              { stat_name: "봉인의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 흔적", stat_value: "0" },
              { stat_name: "전승의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 결정", stat_value: "0" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "0",
            stat_max_value: "0",
            one_ingredient: [
              { stat_name: "골드", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "0" },
              { stat_name: "오브", stat_value: "0" },
              { stat_name: "미지의 조각", stat_value: "0" },
              { stat_name: "투쟁의 조각", stat_value: "0" },
              { stat_name: "봉인의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 흔적", stat_value: "0" },
              { stat_name: "전승의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 결정", stat_value: "0" },
            ],
          },
          {
            stat_name: "공격력 제한 해제",
            stat_one_value: "0",
            stat_max_value: "0",
            one_ingredient: [
              { stat_name: "골드", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "0" },
              { stat_name: "오브", stat_value: "0" },
              { stat_name: "미지의 조각", stat_value: "0" },
              { stat_name: "투쟁의 조각", stat_value: "1" },
              { stat_name: "봉인의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 흔적", stat_value: "0" },
              { stat_name: "전승의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 결정", stat_value: "0" },
            ],
          },
          {
            stat_name: "공격력 제한 해제 2",
            stat_one_value: "0",
            stat_max_value: "0",
            one_ingredient: [
              { stat_name: "골드", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 옷감", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 가죽", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 광석", stat_value: "0" },
              { stat_name: "힘이 주입된 뉴에라 오브", stat_value: "0" },
              { stat_name: "오브", stat_value: "0" },
              { stat_name: "미지의 조각", stat_value: "0" },
              { stat_name: "투쟁의 조각", stat_value: "0" },
              { stat_name: "봉인의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 흔적", stat_value: "0" },
              { stat_name: "전승의 힘: 파편", stat_value: "0" },
              { stat_name: "와드네의 결정", stat_value: "0" },
            ],
          },
        ],
      },
    ],
  },
];

export const weapone = [];
