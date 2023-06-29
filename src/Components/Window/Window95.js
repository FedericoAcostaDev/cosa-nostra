import React from "react";
import "./Windows95.css";

const Window95 = () => {
  return (
    <div class="screen-container">
      <div class="hands-container">
        <img src="left-hand.png" alt="left-hand" class="left-hand" />
        <img src="right-hand.png" alt="right-hand" class="right-hand" />
      </div>
      <img src="band.png" alt="band" class="band" />
    </div>
  );
};

export default Window95;
