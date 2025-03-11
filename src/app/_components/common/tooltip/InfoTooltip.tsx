import React, { memo } from "react";
import { Tooltip } from "react-tooltip";

const InfoTooltip = memo(
  ({ children, itemName }: { children: React.ReactNode; itemName: string }) => {
    return (
      <Tooltip
        style={{
          width: "360px",
          padding: "8px",
          borderRadius: "8px",
          backgroundColor: "rgb(20, 21, 23)",
          zIndex: 50,
        }}
        opacity={1}
        noArrow={true}
        id={itemName}
      >
        {children}
      </Tooltip>
    );
  },
);

export default InfoTooltip;

InfoTooltip.displayName = "InfoTooltip";
