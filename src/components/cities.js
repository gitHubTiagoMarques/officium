import '../App.css';
import React, { Component } from 'react';
import finder from "../assets/finder.png"


export function Cities() {
    return (
      <div className={"cities"}>
        <img className={'finder'} src={finder} ></img>
        </div>
            
    );
  }