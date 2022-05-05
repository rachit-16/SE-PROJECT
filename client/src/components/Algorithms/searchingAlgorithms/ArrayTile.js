import React from "react";

const arrayTile = ({ idx, val, type }) => {
  const cls = type === "binarySearch" ? "b-array-bar" : "l-array-bar";

  return (
    <div className={cls}>
      {`${val}`}
      <br />
      <span>{`${idx}`}</span>
    </div>
  );
};

export default arrayTile;
