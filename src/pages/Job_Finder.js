import "../App.css";
import React from "react";
import { Navv } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { Search } from "../components/search";
import SearchBar from "../components/searchbar";
import cidades from "../assets/cidades.json";

function Finder() {
  return (
    <div className={"finder finderbg"}>
      <Navv/>
      <div className={"resultss"}>
        <Search data={cidades}/>
      </div>
      <Footer/>
    </div>
  );
}

export { Finder };
