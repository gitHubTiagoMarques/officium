import '../App.css';
import React, { Component } from 'react';
import ponte from '../assets/ponte.jpg';
import barcelos from '../assets/barcelos.jpg';
import lagos from '../assets/lagos.jpg';
import viana from '../assets/viana.jpg';
import viseu from '../assets/viseu.jpg';
import guarda from '../assets/guarda.jpg';


export function Cities() {
    return (
      <div className={"cities"}>
        <div className={"cionety"}> 
        <img className={"city"} src={ponte} />
        <img className={"city"} src={viana} />
        <img className={"city"} src={barcelos} />
        </div>
        <div className={"citwoty"}> 
        <img className={"city"} src={lagos} />
        <img className={"city"} src={viseu} />
        <img className={"city"} src={guarda} />
        </div>
            
      </div>
    );
  }