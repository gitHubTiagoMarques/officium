import "../App.css";
import React from "react";
import { Navv } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { Hero } from "../components/hero.js";
import { Carro } from "../components/carro";
import { Nowadays } from "../components/nowadays";

function Homepage() {
  return (
    <div className="homepage">
      <Navv/>
      <Hero/>
      <Carro/>
      <Nowadays/>
      <Footer/>
    </div>
  );
}

export { Homepage };
