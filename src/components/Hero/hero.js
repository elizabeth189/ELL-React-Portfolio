import React from "react";
import Picture from "../../public/me.png";

function Hero() {
  return (
    <section className="hero">
      <div
        style={{
          width: "80vw",
          display: "flex",
          "flex-wrap": "wrap",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        <img className="me" src={Picture}></img>
        <p className="hero-text">Welcome to my page!</p>
      </div>
    </section>
  );
}

export default Hero;