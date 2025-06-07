import React from "react";

const CountingCards = (props) => {
  return (
    <div
      style={{
        height: "fit-content",
        width: "auto",
        backgroundColor: `${props.cardColor}`,
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      {props.cardIcon}

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "5px",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        <div>{props.cardCount}</div>
        <div>{props.cardTitle}</div>
      </div>
    </div>
  );
};

export default CountingCards;
