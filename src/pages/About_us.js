import "../App.css";
import React from "react";
import { Navv } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { About } from "../components/about.js";

function About_us() {
  return (
    <div className={"about_us"}>
      <Navv/>
      <About/>
      <Footer/>
    </div>
  );
}

export { About_us };
