import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="screen-container">
      <div className="hands-container">
        <img src="left-hand.png" alt="left-hand" className="left-hand" />
        <img src="right-hand.png" alt="right-hand" className="right-hand" />
      </div>
      <img src="band.png" alt="band" className="band" />
    </div>
  );
};

export default Background;
