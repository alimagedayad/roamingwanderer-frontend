import React from "react";

const Emoji = (props) => {
  return (
    <em style={{ fontSize: props.size || "1em", padding: "0 0.1em" }}>
      {props.symbol}
    </em>
  );
};

export default Emoji;
