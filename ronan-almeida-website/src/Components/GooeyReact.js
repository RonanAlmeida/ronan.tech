import React from "react";
import Goo from "gooey-react";

function GooeyReact() {
  return (
    <div intensity="strong">
      <Goo style={{ animation: "left 20s linear infinite", marginTop: "5em" }}>
        <svg width="192" height="192">
          <circle
            cx="37%"
            cy="37%"
            fill="#4b2de5"
            r="56"
          />
          <circle cx="63%" cy="63%" fill="#4b2de5" r="40" />
        </svg>
      </Goo>
    </div>
  );
}

export default GooeyReact;
