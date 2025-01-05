export interface oneGrindingType {
  title: string;
  item: {
    item_slot: string[];
    item_value: {
      stat_name: string;
      stat_value: string;
      stat_max_value: string;
      one_ingredient: {
        name: string;
        quantity: string;
      }[];
    }[];
  }[];
}
[];

export const ingredient_image = [
  { stat_name: "골드", src: "/images/items/골드.png" },
  { stat_name: "뉴에라의 광석", src: "/images/items/뉴에라의 광석.png" },
  { stat_name: "뉴에라의 오브", src: "/images/items/뉴에라의 오브.png" },
  { stat_name: "뉴에라의 옷감", src: "/images/items/뉴에라의 옷감.png" },
  { stat_name: "뉴에라의 가죽", src: "/images/items/뉴에라의 가죽.png" },
  { stat_name: "오브", src: "/images/items/오브.png" },
  {
    stat_name: "미지의 조각 1단계",
    src: "/images/items/미지의 조각 1단계.png",
  },
  {
    stat_name: "투쟁의 조각 1단계",
    src: "/images/items/투쟁의 조각 1단계.png",
  },
  {
    stat_name: "미지의 조각 2단계",
    src: "/images/items/미지의 조각 2단계.png",
  },
  {
    stat_name: "투쟁의 조각 2단계",
    src: "/images/items/투쟁 조각 2단계.png",
  },
  {
    stat_name: "미지의 조각 3단계",
    src: "/images/items/미지의 조각 3단계.png",
  },
  {
    stat_name: "투쟁의 조각 3단계",
    src: "/images/items/투쟁의 조각 3단계.png",
  },
  {
    stat_name: "힘이 주입된 뉴에라의 광석",
    src: "/images/items/힘이 주입된 뉴에라의 광석.png",
  },
  {
    stat_name: "힘이 주입된 뉴에라의 오브",
    src: "/images/items/힘이 주입된 뉴에라의 오브.png",
  },
  {
    stat_name: "힘이 주입된 뉴에라의 옷감",
    src: "/images/items/힘이 주입된 뉴에라의 옷감.png",
  },
  {
    stat_name: "힘이 주입된 뉴에라의 가죽",
    src: "/images/items/힘이 주입된 뉴에라의 가죽.png",
  },
  {
    stat_name: "봉인의 힘 파편",
    src: "/images/items/봉인의 힘 파편.png",
  },
  {
    stat_name: "전승의 힘 파편",
    src: "/images/items/전승의 힘 파편.png",
  },
  {
    stat_name: "와드네의 흔적",
    src: "/images/items/와드네의 흔적.png",
  },
  {
    stat_name: "와드네의 결정",
    src: "/images/items/와드네의 결정.png",
  },
  {
    stat_name: "미지의 결정",
    src: "/images/items/미지의 결정.png",
  },
  {
    stat_name: "투쟁의 결정",
    src: "/images/items/투쟁의 결정.png",
  },
];
export const oneGrinding = [
  {
    title: "아르드리",
    item: [
      {
        item_slot: ["Right Hand"],
        item_value: [
          {
            stat_name: "해제",
            stat_one_value: "72",
            stat_max_value: "4032",
            one_ingredient: [
              { name: "골드", quantity: "1000000" },
              { name: "뉴에라의 광석", quantity: "20" },
              { name: "뉴에라의 오브", quantity: "20" },
              { name: "미지의 조각 3단계", quantity: "3" },
            ],
          },
        ],
      },
      {
        item_slot: ["Head", "Hand", "Leg"],
        item_value: [
          {
            stat_name: "해제",
            stat_one_value: "20",
            stat_max_value: "480",
            one_ingredient: [
              { name: "골드", quantity: "400000" },
              { name: "뉴에라의 옷감", quantity: "12" },
              { name: "뉴에라의 가죽", quantity: "12" },
              { name: "투쟁의 조각 3단계", quantity: "1" },
            ],
          },
        ],
      },
      {
        item_slot: ["Upper", "Lower"],
        item_value: [
          {
            stat_name: "해제",
            stat_one_value: "20",
            stat_max_value: "680",
            one_ingredient: [
              { name: "골드", quantity: "400000" },
              { name: "뉴에라의 옷감", quantity: "12" },
              { name: "뉴에라의 가죽", quantity: "12" },
              { name: "투쟁의 조각 3단계", quantity: "1" },
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
              { name: "골드", quantity: "150000" },
              { name: "뉴에라의 옷감", quantity: "2" },
              { name: "뉴에라의 가죽", quantity: "2" },
              { name: "뉴에라의 광석", quantity: "2" },
              { name: "오브", quantity: "3" },
            ],
          },
          {
            stat_name: "공격속도",
            stat_one_value: "1",
            stat_max_value: "2",
            one_ingredient: [
              { name: "골드", quantity: "3000000" },
              { name: "뉴에라의 옷감", quantity: "20" },
              { name: "뉴에라의 가죽", quantity: "20" },
              { name: "뉴에라의 광석", quantity: "20" },
              { name: "뉴에라의 오브", quantity: "20" },
            ],
          },
          {
            stat_name: "밸런스",
            stat_one_value: "1",
            stat_max_value: "7",
            one_ingredient: [
              { name: "골드", quantity: "3000000" },
              { name: "뉴에라의 옷감", quantity: "20" },
              { name: "뉴에라의 가죽", quantity: "20" },
              { name: "뉴에라의 광석", quantity: "20" },
              { name: "뉴에라의 오브", quantity: "20" },
            ],
          },
          {
            stat_name: "크리티컬",
            stat_one_value: "1",
            stat_max_value: "15",
            one_ingredient: [
              { name: "골드", quantity: "3000000" },
              { name: "뉴에라의 옷감", quantity: "20" },
              { name: "뉴에라의 가죽", quantity: "20" },
              { name: "뉴에라의 광석", quantity: "20" },
              { name: "뉴에라의 오브", quantity: "20" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "50",
            stat_max_value: "5400",
            one_ingredient: [
              { name: "골드", quantity: "1000000" },
              { name: "뉴에라의 광석", quantity: "25" },
              { name: "뉴에라의 오브", quantity: "20" },
              { name: "미지의 조각 3단계", quantity: "3" },
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
              { name: "골드", quantity: "150000" },
              { name: "뉴에라의 옷감", quantity: "2" },
              { name: "뉴에라의 가죽", quantity: "2" },
              { name: "뉴에라의 광석", quantity: "2" },
              { name: "오브", quantity: "3" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "6",
            one_ingredient: [
              { name: "골드", quantity: "3000000" },
              { name: "뉴에라의 옷감", quantity: "20" },
              { name: "뉴에라의 가죽", quantity: "20" },
              { name: "뉴에라의 광석", quantity: "20" },
              { name: "뉴에라의 오브", quantity: "20" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "14",
            stat_max_value: "700",
            one_ingredient: [
              { name: "골드", quantity: "400000" },
              { name: "뉴에라의 옷감", quantity: "12" },
              { name: "뉴에라의 가죽", quantity: "12" },
              { name: "투쟁의 조각 3단계", quantity: "1" },
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
              { name: "골드", quantity: "150000" },
              { name: "뉴에라의 옷감", quantity: "2" },
              { name: "뉴에라의 가죽", quantity: "2" },
              { name: "뉴에라의 광석", quantity: "2" },
              { name: "오브", quantity: "3" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "10",
            one_ingredient: [
              { name: "골드", quantity: "3000000" },
              { name: "뉴에라의 옷감", quantity: "20" },
              { name: "뉴에라의 가죽", quantity: "20" },
              { name: "뉴에라의 광석", quantity: "20" },
              { name: "뉴에라의 오브", quantity: "20" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "14",
            stat_max_value: "1050",
            one_ingredient: [
              { name: "골드", quantity: "400000" },
              { name: "뉴에라의 옷감", quantity: "12" },
              { name: "뉴에라의 가죽", quantity: "12" },
              { name: "투쟁의 조각 3단계", quantity: "1" },
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
              { name: "골드", quantity: "150000" },
              { name: "뉴에라의 옷감", quantity: "2" },
              { name: "뉴에라의 가죽", quantity: "2" },
              { name: "뉴에라의 광석", quantity: "2" },
              { name: "오브", quantity: "3" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "13",
            one_ingredient: [
              { name: "골드", quantity: "3000000" },
              { name: "뉴에라의 옷감", quantity: "20" },
              { name: "뉴에라의 가죽", quantity: "20" },
              { name: "뉴에라의 광석", quantity: "20" },
              { name: "뉴에라의 오브", quantity: "20" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "14",
            stat_max_value: "1050",
            one_ingredient: [
              { name: "골드", quantity: "400000" },
              { name: "뉴에라의 옷감", quantity: "12" },
              { name: "뉴에라의 가죽", quantity: "12" },
              { name: "투쟁의 조각 3단계", quantity: "1" },
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
              { name: "골드", quantity: "500000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "5" },
              { name: "봉인의 힘 파편", quantity: "25" },
            ],
          },
          {
            stat_name: "밸런스",
            stat_one_value: "1",
            stat_max_value: "4",
            one_ingredient: [
              { name: "골드", quantity: "5000000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "20" },
              { name: "전승의 힘 파편", quantity: "200" },
            ],
          },
          {
            stat_name: "크리티컬",
            stat_one_value: "1",
            stat_max_value: "4",
            one_ingredient: [
              { name: "골드", quantity: "5000000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "20" },
              { name: "전승의 힘 파편", quantity: "200" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "50",
            stat_max_value: "5400",
            one_ingredient: [
              { name: "골드", quantity: "1000000" },
              { name: "뉴에라의 광석", quantity: "25" },
              { name: "뉴에라의 오브", quantity: "20" },
              { name: "미지의 조각 3단계", quantity: "3" },
            ],
          },
          {
            stat_name: "해제 2",
            stat_one_value: "15",
            stat_max_value: "1500",
            one_ingredient: [
              { name: "골드", quantity: "3000000" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "50" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "50" },
              { name: "미지의 결정", quantity: "3" },
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
              { name: "골드", quantity: "500000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "5" },
              { name: "봉인의 힘 파편", quantity: "25" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "3",
            one_ingredient: [
              { name: "골드", quantity: "5000000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "20" },
              { name: "전승의 힘 파편", quantity: "200" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "14",
            stat_max_value: "700",
            one_ingredient: [
              { name: "골드", quantity: "400000" },
              { name: "뉴에라의 옷감", quantity: "12" },
              { name: "뉴에라의 가죽", quantity: "12" },
              { name: "투쟁의 조각 3단계", quantity: "1" },
            ],
          },
          {
            stat_name: "해제 2",
            stat_one_value: "5",
            stat_max_value: "440",
            one_ingredient: [
              { name: "골드", quantity: "1000000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "25" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "25" },
              { name: "투쟁의 결정", quantity: "1" },
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
              { name: "골드", quantity: "500000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "5" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "5" },
              { name: "봉인의 힘 파편", quantity: "25" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "1",
            stat_max_value: "6",
            one_ingredient: [
              { name: "골드", quantity: "5000000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "20" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "20" },
              { name: "전승의 힘 파편", quantity: "200" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "14",
            stat_max_value: "1050",
            one_ingredient: [
              { name: "골드", quantity: "400000" },
              { name: "뉴에라의 옷감", quantity: "12" },
              { name: "뉴에라의 가죽", quantity: "12" },
              { name: "투쟁의 조각 3단계", quantity: "1" },
            ],
          },
          {
            stat_name: "해제 2",
            stat_one_value: "5",
            stat_max_value: "740",
            one_ingredient: [
              { name: "골드", quantity: "1000000" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "25" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "25" },
              { name: "투쟁의 결정", quantity: "1" },
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
              { name: "골드", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "0" },
              { name: "오브", quantity: "0" },
              { name: "미지의 조각", quantity: "0" },
              { name: "투쟁의 조각", quantity: "0" },
              { name: "봉인의 힘 파편", quantity: "0" },
              { name: "와드네의 흔적", quantity: "0" },
              { name: "전승의 힘 파편", quantity: "0" },
              { name: "와드네의 결정", quantity: "0" },
            ],
          },
          {
            stat_name: "크리티컬 저항",
            stat_one_value: "0",
            stat_max_value: "0",
            one_ingredient: [
              { name: "골드", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "0" },
              { name: "오브", quantity: "0" },
              { name: "미지의 조각", quantity: "0" },
              { name: "투쟁의 조각", quantity: "0" },
              { name: "봉인의 힘 파편", quantity: "0" },
              { name: "와드네의 흔적", quantity: "0" },
              { name: "전승의 힘 파편", quantity: "0" },
              { name: "와드네의 결정", quantity: "0" },
            ],
          },
          {
            stat_name: "해제",
            stat_one_value: "0",
            stat_max_value: "0",
            one_ingredient: [
              { name: "골드", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "0" },
              { name: "오브", quantity: "0" },
              { name: "미지의 조각", quantity: "0" },
              { name: "투쟁의 조각", quantity: "1" },
              { name: "봉인의 힘 파편", quantity: "0" },
              { name: "와드네의 흔적", quantity: "0" },
              { name: "전승의 힘 파편", quantity: "0" },
              { name: "와드네의 결정", quantity: "0" },
            ],
          },
          {
            stat_name: "해제 2",
            stat_one_value: "0",
            stat_max_value: "0",
            one_ingredient: [
              { name: "골드", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 옷감", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 가죽", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 광석", quantity: "0" },
              { name: "힘이 주입된 뉴에라의 오브", quantity: "0" },
              { name: "오브", quantity: "0" },
              { name: "미지의 조각", quantity: "0" },
              { name: "투쟁의 조각", quantity: "0" },
              { name: "봉인의 힘 파편", quantity: "0" },
              { name: "와드네의 흔적", quantity: "0" },
              { name: "전승의 힘 파편", quantity: "0" },
              { name: "와드네의 결정", quantity: "0" },
            ],
          },
        ],
      },
    ],
  },
];

export const weapone = [];
