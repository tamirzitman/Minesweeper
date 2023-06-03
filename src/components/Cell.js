﻿import React from "react";

export default function Cell({ details, updateFlagm, revealCell }) {
  return (
    <div
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)}
      style={style.cellStyle}
    >
      {details.revealed ? details.value : ""}
    </div>
  );
}

const style = {
  cellStyle: {
    width: 40,
    height: 40,
    background: "lightgrey",
    border: " 2px solid green",
    display: "flex",
    justifyContent: "center",
    alignmentItems: "center",
    cursor: "pointer",
  },
};
