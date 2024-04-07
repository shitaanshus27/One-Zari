import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span className="bg-gradient-to-b from-[#dfbd86] via-[#35fa12] to-[#ffa9a6] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
