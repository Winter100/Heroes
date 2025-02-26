import React from "react";
import Item from "../common/item/Item";

const ItemColorPart = ({
  color_1,
  color_2,
  color_3,
}: {
  color_1: string;
  color_2: string;
  color_3: string;
}) => {
  const colors = ["R", "G", "B"];
  const colorParts = [color_1, color_2, color_3].map((color, index) => {
    const parsedColors = color?.split(",").map((value, i) => ({
      color: colors[i % colors.length],
      value: Number(value),
    }));

    const bgColor = `rgb(${parsedColors.map((c) => c.value).join(",")})`;

    return { id: index + 1, parsedColors, bgColor };
  });

  return (
    <Item.Description>
      {colorParts.map(({ id, parsedColors, bgColor }) => (
        <Item.Content
          key={id}
          className="flex flex-wrap items-center gap-1 text-xs text-[rgb(189,164,123)]"
        >
          <span>색상파트 {id}: </span>
          <span
            className="h-2 w-2 rounded-sm"
            style={{ backgroundColor: bgColor }}
          />
          <span>
            [
            {parsedColors
              .map(({ color, value }) => `${color}:${value}`)
              .join(" ")}
            ]
          </span>
        </Item.Content>
      ))}
    </Item.Description>
  );
};

export default ItemColorPart;
