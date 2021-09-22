import React from "react";
import heroBanner from '../../assets/hero-banner.gif'

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      <img src={ heroBanner } alt="" />
    </div>
  );
}

export default Jumbotron;