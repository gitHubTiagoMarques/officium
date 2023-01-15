import "../App.css";
import React from "react";
import { Navv } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { Resultado } from "../components/resultado";

function Results() {
  return (
    <div className={"finder"}>
      <Navv></Navv>
      <div className={"resultss"}>
        <Resultado></Resultado>
      </div>

      <Footer></Footer>
    </div>
  );
}

export { Results };
