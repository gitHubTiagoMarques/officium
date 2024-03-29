import "../App.css";
import React from "react";
import arrow from "../assets/arrow.png";
import { Link, useSearchParams } from "react-router-dom";
import { Jobs } from "./jobsapi";
import { Accordion } from "react-accessible-accordion";
import data from "../assets/cidades.json";

export function Resultado() {
  const [searchparams] = useSearchParams();
  let cidadeid;
  for (let i in data) {
    if (data[i].name === searchparams.get("city").toLowerCase()) {
      cidadeid = data[i].id;
    } else if (searchparams.get("city") === "undefined") {
      cidadeid = "2,3,5,6,9,10,11,13,15,12,20,17,22,21,16";
    }
  }
  let trabalho;
  let titulo;
  let titulocidade;
  if (searchparams.get("job") === "undefined") {
    trabalho = "";
    titulo = "-------";
  } else {
    trabalho = searchparams.get("job");
    titulo = searchparams.get("job");
  }
  if (searchparams.get("city") === "undefined") {
    titulocidade = "-------";
  } else {
    titulocidade = searchparams.get("city");
  }
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className={"make"}>
        <Link to={"/Finder"}>
          <img alt={'back'} className={"back"} src={arrow} />
        </Link>
        <h1 className={"titlesearch"}>MAKE THE JUMP</h1>
        <p>
          The search might produce different results in different languages.
        </p>
        <div className={"makers"}>
          <input
            disabled
            className={"iptmake"}
            type="text"
            value={titulo}
          />
          <span/>
          <input
            disabled
            className={"iptmake"}
            type="text"
            value={titulocidade}
          />
        </div>
      </div>
      <Accordion allowMultipleExpanded={false} allowZeroExpanded>
        <Jobs trabalho={trabalho} cidadeid={cidadeid}/>
      </Accordion>
    </div>
  );
}
