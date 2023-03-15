import React, { useState } from "react";
import dados from "../assets/dados.json";

const Index = dados;
const giniportugal = 33.5;
const Portugal = {
  name: "Portugal",
  "Quality of Life Index": "162.2",
  "Purchasing Power Index": "47.9",
  "Safety Index": "68.5",
  "Health Care Index": "72.1",
  "Cost of Living Index": "42.2",
  "Property Price to Income Ratio": "13.0",
  "Pollution Index": "31.0",
};
const none = {
  name: "none",
  "Quality of Life Index": "",
  "Purchasing Power Index": "",
  "Safety Index": "",
  "Health Care Index": "",
  "Cost of Living Index": "",
  "Property Price to Income Ratio": "",
  "Pollution Index": "",
};
let resultado = [];
let ginisearch;

const Comparison = () => {
  const [country, setCountry] = useState(none);
  const [rest, setRest] = useState("unknown");

  const exportrest = (rest) => {
    ginisearch = rest[0].gini !== undefined ? Object.values(rest[0].gini) : "Unknown";
  };

  const compareValues = (value1, value2) => {
    if (value1 > value2) {
      if (value2 == ""){
        return "same";
      }else return "higher";
    } else if (value1 < value2) {
      return "lower";
    }
  };

  const compareValuesLow = (value1, value2) => {
    if (value1 < value2) {
      return "higher";
    } else if (value1 > value2) {
      if (value2 == ""){
        return "same";
      }else return "lower";
    }
  };

  const handleChange = (e) => {
    setCountry((prev) => ({ ...prev, name: e }));
    elemento(Index, e.toLowerCase());
  };

  const elemento = (objeto, title) => {
    for (let i in objeto) {
      if (objeto[i].name === title) {
        resultado = objeto[i];

        fetch("https://restcountries.com/v3.1/name/" + resultado.name)
            .then((res) => res.json())
            .then((json) => {
              setRest(json);
              exportrest(rest);
            });
      }
    }
    if (resultado.name !== title) {
      resultado = none;
      ginisearch = "";
    }
  };

  return (
      <div className={"comparison snap"}>
        <h1>Compare the quality of life</h1>
        <h2>Between Portugal and other countries</h2>
        <h6>Based on the Quality of Life Index by Numbeo</h6>
        <div className={"countries"}>
          <input className={"portugal"} defaultValue={"Portugal"} type={"text"} />
          <hr />
          <input
              autoComplete="off"
              className={"input"}
              type={"text"}
              placeholder="Country"
              id="country"
              name="country"
              onChange={(e) => handleChange(e.target.value)}
              defaultValue=""
          />
        </div>
        <hr />
        <div className={"compare"}>
          <div className={"two"}>
            <div className={"one"}>
              <p className={compareValues(Portugal["Quality of Life Index"], resultado["Quality of Life Index"])}>
                {Portugal["Quality of Life Index"]}
              </p>
              <div className={"ryze"}>
                <p className={"legend"}>Quality of life Index</p>
                <hr />
              </div>
              <p className={compareValues(resultado["Quality of Life Index"], Portugal["Quality of Life Index"])}>
                {resultado["Quality of Life Index"]}
              </p>
            </div>
            <div className={"one"}>
              <p className={compareValues(Portugal["Purchasing Power Index"], resultado["Purchasing Power Index"])}>
                {Portugal["Purchasing Power Index"]}
              </p>
              <div className={"ryze"}>
                <p className={"legend"}>Purchasing Power Index</p>
                <hr />
              </div>
              <p className={compareValues(resultado["Purchasing Power Index"], Portugal["Purchasing Power Index"])}>
                {resultado["Purchasing Power Index"]}
              </p>
            </div>
          </div>
          <div className={"two"}>
            <div className={"one"}>
              <p className={compareValues(Portugal["Safety Index"], resultado["Safety Index"])}>
                {Portugal["Safety Index"]}
              </p>
              <div className={"ryze"}>
                <p className={"legend"}>Safety Index</p>
                <hr></hr>
              </div>
              <p className={compareValues(resultado["Safety Index"], Portugal["Safety Index"])}>
                {resultado["Safety Index"]}
              </p>
            </div>
            <div className={"one"}>
              <p className={compareValues(Portugal["Health Care Index"], resultado["Health Care Index"])}>{Portugal["Health Care Index"]}</p>
              <div className={"ryze"}>
                <p className={"legend"}>Health Care Index</p>
                <hr></hr>
              </div>
              <p className={compareValues(resultado["Health Care Index"], Portugal["Health Care Index"])}>{resultado["Health Care Index"]}</p>
            </div>
          </div>
          <div className={"two"}>
            <div className={"one"}>
              <p className={compareValuesLow(Portugal["Cost of Living Index"], resultado["Cost of Living Index"])}>{Portugal["Cost of Living Index"]}</p>
              <div className={"ryze"}>
                <p className={"legend"}>Cost of Living Index</p>
                <hr></hr>
              </div>
              <p className={compareValuesLow(resultado["Cost of Living Index"],Portugal["Cost of Living Index"])}>{resultado["Cost of Living Index"]}</p>
            </div>
            <div className={"one"}>
              <p className={compareValuesLow(Portugal["Property Price to Income Ratio"], resultado["Property Price to Income Ratio"])}>{Portugal["Property Price to Income Ratio"]}</p>
              <div className={"ryze"}>
                <p className={"legend"}>Property Price Ratio</p>
                <hr></hr>
              </div>
              <p className={compareValuesLow(resultado["Property Price to Income Ratio"], Portugal["Property Price to Income Ratio"])}>{resultado["Property Price to Income Ratio"]}</p>
            </div>
          </div>
        </div>
        <div className={"two"}>
          <div className={"one"}>
            <p className={compareValuesLow(Portugal["Pollution Index"], resultado["Pollution Index"])}>{Portugal["Pollution Index"]}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Pollution Index</p>
              <hr></hr>
            </div>
            <p className={compareValuesLow(resultado["Pollution Index"], Portugal["Pollution Index"])}>{resultado["Pollution Index"]}</p>
          </div>
          <div className={"one"}>
            <p className={compareValuesLow(giniportugal,ginisearch)}>{giniportugal}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Gini Index</p>
              <hr></hr>
            </div>
            <p  className={compareValuesLow(ginisearch,giniportugal)}>{ginisearch}</p>
          </div>
        </div>
        <p className={"legend text-white desc opacity-75"}>
          Quality of life Index <i className={"fa fa-arrow-right"}></i> Higher =
          Better | Purchasing Power Index{" "}
          <i className={"fa fa-arrow-right"}></i> Higher = Better | Safety Index{" "}
          <i className={"fa fa-arrow-right"}></i> Higher = Better | Health Care
          Index <i className={"fa fa-arrow-right"}></i> Higher = Better | Cost
          of Living Index <i className={"fa fa-arrow-right"}></i> Lower = Better
          | Property Price Ratio <i className={"fa fa-arrow-right"}></i> Higher
          = Better to rent than buy | Pollution Index{" "}
          <i className={"fa fa-arrow-right"}></i> Lower = Better | Gini Index{" "}
          <i className={"fa fa-arrow-right"}></i> Lower = Better income equality
        </p>
      </div>
    );
}

export { Comparison };
