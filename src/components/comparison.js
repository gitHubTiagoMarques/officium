import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import dados from "../assets/dados.json";
// var linker=`https://restcountries.com/v3.1/name/${resultado.name}`;
const Index = dados;
const giniportugal= 33.5;
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
const none={
    "name": "none",
    "Quality of Life Index": "",
    "Purchasing Power Index": "",
    "Safety Index": "",
    "Health Care Index": "",
    "Cost of Living Index": "",
    "Property Price to Income Ratio": "",
    "Pollution Index": ""
  };
let resultado = [];
let ginisearch;

class Comparison extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      country: none,
      rest: "unknown",
        }
  }

render(){

const exportrest = (rest) =>{
  ginisearch = rest[0].gini[2018];
  console.log('2',ginisearch);
}
  
  const handleChange = (e) => {
  console. log (e);
  this.setState({state: this.state.country = e});
  elemento (Index, this.state.country);
    };
    
    const elemento = (objeto, title) => {
      for (let i in objeto) {
        if (objeto [i].name == title) {
        resultado = objeto [i];
        console. log ('search=',resultado);
        
        fetch('https://restcountries.com/v3.1/name/'+resultado.name)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            this.setState({state: this.state.rest = json});
            exportrest(this.state.rest);
        })
      }
    };
    if (resultado.name != title) {
      resultado = none;
      console. log ('none=',resultado);
    }
    }

  return (
    <div className={"comparison snap"}>
      <h1>Compare the quality of life</h1>
      <h2>Between Portugal and other countries</h2>
      <h6>Based on the Quality of Life Index by Numbeo</h6>
      <div className={"countries"}>
        <input className={"portugal"} defaultValue={'Portugal'} type={'text'}></input>
        <hr></hr>
        <input
          className={"input"}
          type={"text"}
          placeholder="Country"
          id="country"
          name="country"
          onChange={(e) => handleChange(e.target.value)}
          defaultValue=""
        ></input>
      </div>
      <hr />
      <div className={"compare"}>
        <div className={"two"}>
          <div className={"one"}>
            <p>{Portugal["Quality of Life Index"]}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Quality of life Index</p>
              <hr></hr>
            </div>
            <p>{resultado["Quality of Life Index"]}</p>
          </div>
          <div className={"one"}>
            <p>{Portugal["Purchasing Power Index"]}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Purchasing Power Index</p>
              <hr></hr>
            </div>
            <p>{resultado["Purchasing Power Index"]}</p>
          </div>
        </div>
        <div className={"two"}>
          <div className={"one"}>
            <p>{Portugal["Safety Index"]}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Safety Index</p>
              <hr></hr>
            </div>
            <p>{resultado["Safety Index"]}</p>
          </div>
          <div className={"one"}>
            <p>{Portugal["Health Care Index"]}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Health Care Index</p>
              <hr></hr>
            </div>
            <p>{resultado["Health Care Index"]}</p>
          </div>
        </div>
        <div className={"two"}>
          <div className={"one"}>
            <p>{Portugal["Cost of Living Index"]}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Cost of Living Index</p>
              <hr></hr>
            </div>
            <p>{resultado["Cost of Living Index"]}</p>
          </div>
          <div className={"one"}>
            <p>{Portugal["Property Price to Income Ratio"]}</p>
            <div className={"ryze"}>
              <p className={"legend"}>Property Price Ratio</p>
              <hr></hr>
            </div>
            <p>{resultado["Property Price to Income Ratio"]}</p>
          </div>
        </div>
      </div>
      <div className={"two"}>
        <div className={"one"}>
          <p>{Portugal["Pollution Index"]}</p>
          <div className={"ryze"}>
            <p className={"legend"}>Pollution Index</p>
            <hr></hr>
          </div>
          <p>{resultado["Pollution Index"]}</p>
        </div>
        <div className={"one"}>
          <p>{giniportugal}</p>
          <div className={"ryze"}>
            <p className={"legend"}>Gini Index</p>
            <hr></hr>
          </div>
          <p>{ginisearch}</p>
        </div>
      </div>
        <p className={"legend text-white desc"}>Quality of life Index <i className={"fa fa-arrow-right"}></i> Higher = Better | Purchasing Power Index <i className={"fa fa-arrow-right"}></i> Higher = Better | Safety Index <i className={"fa fa-arrow-right"}></i> Higher = Better | Health Care Index <i className={"fa fa-arrow-right"}></i> Higher = Better | Cost of Living Index <i className={"fa fa-arrow-right"}></i> Lower = Better | Property Price Ratio <i className={"fa fa-arrow-right"}></i> Higher = Better to rent than buy | Pollution Index <i className={"fa fa-arrow-right"}></i> Lower = Better | Gini Index <i className={"fa fa-arrow-right"}></i> Lower = Better income equality</p>
      
    </div>
  );
}

}





export { Comparison };
