import React from "react";

const CountingCards = ({ cardColor, cardIcon, cardTitle, cardCount }) => {
  return (
    <div
      style={{
        height: "fit-content",
        width: "auto",
        backgroundColor: `${cardColor}`,
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      {cardIcon}

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "5px",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        <div>{cardCount}</div>
        <div>{cardTitle}</div>
      </div>
    </div>
  );
};

export default CountingCards;
