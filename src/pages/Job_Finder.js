import "../App.css";
import React, { Component } from "react";
import { Navv } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { Search } from "../components/search";

function Finder() {
  return (
    <div className={"finder finderbg"}>
      <Navv></Navv>
      <div className={"resultss"}>
        <Search></Search>
      </div>
      <Footer></Footer>
    </div>
  );
}

export { Finder };
